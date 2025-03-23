
import { motion } from "framer-motion";
import { MoodTracker } from "@/components/MoodTracker";
import { SchemaStory } from "@/components/SchemaStory";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaPatterns } from "@/components/SchemaPatterns";
import { ProgressBar } from "@/components/ProgressBar";
import { Assignments } from "@/components/Assignments";

export const MainContent = () => {
  return (
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
  );
};
