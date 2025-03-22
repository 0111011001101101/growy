
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
      "A friend invites you to a social gathering, but you're feeling anxious about meeting new people. What's your approach? 🤔",
    choices: [
      {
        text: "Choose to stay home and catch up on your favorite show 📱",
        nextScene: 2,
        impact: "Self-care is important! Taking things at your own pace 💜",
      },
      {
        text: "Go with your friend as emotional support 🫂",
        nextScene: 3,
        impact: "Great! Small steps lead to big changes ✨",
      },
    ],
  },
  {
    id: 2,
    situation:
      "While scrolling through social media, you notice photos from the gathering and feel left out. How do you respond? 🤔",
    choices: [
      {
        text: "Message your friend to share your feelings 💌",
        nextScene: 4,
        impact: "Opening up builds stronger connections 💕",
      },
      {
        text: "Join an online community with similar interests 🎮",
        nextScene: 4,
        impact: "Finding your tribe in different ways is valid too! 🌟",
      },
    ],
  },
  {
    id: 3,
    situation:
      "At the gathering, you're starting to enjoy the positive energy. What do you do next? ✨",
    choices: [
      {
        text: "Take a moment to appreciate your progress 📸",
        nextScene: 4,
        impact: "Acknowledging moments of growth is powerful 🎉",
      },
      {
        text: "Initiate a conversation with someone new 💬",
        nextScene: 4,
        impact: "Building confidence through small challenges! 👏",
      },
    ],
  },
  {
    id: 4,
    situation: "You've grown through this experience! What did this teach you about managing social anxiety? 🌟",
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
          <BookOpen className="text-blue-600 w-7 h-7" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Story Quest
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400 w-5 h-5" />
            <span className="font-bold text-blue-700">{xp} XP</span>
          </div>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className="text-red-500 w-5 h-5 -ml-1" />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-xl mb-6">
          <p className="text-blue-800 text-lg font-medium">{scene?.situation}</p>
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
              className="w-full bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-800 font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl mt-4 transition-all duration-300"
          >
            Start New Quest ✨
          </Button>
        )}
      </div>
    </Card>
  );
};
