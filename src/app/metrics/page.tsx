'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MetricCard } from '@/components/MetricCard';

export default function ProductMetrics() {

    const northStarMetrics = [
        {
            name: 'Weekly Active Users',
            current: 12500,
            target: 15000,
            progress: 83,
            trend: 'up',
            change: 12.5,
            status: 'on-track',
        },
        {
            name: 'Activation Rate',
            current: 34,
            target: 40,
            progress: 85,
            trend: 'up',
            change: 8.2,
            status: 'on-track',
            unit: '%',
        },
        {
            name: 'Feature Adoption',
            current: 68,
            target: 75,
            progress: 91,
            trend: 'up',
            change: 15.3,
            status: 'on-track',
            unit: '%',
        },
        {
            name: 'Time to Value',
            current: 8.5,
            target: 5.0,
            progress: 59,
            trend: 'down',
            change: -18.2,
            status: 'at-risk',
            unit: 'min',
            inverse: true,
        },
    ];

    const healthMetrics = [
        {
            category: 'Acquisition',
            metrics: [
                { name: 'New Signups', value: '1,240', change: 12.5, status: 'good' },
                { name: 'Signup Rate', value: '3.2%', change: 8.1, status: 'good' },
                { name: 'Organic Growth', value: '68%', change: 5.2, status: 'good' },
            ],
        },
        {
            category: 'Activation',
            metrics: [
                { name: 'Activated Users', value: '892', change: 15.3, status: 'good' },
                { name: 'Activation Rate', value: '34%', change: 8.2, status: 'good' },
                { name: 'Time to Activate', value: '8.5m', change: -18.2, status: 'warning' },
            ],
        },
        {
            category: 'Retention',
            metrics: [
                { name: 'D7 Retention', value: '68%', change: 5.5, status: 'good' },
                { name: 'D30 Retention', value: '38%', change: -3.2, status: 'warning' },
                { name: 'Churn Rate', value: '4.2%', change: -12.1, status: 'good' },
            ],
        },
        {
            category: 'Engagement',
            metrics: [
                { name: 'DAU/MAU', value: '42%', change: 8.5, status: 'good' },
                { name: 'Session Length', value: '12m', change: 15.2, status: 'good' },
                { name: 'Sessions/User', value: '4.8', change: 6.8, status: 'good' },
            ],
        },
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
                        Metrics
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Track key product metrics and health indicators
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                    <MetricCard
                        title="Active Users"
                        value="12,500"
                        icon={Users}
                        change={12.5}
                    />
                    <MetricCard
                        title="Activation Rate"
                        value="34%"
                        icon={Zap}
                        change={8.2}
                    />
                    <MetricCard
                        title="Feature Adoption"
                        value="68%"
                        icon={Target}
                        change={15.3}
                    />
                    <MetricCard
                        title="User Satisfaction"
                        value="4.6/5"
                        icon={TrendingUp}
                        change={5.8}
                    />
                </div>

                <Card className="border-border">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">North Star Metrics</CardTitle>
                        <CardDescription className="text-sm">
                            Track progress towards your key product goals
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {northStarMetrics.map((metric, index) => (
                                <motion.div
                                    key={metric.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="border-border shadow-md hover:shadow-glow transition-all">
                                        <CardContent>
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-1">{metric.name}</h3>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-2xl font-bold text-foreground">
                                                            {metric.current.toLocaleString()}
                                                            {metric.unit}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            / {metric.target.toLocaleString()}{metric.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Badge variant={metric.status === 'on-track' ? 'default' : 'destructive'}>
                                                    {metric.status === 'on-track' ? (
                                                        <CheckCircle2 className="mr-1 h-3 w-3" />
                                                    ) : (
                                                        <AlertCircle className="mr-1 h-3 w-3" />
                                                    )}
                                                    {metric.status}
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <Progress value={metric.progress} className="h-2" />
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-muted-foreground">
                                                        {metric.progress}% of target
                                                    </span>
                                                    <span className={metric.change > 0 ? 'text-primary' : 'text-destructive'}>
                                                        {metric.change > 0 ? '+' : ''}{metric.change}% vs last period
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div>
                    <div className="xl:col-span-3">
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle className="text-lg md:text-xl">Product Health Metrics</CardTitle>
                                <CardDescription className="text-sm">
                                    Comprehensive view of product performance across key areas
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 md:p-6 pt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {healthMetrics.map((category, index) => (
                                        <motion.div
                                            key={category.category}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Card className="border-border shadow-md hover:shadow-glow transition-all">
                                                <CardHeader>
                                                    <CardTitle className="text-base">{category.category}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-3">
                                                    {category.metrics.map((metric) => (
                                                        <div key={metric.name} className="space-y-1">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm text-muted-foreground">{metric.name}</span>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="font-semibold text-foreground">
                                                                        {metric.value}
                                                                    </span>
                                                                    <span className={`text-xs ${metric.change > 0 ? 'text-primary' : 'text-destructive'
                                                                        }`}>
                                                                        {metric.change > 0 ? '+' : ''}{metric.change}%
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}
