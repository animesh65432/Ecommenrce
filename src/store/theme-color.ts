import { createContext } from "react"

type colorstoretypes = {
    color: boolean | null,
    ontoggole: () => void
}

export const colorstore = createContext<colorstoretypes>({
    color: null,
    ontoggole: () => { }
})