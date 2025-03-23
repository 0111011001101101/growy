
import { BellRing, Heart } from "lucide-react";

export const DesktopHeader = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold text-gray-800">Hey Ellie! 👋</h1>
      <div className="flex items-center gap-4">
        <button className="relative">
          <BellRing className="w-5 h-5 text-gray-500" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Heart className="w-5 h-5 text-pink-400" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              5
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600">7 Day Streak</span>
        </div>
      </div>
    </header>
  );
};
