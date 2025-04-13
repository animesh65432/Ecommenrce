import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const ProductsSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[30vh] w-[20vw] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[20vw]" />
                <Skeleton className="h-4 w-[20vw]" />
            </div>
        </div>
    )
}

export default ProductsSkeleton