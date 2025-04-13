"use client";
import { useEffect } from "react";
import { useStore } from "@/store/store";

const HydrateStore = () => {
    const { setProducts, setcart, setwishlist, setuer } = useStore();

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        const storedCarts = localStorage.getItem("carts");
        const wishlists = localStorage.getItem("wishlist")
        const storeuser = localStorage.getItem("user")

        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }

        if (storedCarts) {
            setcart(JSON.parse(storedCarts));
        }

        if (wishlists) {
            setwishlist(JSON.parse(wishlists))
        }
        if (storeuser) {
            setwishlist(JSON.parse(storeuser))
        }

    }, [setProducts, setcart, setwishlist, setuer]);

    return null;
};

export default HydrateStore;
