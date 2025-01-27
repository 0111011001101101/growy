import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
];

export const MoodTracker = () => {
  const { toast } = useToast();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Mood tracked!",
      description: `You're feeling ${mood.toLowerCase()} today.`,
    });
  };

  return (
    <Card className="p-6 bg-therapy-card rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-therapy-primary mb-4">How are you feeling?</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className="text-2xl p-4 h-auto"
            onClick={() => handleMoodSelect(mood.label)}
          >
            <span className="mr-2">{mood.emoji}</span>
            <span className="text-sm">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};