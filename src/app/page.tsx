'use client'

import { motion } from 'framer-motion';
import { Users, DollarSign, ShoppingCart, TrendingUp, ArrowUpRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MetricCard } from "@/components/MetricCard";
import { LineChart } from "@/components/charts/LineChart";

export default function Home() {

  const metrics = [
    { title: 'Total Users', value: '12,453', change: 12.5, icon: Users },
    { title: 'Revenue', value: '$45,231', change: 8.2, icon: DollarSign },
    { title: 'Orders', value: '1,423', change: -3.1, icon: ShoppingCart },
    { title: 'Growth', value: '23.5%', change: 15.8, icon: TrendingUp },
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'New purchase', amount: '$234.50', time: '2 min ago', status: 'completed' },
    { id: 2, user: 'Sarah Smith', action: 'Subscription renewal', amount: '$49.99', time: '15 min ago', status: 'completed' },
    { id: 3, user: 'Mike Johnson', action: 'New registration', amount: '$0.00', time: '1 hour ago', status: 'pending' },
    { id: 4, user: 'Emma Wilson', action: 'Product purchase', amount: '$129.00', time: '2 hours ago', status: 'completed' },
    { id: 5, user: 'Alex Brown', action: 'Refund request', amount: '$89.99', time: '3 hours ago', status: 'processing' },
  ];

  const weeklyData = [
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 5100 },
    { name: 'Wed', value: 4800 },
    { name: 'Thu', value: 6300 },
    { name: 'Fri', value: 5900 },
    { name: 'Sat', value: 4500 },
    { name: 'Sun', value: 3800 },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-3 md:p-4 lg:p-6 overflow-auto">
      <div className="space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">Dashboard</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2">Welcome back! Here's what's happening today</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.title} {...metric} delay={index * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            <LineChart title="Weekly Performance" data={weeklyData} />
          </div>

          <Card className="p-4 md:p-6 bg-card border-border justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Quick Stats</h3>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground">Avg. Order Value</span>
                <span className="text-sm md:text-base font-semibold text-foreground">$156.32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-sm md:text-base font-semibold text-accent">3.24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground">Active Sessions</span>
                <span className="text-sm md:text-base font-semibold text-foreground">892</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-muted-foreground">Bounce Rate</span>
                <span className="text-sm md:text-base font-semibold text-destructive">42.1%</span>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              View Full Report
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        <Card className="p-4 md:p-6 bg-card border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-base md:text-lg font-semibold text-foreground">Recent Activity</h3>
            <Button variant="ghost" size="sm" className="self-start sm:self-auto">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: activity.id * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 md:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{activity.user}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.action}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{activity.amount}</span>
                  <Badge
                    variant={activity.status === 'completed' ? 'default' : activity.status === 'pending' ? 'secondary' : 'outline'}
                    className="capitalize"
                  >
                    {activity.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">{activity.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </motion.main>
  );
}
