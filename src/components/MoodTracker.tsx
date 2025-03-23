
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Great" },
  { emoji: "😌", label: "Vibing" },
  { emoji: "😔", label: "Meh" },
  { emoji: "😤", label: "Pressed" },
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
    <Card className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm border border-pink-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-purple-800">How are you feeling?</h2>
        <Sparkles className="h-5 w-5 text-purple-400" />
      </div>
      
      <div className="grid grid-cols-2 gap-2.5">
        {moods.map((mood) => (
          <motion.div
            key={mood.label}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button
              variant={selectedMood === mood.label ? "default" : "outline"}
              className={`w-full h-12 rounded-lg transition-all ${
                selectedMood === mood.label
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                  : "bg-white border border-purple-200 hover:border-purple-300 hover:text-purple-700"
              }`}
              onClick={() => handleMoodSelect(mood.label)}
            >
              <span className="mr-2 text-xl">{mood.emoji}</span>
              <span className="font-medium text-sm">{mood.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
