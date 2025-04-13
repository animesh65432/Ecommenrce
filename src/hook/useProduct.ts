import axios from 'axios'
import { useState } from 'react'
import { useStore } from '@/store/store'
type useProducttypes = [
    loading: boolean,
    GetProducts: () => void
]

const useProduct = () => {
    const [loading, setloading] = useState(false)
    const { setProducts } = useStore()
    const GetProducts = async () => {
        setloading(true)
        try {
            const reponse = await axios.get("/api/product")
            setProducts(reponse?.data?.products)
        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }
    }

    return [loading, GetProducts] as useProducttypes
}

export default useProduct