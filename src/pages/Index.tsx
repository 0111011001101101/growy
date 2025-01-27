import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Sparkles, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#58CC02] bg-opacity-5 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-10 h-10 text-[#58CC02] animate-bounce" />
            <h1 className="text-4xl font-extrabold text-[#1CB0F6]">
              Schema Quest
            </h1>
            <Sparkles className="w-10 h-10 text-[#FF4B4B] animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 font-medium">
            Level up your self-awareness! ✨
          </p>
        </header>

        <div className="grid gap-6 animate-fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-[#58CC02] mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#58CC02] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                  7
                </div>
                <div className="text-left">
                  <h2 className="font-bold text-gray-700">Day Streak! 🔥</h2>
                  <p className="text-sm text-gray-500">Keep it going!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#1CB0F6] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>2,450 XP</span>
                </div>
              </div>
            </div>
          </div>

          <MoodTracker />
          
          <div className="grid md:grid-cols-2 gap-6">
            <SchemaCard
              title="Self-Expression"
              description="Finding your voice and owning your story"
              example="When you feel like you can't be your authentic self on social media 🎭"
            />
            <SchemaCard
              title="Relationships"
              description="Navigating connections and boundaries"
              example="When you're overthinking if your crush left you on read 💭"
            />
          </div>

          <DailyChallenge />
          
          <SchemaStory />

          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default Index;