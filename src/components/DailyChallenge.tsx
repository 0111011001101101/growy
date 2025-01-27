import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const challenges = [
  {
    id: 1,
    title: "Self-Reflection Challenge",
    description: "Take 5 minutes to write down three things you're proud of today",
    points: 50,
  },
  {
    id: 2,
    title: "Connection Challenge",
    description: "Reach out to someone you trust and share a positive moment",
    points: 75,
  },
  {
    id: 3,
    title: "Mindfulness Moment",
    description: "Practice deep breathing for 2 minutes while focusing on self-compassion",
    points: 60,
  },
];

export const DailyChallenge = () => {
  const { toast } = useToast();
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const handleCompleteChallenge = (challengeId: number, points: number) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges([...completedChallenges, challengeId]);
      toast({
        title: "Challenge Complete! 🎉",
        description: `You earned ${points} points! Keep up the great work!`,
      });
    }
  };

  return (
    <Card className="p-6 bg-therapy-card rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-therapy-primary">Daily Challenges</h2>
        <Trophy className="text-therapy-secondary w-6 h-6" />
      </div>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-purple-100"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-therapy-text">{challenge.title}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">{challenge.points}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-3 text-sm">{challenge.description}</p>
            <Button
              onClick={() => handleCompleteChallenge(challenge.id, challenge.points)}
              disabled={completedChallenges.includes(challenge.id)}
              className={`w-full ${
                completedChallenges.includes(challenge.id)
                  ? "bg-green-500 hover:bg-green-500"
                  : ""
              }`}
            >
              {completedChallenges.includes(challenge.id) ? "Completed ✓" : "Complete Challenge"}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};