// // app/api/shipment/route.ts
// import { NextResponse } from "next/server";
// import axios from "axios";

// const SHIPO_API_URL = "https://api.shipo.com/v1";
// const API_KEY =  process.env.SHIPO_API_KEY; // Replace with your Shipo API key

// export async function POST(request: Request) {
//     try {
//         // Extract order data from the request body
//         const orderData = await request.json();

//         // Log the order data for debugging
//         console.log("Order Data Sent to Shipo:", orderData);

//         // Send the order data to Shipo API
//         const response = await axios.post(
//             `${SHIPO_API_URL}/shipments`,
//             orderData,
//             {
//                 headers: {
//                     "Authorization": `Bearer ${API_KEY}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         console.log("Shipo API Response:", response.data);

//         // Return Shipo API response back to the frontend
//         return NextResponse.json(response.data);
//     } catch (error) {
//         console.error("Error creating shipment:", error);
//         if (error instanceof Error) {
//             return NextResponse.json({ error: error.message || "Unable to create shipment" }, { status: 500 });
//         } else {
//             return NextResponse.json({ error: "Unable to create shipment" }, { status: 500 });
//         }
//     }
// }


// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// export async function POST(req: NextRequest) {
//     try {
//         // Static data for sender and receiver
//         const addressFrom = {
//             name: "Test Business Name",
//             street1: "123 Business Street",
//             city: "Business City",
//             state: "BC",
//             zip: "12345",
//             country: "US",
//             phone: "1234567890",
//             email: "business@example.com",
//         };

//         const addressTo = {
//             name: "John Doe", // Static name for the receiver
//             street1: "456 Receiver Street",
//             city: "Receiver City",
//             state: "RC",
//             zip: "67890",
//             country: "US", // Assuming US for simplicity
//             phone: "0987654321", // Static phone number
//             email: "johndoe@example.com", // Static email
//         };

//         // Static product for testing
//         const parcels = [{
//             length: "10", // Static length
//             width: "5", // Static width
//             height: "8", // Static height
//             distance_unit: "in",
//             weight: "2", // Static weight
//             mass_unit: "lb",
//         }];

//         // Send request to the Shippo API
//         const response = await axios.post(
//             "https://api.goshippo.com/shipments/",
//             {
//                 address_from: addressFrom,
//                 address_to: addressTo,
//                 parcels,
//                 async: false,
//             },
//             {
//                 headers: {
//                     Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         const shipment = response.data;
//         const trackingNumber = shipment.object_id;
//         const eta = shipment.eta || "3-5 business days";

//         return NextResponse.json({
//             trackingNumber,
//             eta,
//             message: "Shipment created successfully!",
//         });
//     } catch (error: any) {
//         console.error("Error creating shipment:", error.response?.data || error.message);
//         return NextResponse.json(
//             { message: "Failed to create shipment", error: error.response?.data },
//             { status: 500 }
//         );
//     }
// }


// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// export async function POST(req: NextRequest) {
//     try {
//         const requestBody = await req.json();

//         // ✅ Ensure required fields are present
//         const requiredFields = ["firstName", "lastName", "streetAddress", "city", "province", "zipCode", "email", "phone", "products"];
//         for (const field of requiredFields) {
//             if (!requestBody[field] || requestBody[field] === "") {
//                 return NextResponse.json({ message: `Missing or empty field: ${field}` }, { status: 400 });
//             }
//         }

//         console.log("📨 Received Request Data:", requestBody);

//         // ✅ Static Sender (Business) Details
//         const addressFrom = {
//             name: "Test Business Name",
//             street1: "123 Business Street",
//             city: "Business City",
//             state: "BC",
//             zip: "12345",
//             country: "US",
//             phone: "1234567890",
//             email: "business@example.com",
//         };

//         // ✅ Format Receiver Address
//         const addressTo = {
//             name: `${requestBody.firstName} ${requestBody.lastName}`,
//             street1: requestBody.streetAddress,
//             city: requestBody.city,
//             state: requestBody.province, // Ensure uppercase state codes (CA, NY, TX, etc.)
//             zip: requestBody.zipCode,
//             country: "US",
//             phone: requestBody.phone,
//             email: requestBody.email,
//         };

//         console.log("📍 Formatted Address:", addressTo);

//         // ✅ Validate required address fields
//         if (!addressTo.street1 || !addressTo.city || !addressTo.state || !addressTo.zip || !addressTo.country) {
//             return NextResponse.json({ message: "Invalid shipping address. Please check inputs." }, { status: 400 });
//         }

//         // ✅ Validate State Code (US requires 2-letter state codes)
//         const validStateCodes = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
//         if (!validStateCodes.includes(addressTo.state)) {
//             return NextResponse.json({ message: `Invalid state code: ${addressTo.state}. Use 2-letter US state codes.` }, { status: 400 });
//         }

//         // ✅ Convert checkout products into Shippo parcel format
//         const parcels = requestBody.products.map((product: any) => ({
//             length: "10", // Static for now, you can fetch actual dimensions
//             width: "5",
//             height: "8",
//             distance_unit: "in",
//             weight: product.weight ? String(product.weight) : "2", // Ensure weight is a string
//             mass_unit: "lb",
//         }));

//         console.log("📦 Parcel Data:", parcels);

//         // ✅ Send request to Shippo API
//         const response = await axios.post(
//             "https://api.goshippo.com/shipments/",
//             {
//                 address_from: addressFrom,
//                 address_to: addressTo,
//                 parcels,
//                 async: false,
//             },
//             {
//                 headers: {
//                     Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         // ✅ Extract shipment details
//         const shipment = response.data;
//         const trackingNumber = shipment.object_id;
//         const eta = shipment.eta || "3-5 business days";

//         return NextResponse.json({
//             trackingNumber,
//             eta,
//             message: "Shipment created successfully!",
//         });
//     } catch (error: any) {
//         console.error("❌ Error creating shipment:", error.response?.data || error.message);

//         return NextResponse.json(
//             { message: "Failed to create shipment", error: error.response?.data || error.message },
//             { status: 500 }
//         );
//     }
// }

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();

        // ✅ Ensure required fields are present
        const requiredFields = ["firstName", "lastName", "streetAddress", "city", "province", "zipCode", "email", "phone", "products"];
        for (const field of requiredFields) {
            if (!requestBody[field] || requestBody[field] === "") {
                return NextResponse.json({ message: `Missing or empty field: ${field}` }, { status: 400 });
            }
        }

        console.log("📨 Received Request Data:", requestBody);

        // ✅ Static Sender (Business) Details
        const addressFrom = {
            name: "Test Business Name",
            street1: "123 Business Street",
            city: "Business City",
            state: "BC",
            zip: "12345",
            country: "US",
            phone: "1234567890",
            email: "business@example.com",
        };

        // ✅ Format Receiver Address
        const addressTo = {
            name: `${requestBody.firstName} ${requestBody.lastName}`,
            street1: requestBody.streetAddress,
            city: requestBody.city,
            state: requestBody.province, // Ensure uppercase state codes (CA, NY, TX, etc.)
            zip: requestBody.zipCode,
            country: "US",
            phone: requestBody.phone,
            email: requestBody.email,
        };

        console.log("📍 Formatted Address:", addressTo);

        // ✅ Validate State Code
        const validStateCodes = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
        if (!validStateCodes.includes(addressTo.state)) {
            return NextResponse.json({ message: `Invalid state code: ${addressTo.state}. Use 2-letter US state codes.` }, { status: 400 });
        }

        // ✅ Convert checkout products into Shippo parcel format
        const parcels = requestBody.products.map((product: any) => ({
            length: "10",
            width: "5",
            height: "8",
            distance_unit: "in",
            weight: product.weight ? String(product.weight) : "2",
            mass_unit: "lb",
        }));

        console.log("📦 Parcel Data:", parcels);

        // ✅ Send request to Shippo API
        const response = await axios.post(
            "https://api.goshippo.com/shipments/",
            {
                address_from: addressFrom,
                address_to: addressTo,
                parcels,
                async: false,
            },
            {
                headers: {
                    Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
                    "Content-Type": "application/json",
                },
            }
        );

        // ✅ Log response for debugging
        console.log("📦 Shippo Response Data:", response.data);

        // ✅ Extract tracking number
        const shipment = response.data;
        const trackingNumber = shipment.tracking_number || shipment.object_id || null;

        if (!trackingNumber) {
            return NextResponse.json({ message: "Tracking number not found in response" }, { status: 500 });
        }

        return NextResponse.json({
            trackingNumber,
            eta: shipment.eta || "3-5 business days",
            message: "Shipment created successfully!",
        });
    } catch (error: any) {
        console.error("❌ Error creating shipment:", error.response?.data || error.message);

        return NextResponse.json(
            { message: "Failed to create shipment", error: error.response?.data || error.message },
            { status: 500 }
        );
    }
}
