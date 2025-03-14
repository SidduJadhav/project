"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Settings, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function Header() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between shadow-md">
      <Link
        href="/"
        className="text-2xl font-bold hover:text-primary-foreground/80 transition-colors duration-200 ease-in-out flex items-center space-x-2"
      >
      
         <Link href="/" className="text-2xl font-bold flex items-center bg-purple-900 bg-opacity-50 px-4 py-2 rounded-lg shadow-lg">
         <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 3L2 9l10 6 10-6-10-6zm0 8.18L4.24 9 12 4.82 19.76 9 12 11.18zm-7.6 1.66L12 14.82l7.6-3.98V18H4.4v-6.16z"/>
</svg>







          <span className="hidden md:inline">AR Learning platform</span>
        </Link>
      </Link>
      <nav className="flex items-center space-x-4">
        <NavItem href="/" icon={<Home className="h-5 w-5" />} label="Home" />
        <NavItem href="/chatbot" icon={<MessageCircle className="h-5 w-5" />} label="Open Chatbot" />
        <ProfileDropdown />
        <NavItem href="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
      </nav>
    </header>
  );
}

function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-foreground/10 transition-all duration-200 ease-in-out"
    >
      <span className="text-primary-foreground group-hover:text-primary-foreground/90 transition-colors duration-200 ease-in-out">
        {icon}
      </span>
      <span className="sr-only">{label}</span>
      <span className="absolute top-14 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {label}
      </span>
    </Link>
  );
}

function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group w-10 h-10 rounded-full hover:bg-primary-foreground/10 transition-all duration-200 ease-in-out"
        >
          <User className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground/90 transition-colors duration-200 ease-in-out" />
          <span className="sr-only">Profile</span>
          <span className="absolute top-14 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            Profile
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-primary text-primary-foreground border-primary-foreground shadow-lg">
        <DropdownMenuItem asChild>
          <Link href="/profile" className="w-full hover:bg-primary-foreground/10 transition-colors duration-200">
            View Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="w-full hover:bg-primary-foreground/10 transition-colors duration-200">
            Dashboard
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
