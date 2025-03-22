
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ClipboardList, Star, Trophy, Timer, Brain, Shield, Heart, Book, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  points: number;
  icon: React.ElementType;
}

const initialAssignments: Assignment[] = [
  {
    id: 1,
    title: "Daily Reflection",
    description: "Write down three things you're grateful for and why they matter to you.",
    dueDate: "Today",
    completed: false,
    points: 50,
    icon: Book
  },
  {
    id: 2,
    title: "Mindfulness Exercise",
    description: "Practice deep breathing for 5 minutes while focusing on being present.",
    dueDate: "Today",
    completed: false,
    points: 30,
    icon: Brain
  },
  {
    id: 3,
    title: "Weekly Check-in",
    description: "Schedule a conversation with your support person about your progress.",
    dueDate: "Tomorrow",
    completed: false,
    points: 75,
    icon: Users
  },
  {
    id: 4,
    title: "Schema Challenge",
    description: "Identify one negative thought pattern and write an alternative perspective.",
    dueDate: "Today",
    completed: false,
    points: 60,
    icon: Shield
  },
  {
    id: 5,
    title: "Self-Compassion Break",
    description: "Take 10 minutes to practice self-compassion meditation.",
    dueDate: "Tomorrow",
    completed: false,
    points: 45,
    icon: Heart
  },
  {
    id: 6,
    title: "Boundary Exercise",
    description: "Identify one boundary you need to set and practice expressing it assertively.",
    dueDate: "This week",
    completed: false,
    points: 80,
    icon: Shield
  },
];

export const Assignments = () => {
  const { toast } = useToast();
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [displayCount, setDisplayCount] = useState(3);

  const handleComplete = (id: number) => {
    setAssignments((prev) =>
      prev.map((assignment) => {
        if (assignment.id === id && !assignment.completed) {
          toast({
            title: "🎉 Assignment Complete!",
            description: `You earned ${assignment.points} points! Great work on your healing journey!`,
          });
          return { ...assignment, completed: true };
        }
        return assignment;
      })
    );
  };

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ClipboardList className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Therapy Assignments
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold text-gray-700">340 points available</span>
        </div>
      </div>

      <div className="space-y-4">
        {assignments.slice(0, displayCount).map((assignment) => (
          <motion.div
            key={assignment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-xl border-2 transition-all ${
              assignment.completed
                ? "border-green-100 bg-green-50"
                : "border-purple-100 hover:border-purple-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <Checkbox
                checked={assignment.completed}
                onCheckedChange={() => handleComplete(assignment.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <assignment.icon className="w-4 h-4 text-blue-500" />
                    <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {assignment.points}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{assignment.description}</p>
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {displayCount < assignments.length ? (
        <Button
          onClick={() => setDisplayCount(assignments.length)}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
        >
          Show All Assignments ({assignments.length - displayCount} more)
        </Button>
      ) : (
        <Button
          onClick={() => setDisplayCount(3)}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
        >
          Show Less
        </Button>
      )}
    </Card>
  );
};
