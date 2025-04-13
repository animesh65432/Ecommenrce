"use client"
import React, { useState, useContext } from 'react'
import { colorstore } from "@/store/theme-color"

type Props = {
    children: React.ReactNode
}

const loadinitialcolorstate = (): boolean => {
    if (typeof window !== "undefined") {
        const storedColor = localStorage.getItem("color");
        if (storedColor) {
            return JSON.parse(storedColor);
        }
    }
    return false;
}


const ColorProvider: React.FC<Props> = ({ children }) => {
    const [color, setColor] = useState<boolean>(loadinitialcolorstate())

    const ontoggole = () => {
        setColor((prev) => {
            const newColor = !prev;
            localStorage.setItem("color", JSON.stringify(newColor));
            return newColor;
        });
    }

    return (
        <colorstore.Provider value={{ color, ontoggole }}>
            {children}
        </colorstore.Provider>
    )
}


export const usethemecolor = () => {
    const { color, ontoggole } = useContext(colorstore)
    return { color, ontoggole }
}
export default ColorProvider;
