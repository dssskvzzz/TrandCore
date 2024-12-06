import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";

interface MainMenuProps {
    className?: string;
}

const MainMenu: React.FC<MainMenuProps> = ({ className = '' }) => {
    return (
        <div className="flex GAP-4">
            <div className="w-1/2 ml-80 mt-72">
                <h1 className="text-5xl font-bold mb-4">
                    The world’s <br /> most customizable <br /> crypto trading bot
                </h1>
                <p className="text-neutral-400 mt-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br />
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br />
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Button className="mt-6">Start Free Trial</Button>
                <Button className="mt-6 ml-4" variant={"ghost"}>Read More</Button>
            </div>
            <div className="w-1/2 flex items-center justify-end mt-36">
                <img
                    src="/table.png"
                    alt="Crypto Trading Bot"
                />
            </div>
        </div>
    );
};

export default MainMenu;
