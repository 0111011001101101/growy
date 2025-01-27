import { useState } from "react";
import { Card } from "@/components/ui/card";

interface SchemaCardProps {
  title: string;
  description: string;
  example: string;
}

export const SchemaCard = ({ title, description, example }: SchemaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000">
      <div
        className={`relative transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card className="p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
          <div className={`${isFlipped ? "hidden" : "block"}`}>
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-2">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{description}</p>
          </div>
          <div
            className={`absolute inset-0 p-4 bg-white/90 backdrop-blur-md rounded-2xl backface-hidden rotate-y-180 border border-[#FF4B4B]/20 ${
              isFlipped ? "block" : "hidden"
            }`}
          >
            <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#FF4B4B] to-[#FF6B6B] bg-clip-text text-transparent mb-2">
              Example:
            </h4>
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{example}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};