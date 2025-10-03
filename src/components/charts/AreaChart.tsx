'use client'

import { Area, AreaChart as RechartsAreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface AreaChartProps {
  title: string;
  data: Array<{ name: string; value1: number; value2: number }>;
}

export function AreaChart({ title, data }: AreaChartProps) {
  return (
    <Card className="p-6 bg-card border-border shadow-md hover:shadow-glow transition-all">
      <h3 className="text-lg font-display font-semibold mb-4 text-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RechartsAreaChart data={data}>
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Area 
            type="monotone" 
            dataKey="value1" 
            stroke="hsl(var(--primary))" 
            fillOpacity={1} 
            fill="url(#colorValue1)" 
          />
          <Area 
            type="monotone" 
            dataKey="value2" 
            stroke="hsl(var(--accent))" 
            fillOpacity={1} 
            fill="url(#colorValue2)" 
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Card>
  );
}