import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar/>
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNav/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
