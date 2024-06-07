import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { DM_Sans } from 'next/font/google'
import { Archivo } from 'next/font/google'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FileIcon,
  HomeIcon,
  Package2Icon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Sidebar from "@/components/dashboard/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: "Autoscreen",
  description: "GenAI Blockchain Risk Profiling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          dm_sans.variable,
          archivo.variable
        )}
      >
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  href="#"
                  className="flex items-center gap-2 font-semibold"
                  prefetch={false}
                >
                  <Image
                    src="/logo-mini.png"
                    alt="Logo"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="ml-2">Autoscreen</span>
                </Link>
              </div>
              <Sidebar/>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
              <Link href="#" className="lg:hidden" prefetch={false}>
                <Package2Icon className="h-6 w-6" />
                <span className="sr-only">Home</span>
              </Link>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search"
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                  >
                    {/* <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" /> */}
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
