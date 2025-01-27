import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <Card className="p-6 bg-therapy-card rounded-xl shadow-lg">
          <div className={`${isFlipped ? "hidden" : "block"}`}>
            <h3 className="text-xl font-bold text-therapy-primary mb-3">{title}</h3>
            <p className="text-therapy-text">{description}</p>
          </div>
          <div
            className={`absolute inset-0 p-6 bg-therapy-card rounded-xl backface-hidden rotate-y-180 ${
              isFlipped ? "block" : "hidden"
            }`}
          >
            <h4 className="text-lg font-semibold text-therapy-secondary mb-3">Example:</h4>
            <p className="text-therapy-text">{example}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};