import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
    <Card className="p-4 bg-white rounded-2xl shadow-sm border-0">
      <h2 className="text-lg font-bold text-gray-800 mb-3">
        How are you feeling?
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className={`h-12 rounded-xl transition-all ${
              selectedMood === mood.label
                ? "bg-[#58CC02] hover:bg-[#46A302] text-white shadow-sm"
                : "bg-white border border-gray-100 hover:border-[#1CB0F6] hover:text-[#1CB0F6]"
            }`}
            onClick={() => handleMoodSelect(mood.label)}
          >
            <span className="mr-2 text-xl">{mood.emoji}</span>
            <span className="font-medium text-sm">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};