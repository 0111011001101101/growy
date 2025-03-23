
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

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
    <Card className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        How are you feeling?
      </h2>
      <div className="grid grid-cols-2 gap-2">
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
                  ? "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
                  : "bg-white border border-gray-200 hover:border-[#7c3aed] hover:text-[#7c3aed]"
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
