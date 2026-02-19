import { NextRequest, NextResponse } from "next/server";

const WAITLIST_API_URL = "https://api.fennecapp.io/waitlist";
const WAITLIST_API_KEY = "yg8Jg2x&Qes7";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { message: "Name and email are required." },
                { status: 400 }
            );
        }

        const response = await fetch(WAITLIST_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": WAITLIST_API_KEY,
            },
            body: JSON.stringify({ name, email }),
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
            return NextResponse.json(
                { message: data?.message || `API error (${response.status})` },
                { status: response.status }
            );
        }

        return NextResponse.json(data ?? { success: true }, { status: 200 });
    } catch (err) {
        console.error("[waitlist] proxy error:", err);
        return NextResponse.json(
            { message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
