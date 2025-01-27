import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface SchemaCardProps {
  title: string;
  description: string;
  example: string;
}

export const SchemaCard = ({ title, description, example }: SchemaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[140px]"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence>
        <Card 
          className={`absolute inset-0 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 ${
            isFlipped ? "backface-hidden" : ""
          }`}
        >
          <h3 className="text-lg font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </Card>

        <Card 
          className={`absolute inset-0 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 ${
            !isFlipped ? "backface-hidden" : ""
          }`} 
          style={{ transform: "rotateY(180deg)" }}
        >
          <h4 className="text-lg font-bold text-[#FF4B4B] mb-2">
            Example:
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {example}
          </p>
        </Card>
      </AnimatePresence>
    </motion.div>
  );
};