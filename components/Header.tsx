"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b backdrop-blur-sm">
            <nav className="w-full">
                <div className="mx-auto flex items-center justify-between py-4 px-4">
                    <a href="/" className="text-md hover:text-green-600 transition">
                        Lauren Lee
                    </a>

                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="hover:text-green-600 transition">
                                {link.label}
                            </a>
                        ))}
                        <a href="/Lauren_Lee_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                            Resume
                        </a>
                    </div>

                    <button
                        className="md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-green-600 transition"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/Lauren_Lee_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}
