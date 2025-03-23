
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Your friend invites you to a game night, but you're feeling anxious about meeting new people. What's your approach?",
    choices: [
      {
        text: "Choose to stay home and play some video games instead",
        nextScene: 2,
        impact: "Self-care is important! Taking things at your own pace 🎮",
      },
      {
        text: "Go with your friend for support",
        nextScene: 3,
        impact: "Great! Small steps lead to big changes 💪",
      },
    ],
  },
  {
    id: 2,
    situation:
      "While checking social media, you notice photos from the game night and feel left out. How do you respond?",
    choices: [
      {
        text: "Message your friend to talk about how you feel",
        nextScene: 4,
        impact: "Opening up builds stronger connections 🔄",
      },
      {
        text: "Join an online gaming community with similar interests",
        nextScene: 4,
        impact: "Finding your tribe in different ways is valid too! 🎯",
      },
    ],
  },
  {
    id: 3,
    situation:
      "At the game night, you're starting to enjoy the positive energy. What do you do next?",
    choices: [
      {
        text: "Take a moment to appreciate your progress",
        nextScene: 4,
        impact: "Acknowledging moments of growth is powerful 🚀",
      },
      {
        text: "Challenge someone to a friendly competition",
        nextScene: 4,
        impact: "Building confidence through small challenges! 🏆",
      },
    ],
  },
  {
    id: 4,
    situation: "You've grown through this experience! What did this teach you about managing social anxiety?",
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
    <Card className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-sm border-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-400 p-1.5 rounded-md">
            <BookOpen className="text-white w-4 h-4" />
          </div>
          <h2 className="text-base font-semibold text-indigo-500">
            Story Quest
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-blue-100 px-2 py-0.5 rounded-full">
            <Star className="text-amber-400 w-3.5 h-3.5" />
            <span className="text-xs font-medium text-blue-600">{xp} XP</span>
          </div>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Zap key={i} className="text-blue-400 w-3.5 h-3.5 -ml-0.5" />
            ))}
          </div>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentScene}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="space-y-3"
        >
          <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-indigo-800 text-sm">{scene?.situation}</p>
          </div>
          
          {showImpact && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 p-2.5 text-xs rounded-lg mb-2"
            >
              {showImpact}
            </motion.div>
          )}
          
          <div className="space-y-2">
            {scene?.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice)}
                className="w-full bg-white hover:bg-blue-50 text-blue-700 border border-blue-100 hover:border-blue-300 shadow-sm font-medium rounded-lg h-auto text-left transition-all"
                size="sm"
              >
                <div className="flex items-start gap-2 w-full py-1">
                  <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs overflow-hidden break-words">{choice.text}</span>
                </div>
              </Button>
            ))}
          </div>
          
          {currentScene === 4 && (
            <Button 
              onClick={() => {
                setCurrentScene(1);
                setXp(0);
              }} 
              className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white font-medium py-2 rounded-lg mt-3 h-auto text-sm"
            >
              Start New Quest 🚀
            </Button>
          )}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};
