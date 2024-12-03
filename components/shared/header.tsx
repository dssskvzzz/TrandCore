import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-neutral-950 w-full h-16 ${className}`}>
      <div className="flex items-center justify-between px-4 h-full">
        <h1 className="text-white text-lg font-semibold">MyWebsite</h1>
        <nav>
          <ul className="flex space-x-4">
            <Button>Sing Up</Button>
            <Button variant={"ghost"}>Log In</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
