import { mergeAttributes, Node } from "@tiptap/core"

export interface SmallOptions {
  /**
   * HTML attributes to add to the HTML element.
   * @default {}
   * @type {Record<string, any>}
   * @example { class: "text-sm" }
   */
  HTMLAttributes: Record<string, any>
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    small: {
      /**
       * Toggle a small node
       * @example editor.chain().focus().toggleSmall().run()
       */
      setSmall: () => ReturnType
    }
  }
}

export const Small = Node.create<SmallOptions>({
  name: "small",
  priority: 777,
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "small" }]
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "small",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ]
  },
  addCommands() {
    return {
      setSmall:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name)
        },
    }
  },
})

export default Small
