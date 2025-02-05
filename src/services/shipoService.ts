// // services/shipoService.ts

// import axios from "axios";

// const SHIPO_API_URL = "https://api.shipo.com/v1";  // Update with Shipo API URL
// const API_KEY = "shippo_test_9df98b6ee3c554fdfd918ba0cf493c19e4f4ae18"; // Replace with your Shipo API key

// // Function to send shipping data to Shipo
// export const createShipment = async (orderData: any) => {
//     try {
//         const response = await axios.post(
//             `${SHIPO_API_URL}/shipments`,
//             {
//                 ...orderData,
//             },
//             {
//                 headers: {
//                     "Authorization": `Bearer ${API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );
//         return response.data;  // Shipment details returned from Shipo API
//     } catch (error: any) {
//         // Log the error details to debug
//         console.error("Error creating shipment:", error.response ? error.response.data : error.message);
//         throw new Error("Unable to create shipment. " + (error.response ? error.response.data.error : error.message));
//     }
// };
