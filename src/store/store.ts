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
        if (typeof window !== "undefined") {
            localStorage.setItem("products", JSON.stringify(products));
        }
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
    }),
    cart: [],
    wishlist: [],
    additemcart: (product) => set((state) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("carts", JSON.stringify([...state.cart, product]));
        }
        return {
            cart: [...state.cart, product]
        }
    }),
    removecart: (id: number) => set((state) => {
        const cartwithoutid = state.cart.filter((product) => product.id !== id)
        if (typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify(cartwithoutid));
        }
        return {
            cart: cartwithoutid
        }
    }),
    additemwishlist: (product) => set((state) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify([...state.wishlist, product]));
        }
        return {
            wishlist: [...state.wishlist, product]
        }
    }),
    removewishlist: (id) => set((state) => {
        const wishlistwithoutid = state.wishlist.filter((product) => product.id !== id)
        if (typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify(wishlistwithoutid));
        }
        return {
            wishlist: wishlistwithoutid
        }
    }),
    setcart: (products) => set((state) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("carts", JSON.stringify(products));
        }
        return {
            cart: products
        }
    }),
    setwishlist: (products) => set(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify(products));
        }
        return {
            wishlist: products
        }
    }),
    user: {
        name: "",
        email: "",
        password: ""
    },
    setuer: (user) => set(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(user));
        }
        return {
            user
        }

    })
}));

