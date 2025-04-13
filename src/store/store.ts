import { create } from "zustand";
import { Store } from "@/types"
import { applyFilters, sortProducts } from "./helper"

export const useStore = create<Store>((set) => ({
    products: [],
    filteredProducts: [],
    filters: {
        categories: [],
        priceRange: [0, 1000] as [number, number],
        rating: null,
        inStock: false,
        onSale: false,
    },
    sortBy: 'featured',

    setProducts: (products) => set((state) => {
        const filtered = applyFilters(products, state.filters);
        const sorted = sortProducts(filtered, state.sortBy);

        return {
            products,
            filteredProducts: sorted
        };
    }),

    setFilters: (newFilters) => set((state) => {
        const filters = { ...state.filters, ...newFilters };
        console.log(filters, "in the store")
        const filteredProducts = applyFilters(state.products, filters);
        const sortedProducts = sortProducts(filteredProducts, state.sortBy);

        return {
            filters,
            filteredProducts: sortedProducts
        };
    }),

    clearFilters: () => set((state) => {
        const defaultFilters = {
            categories: [],
            priceRange: [0, 1000] as [number, number],
            rating: null,
            inStock: false,
            onSale: false,
        };

        return {
            filters: defaultFilters,
            filteredProducts: sortProducts(state.products, state.sortBy)
        };
    }),

    sortProducts: (sortBy) => set((state) => {
        const sortedProducts = sortProducts(
            state.filteredProducts.length ? state.filteredProducts : state.products,
            sortBy
        );

        return {
            sortBy,
            filteredProducts: sortedProducts
        };
    })
}));

