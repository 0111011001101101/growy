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
    <Card className="p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-4">
        Current Vibe Check
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className={`text-base p-3 h-auto transition-all rounded-xl ${
              selectedMood === mood.label
                ? "bg-gradient-to-br from-[#58CC02] to-[#46A302] hover:from-[#58CC02] hover:to-[#46A302] text-white border border-[#46A302] shadow-md"
                : "border border-[#E5E5E5] hover:border-[#58CC02] bg-white/90 hover:bg-white backdrop-blur-sm"
            }`}
            onClick={() => handleMoodSelect(mood.label)}
          >
            <span className="mr-2 text-xl">{mood.emoji}</span>
            <span className="font-medium">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};