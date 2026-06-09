import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import readyquick from '../../assets/navbar/readyquick.png'
import { FaWhatsapp } from "react-icons/fa";

export default function NavbarContent() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        {
            id: 1, label: "Founders' Desk", slug: "/founders-desk"
        },
        { id: 2, label: "Menu", slug: "/menu" },

        {
            id: 3, label: "Our Services",
            slug: "/services" 
        },
        {
            id: 4, label: "About Us",
            slug: "/about-us" 
        },
    ];

    return (
        <header className={`z-[1000] w-full border-b border-neutral-300 bg-white transition-all ${isScrolled ? "fixed top-0" : "relative"}`}>
            <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">

                <Link to="/" className="flex items-center">
                    <img
                        src={readyquick}
                        alt="Ready Quick Logo"
                        className="h-20 object-contain cursor-pointer"
                    />
                </Link>

                {/* CENTER — NAVIGATION (DESKTOP) */}
                <ul className="hidden md:flex space-x-10 text-[17px] text-gray-700">
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <Link
                                to={item.slug}
                                className="hover:text-black transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* RIGHT — BUTTON */}
                <Link
                    to="https://wa.me/919737379159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 cursor-pointer bg-black text-white px-6 py-2 rounded-md text-[16px] hover:bg-neutral-800 transition"
                >
                    <FaWhatsapp className="text-white text-xl" />

                    Contact Us
                </Link>

                {/* MOBILE MENU ICON */}
                <button
                    className="md:hidden text-3xl text-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white border-t">
                    <ul className="flex flex-col text-gray-700">
                        {menuItems.map(item => (
                            <li key={item.id} className="border-b">
                                <Link
                                    to={item.slug}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-6 py-4 text-[18px] hover:bg-gray-100"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="p-4">
                        <Link
                            to="https://wa.me/919737379159"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-black text-white px-6 py-3 rounded-md text-[17px]"
                        >
                            <FaWhatsapp className="text-white text-xl" />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
