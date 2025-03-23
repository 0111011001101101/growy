
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Flame, Heart } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Vibe", color: "from-green-400 to-emerald-500" },
  { emoji: "🔥", label: "Lit", color: "from-orange-400 to-amber-500" },
  { emoji: "💯", label: "On point", color: "from-blue-400 to-indigo-500" },
  { emoji: "😤", label: "No cap", color: "from-red-400 to-pink-500" },
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
    <Card className="p-5 bg-gradient-to-br from-pink-400/10 to-purple-400/10 backdrop-blur-lg rounded-xl shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center">
          <span>What's the vibe?</span>
          <Star className="h-4 w-4 ml-2 text-yellow-400 animate-pulse" />
        </h2>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-full shadow-md">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3">
        {moods.map((mood) => (
          <motion.div
            key={mood.label}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Button
              variant={selectedMood === mood.label ? "default" : "outline"}
              className={`w-full h-14 rounded-xl transition-all duration-300 ${
                selectedMood === mood.label
                  ? `bg-gradient-to-r ${mood.color} shadow-lg hover:shadow-xl text-white border-0`
                  : "bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-300 hover:text-purple-700"
              }`}
              onClick={() => handleMoodSelect(mood.label)}
            >
              <span className="mr-2 text-2xl">{mood.emoji}</span>
              <span className="font-bold text-sm">{mood.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedMood && (
          <motion.div 
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-1">
              <Flame className="h-4 w-4 text-orange-500" />
              <p className="text-sm font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent py-2 px-3 rounded-full">
                +10 points
              </p>
              <Heart className="h-4 w-4 text-pink-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
