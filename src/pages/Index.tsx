import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Sparkles, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F0F7FF] px-4 py-6 md:px-6 md:py-8">
      <div className="max-w-lg mx-auto space-y-4 md:space-y-6">
        <header className="text-center mb-6 md:mb-8 animate-fade-up backdrop-blur-md bg-white/70 rounded-2xl p-4 md:p-6 border border-white/50 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="relative">
              <Flame className="w-7 h-7 md:w-8 md:h-8 text-[#58CC02] animate-bounce" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4B4B] rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#1CB0F6] via-[#58CC02] to-[#FF4B4B] bg-clip-text text-transparent">
              Schema Quest
            </h1>
            <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-[#1CB0F6] animate-pulse" />
          </div>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Level up your self-awareness! ✨
          </p>
        </header>

        <div className="grid gap-4 md:gap-6 animate-fade-up">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6 border border-white/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#58CC02] to-[#46A302] text-white font-bold rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl shadow-md">
                  7
                </div>
                <div className="text-left">
                  <h2 className="text-lg md:text-xl font-bold text-[#1CB0F6]">Day Streak!</h2>
                  <p className="text-sm md:text-base text-gray-600">Keep going strong! 🔥</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#1CB0F6] to-[#1C9FF6] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 shadow-md">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg">2,450 XP</span>
                </div>
              </div>
            </div>
          </div>

          <MoodTracker />
          
          <div className="grid grid-cols-1 gap-4">
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