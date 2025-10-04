'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { MetricCard } from '@/components/MetricCard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { AreaChart } from '@/components/charts/AreaChart';
import { PieChart } from '@/components/charts/PieChart';

export default function Analytics() {

    const revenueData = [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 },
        { name: 'Jun', value: 5500 },
    ];

    const userGrowthData = [
        { name: 'Jan', value1: 1200, value2: 900 },
        { name: 'Feb', value1: 1900, value2: 1400 },
        { name: 'Mar', value1: 2400, value2: 1800 },
        { name: 'Apr', value1: 3200, value2: 2400 },
        { name: 'May', value1: 4100, value2: 3100 },
        { name: 'Jun', value1: 5500, value2: 4200 },
    ];

    const trafficSourceData = [
        { name: 'Direct', value: 4500 },
        { name: 'Social', value: 3200 },
        { name: 'Organic', value: 5800 },
        { name: 'Referral', value: 2100 },
    ];

    const conversionData = [
        { name: 'Mon', value: 45 },
        { name: 'Tue', value: 52 },
        { name: 'Wed', value: 49 },
        { name: 'Thu', value: 63 },
        { name: 'Fri', value: 58 },
        { name: 'Sat', value: 71 },
        { name: 'Sun', value: 67 },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-3 md:p-4 lg:p-6 overflow-auto"
        >
            <div className="space-y-4 md:space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                        Analytics
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Detailed analytics and insights for your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                    <MetricCard
                        title="Total Revenue"
                        value="$45,231"
                        icon={DollarSign}
                        change={12.5}
                    />
                    <MetricCard
                        title="Active Users"
                        value="8,549"
                        icon={Users}
                        change={18.2}
                    />
                    <MetricCard
                        title="Conversion Rate"
                        value="3.24%"
                        icon={TrendingUp}
                        change={5.7}
                    />
                    <MetricCard
                        title="Avg. Session"
                        value="4m 32s"
                        icon={Activity}
                        change={-2.1}
                    />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                    <LineChart title="Revenue Over Time" data={revenueData} />
                    <AreaChart title="User Growth" data={userGrowthData} />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                    <PieChart title="Traffic Sources" data={trafficSourceData} />
                    <BarChart title="Weekly Conversions" data={conversionData} />
                </div>
            </div>
        </motion.main>
    );
}
