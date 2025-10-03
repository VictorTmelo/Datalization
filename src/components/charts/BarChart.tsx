'use client'

import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface BarChartProps {
  title: string;
  data: Array<{ name: string; value: number }>;
}

export function BarChart({ title, data }: BarChartProps) {
  return (
    <Card className="p-6 bg-card border-border shadow-md hover:shadow-glow transition-all">
      <h3 className="text-lg font-display font-semibold mb-4 text-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RechartsBarChart data={data}>
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
            cursor={false}
          />
          <Bar 
            dataKey="value" 
            fill="hsl(var(--accent))"
            radius={[8, 8, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </Card>
  );
}