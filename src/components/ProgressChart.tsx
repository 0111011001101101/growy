
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", score: 3 },
  { day: "Tue", score: 5 },
  { day: "Wed", score: 4 },
  { day: "Thu", score: 6 },
  { day: "Fri", score: 7 },
  { day: "Sat", score: 6 },
  { day: "Sun", score: 8 },
];

export const ProgressChart = () => {
  return (
    <Card className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Your Progress
      </h2>
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              stroke="#9ca3af" 
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#7c3aed"
              strokeWidth={2}
              dot={{ fill: "#7c3aed", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#6d28d9" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
