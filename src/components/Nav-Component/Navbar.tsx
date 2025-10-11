"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="shadow-lg z-50 fixed top-0 left-0 right-0 bg-white font-[Cairo] rounded-b-3xl">
                <div className="container px-4 md:px-10 mx-auto flex justify-between items-center pt-1">
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden cursor-pointer text-blue-900 p-2 focus:outline-none"
                        aria-label="Toggle menu"
                        title="Toggle navigation menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'}  md:hidden fixed top-[4rem] left-0 right-0 bg-white shadow-lg rounded-b-3xl p-4 z-50`}>
                        <div className="flex flex-col space-y-4">
                            {/* Navigation Links */}
                            <NavLink
                                href="/"
                                className="text-lg font-semibold text-center py-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                الرئيسية
                            </NavLink>
                            <NavLink
                                href="/services"
                                className="text-lg font-semibold text-center py-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                الخدمات
                            </NavLink>
                            <NavLink
                                href="/projects"
                                className="text-lg font-semibold text-center py-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                المشاريع
                            </NavLink>
                            <NavLink
                                href="/about"
                                className="text-lg font-semibold text-center py-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                من نحن
                            </NavLink>

                            {/* Contact Us Button */}
                            <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-200">
                                <button className="data-[state=open]:focus:bg-blue-500 data-[state=open]:bg-blue-500/50 bg-blue-900 px-6 py-2 font-semibold cursor-pointer text-lg rounded-3xl hover:bg-blue-500 text-white transition-all w-full">
                                    تواصل معنا
                                </button>
                                <div className="flex flex-col w-full pt-2">
                                    <NavLink
                                        href="https://wa.me/+201096311532"
                                        className="flex items-center justify-center gap-2 py-2 text-blue-900 hover:text-blue-500"
                                    >
                                        <span>علي واتساب</span>
                                        <div className="relative w-[20px] h-[20px] text-green-700">
                                            <Image
                                                className="w-full h-full"
                                                sizes="(max-width: 768px) 100vw"
                                                fill
                                                src="/assets/whatsapp.svg"
                                                alt="WhatsApp"
                                            />
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        href="mailto:abdosileem48@gmail.com"
                                        className="flex items-center justify-center gap-2 py-2 text-blue-900 hover:text-blue-500"
                                    >
                                        <span>عبر البريد</span>
                                        <div className="relative w-[20px] h-[20px]">
                                            <Image
                                                className="w-full h-full"
                                                sizes="(max-width: 768px) 100vw"
                                                fill
                                                src="/assets/gmail.svg"
                                                alt="Email"
                                            />
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:block w-1/4" viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem className="relative">
                                <NavigationMenuTrigger className="data-[state=open]:focus:bg-blue-500 data-[state=open]:bg-blue-500/50 bg-blue-900 px-6 py-2 font-semibold cursor-pointer text-lg rounded-3xl data-[state=open]:hover:bg-blue-500 data-[state=open]:focus:text-white data-[state=open]:text-white hover:text-white text-white hover:bg-blue-500 focus:bg-blue-500 transition-all">
                                    تواصل معنا
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="z-50 w-[150px] md:-translate-x-4 absolute">
                    
             
                                    <ul className="grid w-[150px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    href="https://wa.me/+201096311532"
                                                    className="flex-row items-center justify-end gap-2"
                                                >
                                                    <span>علي واتساب</span>

                                                    <div className="relative w-[20px] h-[20px] text-green-700">
                                                        <Image
                                                            className="w-full h-full"
                                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                            fill
                                                            src="/assets/whatsapp.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </NavLink>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    href="mailto:abdosileem48@gmail.com"
                                                    className="flex-row items-center justify-end gap-2"
                                                >
                                                    <span>علي الايميل</span>

                                                    <div className="relative w-[20px] h-[20px] text-green-700">
                                                        <Image
                                                            className="w-full h-full"
                                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                            fill
                                                            src="/assets/gmail.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </NavLink>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu className="w-1/2 hidden md:block" viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavLink
                                    href="/about"
                                    className={`pb-0 text-lg font-semibold hover:text-blue-600 transition-colors duration-300 focus:text-blue-600 data-[active=true]:text-blue-600 data-[active=true]:focus:text-blue-600          group inline-flex w-max items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-accent focus:bg-accent disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1}`}
                                >
                                    من نحن
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink
                                    href="/projects"
                                    className={`pb-0 text-lg font-semibold hover:text-blue-600 transition-colors duration-300 focus:text-blue-600 data-[active=true]:text-blue-600 data-[active=true]:focus:text-blue-600          group inline-flex w-max items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-accent focus:bg-accent disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1}`}
                                >
                                    المشاريع{" "}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="relative">
                                <NavigationMenuTrigger className="p-0 flex-row text-lg font-semibold items-center justify-center gap-0 hover:text-blue-600 transition-colors duration-300 focus:text-blue-600 data-[active=true]:text-blue-600 data-[active=true]:focus:text-blue-600 ">
                                    <NavLink
                                        href="/services"
                                        className="flex-row py-2 px-4 text-lg font-semibold items-center justify-center gap-0 hover:text-blue-600 transition-colors duration-300 focus:text-blue-600 data-[active=true]:text-blue-600 data-[active=true]:focus:text-blue-600 "
                                    >
                                        الخدمات
                                    </NavLink>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="w-[100px] absolute z-50">
                                    <ul className="flex w-[100px] gap-4 justify-center">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    href="#"
                                                    className="flex-row items-center justify-end  gap-0 "
                                                >
                                                    تصميم وتركيب
                                                </NavLink>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    href="#"
                                                    className="flex-row items-center  justify-end  gap-0 "
                                                >
                                                    صيانة
                                                </NavLink>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    href="#"
                                                    className="flex-row items-center  justify-end  gap-0 "
                                                >
                                                    شحن الخزانات
                                                </NavLink>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink
                                    href="/"
                                    className={`pb-0 text-lg font-semibold hover:text-blue-600 transition-colors duration-300 focus:text-blue-600 data-[active=true]:text-blue-600 data-[active=true]:focus:text-blue-600         group inline-flex w-max items-center justify-center rounded-md bg-background px-4 py-2 hover:bg-accent focus:bg-accent disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1}`}
                                >
                                    الرئيسية
                                </NavLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link href="/" className="pb-1 min-w-[10%] ">
                        <div className=" flex flex-col justify-center items-end gap-0">
                            <div className="relative h-10 w-full">
                                <Image
                                    className="object-contain w-full h-[80%]"
                                    fill
                                    src="/assets/logo.jpg"
                                    alt="لوجو شركة تمديدات الخليج"
                                />
                            </div>

                            <h1 className="xl:text-lg lg:text-md font-bold text-center text-blue-900">
                            تمديدات الخليج
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
