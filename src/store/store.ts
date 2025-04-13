import { create } from "zustand"
import { Producttype } from "@/types"

interface Store {
    products: Producttype[];
    setProducts: (products: Producttype[]) => void;
}


export const useStore = create<Store>((set) => ({
    products: [],
    setProducts: (products: Producttype[]) => set({ products }),
}))


