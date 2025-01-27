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
    <Card className="p-6 bg-white rounded-2xl shadow-lg border-2 border-[#1CB0F6]">
      <h2 className="text-2xl font-extrabold text-[#1CB0F6] mb-4">Your Progress</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#666666" />
            <YAxis stroke="#666666" />
            <Tooltip 
              contentStyle={{ 
                background: 'white',
                border: '2px solid #58CC02',
                borderRadius: '12px',
                padding: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#58CC02"
              strokeWidth={3}
              dot={{ fill: "#58CC02", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: "#46A302" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};