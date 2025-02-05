
// import { useContext, useState } from "react";
// import { CartContext } from "../components/context";
// import { AiOutlineLeft } from "react-icons/ai"; // Left arrow icon for closing the cart
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// // SideCart component
// const SideCart = () => {
//   const { cart, delCart, updateQuantity } = useContext(CartContext);
//   const [isOpen, setIsOpen] = useState(true); // State to track if the cart is open or closed

//   // Close the cart
//   const closeCart = () => {
//     setIsOpen(false);
//   };

//   // Open the cart
//   const openCart = () => {
//     setIsOpen(true);
//   };

//   if (!isOpen) return null; // If the cart is closed, return null to hide the component

//   // Calculate the total price
//   const totalPrice = cart.reduce(
//     (total: number, product: { price: number; quantity: number }) =>
//       total + product.price * product.quantity,
//     0
//   );

//   // Handle quantity increase/decrease
//   const handleQuantityChange = (product: any, action: "increase" | "decrease") => {
//     const newQuantity =
//       action === "increase" ? product.quantity + 1 : product.quantity - 1;
//     updateQuantity(product.id, product.selectedColor, newQuantity);
//   };

//   return (
//     <div className="fixed top-0 right-0 h-screen bg-white shadow-lg flex flex-col p-4 lg:p-6 z-50 overflow-y-auto w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
//       {/* Arrow Button to Close the Cart */}
//       <button
//         onClick={closeCart}
//         className="absolute left-0 top-6 p-2 text-gray-600 hover:text-gray-800"
//       >
//         <AiOutlineLeft size={24} /> {/* Arrow Icon */}
//       </button>

//       <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
//         Shopping Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map((product: any) => (
//             <div
//               key={`${product.id}-${product.selectedColor}`} // Ensure each product-color pair is unique
//               className="flex justify-between items-center p-4 border-b border-gray-200 rounded-lg flex-wrap sm:flex-nowrap"
//             >
//               {/* Product Info */}
//               <div className="flex items-center gap-4 ">
//                 <div className="w-16 h-16 bg-gray-200 rounded-md flex justify-center items-center">
//                   <Image
//                     src={urlFor(product.productImage).url()}
//                     alt={product.title}
//                     className="rounded-md"
//                     width={50}
//                     height={50}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
//                   <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>

//                   {/* Display selected color as a colored circle */}
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     Colour:
//                     <span
//                       style={{
//                         backgroundColor: product.selectedColor,
//                         width: "16px",
//                         height: "16px",
//                         borderRadius: "50%",
//                       }}
//                     ></span>
//                     <span>{product.selectedColor}</span>
//                   </p>

//                   <p className="text-sm text-gray-500">${product.price}</p>
//               {/* Quantity Controls */}
//               <div className=" flex items-center gap-2 sm:w-1/4 mt-1">
//                 <button
//                   onClick={() => handleQuantityChange(product, "decrease")}
//                   className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 text-xs  text-black "
//                   disabled={product.quantity <= 1} // Disable button if quantity is 1
//                 >
//                  -
//                 </button>
//                 <span className="text-sm">{product.quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(product, "increase")}
//                   className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 text-xs  text-black "
//                 >
//                   +
//                 </button> 
//               </div> 
//                 </div>
//                 </div>
//               {/* Remove Button */}
//               <button
//                 onClick={() => delCart(product)} // Remove the specific product-color pair
//                 className="text-red-600 hover:text-red-800 transition-all text-sm  "
//               >
//                 Remove
//               </button>
              


//             </div>
//           ))}
//         </div>
//       )}

// {cart.length === 0 ? (
//         null
//       ) :
//       <div className="w-full px-1 py-4 bg-gray-100 rounded-t-xl border-t border-gray-300 mt-auto">
//         {/* Display Total Price */}
//         <div className="text-lg font-semibold text-gray-800">
//           <p>Total: ${totalPrice.toFixed(2)}</p>
//         </div>

//         <button
//           className="w-full py-2 bg-[#23A6F0] text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-colors"
//           onClick={() => alert("Proceeding to checkout")}
//         >
//           Checkout
//         </button>
//       </div>}
//     </div>
//   );
// };

// export default SideCart;































































// import { useContext, useState } from "react";
// import { CartContext } from "../components/context";
// import { AiOutlineLeft } from "react-icons/ai"; // Left arrow icon for closing the cart
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// // SideCart component
// const SideCart = () => {
//   const { cart, delCart, updateQuantity } = useContext(CartContext);
//   const [isOpen, setIsOpen] = useState(true); // State to track if the cart is open or closed

//   // Close the cart
//   const closeCart = () => {
//     setIsOpen(false);
//   };

//   // Open the cart
//   const openCart = () => {
//     setIsOpen(true);
//   };

//   if (!isOpen) return null; // If the cart is closed, return null to hide the component

//   // Calculate the total price
//   const totalPrice = cart.reduce(
//     (total: number, product: { price: number; quantity: number }) =>
//       total + product.price * product.quantity,
//     0
//   );

//   // Handle quantity increase/decrease
//   const handleQuantityChange = (product: any, action: "increase" | "decrease") => {
//     const newQuantity =
//       action === "increase" ? product.quantity + 1 : product.quantity - 1;
//     updateQuantity(product.id, product.selectedColor, newQuantity);
//   };

//   return (
//     <div className="fixed top-0 right-0 h-screen bg-white shadow-lg flex flex-col p-4 lg:p-6 z-50 overflow-y-auto w-full sm:w-[350px] md:w-[400px] lg:w-[450px]">
//       {/* Arrow Button to Close the Cart */}
//       <button
//         onClick={closeCart}
//         className="absolute left-0 top-6 p-2 text-gray-600 hover:text-gray-800"
//       >
//         <AiOutlineLeft size={24} /> {/* Arrow Icon */}
//       </button>

//       <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
//         Shopping Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map((product: any) => (
//             <div
//               key={`${product.id}-${product.selectedColor}`} // Ensure each product-color pair is unique
//               className="flex justify-between items-center p-4 border-b border-gray-200 rounded-lg flex-wrap sm:flex-nowrap"
//             >
//               {/* Product Info */}
//               <div className="flex items-center gap-4 ">
//                 <div className="w-16 h-16 bg-gray-200 rounded-md flex justify-center items-center">
//                   <Image
//                     src={urlFor(product.productImage).url()}
//                     alt={product.title}
//                     className="rounded-md"
//                     width={50}
//                     height={50}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
//                   <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>

//                   {/* Display selected color as a colored circle */}
//                   <p className="text-sm text-gray-500 flex items-center gap-2">
//                     Colour:
//                     <span
//                       style={{
//                         backgroundColor: product.selectedColor,
//                         width: "16px",
//                         height: "16px",
//                         borderRadius: "50%",
//                       }}
//                     ></span>
//                     <span>{product.selectedColor}</span>
//                   </p>

//                   <p className="text-sm text-gray-500">${product.price}</p>
//               {/* Quantity Controls */}
//               <div className=" flex items-center gap-2 sm:w-1/4 mt-1">
//                 <button
//                   onClick={() => handleQuantityChange(product, "decrease")}
//                   className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 text-xs  text-black "
//                   disabled={product.quantity <= 1} // Disable button if quantity is 1
//                 >
//                  -
//                 </button>
//                 <span className="text-sm">{product.quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(product, "increase")}
//                   className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 text-xs  text-black "
//                 >
//                   +
//                 </button> 
//               </div> 
//                 </div>
//                 </div>
//               {/* Remove Button */}
//               <button
//                 onClick={() => delCart(product)} // Remove the specific product-color pair
//                 className="text-red-600 hover:text-red-800 transition-all text-sm  "
//               >
//                 Remove
//               </button>
              


//             </div>
//           ))}
//         </div>
//       )}

// {cart.length === 0 ? (
//         null
//       ) :
//       <div className="w-full px-1 py-4 bg-gray-100 rounded-t-xl border-t border-gray-300 mt-auto">
//         {/* Display Total Price */}
//         <div className="text-lg font-semibold text-gray-800">
//           <p>Total: ${totalPrice.toFixed(2)}</p>
//         </div>

//         <button
//           className="w-full py-2 bg-[#23A6F0] text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-colors"
//           onClick={() => alert("Proceeding to checkout")}
//         >
//           Checkout
//         </button>
//       </div>}
//     </div>
//   );
// };

// export default SideCart;





























