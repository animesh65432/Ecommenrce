"use client"

import React from "react"
import { useThemeColor } from "@/components/ColorProvider"

const ContactSection = () => {
    const { color } = useThemeColor()

    return (
        <section
            className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${color ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Get in Touch
                </h2>
                <p className="mt-4 text-lg">
                    We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
                <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-indigo-500 ${color
                                ? "bg-gray-900 text-white border-gray-700"
                                : "bg-gray-100 text-black border-gray-300"
                                }`}
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-indigo-500 ${color
                                ? "bg-gray-900 text-white border-gray-700"
                                : "bg-gray-100 text-black border-gray-300"
                                }`}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={`mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-indigo-500 ${color
                                ? "bg-gray-900 text-white border-gray-700"
                                : "bg-gray-100 text-black border-gray-300"
                                }`}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className={`mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-indigo-500 ${color
                                ? "bg-gray-900 text-white border-gray-700"
                                : "bg-gray-100 text-black border-gray-300"
                                }`}
                        ></textarea>
                    </div>

                    <div className="sm:col-span-2 text-center">
                        <button
                            type="submit"
                            className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm transition 
    ${color ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
                        >
                            Send Message
                        </button>

                    </div>
                </form>
            </div>
        </section>
    )
}
export default ContactSection