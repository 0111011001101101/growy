import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface StoryChoice {
  text: string;
  nextScene: number;
  impact: string;
}

interface StoryScene {
  id: number;
  situation: string;
  choices: StoryChoice[];
}

const storyScenes: StoryScene[] = [
  {
    id: 1,
    situation:
      "Your bestie invites you to a pride parade, but you're feeling anxious about being your authentic self in public. What's your move?",
    choices: [
      {
        text: "Stay home and watch the highlights on TikTok",
        nextScene: 2,
        impact: "It's okay to take things at your own pace 💜",
      },
      {
        text: "Go with your bestie as emotional support",
        nextScene: 3,
        impact: "Small steps lead to big changes ✨",
      },
    ],
  },
  {
    id: 2,
    situation:
      "While scrolling through parade posts, you're feeling FOMO. How do you handle it?",
    choices: [
      {
        text: "DM your bestie to share your feelings",
        nextScene: 4,
        impact: "Opening up builds stronger connections 💌",
      },
      {
        text: "Join a virtual LGBTQ+ community chat",
        nextScene: 4,
        impact: "Finding your online tribe is valid too 🌈",
      },
    ],
  },
  {
    id: 3,
    situation:
      "At the parade, you're vibing with the positive energy. What next?",
    choices: [
      {
        text: "Take that perfect pride selfie",
        nextScene: 4,
        impact: "Capturing moments of joy and authenticity 📸",
      },
      {
        text: "Join the dance circle",
        nextScene: 4,
        impact: "Embracing your true self feels amazing 💃",
      },
    ],
  },
  {
    id: 4,
    situation: "You've grown so much today! What did this experience teach you about self-acceptance?",
    choices: [],
  },
];

export const SchemaStory = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [showImpact, setShowImpact] = useState<string | null>(null);

  const handleChoice = (choice: StoryChoice) => {
    setShowImpact(choice.impact);
    setTimeout(() => {
      setCurrentScene(choice.nextScene);
      setShowImpact(null);
    }, 2000);
  };

  const scene = storyScenes.find((s) => s.id === currentScene);

  return (
    <Card className="p-6 bg-therapy-card rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-therapy-primary">Schema Story</h2>
        <BookOpen className="text-therapy-secondary w-6 h-6" />
      </div>
      <div className="space-y-4">
        <p className="text-therapy-text text-lg mb-4">{scene?.situation}</p>
        {showImpact && (
          <div className="bg-purple-100 text-purple-800 p-3 rounded-lg mb-4 animate-fade-up">
            {showImpact}
          </div>
        )}
        <div className="grid gap-3">
          {scene?.choices.map((choice, index) => (
            <Button
              key={index}
              onClick={() => handleChoice(choice)}
              variant="outline"
              className="text-left h-auto py-3 px-4"
            >
              {choice.text}
            </Button>
          ))}
        </div>
        {currentScene === 4 && (
          <Button onClick={() => setCurrentScene(1)} className="w-full mt-4">
            Start New Story
          </Button>
        )}
      </div>
    </Card>
  );
};