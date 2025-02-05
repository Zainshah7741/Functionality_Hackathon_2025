'use client'
// import { data } from "@/data/data";
import { urlFor } from "@/sanity/lib/image";

import { CartContext } from "@/components/cart/context";
import Image from "next/image";
import React, { useContext } from 'react'
import { Product } from "@/data/data";

const page = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="grid grid-cols-4 gap-4">
            <div>
                <h1>Cart</h1>
                {cart.length > 0 ? (
                    cart.map((item: any, index: number) => <div key={index}>{item.name}</div>)
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>

        </div>
    )
}

export default page
