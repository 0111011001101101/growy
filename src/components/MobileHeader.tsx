
import { Brain, BellRing, Sparkles } from "lucide-react";

export const MobileHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pink-100 -mx-4 px-4 py-3 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-400 to-violet-400 p-1.5 rounded-md">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              5
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-gray-500">Current Streak</span>
            <span className="text-sm font-bold text-pink-500">
              7 Days
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative">
            <BellRing className="w-5 h-5 text-gray-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full" />
          </button>
          <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            <span>PLUS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
