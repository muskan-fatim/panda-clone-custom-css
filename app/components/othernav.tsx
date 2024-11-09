'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter(); 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Image className="navbar-logo-image" src="/icon.PNG" alt="panda logo" height={30} width={30} />
                    <h1 className="navbar-title">foodpanda</h1>
                </div>

                <div className="navbar-links">
                    <ul className="navbar-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/article">Article</Link></li>
                    </ul>
                </div>

                <div className="navbar-mobile-icon">
                    <button onClick={toggleMenu}>
                        <svg className="navbar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="navbar-mobile-menu">
                    <ul className="navbar-mobile-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/article">Article</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
