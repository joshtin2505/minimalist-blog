import TextStyle from "@tiptap/extension-text-style"

export const Muted = TextStyle.extend({
  addOptions() {
    return {
      HTMLAttributes: {
        class: { default: "text-sm text-muted-foreground" },
      },
    }
  },
})

export default Muted
