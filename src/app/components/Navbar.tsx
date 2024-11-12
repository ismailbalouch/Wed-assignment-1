"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
    return(           
        <div>
            <nav className="bg-blue-600 h-12 py-3 px-3 flex justify-between items-center text-white">
                <div>
                    <h1 className="text-3xl font-semibold">
                        <a href="#!">Assignment (01)</a>
                    </h1>
                </div>

                <div>
                    <ul className="flex space-x-5">
                        <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
                        <li><Link href="/aboutus" className="hover:text-cyan-400">About us</Link></li>
                        <li><Link href="/contactus" className="hover:text-cyan-400">Contact us</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex space-x-4">
                        <li><Link href="#!" className="hover:text-cyan-400">Login</Link></li>
                        <li><Link href="#!" className="hover:text-cyan-400">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar