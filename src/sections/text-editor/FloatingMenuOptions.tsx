import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Editor, FloatingMenu } from "@tiptap/react"
import { Heading1, Heading2, Heading3, Heading4 } from "lucide-react"
import React, { useEffect, useState } from "react"

function FloatingMenuOptions({ editor }: { editor: Editor }) {
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  const handleShowPopover = () => {
    setPopoverOpen(!isPopoverOpen)
  }

  return (
    // <Menubar>
    //   <MenubarMenu>
    //     <MenubarTrigger>File</MenubarTrigger>
    //     <MenubarContent>
    //       <MenubarItem>
    //         New Tab <MenubarShortcut>⌘T</MenubarShortcut>
    //       </MenubarItem>
    //       <MenubarItem>
    //         New Window <MenubarShortcut>⌘N</MenubarShortcut>
    //       </MenubarItem>
    //       <MenubarItem disabled>New Incognito Window</MenubarItem>
    //       <MenubarSeparator />
    //       <MenubarSub>
    //         <MenubarSubTrigger>Share</MenubarSubTrigger>
    //         <MenubarSubContent>
    //           <MenubarItem>Email link</MenubarItem>
    //           <MenubarItem>Messages</MenubarItem>
    //           <MenubarItem>Notes</MenubarItem>
    //         </MenubarSubContent>
    //       </MenubarSub>
    //       <MenubarSeparator />
    //       <MenubarItem>
    //         Print... <MenubarShortcut>⌘P</MenubarShortcut>
    //       </MenubarItem>
    //     </MenubarContent>
    //   </MenubarMenu>
    //   <MenubarMenu>
    //     <MenubarContent>
    //       <MenubarGroup>
    //         <MenubarLabel>Headings</MenubarLabel>
    //         <MenubarItem>
    //           <div className="flex">
    //             <Heading1 size={18} className="mr-2" /> Heading 1
    //           </div>
    //         </MenubarItem>
    //         <MenubarItem>
    //           <div className="flex">
    //             <Heading2 size={18} className="mr-2" /> Heading 2
    //           </div>
    //         </MenubarItem>
    //         <MenubarItem>
    //           <div className="flex">
    //             <Heading3 size={18} className="mr-2" /> Heading 3
    //           </div>
    //         </MenubarItem>
    //         <MenubarItem>
    //           <div className="flex">
    //             <Heading4 size={18} className="mr-2" /> Heading 4
    //           </div>
    //         </MenubarItem>
    //       </MenubarGroup>
    //     </MenubarContent>
    //   </MenubarMenu>
    // </Menubar>
    <>
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{
            duration: 1000,
            onShow: handleShowPopover,
            onHide: () => console.log("rendr hide"),
          }}
        >
          <Popover open={isPopoverOpen}>
            <PopoverContent>
              <p>asa</p>
              <p>asa</p>
              <p>asa</p>
            </PopoverContent>
          </Popover>
        </FloatingMenu>
      )}
    </>
  )
}

export default FloatingMenuOptions
