"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import Icons from "../Icon";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation"

interface SignInData {
    email: string;
    password: string;
}

const SignIn = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setuer } = useStore()
    const router = useRouter()
    const [formData, setFormData] = useState<SignInData>({
        email: "test@gmail.com",
        password: "testpasword",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("https://savewave-backend.onrender.com/users/loginuser", formData);
            console.log("User logged in:", response.data?.user);
            setuer(response.data?.user)
            router.push("/")
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email or Mobile Number
                        </label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        {loading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            "Continue"
                        )}
                    </Button>
                </form>
                <p className="text-xs text-gray-600 mt-4 text-center">
                    By continuing, you agree to our{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">Terms</span> and{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.
                </p>
                <div className="mt-6 text-sm text-center">
                    <p>
                        New to this site?{" "}
                        <Link href="/user/signup" className="text-blue-600 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
