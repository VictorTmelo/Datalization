'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function Reports() {

    const reports = [
        {
            id: 1,
            name: 'Monthly Sales Report',
            date: '2024-03-01',
            size: '2.4 MB',
            type: 'Sales',
            status: 'completed'
        },
        {
            id: 2,
            name: 'Customer Analytics',
            date: '2024-03-05',
            size: '1.8 MB',
            type: 'Analytics',
            status: 'completed'
        },
        {
            id: 3,
            name: 'Q1 Performance Review',
            date: '2024-03-15',
            size: '3.2 MB',
            type: 'Performance',
            status: 'completed'
        },
        {
            id: 4,
            name: 'Marketing Campaign Results',
            date: '2024-03-20',
            size: '1.5 MB',
            type: 'Marketing',
            status: 'completed'
        },
        {
            id: 5,
            name: 'Financial Overview Q1',
            date: '2024-03-25',
            size: '4.1 MB',
            type: 'Financial',
            status: 'completed'
        },
        {
            id: 6,
            name: 'User Engagement Analysis',
            date: '2024-03-28',
            size: '2.8 MB',
            type: 'Analytics',
            status: 'processing'
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
                        Reports
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Generate and download comprehensive business reports
                    </p>
                </motion.div>

                <Card className="p-4 md:p-6 bg-card border-border">
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center justify-between">
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-[160px] md:w-[180px]">
                                    <Filter className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Filter by type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Reports</SelectItem>
                                    <SelectItem value="sales">Sales</SelectItem>
                                    <SelectItem value="analytics">Analytics</SelectItem>
                                    <SelectItem value="performance">Performance</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="recent">
                                <SelectTrigger className="w-full sm:w-[160px] md:w-[180px]">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Sort by date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recent">Most Recent</SelectItem>
                                    <SelectItem value="oldest">Oldest First</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="gap-2 w-full sm:w-auto">
                            <TrendingUp className="h-4 w-4" />
                            Generate New Report
                        </Button>
                    </div>
                </Card>

                <div className="grid gap-3 md:gap-4">
                    {reports.map((report, index) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Card className="p-4 md:p-6 hover:shadow-glow transition-all bg-card border-border">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
                                                <h3 className="text-base md:text-lg font-semibold text-foreground truncate">
                                                    {report.name}
                                                </h3>
                                                <Badge variant={report.status === 'completed' ? 'default' : 'secondary'}>
                                                    {report.status}
                                                </Badge>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {new Date(report.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{report.size}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <Badge variant="outline" className="text-xs">
                                                    {report.type}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="gap-2 w-full sm:w-auto"
                                        disabled={report.status !== 'completed'}
                                    >
                                        <Download className="h-4 w-4" />
                                        <span className="sm:inline">Download</span>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.main>
    );
}
