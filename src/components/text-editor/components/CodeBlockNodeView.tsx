import { NodeViewContent, NodeViewWrapper } from "@tiptap/react"
import React from "react"

interface CodeBlockNodeViewProps {
  node: {
    attrs: {
      language: string
    }
  }
  updateAttributes: (attrs: { language: string }) => void
  extension: {
    options: {
      lowlight: {
        listLanguages: () => string[]
      }
    }
  }
}

const CodeBlockNodeView: React.FC<CodeBlockNodeViewProps> = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}) => (
  <NodeViewWrapper className="code-block">
    <select
      contentEditable={false}
      defaultValue={defaultLanguage}
      onChange={(event) => updateAttributes({ language: event.target.value })}
    >
      <option value="null">auto</option>
      <option disabled>—</option>
      {extension.options.lowlight.listLanguages().map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
)

export default CodeBlockNodeView
