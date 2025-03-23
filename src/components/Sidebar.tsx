
import { 
  Brain, Home, BarChart, Book, Lightbulb, 
  Trophy, User, Settings, Sparkles 
} from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white shadow-sm sticky top-0">
      <div className="flex items-center gap-3 mb-8 mt-6 px-6">
        <div className="bg-gradient-to-r from-pink-400 to-violet-400 p-2 rounded-lg">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-lg font-bold text-pink-500">
          SchemaFun
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-3">
        {[
          { icon: Home, label: "Dashboard", active: true },
          { icon: Brain, label: "Schema Explorer" },
          { icon: BarChart, label: "Progress" },
          { icon: Book, label: "Learning" },
          { icon: Lightbulb, label: "Insights" },
          { icon: Trophy, label: "Achievements" },
          { icon: User, label: "Profile" },
          { icon: Settings, label: "Settings" },
        ].map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
              item.active
                ? "bg-pink-50 text-pink-600 font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <item.icon className={`w-4 h-4 ${item.active ? "text-pink-500" : ""}`} />
            <span className="text-sm">{item.label}</span>
            {item.active && (
              <div className="ml-auto w-1 h-4 bg-pink-400 rounded-full" />
            )}
          </button>
        ))}
      </nav>
      
      <div className="mt-auto p-4 mx-3 mb-4 bg-gradient-to-r from-pink-50 to-violet-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-gray-700">2,450 pts</span>
          </div>
          <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            <span>PLUS</span>
          </div>
        </div>
        <div className="w-full bg-white/50 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-pink-400 to-violet-400 h-1.5 rounded-full" style={{ width: "75%" }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-1.5">Next reward: 50 points away</p>
      </div>
    </aside>
  );
};
