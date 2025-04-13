"use client";
import { useStore } from "@/store/store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import Image from "next/image";


const CartPage = () => {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removecart);

    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    if (cart.length === 0)
        return (
            <div className="text-center py-20 text-xl font-semibold">
                🛒 Your Cart is Empty!
            </div>
        );

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold">Your Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((product, index) => (
                        <motion.div
                            key={`${product.id}-${index}`}
                            whileHover={{ scale: 1.01 }}
                            className="rounded-xl shadow-lg border"
                        >
                            <Card className="w-full">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{product.title}</h2>
                                        <p className="text-sm text-gray-500">{product.category}</p>
                                        <p className="text-base font-bold mt-1 text-green-600">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        <Trash2 className="text-red-500 w-5 h-5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="sticky top-24 h-fit border rounded-xl p-6 shadow-md bg-white">
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span>Items:</span>
                        <span>{cart.length}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>
                    <Button className="w-full mt-6">Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
