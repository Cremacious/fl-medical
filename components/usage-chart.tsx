'use client';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const chartData = [
  { label: 'Used', usage: 8, fill: 'blue' },
  { label: 'Available', usage: 16, fill: 'black' },
];

const chartConfig = {} satisfies ChartConfig;

const UsageChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <Select>
            <SelectTrigger className="w-full justify-center text-slate-800">
              <SelectValue className="text-slate-800" placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-center" value="light">
                Inhalation
              </SelectItem>
              <SelectItem value="dark">Edible</SelectItem>
              <SelectItem value="system">Oral</SelectItem>
              <SelectItem value="system">Topical</SelectItem>
              <SelectItem value="system">Sublingual</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="usage"
              nameKey="label"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          You have used 33% of your allotment
        </div>
      </CardFooter>
    </Card>
  );
};

export default UsageChart;
