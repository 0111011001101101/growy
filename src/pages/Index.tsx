import { SchemaCard } from "@/components/SchemaCard";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressChart } from "@/components/ProgressChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-therapy-primary mb-2">Schema Therapy Journey</h1>
          <p className="text-lg text-therapy-text">Discover and understand your patterns</p>
        </header>

        <MoodTracker />

        <div className="grid md:grid-cols-2 gap-6">
          <SchemaCard
            title="Emotional Deprivation"
            description="Feeling that your emotional needs won't be met by others"
            example="Like posting on social media but never getting the engagement you hope for 🤳"
          />
          <SchemaCard
            title="Abandonment"
            description="Fear that important people in your life will leave"
            example="Getting anxious when your bestie doesn't reply to your text right away 📱"
          />
        </div>

        <ProgressChart />
      </div>
    </div>
  );
};

export default Index;