'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Footer from "@/components/Footer";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center coursor-pointer gap-2 mb-12">
                    <Image
                        src="/icons/logo.svg"
                        alt="Logo"
                        width={34}
                        height={34}
                    />
                    <h1 className="sidebar-logo">LOGO</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            key={item.label}
                            className={cn("sidebar-link", { 'bg-blue-500': isActive })}
                            href={item.route}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <p className={cn("sidebar-label", { "!text-white": isActive })}>{item.label}</p>
                        </Link>
                    )
                })}

                {/*PLAIDLINK*/}
            </nav>
            <Footer/>
        </section>
    );
};

export default Sidebar;