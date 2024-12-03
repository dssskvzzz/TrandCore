import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-neutral-900 w-full h-16 ${className}`}>
      <div className="flex items-center justify-between px-4 h-full">
        {/* Логотип или название сайта */}
        <h1 className="text-white text-lg font-semibold">MyWebsite</h1>

        {/* Навигация */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
