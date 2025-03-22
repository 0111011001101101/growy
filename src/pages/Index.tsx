
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Assignments } from "@/components/Assignments";
import { Heart, Sparkles, Trophy, Home, Book, User, BarChart, Settings } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-[#F3E8FF] flex flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-8 mt-4 px-3">
          <Heart className="w-6 h-6 text-[#FF4B4B]" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent">
            SchemaFun
          </h1>
        </div>
        
        <nav className="flex-1 space-y-1">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: BarChart, label: "Progress" },
            { icon: Book, label: "Learning" },
            { icon: Trophy, label: "Achievements" },
            { icon: User, label: "Profile" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-[#F3E8FF] text-[#7C3AED] font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
              {item.active && (
                <div className="ml-auto w-1.5 h-5 bg-[#7C3AED] rounded-full" />
              )}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-gray-700">2,450</span>
            </div>
            <div className="flex items-center gap-1 bg-[#58CC02] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PLUS</span>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 md:py-8 pb-24 md:pb-12 relative">
        {/* Mobile header */}
        {isMobile && (
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 -mx-4 px-4 py-3 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Heart className="w-6 h-6 text-[#FF4B4B] animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#58CC02] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500">Current Streak</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent">
                    7 Days
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold text-gray-700">2,450</span>
                </div>
                <div className="flex items-center gap-2 bg-[#58CC02] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-green-200/50">
                  <Sparkles className="w-4 h-4" />
                  <span>PLUS</span>
                </div>
              </div>
            </div>
          </header>
        )}

        {/* Desktop header */}
        {!isMobile && (
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Heart className="w-6 h-6 text-[#FF4B4B]" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#58CC02] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">7 Day Streak</span>
              </div>
            </div>
          </header>
        )}

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {/* First column - Left side*/}
          <div className="space-y-6">
            <MoodTracker />
            <DailyChallenge />
            <SchemaStory />
          </div>
          
          {/* Second column - Right side */}
          <div className="space-y-6">
            <Assignments />
            <ProgressChart />
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Schema Patterns</h2>
              <div className="grid grid-cols-1 gap-4">
                {schemaTherapyCards.map((card, index) => (
                  <SchemaCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    example={card.example}
                    type={card.type as "emotional" | "cognitive" | "behavioral" | "interpersonal" | "coping"}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile navigation */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-2 z-50">
          <div className="max-w-[500px] mx-auto flex justify-between items-center">
            {[
              { icon: Home, label: "Home" },
              { icon: Book, label: "Learn" },
              { icon: Trophy, label: "Goals" },
              { icon: User, label: "Profile" }
            ].map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#1CB0F6] transition-colors relative group"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                {item.label === "Home" && (
                  <div className="absolute -bottom-2 w-1 h-1 bg-[#1CB0F6] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Index;
