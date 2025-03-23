
import { motion } from "framer-motion";
import { MoodTracker } from "@/components/MoodTracker";
import { SchemaStory } from "@/components/SchemaStory";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaPatterns } from "@/components/SchemaPatterns";
import { ProgressBar } from "@/components/ProgressBar";

export const MainContent = () => {
  return (
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
          <SchemaPatterns />
        </motion.div>
        
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SchemaStory />
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
          <ProgressBar />
        </motion.div>
      </div>
    </div>
  );
};
