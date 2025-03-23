
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Assignments } from "@/components/Assignments";
import { 
  Heart, Sparkles, Trophy, Home, Book, 
  User, BarChart, Settings, BellRing, 
  Lightbulb, Brain 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-indigo-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white shadow-sm sticky top-0">
          <div className="flex items-center gap-3 mb-8 mt-6 px-6">
            <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-xl">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              SchemaFun
            </h1>
          </div>
          
          <nav className="flex-1 space-y-1 px-3">
            {[
              { icon: Home, label: "Dashboard", active: true },
              { icon: Brain, label: "Schema Explorer" },
              { icon: BarChart, label: "Progress" },
              { icon: Book, label: "Learning" },
              { icon: Lightbulb, label: "Insights" },
              { icon: Trophy, label: "Achievements" },
              { icon: User, label: "Profile" },
              { icon: Settings, label: "Settings" },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
                  item.active
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className={`w-4 h-4 ${item.active ? "text-violet-500" : ""}`} />
                <span className="text-sm">{item.label}</span>
                {item.active && (
                  <div className="ml-auto w-1 h-4 bg-violet-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto p-4 mx-3 mb-4 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-medium text-gray-700">2,450 pts</span>
              </div>
              <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                <span>PLUS</span>
              </div>
            </div>
            <div className="w-full bg-white/50 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1.5">Next reward: 50 points away</p>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 max-w-5xl mx-auto px-4 py-4 md:py-6 pb-20 md:pb-12 relative">
          {/* Mobile header */}
          {isMobile && (
            <header className="sticky top-0 z-50 bg-white border-b border-indigo-100 -mx-4 px-4 py-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-1.5 rounded-lg">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                      5
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-gray-500">Current Streak</span>
                    <span className="text-sm font-bold text-violet-600">
                      7 Days
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="relative">
                    <BellRing className="w-5 h-5 text-gray-600" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full" />
                  </button>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>PLUS</span>
                  </div>
                </div>
              </div>
            </header>
          )}

          {/* Desktop header */}
          {!isMobile && (
            <header className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-800">Hey Ellie! 👋</h1>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <BellRing className="w-5 h-5 text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                      5
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">7 Day Streak</span>
                </div>
              </div>
            </header>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <MoodTracker />
              </motion.div>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <SchemaStory />
              </motion.div>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ProgressChart />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DailyChallenge />
              </motion.div>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Assignments />
              </motion.div>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-5">
                  <h2 className="text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Schema Patterns</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {schemaTherapyCards.slice(0, 3).map((card, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <SchemaCard
                          key={index}
                          title={card.title}
                          description={card.description}
                          example={card.example}
                          type={card.type as "emotional" | "cognitive" | "behavioral" | "interpersonal" | "coping"}
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-indigo-100 py-1 z-50">
          <div className="max-w-[500px] mx-auto flex justify-around items-center">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Brain, label: "Schemas" },
              { icon: Trophy, label: "Goals" },
              { icon: User, label: "Profile" }
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center px-2 py-1.5 relative ${
                  item.active ? "text-violet-600" : "text-gray-500"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className={`text-[10px] mt-0.5 font-medium ${item.active ? "opacity-100" : "opacity-0"}`}>
                  {item.label}
                </span>
                {item.active && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-8 h-0.5 bg-violet-600 rounded-full" 
                  />
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
