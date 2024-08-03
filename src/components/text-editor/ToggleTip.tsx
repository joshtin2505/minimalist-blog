import React from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { LucideProps } from "lucide-react"
import { Toggle } from "../ui/toggle"
import { ToggleProps } from "@radix-ui/react-toggle"

function ToggleTip({
  children,
  tooltip,
  toggleProps,
}: {
  children: React.ReactNode
  tooltip: string
  toggleProps?: ToggleProps
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Toggle {...toggleProps}>{children}</Toggle>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default ToggleTip
