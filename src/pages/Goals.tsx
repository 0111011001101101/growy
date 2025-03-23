
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trophy, Sparkles, CheckCircle, Clock, Plus } from "lucide-react";
import { useState } from "react";

interface Goal {
  id: number;
  title: string;
  description: string;
  progress: number;
  deadline: string;
  completed: boolean;
}

const initialGoals: Goal[] = [
  {
    id: 1,
    title: "Practice Mindfulness",
    description: "Daily 5-minute meditation session",
    progress: 70,
    deadline: "Daily",
    completed: false
  },
  {
    id: 2,
    title: "Challenge Negative Thoughts",
    description: "Identify and reframe 3 negative thoughts",
    progress: 50,
    deadline: "Weekly",
    completed: false
  },
  {
    id: 3,
    title: "Social Connection",
    description: "Reach out to a friend for a meaningful conversation",
    progress: 30,
    deadline: "Weekly",
    completed: false
  },
  {
    id: 4,
    title: "Learn About Schema Therapy",
    description: "Complete one module of schema therapy education",
    progress: 100,
    deadline: "Monthly",
    completed: true
  }
];

const Goals = () => {
  const isMobile = useIsMobile();
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  
  const completeGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, completed: true, progress: 100 } 
        : goal
    ));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 max-w-5xl mx-auto px-4 py-4 md:py-6 pb-20 md:pb-12 relative">
          {isMobile && <MobileHeader />}
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-gray-800">Your Goals</h1>
              <Button className="bg-gradient-to-r from-pink-400 to-violet-400 hover:from-pink-500 hover:to-violet-500 text-white">
                <Plus className="w-4 h-4 mr-1" /> New Goal
              </Button>
            </div>
            
            <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 to-violet-100 p-4 rounded-xl mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">Weekly Challenge</h2>
                  <p className="text-xs text-gray-600">Complete 3 goals this week</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-medium">1/3 completed</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-4 border ${goal.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-800">{goal.title}</h3>
                        <p className="text-sm text-gray-600">{goal.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span>{goal.deadline}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="w-full max-w-[70%]">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${goal.completed ? 'bg-green-400' : 'bg-pink-400'}`} 
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-500">{goal.progress}%</span>
                        </div>
                      </div>
                      
                      {!goal.completed ? (
                        <Button 
                          className="bg-pink-400 hover:bg-pink-500 text-white text-xs py-1 h-8"
                          onClick={() => completeGoal(goal.id)}
                        >
                          Mark Complete
                        </Button>
                      ) : (
                        <div className="flex items-center gap-1 text-green-500">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-xs font-medium">Completed</span>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Goals;
