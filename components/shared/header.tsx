import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NavMenu } from '@/components/NavMenu';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-neutral-950 w-full h-16 ${className}`}>
      <div className="flex items-center justify-between px-4 h-full">
        <div>
          <Image src="/icon.png" alt="Logo" width={130} height={32} />
        </div>
        <div>
          <NavMenu />
        </div>
        <div>
          <ul className="flex space-x-4">
            <Button className='font-semibold'>Sing Up</Button>
            <Button variant={"ghost"} className='font-semibold'>Log In</Button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
