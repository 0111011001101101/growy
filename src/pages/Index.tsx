import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";
import { DailyChallenge } from "@/components/DailyChallenge";
import { SchemaStory } from "@/components/SchemaStory";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-therapy-primary animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-therapy-primary to-therapy-secondary bg-clip-text text-transparent">
              Your Growth Journey
            </h1>
            <Sparkles className="w-8 h-8 text-therapy-secondary animate-pulse" />
          </div>
          <p className="text-lg text-therapy-text opacity-90">
            Express yourself, explore your patterns, and embrace your authentic self ✨
          </p>
        </header>

        <div className="grid gap-6 animate-fade-up">
          <MoodTracker />

          <div className="grid md:grid-cols-2 gap-6">
            <SchemaCard
              title="Self-Expression"
              description="Finding your voice and owning your story"
              example="When you feel like you can't be your authentic self on social media 🎭"
            />
            <SchemaCard
              title="Relationships"
              description="Navigating connections and boundaries"
              example="When you're overthinking if your crush left you on read 💭"
            />
          </div>

          <DailyChallenge />
          
          <SchemaStory />

          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default Index;