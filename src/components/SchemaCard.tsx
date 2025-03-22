import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shield, Users, Brain, Puzzle } from "lucide-react";

interface SchemaCardProps {
  title: string;
  description: string;
  example: string;
  type: "emotional" | "cognitive" | "behavioral" | "interpersonal" | "coping";
}

const schemaIcons = {
  emotional: Heart,
  cognitive: Brain,
  behavioral: Puzzle,
  interpersonal: Users,
  coping: Shield,
};

const schemaColors = {
  emotional: "text-pink-500 bg-pink-50",
  cognitive: "text-blue-500 bg-blue-50",
  behavioral: "text-amber-500 bg-amber-50",
  interpersonal: "text-purple-500 bg-purple-50",
  coping: "text-green-500 bg-green-50",
};

export const SchemaCard = ({ title, description, example, type }: SchemaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = schemaIcons[type];
  const colorClass = schemaColors[type];

  return (
    <motion.div
      className="relative h-32 perspective-1000 cursor-pointer"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <AnimatePresence>
        <Card 
          className={`absolute inset-0 p-4 bg-white rounded-lg shadow-sm border border-gray-100 ${
            isFlipped ? "backface-hidden" : ""
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded-lg ${colorClass.split(" ")[1]}`}>
              <Icon className={`w-4 h-4 ${colorClass.split(" ")[0]}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </Card>

        <Card 
          className={`absolute inset-0 p-4 bg-white rounded-lg shadow-sm border border-gray-100 ${
            !isFlipped ? "backface-hidden" : ""
          }`} 
          style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Example:
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                {example}
              </p>
            </div>
            <div className="text-[10px] text-gray-400 italic mt-2">
              Tap to flip back
            </div>
          </div>
        </Card>
      </AnimatePresence>
    </motion.div>
  );
};

export const schemaTherapyCards = [
  {
    title: "Emotional Deprivation",
    description: "A belief that one's emotional needs will never be met by others",
    example: "Feeling that no one truly understands or cares about your feelings",
    type: "emotional"
  },
  {
    title: "Abandonment",
    description: "Fear that close relationships will end through abandonment",
    example: "Constant worry that loved ones will leave you",
    type: "interpersonal"
  },
  {
    title: "Defectiveness",
    description: "Feeling fundamentally flawed or inadequate",
    example: "Believing you're not worthy of love or acceptance",
    type: "cognitive"
  },
  {
    title: "Social Isolation",
    description: "Feeling different from others and not part of any group",
    example: "Feeling like you don't fit in at social gatherings",
    type: "behavioral"
  },
  {
    title: "Dependence",
    description: "Belief that one cannot handle daily responsibilities alone",
    example: "Struggling to make decisions without others' input",
    type: "coping"
  },
  {
    title: "Unrelenting Standards",
    description: "Setting unrealistically high expectations for oneself",
    example: "Never feeling satisfied with your achievements",
    type: "cognitive"
  },
  {
    title: "Entitlement",
    description: "Belief that one is superior to others or deserves special treatment",
    example: "Expecting others to always accommodate your preferences",
    type: "interpersonal"
  },
  {
    title: "Insufficient Self-Control",
    description: "Difficulty restraining emotions or impulses",
    example: "Struggling to maintain long-term goals due to immediate gratification",
    type: "behavioral"
  }
];
