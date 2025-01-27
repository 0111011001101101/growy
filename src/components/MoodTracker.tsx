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
    <Card className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#1CB0F6]/20 transform hover:scale-[1.01] transition-all duration-300">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-6">
        Current Vibe Check
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className={`text-2xl p-6 h-auto transition-all hover:scale-105 rounded-2xl ${
              selectedMood === mood.label
                ? "bg-gradient-to-br from-[#58CC02] to-[#46A302] hover:from-[#58CC02] hover:to-[#46A302] text-white border-2 border-[#46A302] shadow-lg"
                : "border-2 border-[#E5E5E5] hover:border-[#58CC02] bg-white/90 hover:bg-white backdrop-blur-sm"
            }`}
            onClick={() => handleMoodSelect(mood.label)}
          >
            <span className="mr-3 text-3xl">{mood.emoji}</span>
            <span className="text-lg font-bold">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};