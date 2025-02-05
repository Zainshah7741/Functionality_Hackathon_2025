// 'use client'
// import Image from 'next/image'
// import { Montserrat, Poppins } from 'next/font/google'
// import Link from 'next/link'
// import { HiMenu } from "react-icons/hi";
// import Nav from './SideCart'
// import { useState, } from 'react'
// import { usePathname } from 'next/navigation';
// import WishList from '../cart/WishList';

// const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
// const navFont = Poppins({ subsets: ['latin'], weight: "500" })

// export const Navbar = () => {
//     const [display, setState] = useState(false)
//     const [list, setList] = useState(false)
//     const [wishlist, setWishlist] = useState(false)
//     const path = usePathname();
//     return (
//         <nav className={`${path == "studio" ? "hidden" : "flex"} sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px]  items-center z-10 bg-white`} >
//             <div className='w-[93%] m-auto h-[41px] flex items-center  sm:grid  sm:grid-cols-3 justify-between xl:pr-[44px] '>
//                 <div className='col-span-2 flex justify-between'>
//                     <div className='flex justify-center items-center'>
//                         <Image src='/logo.png' alt='logo' width={1000} height={1000} className='h-6 w-[40px] lg:h-8 lg:w-[50px] mr-1  '></Image>
//                         <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
//                     </div>
//                     <ul className={`${navFont.className} hidden sm:flex justify-center text-sm  lg:text-base gap-6 lg:gap-11  xl:gap-[68px] pt-1`}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>

//                 </div>
//                 <ul className='gap-3 sm:gap-7 xl:gap-[50px] justify-end flex'>
//                     <li><Link href=''><Image src={'/account.png'} alt='' width={26} height={26} ></Image></Link></li>
//                     <li className='hidden sm:block'><Link href=''><Image src={'/icons_search.png'} alt='' width={26} height={26}></Image></Link></li>
//                     <li className=''><Link href=''><Image src={'/icons_heart.png'} alt='' width={26} height={26} onClick={() => setWishlist(!wishlist)}></Image></Link></li>
//                     <li ><Link href=''><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)}></Image></Link></li>
//                     <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)}></HiMenu>
//                 </ul>
//             </div>
//             {
//                 display ? <Nav></Nav> : null}
//             {
//                 wishlist ? <WishList></WishList> : null}
//             {
//                 list &&
//                 <div className='absolute top-16 left-0 w-full bg-white -z-10 py-10'>
//                     <div>
//                         <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6 `}>
//                             <li><Link href='/'>Home</Link></li>
//                             <li><Link href='/shop'>Shop</Link></li>
//                             <li><Link href='/blog'>About</Link></li>
//                             <li><Link href='/contact'>Contact</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             }
//         </nav>

//     )
// }


// 'use client'
// import Image from 'next/image'
// import { Montserrat, Poppins } from 'next/font/google'
// import Link from 'next/link'
// import { HiMenu } from "react-icons/hi";
// import Nav from './SideCart'
// import { useState } from 'react'
// import { usePathname } from 'next/navigation';
// import WishList from '../cart/WishList';

// const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
// const navFont = Poppins({ subsets: ['latin'], weight: "500" })

// export const Navbar = () => {
//     const [display, setState] = useState(false)
//     const [list, setList] = useState(false)
//     const [wishlist, setWishlist] = useState(false)
//     const [search, setSearch] = useState("")
//     const path = usePathname();

//     interface SearchChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

//     const handleSearchChange = (e: SearchChangeEvent): void => {
//         setSearch(e.target.value);
//     }

//     return (
//         <nav className={`${path == "studio" ? "hidden" : "flex"} sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px]  items-center z-10 bg-white`} >
//             <div className='w-[93%] m-auto h-[41px] flex items-center  sm:grid  sm:grid-cols-3 justify-between xl:pr-[44px] '>
//                 <div className='col-span-2 flex justify-between'>
//                     <div className='flex justify-center items-center'>
//                         <Image src='/logo.png' alt='logo' width={1000} height={1000} className='h-6 w-[40px] lg:h-8 lg:w-[50px] mr-1  '></Image>
//                         <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
//                     </div>
//                     <ul className={`${navFont.className} hidden sm:flex justify-center text-sm  lg:text-base gap-6 lg:gap-11  xl:gap-[68px] pt-1`}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>
//                 </div>

//                 {/* Search bar for both small and large screens */}
//                 <div className="relative sm:block hidden">
//                     <input 
//                         type="text" 
//                         className="pl-10 pr-4 py-2 border rounded-md w-72 lg:w-96"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={handleSearchChange}
//                     />
//                     <Image 
//                         src='/icons_search.png' 
//                         alt='search icon' 
//                         width={20} 
//                         height={20} 
//                         className="absolute left-3 top-2"
//                     />
//                 </div>

//                 <ul className='gap-3 sm:gap-7 xl:gap-[50px] justify-end flex'>
//                     <li><Link href=''><Image src={'/account.png'} alt='' width={26} height={26} ></Image></Link></li>
//                     <li className='hidden sm:block'><Link href=''><Image src={'/icons_search.png'} alt='' width={26} height={26}></Image></Link></li>
//                     <li className=''><Link href=''><Image src={'/icons_heart.png'} alt='' width={26} height={26} onClick={() => setWishlist(!wishlist)}></Image></Link></li>
//                     <li ><Link href=''><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)}></Image></Link></li>
//                     <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)}></HiMenu>
//                 </ul>
//             </div>

//             {/* Search bar for mobile (hamburger menu) */}
//             <div className={`${list ? 'block' : 'hidden'} sm:hidden absolute top-16 left-0 w-full bg-white py-10`}>
//                 <div className="flex justify-center">
//                     <input 
//                         type="text" 
//                         className="pl-10 pr-4 py-2 border rounded-md w-72"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={handleSearchChange}
//                     />
//                     <Image 
//                         src='/icons_search.png' 
//                         alt='search icon' 
//                         width={20} 
//                         height={20} 
//                         className="absolute left-3 top-2"
//                     />
//                 </div>

//                 <div>
//                     <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6 `}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>
//                 </div>
//             </div>

//             {
//                 display ? <Nav></Nav> : null}
//             {
//                 wishlist ? <WishList></WishList> : null}
//             {
//                 list &&
//                 <div className='absolute top-16 left-0 w-full bg-white -z-10 py-10'>
//                     <div>
//                         <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6 `}>
//                             <li><Link href='/'>Home</Link></li>
//                             <li><Link href='/shop'>Shop</Link></li>
//                             <li><Link href='/blog'>About</Link></li>
//                             <li><Link href='/contact'>Contact</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             }
//         </nav>
//     )
// }













// 'use client'
// import Image from 'next/image'
// import { Montserrat, Poppins } from 'next/font/google'
// import Link from 'next/link'
// import { HiMenu } from "react-icons/hi";
// import Nav from './SideCart'
// import { useState } from 'react'
// import { usePathname } from 'next/navigation';
// import WishList from '../cart/WishList';

// const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
// const navFont = Poppins({ subsets: ['latin'], weight: "500" })

// export const Navbar = () => {
//     const [display, setState] = useState(false)
//     const [list, setList] = useState(false)
//     const [wishlist, setWishlist] = useState(false)
//     const [search, setSearch] = useState("")
//     const path = usePathname();

//     const handleSearchChange = (e) => {
//         setSearch(e.target.value);
//     }

//     return (
//         <nav className={`${path == "studio" ? "hidden" : "flex"} sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px] items-center z-10 bg-white`}>
//             <div className="w-[93%] m-auto h-[41px] flex items-center justify-between xl:pr-[44px]">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     <Image 
//                         src='/logo.png' 
//                         alt='logo' 
//                         width={1000} 
//                         height={1000} 
//                         className='h-6 w-[40px] lg:h-8 lg:w-[50px]'>
//                     </Image>
//                     <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
//                 </div>

//                 {/* Navigation Links */}
//                 <ul className={`${navFont.className} hidden sm:flex justify-center text-sm lg:text-base gap-6 lg:gap-11 xl:gap-[68px] pt-1`}>
//                     <li><Link href='/'>Home</Link></li>
//                     <li><Link href='/shop'>Shop</Link></li>
//                     <li><Link href='/blog'>About</Link></li>
//                     <li><Link href='/contact'>Contact</Link></li>
//                 </ul>

//                 {/* Search Bar for Large Screens */}
//                 <div className="relative hidden sm:block">
//                     <input 
//                         type="text" 
//                         className="pl-10 pr-4 py-2 border rounded-md w-72 lg:w-96"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={handleSearchChange}
//                     />
//                     <Image 
//                         src='/icons_search.png' 
//                         alt='search icon' 
//                         width={20} 
//                         height={20} 
//                         className="absolute left-3 top-2"
//                     />
//                 </div>

//                 {/* Icons (Wishlist, Cart, Account) */}
//                 <ul className="flex gap-6 items-center">
//                     <li>
//                         <Link href=''>
//                             <Image src='/account.png' alt='account' width={26} height={26}></Image>
//                         </Link>
//                     </li>
//                     <li className="hidden sm:block">
//                         <Link href=''>
//                             <Image src='/icons_search.png' alt='search icon' width={26} height={26}></Image>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href=''>
//                             <Image src='/icons_heart.png' alt='wishlist' width={26} height={26} onClick={() => setWishlist(!wishlist)} />
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href=''>
//                             <Image src='/cart.png' alt='cart' width={26} height={26} onClick={() => setState(!display)} />
//                         </Link>
//                     </li>

//                     {/* Hamburger Menu for Mobile */}
//                     <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)} />
//                 </ul>
//             </div>

//             {/* Mobile Hamburger Menu with Search Bar */}
//             {list && (
//                 <div className="sm:hidden absolute top-16 left-0 w-full bg-white py-10">
//                     <div className="flex justify-center mb-6">
//                         <input 
//                             type="text" 
//                             className="pl-10 pr-4 py-2 border rounded-md w-72"
//                             placeholder="Search..."
//                             value={search}
//                             onChange={handleSearchChange}
//                         />
//                         <Image 
//                             src='/icons_search.png' 
//                             alt='search icon' 
//                             width={20} 
//                             height={20} 
//                             className="absolute left-3 top-2"
//                         />
//                     </div>

//                     <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6`}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>
//                 </div>
//             )}

//             {/* Conditional Renders for SideCart and Wishlist */}
//             {display && <Nav />}
//             {wishlist && <WishList />}
//         </nav>
//     )
// }






// 'use client'
// import Image from 'next/image'
// import { Montserrat, Poppins } from 'next/font/google'
// import Link from 'next/link'
// import { HiMenu } from "react-icons/hi";
// import Nav from './SideCart'
// import { useState } from 'react'
// import { usePathname } from 'next/navigation';
// import WishList from '../cart/WishList';
// import { client } from '@/sanity/lib/client';
// import { Product } from '@/data/data';

// const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
// const navFont = Poppins({ subsets: ['latin'], weight: "500" })

// export const Navbar = () => {
//     const [display, setState] = useState(false)
//     const [list, setList] = useState(false)
//     const [wishlist, setWishlist] = useState(false)
//     const [search, setSearch] = useState("")
//     const [searchResults, setSearchResults] = useState([]); // Store search results
//     const path = usePathname();

//     // Handle input change in search bar
//     const handleSearchChange = async (e:any) => {
//         const query = e.target.value;
//         setSearch(query);

//         if (query.trim() === "") {

//             setSearchResults([]);
//             return;
//         }
// // `*[_type == "product" && title match $query] | order(title asc) {
// //                 _id,
// //                 title,
// //                 slug,
// //                 price,
// //                 mainImage
// //             }`
//         // Query to fetch products from Sanity based on search query
//         const data = await client.fetch(
//             `*[_type == "product" && title match $query] | order(title asc) ]`,
//             // { query: `${query}*` } // Wildcard search for partial matches
//         );

//         setSearchResults(data);
//     }

//     return (
//         <nav className={`${path == "studio" ? "hidden" : "flex"} sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px] items-center z-10 bg-white`}>
//             <div className="w-[93%] m-auto h-[41px] flex items-center justify-between xl:pr-[44px]">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     <Image
//                         src='/logo.png'
//                         alt='logo'
//                         width={1000}
//                         height={1000}
//                         className='h-6 w-[40px] lg:h-8 lg:w-[50px]' />
//                     <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
//                 </div>

//                 {/* Navigation Links */}
//                 <ul className={`${navFont.className} hidden sm:flex justify-center text-sm lg:text-base gap-6 lg:gap-11 xl:gap-[68px] pt-1`}>
//                     <li><Link href='/'>Home</Link></li>
//                     <li><Link href='/shop'>Shop</Link></li>
//                     <li><Link href='/blog'>About</Link></li>
//                     <li><Link href='/contact'>Contact</Link></li>
//                 </ul>

//                 {/* Search Bar for Large Screens */}
//                 <div className="relative hidden sm:block">
//                     <input
//                         type="text"
//                         className="pl-10 pr-4 py-2 border rounded-md w-72 lg:w-96"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={handleSearchChange}
//                     />
//                     <Image
//                         src='/icons_search.png'
//                         alt='search icon'
//                         width={20}
//                         height={20}
//                         className="absolute left-3 top-2"
//                     />
//                 </div>

//                 {/* Icons (Wishlist, Cart, Account) */}
//                 <ul className="flex gap-6 items-center">
//                     <li><Link href=''><Image src='/account.png' alt='account' width={26} height={26} /></Link></li>
//                     <li className="hidden sm:block"><Link href=''><Image src='/icons_search.png' alt='search icon' width={26} height={26} /></Link></li>
//                     <li><Link href=''><Image src='/icons_heart.png' alt='wishlist' width={26} height={26} onClick={() => setWishlist(!wishlist)} /></Link></li>
//                     <li><Link href=''><Image src='/cart.png' alt='cart' width={26} height={26} onClick={() => setState(!display)} /></Link></li>
//                     <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)} />
//                 </ul>
//             </div>

//             {/* Mobile Hamburger Menu with Search Bar */}
//             {list && (
//                 <div className="sm:hidden absolute top-16 left-0 w-full bg-white py-10">
//                     <div className="flex justify-center mb-6">
//                         <input
//                             type="text"
//                             className="pl-10 pr-4 py-2 border rounded-md w-72"
//                             placeholder="Search..."
//                             value={search}
//                             onChange={handleSearchChange}
//                         />
//                         <Image
//                             src='/icons_search.png'
//                             alt='search icon'
//                             width={20}
//                             height={20}
//                             className="absolute left-3 top-2"
//                         />
//                     </div>

//                     <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6`}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>
//                 </div>
//             )}

//             {/* Conditional Renders for SideCart and Wishlist */}
//             {display && <Nav />}
//             {wishlist && <WishList />}

//             {/* Show Search Results */}
//             {searchResults.length > 0 && (
//                 <div className="absolute top-16 left-0 w-full bg-white z-20 py-2">
//                     <ul className="space-y-2">
//                         {searchResults.map((result:Product) => (
//                             <li key={result.id} className="flex items-center gap-4 p-2 hover:bg-gray-100">
//                                 <Image src={result.image} alt={result.title} width={40} height={40} className="rounded-md" />
//                                 <Link href={`/product/${result.image}`} className="text-sm">{result.title}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }





// 'use client'
// import Image from 'next/image'
// import { Montserrat, Poppins } from 'next/font/google'
// import Link from 'next/link'
// import { HiMenu } from "react-icons/hi";
// import Nav from './SideCart'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation';
// import WishList from '../cart/WishList';
// import { client } from '@/sanity/lib/client';
// import { Product } from '@/data/data';

// const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
// const navFont = Poppins({ subsets: ['latin'], weight: "500" })

// export const Navbar = () => {
//     const [display, setState] = useState(false)
//     const [list, setList] = useState(false)
//     const [wishlist, setWishlist] = useState(false)
//     const [search, setSearch] = useState("")
//     const [searchResults, setSearchResults] = useState([]); // Store search results
//     const path = usePathname();

//     // Handle input change in search bar
//     const handleSearchChange = async (e: any) => {
//         const query = e.target.value;
//         setSearch(query);

//         if (query.trim() === "") {
//             setSearchResults([]);  // Clear results when query is empty
//             return;
//         }

//         // Fetch products from Sanity based on search query
//         const data = await client.fetch(
//             `*[_type == "product" && title match ${query} ]`

//         );

//         setSearchResults(data);
//     };

//     return (
//         <nav className={`${path == "studio" ? "hidden" : "flex"} sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px] items-center z-10 bg-white`}>
//             <div className="w-[93%] m-auto h-[41px] flex items-center justify-between xl:pr-[44px]">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     <Image
//                         src='/logo.png'
//                         alt='logo'
//                         width={1000}
//                         height={1000}
//                         className='h-6 w-[40px] lg:h-8 lg:w-[50px]' />
//                     <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
//                 </div>

//                 {/* Navigation Links */}
//                 <ul className={`${navFont.className} hidden sm:flex justify-center text-sm lg:text-base gap-6 lg:gap-11 xl:gap-[68px] pt-1`}>
//                     <li><Link href='/'>Home</Link></li>
//                     <li><Link href='/shop'>Shop</Link></li>
//                     <li><Link href='/blog'>About</Link></li>
//                     <li><Link href='/contact'>Contact</Link></li>
//                 </ul>

//                 {/* Search Bar for Large Screens */}
//                 <div className="relative hidden sm:block">
//                     <input
//                         type="text"
//                         className="pl-10 pr-4 py-2 border rounded-md w-72 lg:w-96"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={handleSearchChange}
//                     />
//                     <Image
//                         src='/icons_search.png'
//                         alt='search icon'
//                         width={20}
//                         height={20}
//                         className="absolute left-3 top-2"
//                     />
//                 </div>

//                 {/* Icons (Wishlist, Cart, Account) */}
//                 <ul className="flex gap-6 items-center">
//                     <li><Link href=''><Image src='/account.png' alt='account' width={26} height={26} /></Link></li>
//                     <li className="hidden sm:block"><Link href=''><Image src='/icons_search.png' alt='search icon' width={26} height={26} /></Link></li>
//                     <li><Link href=''><Image src='/icons_heart.png' alt='wishlist' width={26} height={26} onClick={() => setWishlist(!wishlist)} /></Link></li>
//                     <li><Link href=''><Image src='/cart.png' alt='cart' width={26} height={26} onClick={() => setState(!display)} /></Link></li>
//                     <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)} />
//                 </ul>
//             </div>

//             {/* Mobile Hamburger Menu with Search Bar */}
//             {list && (
//                 <div className="sm:hidden absolute top-16 left-0 w-full bg-white py-10">
//                     <div className="flex justify-center mb-6">
//                         <input
//                             type="text"
//                             className="pl-10 pr-4 py-2 border rounded-md w-72"
//                             placeholder="Search..."
//                             value={search}
//                             onChange={handleSearchChange}
//                         />
//                         <Image
//                             src='/icons_search.png'
//                             alt='search icon'
//                             width={20}
//                             height={20}
//                             className="absolute left-3 top-2"
//                         />
//                     </div>

//                     <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6`}>
//                         <li><Link href='/'>Home</Link></li>
//                         <li><Link href='/shop'>Shop</Link></li>
//                         <li><Link href='/blog'>About</Link></li>
//                         <li><Link href='/contact'>Contact</Link></li>
//                     </ul>
//                 </div>
//             )}

//             {/* Conditional Renders for SideCart and Wishlist */}
//             {display && <Nav />}
//             {wishlist && <WishList />}

//             {/* Show Search Results */}
//             {searchResults.length > 0 && (
//                 <div className="absolute top-16 left-0 w-full bg-white z-20 py-2">
//                     <ul className="space-y-2">
//                         {searchResults.map((result: any) => (
//                             <li key={result._id} className="flex items-center gap-4 p-2 hover:bg-gray-100">
//                                 <Image src={result.productImage} alt={result.title} width={40} height={40} className="rounded-md" />
//                                 <Link href={`/shop/${result._id}`} className="text-sm">{result.title}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }



'use client'
import Image from 'next/image'
import { Montserrat, Poppins } from 'next/font/google'
import Link from 'next/link'
import { LuSearchX } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Nav from './SideCart'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import WishList from '../cart/WishList';
import { data } from '@/data/data';
import { urlFor } from '@/sanity/lib/image';

const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
const navFont = Poppins({ subsets: ['latin'], weight: "500" })

export const Navbar = () => {
    const [display, setState] = useState(false);
    const [list, setList] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [search, setSearch] = useState('');
    const [isSearchOpen, setSearchInput] = useState(false);
    const path = usePathname();

    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <nav className={`${path == "/studio/structure" ? "hidden" : "flex"} sticky top-0 m-auto h-16 md:h-20 xl:h-[100px] items-center z-10 bg-white`}>
            <div className='w-[93%] m-auto h-[41px] flex items-center  justify-between xl:pr-[44px]'>
                <div className='col-span-2 flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <Image src='/logo.png' alt='logo' width={1000} height={1000} className='h-6 w-[40px] lg:h-8 lg:w-[50px] mr-1' />
                        <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
                    </div>

                </div>
                <ul className={`${navFont.className} hidden md:flex justify-center text-sm lg:text-base gap-6 lg:gap-11 xl:gap-[68px] pt-1`}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li><Link href='/blog'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <ul className='gap-3 sm:gap-4 xl:gap-[50px]  flex'>
                    <li className='absolute left-1 sm:static   sm:right-20 top-14 sm:top-4ok0'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className={`border ${!isSearchOpen ? "hidden" : "block"} z-10 px-2 py-2 sm:py-1 w-screen rounded-md  sm:w-[200px] focus:outline-none`}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {(search && isSearchOpen) && (
                            <div className='absolute sm:right-1 p-4 w-screen sm:w-[300px]  bg-white shadow-md h-screen sm:max-h-72  rounded-lg border'>
                                {filteredProducts.length > 0 ? (
                                    <ul className='overflow-y-auto h-full'>
                                        {filteredProducts.map(product => (
                                            <li key={product.id} className='flex items-center gap-4 py-2 border-b px-2 hover:bg-gray-100'>
                                                <Image src={urlFor(product.image).width(150).height(150).url()} alt={product.title} width={60} height={60} className='rounded-md' />
                                                <div>
                                                    <Link href={`/shop/${product.id}`} className='text-sm font-medium'>{product.title}</Link>
                                                    <p className='text-sm text-gray-600'>${product.price.toFixed(2)}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='text-center text-gray-500'>No products found</p>
                                )}
                            </div>
                        )}
                    </li>
                    <li><Image src={'/account.png'} alt='' width={26} height={26} className='cursor-pointer ' /></li>
                    <li className={`${isSearchOpen ? "hidden" : "block"}`}><Image src={'/icons_search.png'} alt='' width={26} height={26} onClick={() => setSearchInput(!isSearchOpen)} ></Image></li>
                    {<LuSearchX className={`${!isSearchOpen ? "hidden" : "block"} text-2xl`} onClick={() => setSearchInput(!isSearchOpen)} ></LuSearchX>}
                    <li className='cursor-pointer hidden md:block' ><Image src={'/icons_heart.png'} alt='' width={26} height={26} onClick={() => setWishlist(!wishlist)} /></li>
                    <li className='cursor-pointer hidden md:block'><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)} /></li>
                    <HiMenu className='md:hidden text-2xl' onClick={() => setList(!list)} />
                </ul>
            </div>
            {display && <Nav />}
            {wishlist && <WishList />}
            {list && (
                <div className='absolute top-16 left-0 w-full bg-white -z-10 py-10'>
                    <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6`}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/blog'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Image src={'/icons_heart.png'} alt='' width={26} height={26} onClick={() => setWishlist(!wishlist)} className='cursor-pointer' /></li>
                        <li><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)} className='cursor-pointer' /></li>
                    </ul>
                </div>
            )}

        </nav>
    );
};
