"use client"
import React from 'react'
import { Icon, MobileHeader } from "@/components"
import { useThemeColor } from "@/components/ColorProvider"
import Link from 'next/link'
import { useStore } from '@/store/store'
import { useRouter } from "next/navigation"

const Header: React.FC = () => {
    const { color, ontoggole } = useThemeColor()
    const { cart, wishlist, user } = useStore()
    const router = useRouter()

    const redirectto = (link: string) => {
        router.push(link)
    }

    return (
        <header className={` h-[10vh] flex md:justify-around justify-around items-center p-8 mb-10 sticky top-4 z-10 ${color ? "bg-white text-black" : "bg-black text-white"} w-[90vw] rounded-md m-auto mb-6`}>
            <nav className='md:hidden block'>
                <MobileHeader />
            </nav>
            <Link href="/"> <nav className='text-lg font-bold'>LUKE</nav></Link>


            <nav className='flex items-center gap-4 md:gap-8'>
                <ul className='flex' onClick={() => redirectto("/wishlist")}><Icon.wishlist />{wishlist.length > 0 ? `(${wishlist.length})` : null}</ul>
                <ul className='flex' onClick={() => redirectto("/carts")}> <Icon.cart />{cart.length > 0 ? `(${cart.length})` : null}</ul>
                <Icon.sun onClick={ontoggole} className={`${color ? "hidden" : "block"}`} />
                <Icon.moon onClick={ontoggole} className={`${!color ? "hidden" : "block"}`} />
            </nav>
        </header>

    )
}

export default Header