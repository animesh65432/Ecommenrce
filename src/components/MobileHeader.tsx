import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet"
import { Icon } from "@/components"
import { usethemecolor } from './ColorProvider'


const MobileHeader: React.FC = () => {
    const { color } = usethemecolor()
    return (
        <Sheet>
            <SheetTrigger>
                <Icon.menu />
            </SheetTrigger>
            <SheetContent className={`p-16 flex flex-col gap-8  ${color ? "bg-black text-white" : "bg-white text-black"}`}>
                <SheetTitle className='flex justify-between w-full'>
                    <ul>
                        Home
                    </ul>
                    <ul>
                        <Icon.arrowRight />
                    </ul>
                </SheetTitle>
                <SheetTitle className='flex justify-between w-full'>
                    <ul>
                        Shop
                    </ul>
                    <ul>
                        <Icon.arrowRight />
                    </ul>
                </SheetTitle>
            </SheetContent>
        </Sheet>
    )
}

export default MobileHeader