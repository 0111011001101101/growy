import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Sparkles, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F0F7FF] p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12 animate-fade-up backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-white/50 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Flame className="w-12 h-12 text-[#58CC02] animate-bounce" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF4B4B] rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#1CB0F6] via-[#58CC02] to-[#FF4B4B] bg-clip-text text-transparent">
              Schema Quest
            </h1>
            <Sparkles className="w-12 h-12 text-[#1CB0F6] animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 font-medium">
            Level up your self-awareness! ✨
          </p>
        </header>

        <div className="grid gap-8 animate-fade-up">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-[#58CC02]/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#58CC02] to-[#46A302] text-white font-bold rounded-2xl w-16 h-16 flex items-center justify-center text-2xl shadow-lg transform hover:scale-105 transition-all">
                  7
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-[#1CB0F6]">Day Streak!</h2>
                  <p className="text-lg text-gray-600">Keep going strong! 🔥</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#1CB0F6] to-[#1C9FF6] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-xl">2,450 XP</span>
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