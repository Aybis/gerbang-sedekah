import { ArrowNarrowUpIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';

export default function Layout({ showMenu = true, addClassParent, children }) {
  const [visible, setVisible] = useState(false);
  const [didMount, setDidMount] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handlerButtonToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <div
      className={[
        'relative max-w-md container mx-auto min-h-screen h-full bg-white p-4 transition-all duration-300 ease-in-out',
        addClassParent,
      ].join(' ')}>
      {/* Button up */}
      {visible && (
        <div className="max-w-md mx-auto relative container inset-x-0">
          <div
            onClick={() => handlerButtonToUp()}
            className="fixed right-10 z-20 md:rig bottom-20 md:right-1/3 bg-apps-primary rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/50">
            <ArrowNarrowUpIcon className="h-5 lg:h-8 text-white" />
          </div>
        </div>
      )}

      {/* Show Navigation Menu Bar */}
      {showMenu && <NavigationMenu />}

      {/* Main Content */}
      <div className="relative transition-all duration-300 ease-in-out pb-20">
        {children}
      </div>
    </div>
  );
}
