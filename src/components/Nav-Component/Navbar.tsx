"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    return (
        <>
            <div className=" shadow-lg z-50 fixed top-0 left-0 right-0 bg-white ">
                <div className="container mx-auto flex justify-between items-center py-2">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem className="relative">
                                <NavigationMenuTrigger className=" data-[state=open]:focus:bg-blue-300 data-[state=open]:bg-blue-300/50 bg-blue-800 px-4 py-2 rounded-2xl data-[state=open]:hover:bg-blue-300 text-white hover:bg-blue-300 hover:text-black focus:bg-blue-300 transition-all  ">
                                    تواصل معنا
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="-translate-x-1/6 z-50 w-[150px] absolute">
                                    <ul className="grid w-[150px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
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
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link
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
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem className="relative">
                                <NavigationMenuTrigger className="pb-0">
                                    <Link
                                        href="/services"
                                        className="flex-row items-center  justify-center gap-0"
                                    >
                                        الخدمات
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="-translate-x-1/12 w-[100px] absolute z-50">
                                    <ul className="flex w-[100px] gap-4 justify-center">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center justify-end  gap-0"
                                                >
                                                    منازل
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center  justify-end  gap-0"
                                                >
                                                    تجاري
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="#"
                                                    className="flex-row items-center  justify-end  gap-0"
                                                >
                                                    صناعي
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="">
                                <Link
                                    href="/about"
                                    className={`pb-0  ${navigationMenuTriggerStyle()}`}
                                >
                                    من نحن
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="">
                                <Link
                                    href="/about"
                                    className={`pb-0  ${navigationMenuTriggerStyle()}`}
                                >
                                    المشاريع{" "}
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link
                                    href="/"
                                    className={`pb-0 ${navigationMenuTriggerStyle()}`}
                                >
                                    الرئيسية
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link href="/" className="pb-1">
                        <div className=" flex flex-col justify-center items-center gap-1">
                            <div className="relative h-10 w-full">
                                <Image
                                    className="object-contain w-full h-full"
                                    fill
                                    src="/assets/logo.png"
                                    alt=""
                                />
                            </div>

                            <h1 className="text-sm font-bold text-end text-blue-900">
                                شركة تمديدات الخليج
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
