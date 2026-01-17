import Sidebar from '@/components/Sidebar'
import AIPerformanceHeader from '@/components/ai-performance/AIPerformanceHeader'
import PerformanceGauges from '@/components/ai-performance/PerformanceGauges'
import CostChart from '@/components/ai-performance/CostChart'
import LiveTerminal from '@/components/ai-performance/LiveTerminal'

export default function AIPerformancePage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Background Glow Effect */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <AIPerformanceHeader />
        
        <div className="flex-1 overflow-y-auto px-8 pb-8 z-10 custom-scrollbar">
          <div className="flex flex-col gap-6 max-w-[1400px]">
            <PerformanceGauges />
            <CostChart />
            <LiveTerminal />
          </div>
        </div>
      </main>
    </div>
  )
}