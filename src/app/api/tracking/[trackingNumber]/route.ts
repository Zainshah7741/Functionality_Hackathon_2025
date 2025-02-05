// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// // This function will handle GET request for tracking information
// export async function GET(req: NextRequest, { params }: { params: { trackingNumber: string } }) {
//     try {
//         const { trackingNumber } = params;

//         // Make sure trackingNumber exists in the request
//         if (!trackingNumber) {
//             return NextResponse.json({ message: "Tracking number is required" }, { status: 400 });
//         }

//         // Call Shippo API to get tracking info
//         const response = await axios.get(`https://api.goshippo.com/tracks/${trackingNumber}`, {
//             headers: {
//                 Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
//                 "Content-Type": "application/json",
//             },
//         });

//         // Return the tracking data from Shippo API
//         return NextResponse.json(response.data);
//     } catch (error: any) {
//         console.error("Error fetching tracking data:", error.response?.data || error.message);
//         return NextResponse.json(
//             { message: "Tracking information not found", error: error.response?.data || error.message },
//             { status: 404 }
//         );
//     }
// }


// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// export async function GET(req: NextRequest, { params }: { params: { trackingNumber: string } }) {
//     try {
//         const { trackingNumber } = params;

//         if (!trackingNumber) {
//             return NextResponse.json({ message: "Tracking number is required" }, { status: 400 });
//         }

//         // ✅ Correct Shippo tracking API endpoint
//         const response = await axios.get(`https://api.goshippo.com/tracks/shippo/${trackingNumber}`, {
//             headers: {
//                 Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
//                 "Content-Type": "application/json",
//             },
//         });

//         return NextResponse.json(response.data);
//     } catch (error: any) {
//         console.error("❌ Error fetching tracking data:", error.response?.data || error.message);
//         return NextResponse.json(
//             { message: "Tracking information not found", error: error.response?.data || error.message },
//             { status: 404 }
//         );
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest, { params }: { params: { trackingNumber: string } }) {
    try {
        let { trackingNumber } = params;

        if (!trackingNumber) {
            return NextResponse.json({ message: "Tracking number is required" }, { status: 400 });
        }

        // ✅ Correct API URL format
        const response = await axios.get(`https://api.goshippo.com/tracks/shippo/${trackingNumber}`, {
            headers: {
                Authorization: `ShippoToken shippo_test_de63993f1f099a4bc6f47dd24b3dd6d51c4fa264`,
                "Content-Type": "application/json",
            },
        });

        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error("❌ Error fetching tracking data:", error.response?.data || error.message);
        return NextResponse.json(
            { message: "Tracking information not found", error: error.response?.data || error.message },
            { status: 404 }
        );
    }
}
