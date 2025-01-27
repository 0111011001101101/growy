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
    <Card className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-[#58CC02]">
      <h2 className="text-2xl font-extrabold text-[#1CB0F6] mb-4">
        Current Vibe Check
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className={`text-2xl p-4 h-auto transition-all hover:scale-105 rounded-xl ${
              selectedMood === mood.label
                ? "bg-[#58CC02] hover:bg-[#58CC02]/90 text-white border-2 border-[#46A302]"
                : "border-2 border-[#E5E5E5] hover:border-[#58CC02]"
            }`}
            onClick={() => handleMoodSelect(mood.label)}
          >
            <span className="mr-2">{mood.emoji}</span>
            <span className="text-sm font-bold">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};