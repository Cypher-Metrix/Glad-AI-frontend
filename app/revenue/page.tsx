import Sidebar from '@/components/Sidebar'
import RevenueHeader from '@/components/revenue/RevenueHeader'
import RevenueMetrics from '@/components/revenue/RevenueMetrics'
import RevenueCharts from '@/components/revenue/RevenueCharts'
import RecentPayments from '@/components/revenue/RecentPayments'

export default function RevenuePage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <RevenueHeader />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="px-8 py-8 max-w-7xl mx-auto w-full flex flex-col gap-8 pb-20">
            <RevenueMetrics />
            <RevenueCharts />
            <RecentPayments />
          </div>
        </div>
      </main>
    </div>
  )
}