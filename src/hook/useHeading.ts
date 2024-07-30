import { Editor } from "@tiptap/react"

function useHeading({ editor }: { editor: Editor }) {
  const currentValue = editor.isActive("heading", { level: 1 })
    ? "heading1"
    : editor.isActive("heading", { level: 2 })
      ? "heading2"
      : editor.isActive("heading", { level: 2 })
        ? "heading2"
        : editor.isActive("heading", { level: 3 })
          ? "heading3"
          : editor.isActive("heading", { level: 4 })
            ? "heading4"
            : editor.isActive("heading", { level: 5 })
              ? "lead"
              : editor.isActive("heading", { level: 6 })
                ? "large"
                : editor.isActive("code")
                  ? "code"
                  : editor.isActive("small")
                    ? "small"
                    : "paragraph"
  const handleTextType = (
    type:
      | "heading1"
      | "heading2"
      | "heading3"
      | "heading4"
      | "lead"
      | "large"
      | "small"
      | "code"
      | "paragraph",
  ) => {
    switch (type) {
      case "heading1":
        editor.chain().focus().toggleHeading({ level: 1 }).run()
        break
      case "heading2":
        editor.chain().focus().toggleHeading({ level: 2 }).run()
        break
      case "heading3":
        editor.chain().focus().toggleHeading({ level: 3 }).run()
        break
      case "heading4":
        editor.chain().focus().toggleHeading({ level: 4 }).run()
        break
      case "lead":
        editor.chain().focus().toggleHeading({ level: 5 }).run()
        break
      case "large":
        editor.chain().focus().toggleHeading({ level: 6 }).run()
        break
      case "small":
        editor.chain().focus().setSmall().run()
        break
      case "code":
        editor.chain().focus().toggleCode().run()
        break
      case "paragraph":
        editor.chain().focus().setParagraph().run()
        break
    }
  }
  return { currentValue, handleTextType }
}

export default useHeading
