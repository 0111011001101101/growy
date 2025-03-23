
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Great", color: "from-green-400 to-emerald-500" },
  { emoji: "😌", label: "Vibing", color: "from-blue-400 to-indigo-500" },
  { emoji: "😔", label: "Meh", color: "from-amber-400 to-orange-500" },
  { emoji: "😤", label: "Pressed", color: "from-red-400 to-pink-500" },
];

export const MoodTracker = () => {
  const { toast } = useToast();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: `Mood: ${mood}`,
      description: "Thanks for keeping it real! 💅",
    });
  };

  return (
    <Card className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent flex items-center">
          <span>How are you feeling?</span>
          <Star className="h-4 w-4 ml-2 text-yellow-500" />
        </h2>
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-1.5 rounded-full">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <motion.div
            key={mood.label}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <Button
              variant={selectedMood === mood.label ? "default" : "outline"}
              className={`w-full h-14 rounded-lg transition-all duration-300 ${
                selectedMood === mood.label
                  ? `bg-gradient-to-r ${mood.color} shadow-md hover:shadow-lg text-white border-0`
                  : "bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-300 hover:text-purple-700"
              }`}
              onClick={() => handleMoodSelect(mood.label)}
            >
              <span className="mr-2 text-2xl">{mood.emoji}</span>
              <span className="font-medium text-sm">{mood.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
      
      {selectedMood && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-purple-700 bg-purple-50 py-2 px-3 rounded-full inline-block">
            Mood logged! +10 points ⚡
          </p>
        </motion.div>
      )}
    </Card>
  );
};
