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
    <div className="perspective-1000 w-full">
      <div
        className={`relative transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card className="p-4 md:p-8 bg-white/80 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl border-2 border-[#1CB0F6]/20 transform hover:scale-[1.01] transition-all duration-300">
          <div className={`${isFlipped ? "hidden" : "block"}`}>
            <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-3 md:mb-4">
              {title}
            </h3>
            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{description}</p>
          </div>
          <div
            className={`absolute inset-0 p-4 md:p-8 bg-white/90 backdrop-blur-md rounded-xl md:rounded-3xl backface-hidden rotate-y-180 border-2 border-[#FF4B4B]/20 ${
              isFlipped ? "block" : "hidden"
            }`}
          >
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF4B4B] to-[#FF6B6B] bg-clip-text text-transparent mb-3 md:mb-4">
              Example:
            </h4>
            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{example}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};