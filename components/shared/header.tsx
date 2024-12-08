"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavMenu } from '@/components/NavMenu';
import Cookies from 'js-cookie'; // Import js-cookie
import { useEffect, useState } from 'react'; // Import useState for dropdown state management

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user') || '{}') : null; // Check if user data exists in cookies

  useEffect(() => {
    if (user) {
      console.log('User data in cookie:', user); // Log user data to console on load
    }
    else {
      console.log('No user data found in cookie.'); // Log message if user data is not found
    }
  }, [user]);

  const handleLogout = () => {
    Cookies.remove('user'); // Remove user cookie on logout
    setDropdownOpen(false); // Close the dropdown
    window.location.href = '/'; // Redirect to the login page
  };

  return (
    <>
      <header className={`bg-neutral-950 w-full h-16 ${className}`}>
        <div className="flex items-center justify-between px-4 h-full">
          <div>
            <Image src="/icon.png" alt="Logo" width={130} height={32} />
          </div>
          <div>
            <NavMenu />
          </div>
          <div>
            <ul className="flex space-x-1">
              {user ? (
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button className="font-semibold">{user.username}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => window.location.href = '/profile'}>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/register">
                    <Button className="font-semibold">Sign Up</Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="ghost" className="font-semibold">
                      Log In
                    </Button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
