import { mergeAttributes, Node, Extension } from "@tiptap/core"
import TextStyle from "@tiptap/extension-text-style"
import { Plugin } from "@tiptap/pm/state"
import findColors from "./find-colors"
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

export const ColorHighlighter = Extension.create({
  name: "colorHighlighter",

  addProseMirrorPlugins() {
    return [
      new Plugin({
        state: {
          init(_, { doc }) {
            return findColors(doc)
          },
          apply(transaction, oldState) {
            return transaction.docChanged
              ? findColors(transaction.doc)
              : oldState
          },
        },
        props: {
          decorations(state) {
            return this.getState(state)
          },
        },
      }),
    ]
  },
})

export const Muted = TextStyle.extend({
  addOptions() {
    return {
      HTMLAttributes: {
        class: { default: "text-sm text-muted-foreground" },
      },
    }
  },
})
