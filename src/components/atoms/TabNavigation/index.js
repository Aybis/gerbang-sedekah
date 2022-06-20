import { useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Belum dibaca', href: '/notification', current: true },
  { name: 'Riwayat', href: '/notification/history', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  const location = useLocation();

  return (
    <div className="border-b border-gray-200 w-full">
      <nav className="-mb-px flex" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              location.pathname === tab.href
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-full py-4 px-1 text-center border-b-2 font-medium text-sm leading-relaxed',
            )}
            aria-current={location.pathname === tab.href ? 'page' : undefined}>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
