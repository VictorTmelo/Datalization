'use client'

import { Pie, PieChart as RechartsPieChart, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui/card';

interface PieChartProps {
  title: string;
  data: Array<{ name: string; value: number }>;
}

export function PieChart({ title, data }: PieChartProps) {
  
  const COLORS = [
    'hsl(var(--primary))',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
  ];

  return (
    <Card className="p-6 bg-card border-border shadow-md hover:shadow-glow transition-all">
      <h3 className="text-lg font-display font-semibold mb-4 text-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </Card>
  );
}