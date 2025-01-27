import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SchemaCardProps {
  title: string;
  description: string;
  example: string;
}

export const SchemaCard = ({ title, description, example }: SchemaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[120px]"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Card className={`absolute inset-0 p-4 bg-white rounded-2xl shadow-sm border-0 ${
        isFlipped ? "backface-hidden" : ""
      }`}>
        <h3 className="text-base font-bold text-[#1CB0F6] mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </Card>

      <Card className={`absolute inset-0 p-4 bg-white rounded-2xl shadow-sm border-0 ${
        !isFlipped ? "backface-hidden" : ""
      }`} style={{ transform: "rotateY(180deg)" }}>
        <h4 className="text-base font-bold text-[#FF4B4B] mb-2">
          Example:
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {example}
        </p>
      </Card>
    </motion.div>
  );
};