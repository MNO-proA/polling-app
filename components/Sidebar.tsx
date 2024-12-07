'use client'

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, DollarSign, UserCog, Loader2, Vote, Ellipsis } from 'lucide-react';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin/dashboard',
  },
  {
    label: 'Candidates',
    icon: Users,
    href: '/admin/candidates',
  },
  {
    label: 'Income',
    icon: DollarSign,
    href: '/admin/income',
  },
  {
    label: 'Account',
    icon: UserCog,
    href: '/admin/account',
  },
];

export const Sidebar: FC = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<string | null>(null);
  const [homePageLoading] = useState<boolean | null>(false);

  // Function to handle navigation with spinner
  const handleNavigation = (href: string) => {
    setLoading(href); // Set loading state when navigation starts
    setTimeout(() => {
      setLoading(null); // Reset loading after 50ms
    }, 1000);
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">

      <Link href="/" className="flex justify-center items-center mb-7">
      {homePageLoading ? (
          <Ellipsis className="h-5 w-5 mr-3" />
        ) : (
          <Vote className="h-16 w-16 text-white" /> 
        )}
          
      </Link>
        <Link href="/admin/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => handleNavigation(route.href)} // Handle navigation and set spinner
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                {loading === route.href ? (
                  <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                ) : (
                  <route.icon className="h-5 w-5 mr-3" />
                )}
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="text-xs text-center text-zinc-400">
          Powered by Qodexcore
        </div>
      </div>
    </div>
  );
};
