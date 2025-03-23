
import { useIsMobile } from "@/hooks/use-mobile";
import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";
import { DesktopHeader } from "@/components/DesktopHeader";
import { MainContent } from "@/components/MainContent";
import { MobileNavigation } from "@/components/MobileNavigation";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 max-w-5xl mx-auto px-4 py-4 md:py-6 pb-20 md:pb-12 relative">
          {isMobile ? <MobileHeader /> : <DesktopHeader />}
          <MainContent />
        </main>
      </div>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default Index;
