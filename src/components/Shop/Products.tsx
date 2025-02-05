
import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdShare } from "react-icons/io";
import { TbArrowsRightLeft } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { data, Product } from '@/data/data';
import { urlFor } from '@/sanity/lib/image';

const semi = Poppins({ subsets: ['latin'], weight: '600' })
// const med = Poppins({ subsets: ['latin'], weight: '500' })
const reg = Poppins({ subsets: ['latin'], weight: '400' })

export function discounted(total: number, percent?: number) {
    const percentage = percent ? total / 100 * percent : null
    const discountedPrice = percentage !== null ? (total - percentage) : total;
    return discountedPrice
}

const Products = () => {

    const products = data
    return (
        <div className='mt-14  m-auto  flex-col items-center flex px-5 md:px-0'>
            <div className='grid grid-cols-4'>
                {products.map((product: Product) =>
                    <div className="box h-[446px]  relative overflow-hidden" >
                        <span className={`${product.isNew ? " bg-[#2ec1ac] flex " : product.dicountPercentage > 1 ? "bg-red-400 flex " : " bg-transparent hidden "} absolute right-6  top-6 w-12  items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full `}>{product.isNew ? "New" : product.dicountPercentage ? "-" + product.dicountPercentage + "%" : null}</span>
                        <div className='bg_hover absolute h-full w-full'></div>
                        <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
                            <Link href={`/shop/${product.id}`}><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>View Product</button></Link>
                            <div className='flex text-base font-semibold gap-6 tracking-wide'>
                                <h2><IoMdShare className='inline leading-10' /> Share</h2>
                                <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
                                <h2><IoMdHeartEmpty className='inline' />  Like</h2>
                            </div>
                        </div>
                        <Image src={urlFor(product.image).width(285).height(301).fit('crop').url()} alt='' width={285} height={301}></Image>
                        <div className='ml-4 mt-4 flex flex-col gap-2'>
                            <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>{product.title}</h1>
                            {/* <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3> */}
                            <span className='flex gap-2'>
                                <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>${discounted(product.price, product.dicountPercentage)}</h2>
                                <h4 className={`${reg.className}  text-base leading-[180%] text-[#B0B0B0] `}><s>{product.dicountPercentage ? "$" + product.price : ""}</s></h4>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        // <div '>
        //     <div className='grid sm:grid-cols-2 lg:grid-cols-4  mt-9 gap-8'>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-30%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images1.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Syltherine</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 3.500.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-lg font-semibold gap-4 tracking-wide  '>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' /> Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images6.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Leviosa</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-50%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Lolito</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Luxury big sofa</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/image7.png'} alt='' width={285} height={301} ></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Respira</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Outdoor bar table and stool</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">

        //             <div className='bg_hover absolute h-full w-full '></div>
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images2.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Grifo</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Night Lamp</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 1.500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images3.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Muggo</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Small mug</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 150.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-50%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images4.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Pingky</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Cute bed set</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images5.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Potty</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Minimalist flower pot</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
        //                 </span>
        //             </div>
        //         </div>

        //     </div>
        //     <div className='hidden xl:grid sm:grid-cols-2 lg:grid-cols-4  mt-9 gap-8'>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-30%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images1.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Syltherine</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 3.500.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-lg font-semibold gap-4 tracking-wide  '>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' /> Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images6.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Leviosa</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-50%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Lolito</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Luxury big sofa</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/image7.png'} alt='' width={285} height={301} ></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Respira</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Outdoor bar table and stool</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">

        //             <div className='bg_hover absolute h-full w-full '></div>
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images2.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Grifo</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Night Lamp</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 1.500.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images3.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Muggo</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Small mug</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 150.000</h2>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-50%</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images4.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Pingky</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Cute bed set</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
        //                     <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="box h-[446px]  relative overflow-hidden hidden sm:block">
        //             <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
        //             <div className='bg_hover absolute h-full w-full'></div>
        //             <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
        //                 <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
        //                 <div className='flex text-base font-semibold gap-6 tracking-wide'>
        //                     <h2><IoMdShare className='inline leading-10' /> Share</h2>
        //                     <Link href='/comparison'><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
        //                     <h2><IoMdHeartEmpty className='inline' />  Like</h2>
        //                 </div>
        //             </div>
        //             <Image src={'/Images5.png'} alt='' width={285} height={301}></Image>
        //             <div className='ml-4 mt-4 flex flex-col gap-2'>
        //                 <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Potty</h1>
        //                 <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Minimalist flower pot</h3>
        //                 <span className='flex gap-5'>
        //                     <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
        //                 </span>
        //             </div>
        //         </div>

        //     </div>
        //     <div className='flex justify-center gap-4 xl:gap-12 -ml-6 mt-16'>
        //         <div className='bg-[#b88e2f] w-[60px]  h-[60px] flex items-center justify-center text-white rounded-lg text-xl'>1</div>
        //         <div className=' w-[55px]  h-[55px] flex items-center justify-center text-xl font-medium'>2</div>
        //         <div className=' w-[55px]  h-[55px] flex items-center justify-center font-medium text-lg'>3</div>
        //         <div className=' w-[55px]  h-[55px] flex items-center justify-center text-lg'>Next</div>
        //     </div>
        // </div>
    )
}

export default Products