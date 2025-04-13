import React from 'react'
import { FilterSection, Products } from "@/components"
const HomePage = () => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            <div className='lg:col-span-3 col-span-12'>
                <FilterSection />
            </div>
            <div className='lg:col-span-9 col-span-12 '>
                <Products />
            </div>
        </div>
    )
}

export default HomePage