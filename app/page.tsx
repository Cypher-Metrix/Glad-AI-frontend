import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import DashboardMetrics from '@/components/dashboard/DashboardMetrics'
import DashboardCharts from '@/components/dashboard/DashboardCharts'
import RecentActivities from '@/components/dashboard/RecentActivities'

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header title="Main Dashboard" />
        
        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <DashboardMetrics />
            <DashboardCharts />
            <RecentActivities />
          </div>
        </div>
      </main>
    </div>
  )
}