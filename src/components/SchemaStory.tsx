
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Star, Heart, Award } from "lucide-react";
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
    <Card className="p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1.5 rounded-md shadow-inner">
            <BookOpen className="text-white w-4 h-4" />
          </div>
          <h2 className="text-base font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interactive Story Quest
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-100 to-purple-100 px-2 py-0.5 rounded-full">
            <Award className="text-amber-500 w-3.5 h-3.5" />
            <span className="text-xs font-medium text-indigo-700">{xp} XP</span>
          </div>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i} 
                className={`w-3.5 h-3.5 -ml-0.5 transition-all duration-300 ${
                  i < Math.ceil(xp/50) ? 'text-pink-500 scale-110' : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentScene}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-lg border border-indigo-100 shadow-sm">
            <p className="text-indigo-900 text-sm leading-relaxed">{scene?.situation}</p>
          </div>
          
          {showImpact && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-teal-50 to-emerald-50 text-emerald-700 p-3 text-xs rounded-lg mb-2 border border-green-100 shadow-sm"
            >
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                {showImpact}
              </div>
            </motion.div>
          )}
          
          <div className="space-y-2 mt-2">
            {scene?.choices.map((choice, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleChoice(choice)}
                  className="w-full bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-100 hover:border-indigo-300 shadow-sm hover:shadow font-medium rounded-lg h-auto text-left transition-all duration-300"
                  size="sm"
                >
                  <div className="flex items-start gap-2 w-full py-1.5">
                    <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs overflow-hidden break-words">{choice.text}</span>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
          
          {currentScene === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                onClick={() => {
                  setCurrentScene(1);
                  setXp(0);
                }} 
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-2 rounded-lg mt-3 h-auto text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start New Quest 🚀
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};
