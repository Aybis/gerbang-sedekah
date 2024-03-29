import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../atoms';

export default function NavigationMenu() {
  const location = useLocation();
  const listMenu = [
    {
      name: 'Home',
      type: 'home',
      url: '/',
    },
    {
      name: 'Search',
      type: 'search',
      url: '/search',
    },
    {
      name: 'Transaksi',
      type: 'transaksi',
      url: '/transaksi',
    },
    {
      name: 'Profile',
      type: 'profile',
      url: '/profile',
    },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 max-w-md mx-auto container">
      {/* <div className="absolute blur-md h-16 bottom-0 w-full bg-zinc-50"></div> */}
      <div className="relative backdrop-blur-md bg-white/40 border-t border-zinc-200 py-2 shadow-lg">
        <div className="relative flex justify-around items-center">
          {listMenu?.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={[
                'relative flex flex-none w-16 flex-col justify-center items-center space-y-1 cursor-pointer transition-all duration-300 ease-in-out group p-1 hover:bg-zinc-50 rounded-md hover:text-apps-secondary',
                location.pathname === item.url
                  ? 'text-apps-primary font-semibold'
                  : 'text-zinc-500',
              ].join(' ')}>
              <Icon
                type={item.type}
                height={5}
                addClass="group-hover:text-apps-secondary transition-all duration-300 ease-in-out"
                width={5}
                color={
                  location.pathname === item.url
                    ? 'text-apps-primary '
                    : 'text-zinc-500'
                }
              />
              <p className="text-center text-xs">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
