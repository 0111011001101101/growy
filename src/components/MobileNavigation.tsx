
import { useState } from 'react';
import { motion } from "framer-motion";
import { Home, Brain, Trophy, User } from "lucide-react";

export const MobileNavigation = () => {
  const [activeTab, setActiveTab] = useState("Home");
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 py-1 z-50">
      <div className="max-w-[500px] mx-auto flex justify-around items-center">
        {[
          { icon: Home, label: "Home", active: activeTab === "Home" },
          { icon: Brain, label: "Schemas", active: activeTab === "Schemas" },
          { icon: Trophy, label: "Goals", active: activeTab === "Goals" },
          { icon: User, label: "Profile", active: activeTab === "Profile" }
        ].map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center px-2 py-1.5 relative ${
              item.active ? "text-pink-500" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(item.label)}
          >
            <item.icon className="w-5 h-5" />
            <span className={`text-[10px] mt-0.5 font-medium ${item.active ? "opacity-100" : "opacity-0"}`}>
              {item.label}
            </span>
            {item.active && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 w-8 h-0.5 bg-pink-400 rounded-full" 
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
