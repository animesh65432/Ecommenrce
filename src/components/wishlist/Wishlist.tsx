"use client";

import { useStore } from "@/store/store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";


const Wishlist = () => {
    const { wishlist, removewishlist, additemcart } = useStore();

    if (wishlist.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh] px-4">
                <p className="text-xl md:text-2xl text-gray-500 text-center">
                    Your wishlist is empty.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-2xl font-semibold mb-6">Your Wishlist</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {wishlist.map((product, index) => (
                    <motion.div
                        key={`${product.id}-${index}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Card className="rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition duration-300 h-full flex flex-col">
                            <div className="relative h-48 object-contain bg-white w-full p-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                />
                            </div>
                            <CardContent className="flex-1 flex flex-col justify-between p-4">
                                <div>
                                    <h2 className="font-medium text-sm sm:text-base text-gray-800 mb-1 line-clamp-2">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-yellow-500 text-sm mb-3">
                                        <Star size={16} fill="#facc15" />
                                        {product.rating.rate} ({product.rating.count})
                                    </div>
                                    <p className="text-lg font-semibold text-green-600 mb-2">
                                        ₹{(product.price * 85).toFixed(0)}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                    <Button
                                        className="w-full sm:w-1/2"
                                        onClick={() => additemcart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="w-full sm:w-1/2"
                                        onClick={() => removewishlist(product.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
