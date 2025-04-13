import { NextRequest, NextResponse } from "next/server"
import axios from "axios";

export async function GET(req: NextRequest) {
    try {

        const reponse = await axios.get(`https://fakestoreapi.com/products`)
        const products = reponse?.data
        return NextResponse.json({
            products,
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "internal sever errors"
        }, {
            status: 500
        })
    }
}
