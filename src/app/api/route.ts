import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ message: 'Contact API is working!' })
}
