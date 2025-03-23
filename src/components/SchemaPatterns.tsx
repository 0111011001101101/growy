
import { motion } from "framer-motion";
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";

export const SchemaPatterns = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
    >
      <h2 className="text-base font-bold text-pink-500 mb-3">Schema Patterns</h2>
      <div className="grid grid-cols-1 gap-3">
        {schemaTherapyCards.slice(0, 3).map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
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
