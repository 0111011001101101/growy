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
      "You're invited to a friend's party, but you're feeling anxious about going. What do you do?",
    choices: [
      {
        text: "Make an excuse and stay home",
        nextScene: 2,
        impact: "This might reinforce social isolation schema",
      },
      {
        text: "Go for a short time with a trusted friend",
        nextScene: 3,
        impact: "This challenges the avoidance pattern",
      },
    ],
  },
  {
    id: 2,
    situation:
      "Staying home, you start to feel regretful about missing out. How do you handle these feelings?",
    choices: [
      {
        text: "Journal about your feelings",
        nextScene: 4,
        impact: "Self-reflection helps understand patterns",
      },
      {
        text: "Text your friend to reconnect",
        nextScene: 4,
        impact: "Taking action to maintain connections",
      },
    ],
  },
  {
    id: 3,
    situation:
      "At the party, you're having a better time than expected. What's your next move?",
    choices: [
      {
        text: "Stay longer and meet new people",
        nextScene: 4,
        impact: "Building confidence in social situations",
      },
      {
        text: "Thank your friend and head home proud",
        nextScene: 4,
        impact: "Acknowledging personal growth",
      },
    ],
  },
  {
    id: 4,
    situation: "Congratulations! You've completed this story path. What did you learn about yourself?",
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