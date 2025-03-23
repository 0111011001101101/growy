
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trophy, Target, ChevronUp, ChevronDown, Award, Sparkles } from "lucide-react";

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
    <Card className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-1.5 rounded-md">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-indigo-700">Your Journey</h2>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="h-8 w-8 p-0 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100"
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-medium text-indigo-800">Overall Progress</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-sm font-bold text-indigo-700">{totalProgress}%</span>
          </div>
        </div>
        <Progress 
          value={totalProgress} 
          className="h-2.5 bg-blue-100" 
          indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500" 
        />
      </div>
      
      {expanded && (
        <div className="mt-6 space-y-6">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium text-indigo-800">{goal.name}</span>
                </div>
                <span className="text-sm font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">{goal.progress}%</span>
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
          
          <div className="pt-2 border-t border-indigo-100">
            <p className="text-xs text-indigo-600 italic">
              Track your growth journey by updating your progress on each goal ✨
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
            className="text-xs text-indigo-600 hover:text-indigo-700 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50"
          >
            <Award className="h-3.5 w-3.5 mr-1.5" />
            Update Your Journey
          </Button>
        </div>
      )}
    </Card>
  );
};
