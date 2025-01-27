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
    <div className="perspective-1000 w-full max-w-sm mx-auto">
      <div
        className={`relative transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 border-2 border-[#1CB0F6]/20 backdrop-blur-sm">
          <div className={`${isFlipped ? "hidden" : "block"}`}>
            <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#1CB0F6] to-[#58CC02] bg-clip-text text-transparent mb-3">
              {title}
            </h3>
            <p className="text-gray-700 font-medium">{description}</p>
          </div>
          <div
            className={`absolute inset-0 p-6 bg-gradient-to-br from-white to-pink-50/50 rounded-2xl backface-hidden rotate-y-180 border-2 border-[#FF4B4B]/20 ${
              isFlipped ? "block" : "hidden"
            }`}
          >
            <h4 className="text-lg font-bold bg-gradient-to-r from-[#FF4B4B] to-[#FF6B6B] bg-clip-text text-transparent mb-3">
              Example:
            </h4>
            <p className="text-gray-700 font-medium">{example}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};