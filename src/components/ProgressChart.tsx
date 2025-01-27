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
    <Card className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <h2 className="text-xl font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-4">
        Your Progress
      </h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              stroke="#666666" 
              tick={{ fontSize: 12, fontWeight: 500 }}
            />
            <YAxis 
              stroke="#666666"
              tick={{ fontSize: 12, fontWeight: 500 }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #58CC02',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(8px)'
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#58CC02"
              strokeWidth={2}
              dot={{ fill: "#58CC02", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#46A302" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};