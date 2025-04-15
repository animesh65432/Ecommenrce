"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet"
import { Icon } from "@/components"
import { useThemeColor } from './ColorProvider'
import { useRouter } from "next/navigation"


const MobileHeader: React.FC = () => {
    const { color } = useThemeColor()
    const router = useRouter()

    const naviuagteto = (link: string) => {
        router.push(link)
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Icon.menu />
            </SheetTrigger>
            <SheetContent className={`p-16 flex flex-col gap-8  ${color ? "bg-black text-white" : "bg-white text-black"}`}>
                <SheetTitle className='flex justify-between w-full' onClick={() => naviuagteto("/")}>
                    <ul>
                        Home
                    </ul>
                    <ul>
                        <Icon.arrowRight />
                    </ul>
                </SheetTitle>
                <SheetTitle className='flex justify-between w-full' onClick={() => naviuagteto("/home")}>
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