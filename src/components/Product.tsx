"use client";
import Image from "next/image";
import React, { use } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Producttype } from "@/types";
import Icon from "./Icon";
import { useRouter } from "next/navigation"
import { useStore } from "@/store/store";

type Props = {
    product: Producttype;
};

const Product: React.FC<Props> = ({ product }) => {
    const router = useRouter()
    const { additemcart, additemwishlist, user } = useStore()

    const navigatetoproductpage = (id: number) => {
        router.push(`/product/${id}`)
    }

    const addtocart = (product: Producttype) => {
        if (user.email.length === 0) {
            console.log(user.email)
            console.log("User not logged in, redirecting to /user/login");
            router.push("/user/login");
            return;
        }
        additemcart(product);
    };

    const addToWish = (product: Producttype) => {
        if (user.email.length === 0) {
            console.log(user)
            console.log("User not logged in, redirecting to /user/login");
            router.push("/user/login");
            return;
        }
        console.log(product, "add the product")
        additemwishlist(product);
    };

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
                        className="px-4 py-2 flex justify-center items-center rounded-xl text-xs md:text-xl font-normal text-black"
                    >
                        details<Icon.arrowupright onClick={() => navigatetoproductpage(product.id)} />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs md:text-xl font-normal text-black"
                    >
                        <Icon.wishlist onClick={() => addToWish(product)} />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <span onClick={() => addtocart(product)}>Add Cart</span>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default Product;
