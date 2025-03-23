
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shield, Users, Brain, Puzzle, Filter, Scale, ThumbsDown, Zap, HeartCrack, Info } from "lucide-react";

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
  emotional: "text-blue-500 bg-blue-50",
  cognitive: "text-indigo-500 bg-indigo-50",
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
    title: "All-or-Nothing Thinking",
    description: "Seeing situations as completely good or bad with no middle ground.",
    example: "Thinking 'If I don't get an A on this test, I'm a total failure.'",
    type: "cognitive"
  },
  {
    title: "Overgeneralization",
    description: "Taking one negative event as a never-ending pattern of defeat.",
    example: "After one rejection: 'No one will ever want to be my friend.'",
    type: "cognitive"
  },
  {
    title: "Mental Filtering",
    description: "Focusing only on the negative details while ignoring the positive.",
    example: "Only remembering the one criticism you got, not the five compliments.",
    type: "cognitive"
  },
  {
    title: "Discounting the Positive",
    description: "Rejecting positive experiences by insisting they 'don't count.'",
    example: "When someone praises your work: 'They're just being nice.'",
    type: "emotional"
  },
  {
    title: "Jumping to Conclusions",
    description: "Making negative interpretations even though there are no facts to support it.",
    example: "Assuming your friend is mad at you because they didn't text back right away.",
    type: "interpersonal"
  },
  {
    title: "Magnification",
    description: "Exaggerating your problems and minimizing your positive qualities.",
    example: "Making a small mistake and thinking it's the end of the world.",
    type: "emotional"
  },
  {
    title: "Emotional Reasoning",
    description: "Believing that how you feel reflects reality.",
    example: "Feeling anxious about a presentation and thinking 'I must be terrible at this.'",
    type: "emotional"
  },
  {
    title: "Should Statements",
    description: "Having rigid rules about how you and others 'should' act.",
    example: "Thinking 'I should always be happy' or 'They should know what I want.'",
    type: "behavioral"
  },
  {
    title: "Labeling",
    description: "Giving yourself or others a negative label based on one event.",
    example: "After making a mistake: 'I'm such a loser.'",
    type: "behavioral"
  },
  {
    title: "Personalization & Blame",
    description: "Blaming yourself for things that aren't entirely your fault or responsibility.",
    example: "When your team loses: 'It's all my fault we lost the game.'",
    type: "interpersonal"
  }
];
