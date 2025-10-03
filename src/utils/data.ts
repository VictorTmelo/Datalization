import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const metrics = [
    { title: 'Total Users', value: '12,453', change: 12.5, icon: Users },
    { title: 'Revenue', value: '$45,231', change: 8.2, icon: DollarSign },
    { title: 'Orders', value: '1,423', change: -3.1, icon: ShoppingCart },
    { title: 'Growth', value: '23.5%', change: 15.8, icon: TrendingUp },
];

const lineData = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
];

const barData = [
    { name: 'Product A', value: 4000 },
    { name: 'Product B', value: 3000 },
    { name: 'Product C', value: 2000 },
    { name: 'Product D', value: 2780 },
    { name: 'Product E', value: 1890 },
];

const pieData = [
    { name: 'Desktop', value: 45 },
    { name: 'Mobile', value: 30 },
    { name: 'Tablet', value: 15 },
    { name: 'Other', value: 10 },
];

const areaData = [
    { name: 'Jan', value1: 4000, value2: 2400 },
    { name: 'Feb', value1: 3000, value2: 1398 },
    { name: 'Mar', value1: 2000, value2: 9800 },
    { name: 'Apr', value1: 2780, value2: 3908 },
    { name: 'May', value1: 1890, value2: 4800 },
    { name: 'Jun', value1: 2390, value2: 3800 },
];

export { metrics, lineData, barData, pieData, areaData };