"use client"
import { useStore } from '@/store/store'
import React, { useEffect } from 'react'
import { Product, ProductsSkeleton } from "@/components"
import { useProduct } from '@/hook'
const Products = () => {
    const products = useStore((state) => state.filteredProducts)
    const [loading, GetProducts] = useProduct()

    const GetProductsitems = async () => {
        try {
            console.log("call")
            await GetProducts()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetProductsitems()
    }, [])

    if (loading) {
        return <div className='grid  md:grid-cols-2 grid-cols-1 gap-4'>
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
        </div>
    }
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            {products.map((proudct, index) => <Product product={proudct} key={index} />)}
        </div>
    )
}

export default Products