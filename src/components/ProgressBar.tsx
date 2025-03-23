
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trophy, Target, ChevronUp, ChevronDown } from "lucide-react";

export const ProgressBar = () => {
  const { toast } = useToast();
  const [expanded, setExpanded] = useState(false);
  const [goals, setGoals] = useState([
    { id: 1, name: "Mindfulness Practice", progress: 70, target: 100 },
    { id: 2, name: "Self-Reflection", progress: 45, target: 100 },
    { id: 3, name: "Therapy Sessions", progress: 25, target: 100 }
  ]);

  const handleProgressChange = (id: number, newValue: number[]) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, progress: newValue[0] } : goal
    ));
    
    toast({
      title: "Progress updated",
      description: "Your goal progress has been saved.",
    });
  };

  const totalProgress = Math.floor(
    goals.reduce((acc, goal) => acc + (goal.progress / goal.target), 0) * 100 / goals.length
  );

  return (
    <Card className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-gray-800">Your Progress</h2>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="h-8 w-8 p-0"
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-600">Overall Progress</span>
          <span className="text-sm font-bold text-indigo-600">{totalProgress}%</span>
        </div>
        <Progress value={totalProgress} className="h-2" />
      </div>
      
      {expanded && (
        <div className="mt-6 space-y-6">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                </div>
                <span className="text-sm font-semibold text-indigo-600">{goal.progress}%</span>
              </div>
              <Slider
                defaultValue={[goal.progress]}
                max={100}
                step={5}
                onValueChange={(value) => handleProgressChange(goal.id, value)}
                className="py-1"
              />
            </div>
          ))}
          
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">
              Adjust the sliders to update your progress on each goal.
            </p>
          </div>
        </div>
      )}
      
      {!expanded && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setExpanded(true)}
            className="text-xs text-indigo-600 hover:text-indigo-700 border-indigo-200"
          >
            Update Your Progress
          </Button>
        </div>
      )}
    </Card>
  );
};
