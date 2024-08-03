import { Surface } from "@/components/ui/surface"
import { Toolbar } from "@/components/ui/toolbar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Pen, Trash2 } from "lucide-react"

export type LinkPreviewPanelProps = {
  url: string
  onEdit: () => void
  onClear: () => void
}

export const LinkPreviewPanel = ({
  onClear,
  onEdit,
  url,
}: LinkPreviewPanelProps) => {
  return (
    <Surface className="flex items-center gap-2 p-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline break-all"
      >
        {url}
      </a>
      <Toolbar.Divider />
      <Tooltip>
        <TooltipTrigger>
          <Toolbar.Button onClick={onEdit}>
            <Pen />
          </Toolbar.Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit link</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Toolbar.Button onClick={onClear}>
            <Trash2 />
          </Toolbar.Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove link</p>
        </TooltipContent>
      </Tooltip>
    </Surface>
  )
}
