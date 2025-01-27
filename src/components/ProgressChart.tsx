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
    <Card className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#1CB0F6]/20 transform hover:scale-[1.01] transition-all duration-300">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-6">
        Your Progress
      </h2>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              stroke="#666666" 
              tick={{ fontSize: 14, fontWeight: 600 }}
            />
            <YAxis 
              stroke="#666666"
              tick={{ fontSize: 14, fontWeight: 600 }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                border: '2px solid #58CC02',
                borderRadius: '16px',
                padding: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(8px)'
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#58CC02"
              strokeWidth={4}
              dot={{ fill: "#58CC02", strokeWidth: 2, r: 8 }}
              activeDot={{ r: 10, fill: "#46A302" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};