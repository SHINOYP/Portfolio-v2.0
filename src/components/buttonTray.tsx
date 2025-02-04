"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ButtonTray() {
    const pathname = usePathname(); // Get the current route

    const navLinks = [
        { href: '/', label: 'Portfolio' },
        { href: '/skills', label: 'Skills' },
        { href: '/blogs', label: 'Blog' },
    ];

    return (
        <div className="flex space-x-10 mx-auto  px-3 py-4 ">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`font-semibold transition text-lg duration-300 ${pathname === link.href ? ' border-b border-blue-700' : 'text-white hover:text-blue-700'
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default ButtonTray;
