
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
    <div className="min-h-screen bg-gradient-to-br from-[#F6F8FD] via-[#F9F3FF] to-[#F3E8FF]">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden md:flex flex-col w-72 min-h-screen bg-white/90 backdrop-blur-md border-r border-purple-100 p-4 sticky top-0">
          <div className="flex items-center gap-3 mb-8 mt-4 px-4">
            <div className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] p-2 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#9333ea] bg-clip-text text-transparent">
              SchemaFun
            </h1>
          </div>
          
          <nav className="flex-1 space-y-2 px-2">
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
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl text-left transition-colors ${
                  item.active
                    ? "bg-[#F3E8FF] text-[#7C3AED] font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.active ? "text-[#7C3AED]" : ""}`} />
                <span>{item.label}</span>
                {item.active && (
                  <div className="ml-auto w-1.5 h-5 bg-[#7C3AED] rounded-full" />
                )}
              </motion.button>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-purple-100">
            <div className="bg-gradient-to-r from-[#9b87f5]/10 to-[#7c3aed]/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="font-bold text-gray-700">2,450 pts</span>
                </div>
                <div className="flex items-center gap-1 bg-[#58CC02] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PLUS</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Next reward: 50 points away</p>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 max-w-5xl mx-auto px-4 py-6 md:py-8 pb-24 md:pb-12 relative">
          {/* Mobile header */}
          {isMobile && (
            <motion.header 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 -mx-4 px-4 py-3 mb-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] p-2 rounded-xl">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4B4B] rounded-full flex items-center justify-center text-white text-xs font-bold">
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
                <div className="flex items-center gap-3">
                  <button className="relative">
                    <BellRing className="w-6 h-6 text-gray-600" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4B4B] rounded-full" />
                  </button>
                  <div className="flex items-center gap-1 bg-[#58CC02] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-green-200/50">
                    <Sparkles className="w-4 h-4" />
                    <span>PLUS</span>
                  </div>
                </div>
              </div>
            </motion.header>
          )}

          {/* Desktop header */}
          {!isMobile && (
            <motion.header 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center justify-between mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-800">Hey Ellie! 👋</h1>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <BellRing className="w-6 h-6 text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4B4B] rounded-full" />
                </button>
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
            </motion.header>
          )}

          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            {/* First column - Left side*/}
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <MoodTracker />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DailyChallenge />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <SchemaStory />
              </motion.div>
            </div>
            
            {/* Second column - Right side */}
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Assignments />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ProgressChart />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Schema Patterns</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {schemaTherapyCards.map((card, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
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
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-purple-100 px-6 py-2 z-50">
          <div className="max-w-[500px] mx-auto flex justify-between items-center">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Brain, label: "Schemas" },
              { icon: Trophy, label: "Goals" },
              { icon: User, label: "Profile" }
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center gap-1 px-4 py-2 relative ${
                  item.active ? "text-[#7C3AED]" : "text-gray-500"
                } hover:text-[#7C3AED] transition-colors`}
              >
                <item.icon className="w-6 h-6" />
                <span className={`text-xs font-medium ${item.active ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity`}>
                  {item.label}
                </span>
                {item.active && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 w-10 h-1 bg-[#7C3AED] rounded-full" 
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Index;
