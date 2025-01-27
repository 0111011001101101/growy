import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star, Trophy } from "lucide-react";

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
      "Your bestie invites you to a pride parade, but you're feeling anxious about being your authentic self in public. What's your move? 🌈",
    choices: [
      {
        text: "Stay home and watch the highlights on TikTok 📱",
        nextScene: 2,
        impact: "Self-care is important! Taking things at your own pace 💜",
      },
      {
        text: "Go with your bestie as emotional support 🫂",
        nextScene: 3,
        impact: "Yasss! Small steps lead to big changes ✨",
      },
    ],
  },
  {
    id: 2,
    situation:
      "While scrolling through parade posts, you're feeling FOMO. How do you handle it? 🤔",
    choices: [
      {
        text: "DM your bestie to share your feelings 💌",
        nextScene: 4,
        impact: "Opening up builds stronger connections 💕",
      },
      {
        text: "Join a virtual LGBTQ+ community chat 🎮",
        nextScene: 4,
        impact: "Finding your online tribe is valid too! 🌈",
      },
    ],
  },
  {
    id: 3,
    situation:
      "At the parade, you're vibing with the positive energy. What next? ✨",
    choices: [
      {
        text: "Take that perfect pride selfie 📸",
        nextScene: 4,
        impact: "Capturing moments of joy and authenticity 🎉",
      },
      {
        text: "Join the dance circle 💃",
        nextScene: 4,
        impact: "Slaying and embracing your true self! 👑",
      },
    ],
  },
  {
    id: 4,
    situation: "You've grown so much today! What did this experience teach you about self-acceptance? 🌟",
    choices: [],
  },
];

export const SchemaStory = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [showImpact, setShowImpact] = useState<string | null>(null);
  const [xp, setXp] = useState(0);

  const handleChoice = (choice: StoryChoice) => {
    setShowImpact(choice.impact);
    setXp(prev => prev + 25);
    setTimeout(() => {
      setCurrentScene(choice.nextScene);
      setShowImpact(null);
    }, 2000);
  };

  const scene = storyScenes.find((s) => s.id === currentScene);

  return (
    <Card className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BookOpen className="text-purple-500 w-7 h-7" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Story Quest
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400 w-5 h-5" />
            <span className="font-bold text-purple-700">{xp} XP</span>
          </div>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className="text-red-500 w-5 h-5 -ml-1" />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-xl mb-6">
          <p className="text-purple-800 text-lg font-medium">{scene?.situation}</p>
        </div>
        {showImpact && (
          <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-4 animate-bounce">
            {showImpact}
          </div>
        )}
        <div className="grid gap-3">
          {scene?.choices.map((choice, index) => (
            <Button
              key={index}
              onClick={() => handleChoice(choice)}
              className="w-full bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-800 font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                {choice.text}
              </span>
            </Button>
          ))}
        </div>
        {currentScene === 4 && (
          <Button 
            onClick={() => {
              setCurrentScene(1);
              setXp(0);
            }} 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl mt-4 transition-all duration-300"
          >
            Start New Quest ✨
          </Button>
        )}
      </div>
    </Card>
  );
};