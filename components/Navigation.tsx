'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Calendar, Bike, Users, Camera, Mail, Navigation as NavigationIcon } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Tracks', href: '/tracks', icon: NavigationIcon },
  { name: 'Bike', href: '/bike', icon: Bike },
  { name: 'Class', href: '/class', icon: Users },
  { name: 'Sponsors', href: '/sponsors', icon: Users },
  { name: 'Gallery', href: '/gallery', icon: Camera },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">#100</span>
              </div>
              <span className="font-orbitron font-bold text-xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                SAM CRANSTONE
              </span>
            </Link>
            
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-red-500'
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-red-500/10 rounded-lg"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-red-500/20 md:hidden">
        <div className="grid grid-cols-6 h-16">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center space-y-1 ${
                  isActive ? 'text-red-500' : 'text-gray-400'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.name}</span>
                {isActive && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-red-500"
                    layoutId="mobileActiveTab"
                    initial={false}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}