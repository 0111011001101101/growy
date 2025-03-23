
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SchemaPatterns = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-bold text-indigo-500">Schema Patterns</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2"
          onClick={() => setShowInfo(!showInfo)}
        >
          <Info className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
      
      {showInfo && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-indigo-50 p-3 rounded-lg mb-3 text-xs text-gray-700 leading-relaxed"
        >
          <p>Understanding your schema patterns helps identify recurring thoughts and behaviors that might be holding you back. <span className="font-medium">Tap on each card to see examples.</span></p>
          <p className="mt-1 text-indigo-600 font-medium">Recognizing these patterns is the first step to changing them.</p>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 gap-3">
        {schemaTherapyCards.slice(0, 3).map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-1 right-1 z-10 bg-indigo-100 rounded-full p-0.5 opacity-70">
              <motion.div 
                animate={{ y: [0, -2, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-[8px] text-indigo-600 p-0.5"
              >
                TAP
              </motion.div>
            </div>
            <SchemaCard
              key={card.title}
              title={card.title}
              description={card.description}
              example={card.example}
              type={card.type as "emotional" | "cognitive" | "behavioral" | "interpersonal" | "coping"}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
