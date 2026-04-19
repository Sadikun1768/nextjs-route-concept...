"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

    const pathname = usePathname();
    return (
        <div>

            <nav className="flex w-full items-center justify-center">
                <ul className="flex gap-4 mt-10">
                    <li>
                        <Link className={`link ${pathname === '/' ? 'active' : ''} ${pathname === '/' ? 'text-red-700' : ''}`} href="/">Home</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/about' ? 'active' : ''} ${pathname === '/about' ? 'text-red-700' : ''}`} href="/about">About</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/contact' ? 'active' : ''} ${pathname === '/contact' ? 'text-red-700' : ''}`} href="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/login' ? 'active' : ''} ${pathname === '/login' ? 'text-red-700' : ''}`} href="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}