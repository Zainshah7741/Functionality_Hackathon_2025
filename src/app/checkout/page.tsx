// 'use client'
// import { CheckoutContext } from "@/components/cart/context";
// import Checkouts from "@/components/checkout";
// import Achieve from "@/components/Shop/Achieve";
// import { Product } from "@/data/data";
// import { useContext } from "react";


// const Checkout = () => {
//     const { checkout } = useContext(CheckoutContext)


//     const totalPrice: number = checkout.reduce(
//         (total: number, product: { price: number; quantity: number }) =>
//             total + product.price * product.quantity, 0
//     );

//     return <>
//         <Checkouts />
//         <div className="container mx-auto flex flex-col md:flex-row md:justify-center gap-6 p-4">
//             <div className="left md:w-1/2">
//                 <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                     <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
//                     <form>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label
//                                     htmlFor="firstName"
//                                     className="block text-sm font-medium text-gray-700 mb-2"
//                                 >
//                                     First Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="firstName"
//                                     name="firstName"
//                                     className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="lastName"
//                                     className="block text-sm font-medium text-gray-700 mb-2"
//                                 >
//                                     Last Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="lastName"
//                                     name="lastName"
//                                     className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="companyName"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Company Name (Optional)
//                             </label>
//                             <input
//                                 type="text"
//                                 id="companyName"
//                                 name="companyName"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="country"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Country / Region
//                             </label>
//                             <select
//                                 id="country"
//                                 name="country"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             >
//                                 <option>Sri Lanka</option>
//                                 <option>India</option>
//                                 <option>United States</option>
//                                 <option>United Kingdom</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="streetAddress"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Street Address
//                             </label>
//                             <input
//                                 type="text"
//                                 id="streetAddress"
//                                 name="streetAddress"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="city"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Town / City
//                             </label>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 name="city"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="province"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Province
//                             </label>
//                             <select
//                                 id="province"
//                                 name="province"
//                                 className=" mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             >
//                                 <option>Western Province</option>
//                                 <option>Southern Province</option>
//                                 <option>Central Province</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="zipCode"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 ZIP Code
//                             </label>
//                             <input
//                                 type="text"
//                                 id="zipCode"
//                                 name="zipCode"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="phone"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Phone
//                             </label>
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 required
//                             />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className="right md:w-1/3">
//                 <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
//                     <h2 className="text-lg font-bold mb-6">Product</h2>
//                     {checkout && checkout.map((product: Product) => (
//                         <div className="flex justify-between mb-4">
//                             <p>{product.title} x {product.quantity}</p>
//                             <p>{product.price}</p>
//                         </div>
//                     ))}
//                     <div className="flex justify-between mb-4">
//                         <p>Subtotal</p>
//                         <p>${totalPrice}</p>
//                     </div>
//                     <div className="flex justify-between my-4 border-[1px] py-2 border-y-slate-600 ">
//                         <p className="font-semibold">Shipping</p>
//                         <p className="text-amber-600">Free</p>
//                     </div>
//                     <div className="flex justify-between mb-4 font-bold text-lg">
//                         <p>Total</p>
//                         <p className="text-amber-600"> ${totalPrice}</p>
//                     </div>
//                     <hr className="my-4 border-gray-200" />
//                     <div className="mb-6">
//                         <p className="font-bold">Direct Bank Transfer</p>
//                         <p className="text-sm text-gray-600">
//                             Make your payment directly into our bank account. Please use your Order ID as the
//                             payment reference. Your order will not be shipped until the funds have cleared in
//                             our account.
//                         </p>
//                     </div>
//                     <div className="mb-6">
//                         <div className="flex items-center mb-2">
//                             <input
//                                 type="radio"
//                                 id="directBankTransfer"
//                                 name="paymentMethod"
//                                 value="directBankTransfer"
//                                 className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                                 defaultChecked
//                             />
//                             <label
//                                 htmlFor="directBankTransfer"
//                                 className="ml-2 text-sm font-medium text-gray-700 mb-4"
//                             >
//                                 Direct Bank Transfer
//                             </label>
//                         </div>
//                         <div className="flex items-center">
//                             <input
//                                 type="radio"
//                                 id="cashOnDelivery"
//                                 name="paymentMethod"
//                                 value="cashOnDelivery"
//                                 className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                             />
//                             <label
//                                 htmlFor="cashOnDelivery"
//                                 className="ml-2 text-sm font-medium text-gray-700 mb-4"
//                             >
//                                 Cash On Delivery
//                             </label>
//                         </div>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-6">
//                         Your personal data will be used to support your experience throughout this website, to
//                         manage access to your account, and for other purposes described in our{" "}
//                         <a href="#" className="text-blue-600 underline">
//                             privacy policy
//                         </a>
//                         .
//                     </p>
//                     <button
//                         type="button"
//                         className="w-1/2 bg-none text-black border border-black py-3 rounded-md text-center font-medium hover:bg-gray-200 mx-auto block"
//                     >
//                         Place order
//                     </button>
//                 </div>
//             </div>
//         </div>
//         <Achieve></Achieve>
//     </>;
// };

// export default Checkout;















// // pages/checkout.tsx
// 'use client'

// import { useContext, useState } from "react";
// import { CheckoutContext } from "@/components/cart/context"; // Adjust as per your context path
// import Checkouts from "@/components/checkout";  // Your Checkout component
// import Achieve from "@/components/Shop/Achieve";  // Your Achieve component

// const Checkout = () => {
//     const { checkout } = useContext(CheckoutContext);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const totalPrice: number = checkout.reduce(
//         (total: number, product: { price: number; quantity: number }) =>
//             total + product.price * product.quantity, 0
//     );


//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         // Collect form data
//         const formData = new FormData(event.target as HTMLFormElement);
//         const orderData = {
//             firstName: formData.get("firstName") as string,
//             lastName: formData.get("lastName") as string,
//             address: formData.get("streetAddress") as string,
//             city: formData.get("city") as string,
//             province: formData.get("province") as string,
//             zipCode: formData.get("zipCode") as string,
//             email: formData.get("email") as string,
//             phone: formData.get("phone") as string,
//             products: checkout,
//         };

//         try {
//             const response = await fetch("/api/shipment", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(orderData),
//             });

//             if (response.ok) {
//                 const shipmentResponse = await response.json();
//                 alert(`Shipment created successfully! Tracking Number: ${shipmentResponse.trackingNumber}`);
//             } else {
//                 const errorResponse = await response.json();
//                 setError(errorResponse.message || "An unknown error occurred.");
//                 console.error("API Error Response:", errorResponse);
//             }
//         } catch (error) {
//             setError("Error creating shipment. Please try again.");
//             console.error("Error details:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <Checkouts />
//             <div className="container mx-auto flex flex-col md:flex-row md:justify-center gap-6 p-4">
//                 <div className="left md:w-1/2">
//                     <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                         <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
//                         <form onSubmit={handleSubmit}>
//                             {/* Form Fields */}
//                             <div className="mb-4">
//                                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                                 <input type="text" id="firstName" name="firstName" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                                 <input type="text" id="lastName" name="lastName" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
//                                 <input type="text" id="streetAddress" name="streetAddress" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                                 <input type="text" id="city" name="city" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">Province</label>
//                                 <select id="province" name="province" className="mt-1 block w-full p-4 border border-gray-300 rounded-md">
//                                     <option>Western Province</option>
//                                     <option>Southern Province</option>
//                                     <option>Central Province</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
//                                 <input type="text" id="zipCode" name="zipCode" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                                 <input type="email" id="email" name="email" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                                 <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-4 border border-gray-300 rounded-md" required />
//                             </div>

//                             {/* Submit Button */}
//                             <button type="submit" className="w-1/2 bg-none text-black border border-black py-3 rounded-md text-center" disabled={isLoading}>
//                                 {isLoading ? "Placing order..." : "Place order"}
//                             </button>
//                         </form>
//                         {error && <p className="text-red-500 mt-4">{error}</p>}
//                     </div>
//                 </div>

//                 <div className="right md:w-1/3">
//                     <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
//                         {/* Product List */}
//                         <div className="flex justify-between mb-4">
//                             <p>Subtotal</p>
//                             <p>${totalPrice}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Achieve />
//         </>
//     );
// };

// export default Checkout;


// "use client";

// import { useContext, useState } from "react";
// import { CheckoutContext } from "@/components/cart/context";
// import Checkouts from "@/components/checkout";
// import Achieve from "@/components/Shop/Achieve";

// const Checkout = () => {
//     const { checkout } = useContext(CheckoutContext);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [formData, setFormData] = useState({});

//     const totalPrice: number = checkout.reduce(
//         (total: number, product: { price: number; quantity: number }) =>
//             total + product.price * product.quantity, 0
//     );

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         const form = event.currentTarget;
//         const data = new FormData(form);
//         const orderData = Object.fromEntries(data.entries());

//         const finalOrderData = {
//             ...orderData,
//             products: checkout,
//             totalAmount: totalPrice,
//         };

//         setFormData(finalOrderData);

//         try {
//             const response = await fetch("/api/shipment", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(finalOrderData),
//             });

//             if (!response.ok) {
//                 const errorResponse = await response.json();
//                 throw new Error(errorResponse.message || "An unknown error occurred.");
//             }

//             const shipmentResponse = await response.json();
//             alert(`Shipment created successfully! Tracking Number: ${shipmentResponse.trackingNumber}`);

//             form.reset();
//         } catch (error: any) {
//             setError(error.message || "Error creating shipment. Please try again.");
//             console.error("Error details:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <Checkouts />
//             <div className="container mx-auto flex flex-col md:flex-row md:justify-center gap-6 p-4">
//                 <div className="left md:w-1/2">
//                     <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                         <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
//                         <form onSubmit={handleSubmit}>
//                             {[
//                                 { label: "First Name", name: "firstName", type: "text" },
//                                 { label: "Last Name", name: "lastName", type: "text" },
//                                 { label: "Street Address", name: "streetAddress", type: "text" },
//                                 { label: "City", name: "city", type: "text" },
//                                 { label: "ZIP Code", name: "zipCode", type: "text" },
//                                 { label: "Email Address", name: "email", type: "email" },
//                                 { label: "Phone", name: "phone", type: "tel" },
//                             ].map((field) => (
//                                 <div key={field.name} className="mb-4">
//                                     <label>{field.label}</label>
//                                     <input type={field.type} name={field.name} required />
//                                 </div>
//                             ))}

//                             {/* ✅ Province Field Uses 2-Letter State Codes */}
//                             <select id="province" name="province">
//                                 <option value="CA">California</option>
//                                 <option value="TX">Texas</option>
//                                 <option value="NY">New York</option>
//                             </select>

//                             <button type="submit" disabled={isLoading}>
//                                 {isLoading ? "Placing order..." : "Place order"}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Achieve />
//         </>
//     );
// };

// export default Checkout;



// "use client";

// import { useContext, useState } from "react";
// import { useRouter } from "next/navigation";
// import { CheckoutContext } from "@/components/cart/context";
// import Checkouts from "@/components/checkout";
// import Achieve from "@/components/Shop/Achieve";

// const Checkout = () => {
//     const { checkout } = useContext(CheckoutContext);
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
//     const [formData, setFormData] = useState({});

//     const totalPrice: number = checkout.reduce(
//         (total: number, product: { price: number; quantity: number }) =>
//             total + product.price * product.quantity, 0
//     );

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         const form = event.currentTarget;
//         const data = new FormData(form);
//         const orderData = Object.fromEntries(data.entries());

//         const finalOrderData = {
//             ...orderData,
//             products: checkout,
//             totalAmount: totalPrice,
//         };

//         setFormData(finalOrderData);

//         try {
//             const response = await fetch("/api/shipment", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(finalOrderData),
//             });

//             if (!response.ok) {
//                 const errorResponse = await response.json();
//                 throw new Error(errorResponse.message || "An unknown error occurred.");
//             }

//             const shipmentResponse = await response.json();
//             setTrackingNumber(shipmentResponse.trackingNumber); // ✅ Tracking number store karein

//             alert(`Shipment created successfully! Tracking Number: ${shipmentResponse.trackingNumber}`);

//             form.reset();
//         } catch (error: any) {
//             setError(error.message || "Error creating shipment. Please try again.");
//             console.error("Error details:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <Checkouts />
//             <div className="container mx-auto flex flex-col md:flex-row md:justify-center gap-6 p-4">
//                 <div className="left md:w-1/2">
//                     <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//                         <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
//                         <form onSubmit={handleSubmit}>
//                             {[
//                                 { label: "First Name", name: "firstName", type: "text" },
//                                 { label: "Last Name", name: "lastName", type: "text" },
//                                 { label: "Street Address", name: "streetAddress", type: "text" },
//                                 { label: "City", name: "city", type: "text" },
//                                 { label: "ZIP Code", name: "zipCode", type: "text" },
//                                 { label: "Email Address", name: "email", type: "email" },
//                                 { label: "Phone", name: "phone", type: "tel" },
//                             ].map((field) => (
//                                 <div key={field.name} className="mb-4">
//                                     <label>{field.label}</label>
//                                     <input type={field.type} name={field.name} required />
//                                 </div>
//                             ))}

//                             {/* ✅ Province Field Uses 2-Letter State Codes */}
//                             <select id="province" name="province">
//                                 <option value="CA">California</option>
//                                 <option value="TX">Texas</option>
//                                 <option value="NY">New York</option>
//                             </select>

//                             <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
//                                 {isLoading ? "Placing order..." : "Place order"}
//                             </button>
//                         </form>

//                         {/* ✅ Tracking Button (Only show if trackingNumber exists) */}
//                         {trackingNumber && (
//                             <button 
//                                 onClick={() => router.push(`/tracking/${trackingNumber}`)}
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
//                             >
//                                 Track Order
//                             </button>
//                         )}

//                         {/* Error Message */}
//                         {error && <p className="text-red-500 mt-4">{error}</p>}
//                     </div>
//                 </div>
//             </div>
//             <Achieve />
//         </>
//     );
// };

// export default Checkout;


//checkout/page.tsx
"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckoutContext } from "@/components/cart/context";
import Checkouts from "@/components/checkout";
import Achieve from "@/components/Shop/Achieve";
import { Product } from "@/data/data";

const Checkout = () => {
    const { checkout } = useContext(CheckoutContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
    const [formData, setFormData] = useState({});

    const totalPrice: number = checkout.reduce(
        (total: number, product: { price: number; quantity: number }) =>
            total + product.price * product.quantity, 0
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const form = event.currentTarget;
        const data = new FormData(form);
        const orderData = Object.fromEntries(data.entries());

        const finalOrderData = {
            ...orderData,
            products: checkout,
            totalAmount: totalPrice,
        };

        setFormData(finalOrderData);

        try {
            const response = await fetch("/api/shipment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalOrderData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || "An unknown error occurred.");
            }

            const shipmentResponse = await response.json();
            setTrackingNumber(shipmentResponse.trackingNumber); // ✅ Tracking number store karein

            alert(`Shipment created successfully! Tracking Number: ${shipmentResponse.trackingNumber}`);

            form.reset();
        } catch (error: any) {
            setError(error.message || "Error creating shipment. Please try again.");
            console.error("Error details:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Checkouts />
            {trackingNumber ? (
                <div className="w-1/3 mx-auto my-auto">
                    <button
                        onClick={() => router.push(`/tracking/SHIPPO_TRANSIT`)}
                        className="bg-green-500 text-white py-2 w-full px-4 rounded-md mt-4"
                    >
                        Track Order
                    </button>
                    <button
                        onClick={() => router.push(`/`)}
                        className="bg-blue-500 text-white py-2 w-full px-4 rounded-md mt-4"
                    >
                        Home Page
                    </button>
                </div>
            ) :
                <div className="container mx-auto flex flex-col md:flex-row  justify-center gap-6">
                    <div className="left ">
                        <div className=" bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-y-3 gap-x-5">
                                {[
                                    { label: "First Name", name: "firstName", type: "text", place: "e.g Zain" },
                                    { label: "Last Name", name: "lastName", type: "text", place: "e.g Shah" },
                                    { label: "Street Address", name: "streetAddress", type: "text", place: "e.g 123 Street" },
                                    { label: "City", name: "city", type: "text", place: "e.g Karachi" },
                                    { label: "ZIP Code", name: "zipCode", type: "text", place: "e.g 12345" },
                                    { label: "Email Address", name: "email", type: "email", place: "Enter Your Email" },
                                    { label: "Phone", name: "phone", type: "tel", place: "e.g +923001234567" },
                                ].map((field) => (
                                    <div key={field.name} className=" flex flex-col gap-1">
                                        <label>{field.label}</label>
                                        <input type={field.type} name={field.name} required className="border border-black rounded-md text-sm pl-3 pr-5 py-2 w-full" placeholder={field.place} />
                                    </div>
                                ))}

                                {/* ✅ Province Field Uses 2-Letter State Codes */}
                                <span className="flex flex-col gap-1">
                                    <label htmlFor="">Province</label>
                                    <select id="province" name="province" className="border border-black rounded-md text-sm pl-3 pr-5 py-2 ">
                                        <option value="CA">Sindh</option>
                                        <option value="TX">Punjab</option>
                                        <option value="NY">Balochistan</option>
                                    </select>
                                </span>

                                <button type="submit" disabled={isLoading} className="bg-blue-500 text-white col-span-2 py-2 px-4 rounded-md mt-4">
                                    {isLoading ? "Placing order..." : "Place order"}
                                </button>
                            </form>

                            {/* ✅ Tracking Button (Only show if trackingNumber exists) */}


                            {/* Error Message */}
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </div>
                    </div>
                    <div className="right mt-5">
                        <div className="max-w-md mx-auto bg-white p-7 rounded-md shadow-md">
                            <span className="grid grid-cols-4 text-xl justify-center font-bold mb-6">
                                <h2 className="col-span-2">Product</h2>
                                <h2 className="text-center">Qty</h2>
                                <h2 className="text-end">Amount</h2>
                            </span>

                            {checkout && checkout.map((product: Product) => (
                                <div className="grid grid-cols-4 mb-4">
                                    <p className="col-span-2">{product.title}</p>
                                    <p className="text-center">{product.quantity}</p>
                                    <p className="text-end mr-2">${product.price * product.quantity}</p>
                                </div>
                            ))}
                            <div className="flex justify-between mb-4">
                                <p className="font-medium">Subtotal</p>
                                <p className="mr-2">${totalPrice}</p>
                            </div>
                            <div className="flex justify-between my-4 border-[1px] py-2 border-y-slate-600 ">
                                <p className="font-semibold tracking-wide">Shipping</p>
                                <p className="text-amber-600 mr-2">Free</p>
                            </div>
                            <div className="flex justify-between mb-4 font-bold text-lg">
                                <p>Total</p>
                                <p className="text-amber-600 mr-2"> ${totalPrice}</p>
                            </div>
                            <hr className=" border-gray-200" />
                            {/* <div className="mb-6">
                            <p className="font-bold">Direct Bank Transfer</p>
                            <p className="text-sm text-gray-600">
                                Make your payment directly into our bank account. Please use your Order ID as the
                                payment reference. Your order will not be shipped until the funds have cleared in
                                our account.
                            </p>
                        </div> */}
                            <div className="">
                                {/* <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="directBankTransfer"
                                    name="paymentMethod"
                                    value="directBankTransfer"
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    defaultChecked
                                />
                                <label
                                    htmlFor="directBankTransfer"
                                    className="ml-2 text-sm font-medium text-gray-700 mb-4"
                                >
                                    Direct Bank Transfer
                                </label>
                            </div> */}
                                <div className="flex flex-col gap-2 mb-5 mt-2">

                                    <h2 className="font-medium">Payment Method</h2>
                                    <span className="flex items-center" >
                                        <input
                                            type="radio"
                                            id="cashOnDelivery"
                                            name="paymentMethod"
                                            value="cashOnDelivery"
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            checked
                                        />
                                        <label
                                            htmlFor="cashOnDelivery"
                                            className="ml-2 text-sm font-medium text-gray-700 "
                                        >
                                            Cash On Delivery
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-6">
                                Your personal data will be used to support your experience throughout this website, to
                                manage access to your account, and for other purposes described in our{" "}
                                <a href="#" className="text-blue-600 underline ">
                                    privacy policy
                                </a>
                                .
                            </p>
                            {/* <button
                            type="button"
                            className="w-1/2 bg-none text-black border border-black py-3 rounded-md text-center font-medium hover:bg-gray-200 mx-auto block"
                        >
                            Place order
                        </button> */}
                        </div>
                    </div>
                </div>}
            <Achieve />
        </>
    );
};

export default Checkout;
