"use client"
import { useProduct } from '@/hook'
import React, { useEffect, useCallback } from 'react'
import ProductsSkeleton from './ProductsSkeleton'
import { Product } from "@/components"
import { useStore } from '@/store/store'

const FeaturesProducts: React.FC = () => {
    const [loading, GetProducts] = useProduct()
    const products = useStore((store) => store.products).slice(0, 3)

    const GetProductsitems = useCallback(async () => {
        try {
            await GetProducts()
        } catch (error) {
            console.log(error)
        }
    }, [products])

    useEffect(() => {
        GetProductsitems()
    }, [])

    if (loading) {
        return <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 place-items-center'>
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
        </div>
    }

    return (
        <div>
            <div className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-white'>
                Featured Products
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                {
                    products.map((product) => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    )
}

export default FeaturesProducts