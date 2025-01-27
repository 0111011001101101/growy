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
    <Card className="p-6 bg-therapy-card rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-therapy-primary mb-4">Your Progress</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: "#8B5CF6" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};