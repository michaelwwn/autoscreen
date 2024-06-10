"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { HomeIcon, UserIcon, WalletIcon } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname(); // This hook gives you the current path.

    return (
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              pathname === '/' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            }`}
            prefetch={false}
          >
            <HomeIcon className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              pathname === '/address' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            }`}
            prefetch={false}
          >
            <WalletIcon className="h-4 w-4" />
            Transactions
          </Link>
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              pathname === '/customer' ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            }`}
            prefetch={false}
          >
            <UserIcon className="h-4 w-4" />
            Customers
          </Link>
        </nav>
      </div>
    );
}