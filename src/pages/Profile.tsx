
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressChart } from "@/components/ProgressChart";
import { 
  Heart, Trophy, Star, Calendar, MessageSquare, 
  Settings, Edit, User as UserIcon, ShieldCheck
} from "lucide-react";

const Profile = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 max-w-5xl mx-auto px-4 py-4 md:py-6 pb-20 md:pb-12 relative">
          {isMobile && <MobileHeader />}
          
          <div className="mb-6">
            <Card className="p-6 mb-6 bg-gradient-to-r from-pink-100 to-violet-100 border-0">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <UserIcon className="w-10 h-10 text-pink-400" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-pink-400 p-1.5 rounded-full text-white">
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-xl font-bold text-gray-800">Ellie Johnson</h1>
                  <p className="text-sm text-gray-600 mb-3">Schema Explorer • Joined 2 months ago</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <div className="flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-xs">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>2,450 points</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-xs">
                      <Heart className="w-3.5 h-3.5 text-pink-500" />
                      <span>7 day streak</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-xs">
                      <Star className="w-3.5 h-3.5 text-purple-500" />
                      <span>Level 5</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="bg-white border-pink-200 text-pink-600 hover:bg-pink-50">
                  <Settings className="w-4 h-4 mr-1" />
                  Edit Profile
                </Button>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-pink-100">
                      <Calendar className="w-5 h-5 text-pink-500" />
                    </div>
                    <h2 className="font-medium">Activity</h2>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">23 days</p>
                  <p className="text-sm text-gray-500">Active this month</p>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-white p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-purple-100">
                      <ShieldCheck className="w-5 h-5 text-purple-500" />
                    </div>
                    <h2 className="font-medium">Challenges</h2>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">17</p>
                  <p className="text-sm text-gray-500">Completed challenges</p>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-white p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-amber-100">
                      <MessageSquare className="w-5 h-5 text-amber-500" />
                    </div>
                    <h2 className="font-medium">Journal</h2>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">8</p>
                  <p className="text-sm text-gray-500">Journal entries</p>
                </Card>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-white p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h2>
                  <div className="h-[200px]">
                    <ProgressChart />
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-white p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Star, label: "First Login", color: "text-amber-500 bg-amber-100" },
                      { icon: Trophy, label: "7 Day Streak", color: "text-pink-500 bg-pink-100" },
                      { icon: Heart, label: "Mood Master", color: "text-purple-500 bg-purple-100" },
                      { icon: ShieldCheck, label: "Schema Pro", color: "text-emerald-500 bg-emerald-100" },
                      { icon: Calendar, label: "30 Days Active", color: "text-blue-500 bg-blue-100" },
                      { icon: MessageSquare, label: "Journal Keeper", color: "text-amber-500 bg-amber-100" },
                    ].map((achievement, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${achievement.color.split(' ')[1]}`}>
                          <achievement.icon className={`w-6 h-6 ${achievement.color.split(' ')[0]}`} />
                        </div>
                        <p className="text-xs text-center mt-2">{achievement.label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Profile;
