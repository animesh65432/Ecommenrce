"use client"
import React, { useState, useEffect } from 'react'
import { usethemecolor } from './ColorProvider'

type Props = {
    children: React.ReactNode
}

const ThemedWrapper: React.FC<Props> = ({ children }) => {

    const { color } = usethemecolor()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className={`${color ? "bg-black text-white" : "bg-white text-black"}`}>
            {children}
        </div>
    )
}

export default ThemedWrapper
