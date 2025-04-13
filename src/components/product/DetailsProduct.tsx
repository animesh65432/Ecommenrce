"use client";
import React from "react";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    id: number;
};

const DetailsProduct: React.FC<Props> = ({ id }) => {
    const products = useStore((state) => state.products);
    const addToCart = useStore((state) => state.additemcart);
    const addToWishlist = useStore((state) => state.additemwishlist);

    const product = products.find((p) => p.id === Number(id));

    if (!product)
        return (
            <div className="text-center text-muted-foreground mt-10">
                Product not found.
            </div>
        );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="flex flex-col md:flex-row gap-6 p-6 shadow-xl rounded-2xl">
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full md:w-[300px] h-[300px] object-contain rounded-xl bg-muted"
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />

                    <CardContent className="p-0 flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-1 text-foreground">{product.title}</h2>
                            <p className="text-sm text-muted-foreground mb-2 capitalize">
                                {product.category}
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                                {product.description}
                            </p>
                            <p className="text-xl font-bold text-green-600 mb-1">${product.price}</p>
                            <p className="text-sm text-yellow-500">
                                ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
                            </p>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <Button onClick={() => addToCart(product)} className="flex gap-2">
                                <ShoppingCart size={16} /> Add to Cart
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => addToWishlist(product)}
                                className="flex gap-2 border-pink-500 text-pink-500 hover:bg-pink-50"
                            >
                                <Heart size={16} /> Wishlist
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default DetailsProduct;
