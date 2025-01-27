import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Flame, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const challenges = [
  {
    id: 1,
    title: "Self-Care Streak",
    description: "Take 5 minutes to write down three things you're proud of today ✨",
    points: 50,
    xp: 20,
  },
  {
    id: 2,
    title: "Connection Quest",
    description: "Reach out to someone you trust and share a positive moment 💌",
    points: 75,
    xp: 30,
  },
  {
    id: 3,
    title: "Mindfulness Mission",
    description: "Practice deep breathing for 2 minutes while focusing on self-compassion 🌸",
    points: 60,
    xp: 25,
  },
];

export const DailyChallenge = () => {
  const { toast } = useToast();
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(5);

  useEffect(() => {
    // Simulate loading saved streak from storage
    setStreak(Math.floor(Math.random() * 7));
  }, []);

  const handleCompleteChallenge = (challengeId: number, points: number, xp: number) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges([...completedChallenges, challengeId]);
      setStreak(prev => prev + 1);
      toast({
        title: "✨ Challenge Complete! ✨",
        description: `You earned ${points} points and ${xp}XP! Keep that streak going! 🔥`,
      });
    }
  };

  return (
    <Card className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Trophy className="text-yellow-400 w-8 h-8 animate-bounce" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Daily Quests
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
            <Flame className="text-orange-500 w-5 h-5" />
            <span className="font-bold text-purple-700">{streak} day streak!</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(lives)].map((_, i) => (
              <Heart key={i} className="text-red-500 w-5 h-5 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-purple-800">{challenge.title}</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-bold text-purple-700">{challenge.points}</span>
                </div>
                <div className="bg-green-100 px-2 py-1 rounded-full">
                  <span className="text-sm font-bold text-green-700">+{challenge.xp} XP</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-base">{challenge.description}</p>
            <Button
              onClick={() => handleCompleteChallenge(challenge.id, challenge.points, challenge.xp)}
              disabled={completedChallenges.includes(challenge.id)}
              className={`w-full ${
                completedChallenges.includes(challenge.id)
                  ? "bg-green-500 hover:bg-green-500"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-102`}
            >
              {completedChallenges.includes(challenge.id) ? (
                <span className="flex items-center justify-center gap-2">
                  Completed! 🎉
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Complete Quest
                </span>
              )}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};