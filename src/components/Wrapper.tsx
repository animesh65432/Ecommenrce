import React from 'react'
import { ColorProvider, ThemedWrapper } from "@/components"

type Props = {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <ColorProvider>
            <ThemedWrapper>
                {children}
            </ThemedWrapper>
        </ColorProvider>
    )
}

export default Wrapper