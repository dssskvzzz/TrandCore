import React from 'react';  // Removed ReactNode import since it's not being used
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MainMenuProps {
    className?: string;
}

const MainMenu: React.FC<MainMenuProps> = ({ className = '' }) => {
    return (
        <div className={`flex gap-4 ${className}`}> {/* Used className if it's passed */}
            <div className="w-1/2 ml-80 mt-72">
                <h1 className="text-5xl font-bold mb-4">
                    The world&apos;s <br /> most customizable <br /> crypto trading bot
                </h1>
                <p className="text-neutral-400 mt-6 max-w-[640px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Button className="mt-6">Start Free Trial</Button>
                <Button className="mt-6 ml-4" variant={"ghost"}>Read More</Button>
            </div>
            <div className="w-1/2 flex items-center justify-end mt-24">
                <Image
                    src="/table.png"
                    alt="Crypto Trading Bot"
                    width={700}
                    height={400}
                />
            </div>
        </div>
    );
};

export default MainMenu;
