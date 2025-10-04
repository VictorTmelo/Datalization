'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  BarChart3,
  LineChart,
  Settings,
  FileText,
} from 'lucide-react';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function Sidebar() {
  
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <SidebarComponent className="bg-sidebar border-r border-border">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-background" />
          </div>
          {!isCollapsed && (
            <span className="font-display font-bold text-xl text-foreground">
              Datalization
            </span>
          )}
        </motion.div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (index + 1) }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href={item.path}>
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}