
import { motion } from "framer-motion";
import { Info, ChevronRight } from "lucide-react";
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const SchemaPatterns = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
          <p className="font-medium mb-1">Why schemas matter:</p>
          <ul className="list-disc pl-4 space-y-1 text-gray-700">
            <li>They influence how you interpret situations</li>
            <li>They shape your emotional responses</li>
            <li>They drive unconscious behaviors</li>
          </ul>
          <p className="mt-2 text-indigo-600 font-medium">Tap any card to explore examples</p>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 gap-3">
        {schemaTherapyCards.slice(0, 3).map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="cursor-pointer relative overflow-hidden"
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <Card className={`transition-all duration-300 ${expandedCard === index ? 'bg-indigo-50 border-indigo-200' : ''}`}>
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${schemaColors[card.type as keyof typeof schemaColors].split(" ")[1]}`}>
                      {getSchemaIcon(card.type as keyof typeof schemaIcons)}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 text-indigo-400 transition-transform duration-300 ${
                      expandedCard === index ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
                
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 pt-2 border-t border-indigo-100"
                  >
                    <p className="text-xs text-gray-600 mb-2">{card.description}</p>
                    <div className="bg-white p-2 rounded border border-indigo-100">
                      <p className="text-xs font-medium text-indigo-700 mb-1">Example:</p>
                      <p className="text-xs text-gray-600">{card.example}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full mt-3 text-indigo-500 hover:text-indigo-700 text-xs"
        onClick={() => window.location.href = '/schemas'}
      >
        See all schema patterns
        <ChevronRight className="h-3 w-3 ml-1" />
      </Button>
    </motion.div>
  );
};

// Helper constants reused from SchemaCard to render icons
const schemaIcons = {
  emotional: <Heart className="w-4 h-4 text-blue-500" />,
  cognitive: <Brain className="w-4 h-4 text-indigo-500" />,
  behavioral: <Puzzle className="w-4 h-4 text-amber-500" />,
  interpersonal: <Users className="w-4 h-4 text-purple-500" />,
  coping: <Shield className="w-4 h-4 text-green-500" />,
};

const schemaColors = {
  emotional: "text-blue-500 bg-blue-50",
  cognitive: "text-indigo-500 bg-indigo-50",
  behavioral: "text-amber-500 bg-amber-50",
  interpersonal: "text-purple-500 bg-purple-50",
  coping: "text-green-500 bg-green-50",
};

const getSchemaIcon = (type: keyof typeof schemaIcons) => {
  return schemaIcons[type];
};

import { Heart, Shield, Users, Brain, Puzzle } from "lucide-react";
