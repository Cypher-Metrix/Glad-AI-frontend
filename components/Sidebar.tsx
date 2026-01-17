'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Icon from './Icon'

interface NavItem {
  name: string
  href: string
  icon: string
  badge?: string
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: 'dashboard' },
  { name: 'User Management', href: '/users', icon: 'group' },
  { name: 'Transaction Logs', href: '/transactions', icon: 'receipt_long' },
  { name: 'Revenue', href: '/revenue', icon: 'payments' },
  { name: 'AI Performance', href: '/ai-performance', icon: 'psychology' },
]

const systemNavItems: NavItem[] = [
  { name: 'Notifications', href: '/notifications', icon: 'notifications', badge: '3' },
  { name: 'Settings', href: '/settings', icon: 'settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 flex-none flex flex-col justify-between 
        border-r border-white/5 bg-sidebar-dark
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Logo & Nav */}
        <div className="flex flex-col gap-8 p-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-neon">
              <Icon name="smart_toy" className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white neon-text">GLAD AI</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-6">
            {/* Main Group */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 pl-3">
                Main Menu
              </p>
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all group
                    ${isActive(item.href)
                      ? 'bg-primary shadow-neon text-white'
                      : 'hover:bg-white/5 text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* System Group */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 pl-3">
                System
              </p>
              {systemNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                    ${isActive(item.href)
                      ? 'bg-primary shadow-neon text-white'
                      : 'hover:bg-white/5 text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Footer / Profile */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center overflow-hidden border border-white/10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAceTuIQPk3GZUvjJVguGB5Y-PY-HNtwUsMy8-IMpnRZHNy1sVP2zr7vZDITrkQi3qXk_A1Xd0XOhoqd84kKQ-jrj6FX2lwSfQoUXfTdssaY5ozkFU1pymenajdXtLNiqgwEtGab6OE2JCS4bT2At_-CC7TsIDT795iu7zSw2e6NQzLTJklTKJQJwmnzezaf-njGjln8J0SDNVZp9uwxcOstZNtiiLMWGzlV7-6GnbbLe2-xb7ERBC1X4TtbIvwf20cQgSIJF3oVN-E"
                  alt="Alex Morgan"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">Alex Morgan</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-400 transition-colors">
              <Icon name="logout" size={20} />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar-dark border border-white/10 text-white"
      >
        <Icon name="menu" />
      </button>
    </>
  )
}