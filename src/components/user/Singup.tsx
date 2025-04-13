"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import Icons from "../Icon";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [loading, setloading] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
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
            setloading(true)
            await axios.post("https://savewave-backend.onrender.com/users/singuptheuser", formData)
        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }
    };


    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email or Mobile Number
                        </label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input id="password" type="password" value={formData.password} onChange={handleChange} required />
                        <p className="text-xs text-gray-500 mt-1">
                            Passwords must be at least 6 characters.
                        </p>
                    </div>
                    <Button type="submit" className="w-full">  {loading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : "sign up"}</Button>
                </form>
                <p className="text-xs text-gray-600 mt-4 text-center">
                    By creating an account, you agree to our{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">Terms</span> and{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.
                </p>
                <div className="mt-6 text-sm text-center">
                    <p>
                        Already have an account?{" "}
                        <Link href="/user/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
