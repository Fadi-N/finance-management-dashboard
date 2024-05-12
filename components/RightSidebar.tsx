import React from 'react';
import Link from "next/link";
import Image from "next/image";
import BankCard from "@/components/BankCard";

const RightSidebar = () => {
    return (
        <aside className="right-sidebar">
            <section>
                <div className="profile-banner"/>
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">F</span>
                    </div>
                    <div className="profile-details">
                        <h1 className="profile-name">
                            Fadi Nachawati
                        </h1>
                        <p className="profile-email">
                            fadinachawati17@gmail.com
                        </p>
                    </div>
                </div>
            </section>

            <section className="banks">
                <div className="flex w-full justify-between">
                    <h2 className="header-2">My banks</h2>
                    <Link
                        href="/"
                        className="flex gap-2"
                    >
                        <Image
                            src="/icons/plus.svg"
                            alt="plus"
                            width={20}
                            height={20}
                        />
                        <h2 className="text-14 font-semibold text-gray-600">Add bank</h2>
                    </Link>
                </div>
                <BankCard/>
            </section>
        </aside>
    );
};

export default RightSidebar;