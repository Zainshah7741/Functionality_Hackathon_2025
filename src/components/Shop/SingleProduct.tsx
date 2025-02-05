// 'use client'
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { Poppins } from 'next/font/google'
// import { AiFillTwitterCircle } from "react-icons/ai";
// import Link from "next/link";
// import { Product } from "@/data/data";
// import { urlFor } from "@/sanity/lib/image";
// import { discounted } from "./Products";
// import { useContext } from "react";
// import { CartContext } from "../cart/context";
// const reg = Poppins({ subsets: ['latin'], weight: '400' })

// export default function ProductCard({ single: product }: { single: Product | undefined }) {
//     const cartProduct = useContext(CartContext)
//     console.log(cartProduct.cart);

//     if (!product) return <div>Loading...</div>
//     return (
//         <div className="max-w-[1440px] mx-auto p-6 bg-white">
//             <div className="grid md:grid-cols-2 gap-8">

//                 <div className="flex flex-col">
//                     <div className="bg-gray-100 p-1 relative lg:p-6 flex items-center justify-center">
//                         <Image
//                             src={urlFor(product.image).width(553).height(500).fit('crop').url()}
//                             alt=""
//                             className=""
//                             width={553}
//                             height={500}
//                         />
//                         <span className={`${product.isNew ? " bg-[#2ec1ac] flex " : product.dicountPercentage > 1 ? "bg-red-400 flex " : " bg-transparent hidden "} absolute right-8  top-8 w-12  items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full `}>{product.isNew ? "New" : product.dicountPercentage ? "-" + product.dicountPercentage + "%" : null}</span>
//                     </div>

//                 </div>

//                 <div>
//                     <h1 className="text-[42px] tracking-wider font-medium mt-5">{product.title}</h1>
//                     <p className="text-2xl tracking-wider text-gray-600 inline-block mr-2">${discounted(product.price, product.dicountPercentage)}</p>
//                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] inline-block`}><s>{product.dicountPercentage ? "$" + product.price : ""}</s></h4>
//                     <div className="flex space-y-4">
//                         <span className="text-yellow-500 text-3xl mt-2">★★★★</span>
//                         <span className="text-base text-gray-500 mt-2 border-l border-black ml-4 pl-4">5 Customer Review</span>
//                     </div>
//                     <p className=" mr-3 text-sm mt-2">
//                         {product.description}
//                     </p>

//                     <div>
//                         <h2 className="text-sm font-medium text-gray-500 mt-6">Size</h2>
//                         <div className="flex gap-5">
//                             <button className="px-4 text-sm bg-yellow-500 py-2 border border-gray-300 rounded hover:bg-gray-100">L</button>
//                             <button className=" py-2 border border-gray-300 rounded hover:bg-gray-100">XL</button>
//                             <button className="py-2 border border-gray-300 rounded hover:bg-gray-100">XS</button>
//                         </div>
//                     </div>
//                     <div className="mt-5">
//                         <h2 className="text-sm text-gray-500 font-medium">Color</h2>
//                         <div className="flex space-x-4">
//                             <div className="w-8 h-8  bg-[#816DFA] rounded-full border cursor-pointer hover:border-gray-500"></div>
//                             <div className="w-8 h-8 bg-black rounded-full border cursor-pointer hover:border-gray-500"></div>
//                             <div className="w-8 h-8 bg-yellow-500 rounded-full border cursor-pointer hover:border-gray-500"></div>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4 my-8">
//                         <div className="flex items-center justify-between w-20 xl:w-32 px-2 text-base font-medium border border-gray-900 rounded-lg py-3 xl:py-5">
//                             <span className=" hover:bg-gray-200">-</span>
//                             <span className="">1</span>
//                             <span className=" hover:bg-gray-200">+</span>
//                         </div>
//                         <button className="border border-gray-900 text-black rounded-xl hover:bg-gray-800 text-sm lg:text-xl px-4 lg:px-7 py-2 xl:px-12 xl:py-4 " onClick={() => cartProduct.addCart(product)}>
//                             Add To Cart
//                         </button>

//                         <Link href='/comparison'> <button className=" border border-gray-900 text-black rounded-xl hover:bg-gray-800 text-sm lg:text-xl px-7 py-2 xl:px-12 xl:py-4">
//                             Compare
//                         </button></Link>
//                     </div>
//                     <div className="text-base text-gray-600 mt-24">
//                         <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {product.id.toUpperCase()}</p>
//                         <p>Category &nbsp;&nbsp;: &nbsp;&nbsp;Sofas</p>
//                         <p>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;{product.tags.map((tag: string, i: number) => <span key={i}>{tag.toUpperCase()} | </span>)}</p>
//                     </div>

//                     <div className="flex space-x-4 mt-4 ">
//                         <span>Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:</span>
//                         <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
//                             <FaFacebook />
//                         </button>
//                         <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
//                             <FaLinkedin />
//                         </button>
//                         <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
//                             <AiFillTwitterCircle />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Poppins } from 'next/font/google';
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
import { Product } from "@/data/data";
import { urlFor } from "@/sanity/lib/image";
import { discounted } from "./Products";
import { useContext } from "react";
import { CartContext } from "../cart/context";

const reg = Poppins({ subsets: ['latin'], weight: '400' });

export default function ProductCard({ single: product }: { single: Product | undefined }) {
    const { addCart, quantityAdd, quantity } = useContext(CartContext);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="max-w-[1440px] mx-auto p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">

                <div className="flex flex-col">
                    <div className="bg-gray-100 p-1 relative lg:p-6 flex items-center justify-center">
                        <Image
                            src={urlFor(product.image).width(553).height(500).fit('crop').url()}
                            alt=""
                            className=""
                            width={553}
                            height={500}
                        />
                        <span className={`${product.isNew ? " bg-[#2ec1ac] flex " : product.dicountPercentage > 1 ? "bg-red-400 flex " : " bg-transparent hidden "} absolute right-8  top-8 w-12  items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full `}>
                            {product.isNew ? "New" : product.dicountPercentage ? "-" + product.dicountPercentage + "%" : null}
                        </span>
                    </div>
                </div>

                <div>
                    <h1 className="text-[42px] tracking-wider font-medium mt-5">{product.title}</h1>
                    <p className="text-2xl tracking-wider text-gray-600 inline-block mr-2">${discounted(product.price, product.dicountPercentage)}</p>
                    <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] inline-block`}><s>{product.dicountPercentage ? "$" + product.price : ""}</s></h4>
                    <div className="flex space-y-4">
                        <span className="text-yellow-500 text-3xl mt-2">★★★★</span>
                        <span className="text-base text-gray-500 mt-2 border-l border-black ml-4 pl-4">5 Customer Review</span>
                    </div>
                    <p className=" mr-3 text-sm mt-2">
                        {product.description}
                    </p>

                    <div>
                        <h2 className="text-sm font-medium text-gray-500 mt-6">Size</h2>
                        <div className="flex gap-5">
                            <button className="px-4 text-sm bg-yellow-500 py-2 border border-gray-300 rounded hover:bg-gray-100">L</button>
                            <button className=" py-2 border border-gray-300 rounded hover:bg-gray-100">XL</button>
                            <button className="py-2 border border-gray-300 rounded hover:bg-gray-100">XS</button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-sm text-gray-500 font-medium">Color</h2>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8  bg-[#816DFA] rounded-full border cursor-pointer hover:border-gray-500"></div>
                            <div className="w-8 h-8 bg-black rounded-full border cursor-pointer hover:border-gray-500"></div>
                            <div className="w-8 h-8 bg-yellow-500 rounded-full border cursor-pointer hover:border-gray-500"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 my-8">
                        {/* <div className="flex items-center justify-between w-20 xl:w-32 px-2 text-base font-medium border border-gray-900 rounded-lg py-3 xl:py-5">
                            <span className=" hover:bg-gray-200">-</span>
                            <span className="">{quantity}</span>
                            <span className=" hover:bg-gray-200" onClick={() => quantityAdd()}>+</span>
                        </div> */}
                        <button
                            className="border border-gray-900 text-black rounded-xl hover:bg-gray-800 text-sm lg:text-xl px-4 lg:px-7 py-2 xl:px-12 xl:py-4"
                            onClick={() => addCart(product)}
                        >
                            Add To Cart
                        </button>

                        <Link href='/comparison'>
                            <button className=" border border-gray-900 text-black rounded-xl hover:bg-gray-800 text-sm lg:text-xl px-7 py-2 xl:px-12 xl:py-4">
                                Compare
                            </button>
                        </Link>
                    </div>
                    <div className="text-base text-gray-600 mt-24">
                        <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {product.id.toUpperCase()}</p>
                        <p>Category &nbsp;&nbsp;: &nbsp;&nbsp;Sofas</p>
                        <p>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;{product.tags.map((tag: string, i: number) => <span key={i}>{tag.toUpperCase()} | </span>)}</p>
                    </div>

                    <div className="flex space-x-4 mt-4 ">
                        <span>Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:</span>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <FaFacebook />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <FaLinkedin />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <AiFillTwitterCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


