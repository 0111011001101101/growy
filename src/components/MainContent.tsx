
import { motion } from "framer-motion";
import { MoodTracker } from "@/components/MoodTracker";
import { SchemaStory } from "@/components/SchemaStory";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaPatterns } from "@/components/SchemaPatterns";
import { ProgressBar } from "@/components/ProgressBar";
import { Assignments } from "@/components/Assignments";
import { Sparkle } from "lucide-react";

export const MainContent = () => {
  return (
    <div className="relative z-10">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-20 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-gradient-to-tr from-blue-300/20 to-teal-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-bl from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl -z-10" />
      
      {/* Page title with decorative elements */}
      <div className="mb-8 text-center relative">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent inline-block mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Therapy Journey
        </motion.h1>
        <motion.div 
          className="flex justify-center gap-1 items-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Sparkle className="h-4 w-4 text-amber-400" />
          <span className="text-sm">Track your progress, complete challenges, grow stronger</span>
          <Sparkle className="h-4 w-4 text-amber-400" />
        </motion.div>
      </div>
      
      {/* Main content grid with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <MoodTracker />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <SchemaStory />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <SchemaPatterns />
          </motion.div>
        </div>
        
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <DailyChallenge />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <ProgressBar />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="hidden md:block transform transition-all duration-300"
          >
            <Assignments />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="hidden md:block transform transition-all duration-300"
          >
            <ProgressChart />
          </motion.div>
        </div>
      </div>
      
      {/* Mobile-only section for Assignments and Progress Chart */}
      <div className="md:hidden mt-6 space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="transform transition-all duration-300"
        >
          <Assignments />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="transform transition-all duration-300"
        >
          <ProgressChart />
        </motion.div>
      </div>
    </div>
  );
};
