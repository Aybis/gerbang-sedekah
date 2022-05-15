import React from 'react';
import NavigationMenu from './NavigationMenu';

export default function Layout({ showMenu = true, addClassParent, children }) {
  return (
    <div
      className={[
        'relative max-w-md container mx-auto min-h-screen h-full bg-white p-4 transition-all duration-300 ease-in-out',
        addClassParent,
      ].join(' ')}>
      {/* Show Navigation Menu Bar */}
      {showMenu && <NavigationMenu />}

      {/* Main Content */}
      <div className="relative transition-all duration-300 ease-in-out pb-20">
        {children}
      </div>
    </div>
  );
}
