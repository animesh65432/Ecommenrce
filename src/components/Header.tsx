"use client"
import React from 'react'
import { Icon, MobileHeader } from "@/components"
import { useThemeColor } from "@/components/ColorProvider"

const Header: React.FC = () => {
    const { color, ontoggole } = useThemeColor()
    return (
        <header className={` h-[10vh] flex md:justify-around justify-around items-center p-8 mb-10 sticky top-4 z-10 ${color ? "bg-white text-black" : "bg-black text-white"} w-[90vw] rounded-md m-auto`}>
            <nav className='md:hidden block'>
                <MobileHeader />
            </nav>
            <nav className='text-lg font-bold'>LUKE</nav>
            <nav className='font-semibold md:flex hidden gap-10'>
                <ul>HOME</ul>
                <ul>SHOP</ul>
            </nav>
            <nav className='flex items-center gap-4 md:gap-8'>
                <Icon.wishlist />
                <Icon.cart />
                <Icon.sun onClick={ontoggole} className={`${color ? "hidden" : "block"}`} />
                <Icon.moon onClick={ontoggole} className={`${!color ? "hidden" : "block"}`} />
            </nav>
        </header>

    )
}

export default Header