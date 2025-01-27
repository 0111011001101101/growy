import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Heart, Sparkles, Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] px-4 py-6 md:px-6 md:py-8">
      <div className="max-w-md mx-auto space-y-4">
        <header className="text-center mb-6 animate-fade-up">
          <div className="flex items-center justify-between mb-4 bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Heart className="w-6 h-6 text-[#FF4B4B]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#58CC02] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">Current Streak</span>
                <span className="text-lg font-bold text-[#1CB0F6]">7 Days</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Gem className="w-5 h-5 text-[#1CB0F6]" />
                <span className="font-bold text-gray-700">2,450</span>
              </div>
              <div className="bg-[#58CC02] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                <span>PLUS</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-4 animate-fade-up">
          <MoodTracker />
          
          <div className="grid grid-cols-1 gap-3">
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

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2">
          <div className="max-w-md mx-auto flex justify-between items-center">
            {['Learn', 'Practice', 'Profile', 'Shop'].map((item) => (
              <button
                key={item}
                className="flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#1CB0F6] transition-colors"
              >
                <span className="text-xs font-medium">{item}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;