
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SchemaCard, schemaTherapyCards } from "@/components/SchemaCard";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Sidebar } from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { MobileHeader } from "@/components/MobileHeader";
import { Search } from "lucide-react";

const Schemas = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSchemas = searchTerm 
    ? schemaTherapyCards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : schemaTherapyCards;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 max-w-5xl mx-auto px-4 py-4 md:py-6 pb-20 md:pb-12 relative">
          {isMobile && <MobileHeader />}
          
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Schema Patterns</h1>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search schemas..."
                className="pl-10 w-full py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSchemas.map((schema, index) => (
                <motion.div
                  key={schema.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white p-4 h-full">
                    <SchemaCard
                      title={schema.title}
                      description={schema.description}
                      example={schema.example}
                      type={schema.type as "emotional" | "cognitive" | "behavioral" | "interpersonal" | "coping"}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Schemas;
