// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const Shipment = () => {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         streetAddress: "",
//         city: "",
//         province: "",
//         zipCode: "",
//         phone: "",
//         email: "",
//         country: "US",
//     });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = event.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleShipment = async (event: React.FormEvent) => {
//         event.preventDefault();

//         const addressFrom = {
//             name: "Your Company",
//             street1: "123 Main Street",
//             city: "San Francisco",
//             state: "CA",
//             zip: "94107",
//             country: "US",
//             phone: "4151234567",
//             email: "yourcompany@example.com",
//         };

//         const addressTo = {
//             name: `${formData.firstName} ${formData.lastName}`,
//             street1: formData.streetAddress,
//             city: formData.city,
//             state: formData.province,
//             zip: formData.zipCode,
//             country: formData.country,
//             phone: formData.phone,
//             email: formData.email,
//         };

//         try {
//             const response = await fetch("/api/shipment", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ addressFrom, addressTo }),
//             });

//             const data = await response.json();

//             if (data.tracking_number) {
//                 alert(`Shipment Created! Tracking Number: ${data.tracking_number}`);
//                 router.push(`/tracking/${data.tracking_number}`);
//             } else {
//                 alert(`Shipment failed: ${data.error}`);
//             }
//         } catch (error) {
//             alert("Error creating shipment.");
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleShipment} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Shipment Details</h2>
//             <div className="grid gap-4 mb-4">
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     required
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     required
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="streetAddress"
//                     placeholder="Street Address"
//                     required
//                     value={formData.streetAddress}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     required
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="province"
//                     placeholder="Province"
//                     required
//                     value={formData.province}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="zipCode"
//                     placeholder="ZIP Code"
//                     required
//                     value={formData.zipCode}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="p-3 border rounded-md"
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md text-center font-medium hover:bg-blue-700"
//             >
//                 Create Shipment
//             </button>
//         </form>
//     );
// };

// export default Shipment;
