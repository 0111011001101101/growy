import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const moods = [
  { emoji: "✨", label: "Slay" },
  { emoji: "😌", label: "Vibing" },
  { emoji: "😔", label: "Meh" },
  { emoji: "😤", label: "Pressed" },
  { emoji: "😰", label: "Stressed" },
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
    <Card className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <h2 className="text-xl font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-4">
        How are you feeling?
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <motion.div
            key={mood.label}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant={selectedMood === mood.label ? "default" : "outline"}
              className={`w-full h-14 rounded-xl transition-all ${
                selectedMood === mood.label
                  ? "bg-[#58CC02] hover:bg-[#46A302] text-white shadow-lg shadow-green-200"
                  : "bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#1CB0F6] hover:text-[#1CB0F6]"
              }`}
              onClick={() => handleMoodSelect(mood.label)}
            >
              <span className="mr-2 text-2xl">{mood.emoji}</span>
              <span className="font-medium">{mood.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};