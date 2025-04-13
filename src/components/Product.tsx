"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Producttype } from "@/types";
import Icon from "./Icon";

type Props = {
    product: Producttype;
};

const Product: React.FC<Props> = ({ product }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-xl p-6 border">

                <CardItem
                    translateZ={50}
                    className="text-xl font-bold text-neutral-600 dark:text-white text-center"
                >
                    {product.title.substring(0, 20)}...
                </CardItem>

                <CardItem translateZ={100} className="w-full mt-4 relative">
                    <div className="relative group">
                        <Image
                            src={product.image}
                            height={1000}
                            width={1000}
                            className="h-60 w-full object-cover rounded-xl"
                            alt={product.title}
                        />
                        <div className="absolute inset-0  bg-transparent bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-center justify-center">
                            <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg shadow">
                                Add Cart
                            </button>
                        </div>
                    </div>
                </CardItem>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    <p><span className="font-semibold">Price:</span> ${product.price}</p>
                    <p><span className="font-semibold">Category:</span> {product.category}</p>
                </div>

                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </div>

                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs md:text-xl font-normal text-black"
                    >
                        <Icon.wishlist />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Add Cart
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default Product;
