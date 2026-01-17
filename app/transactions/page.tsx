import Sidebar from '@/components/Sidebar'
import TransactionHeader from '@/components/transactions/TransactionHeader'
import TransactionTable from '@/components/transactions/TransactionTable'

export default function TransactionsPage() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <TransactionHeader />
        <TransactionTable />
      </main>
    </div>
  )
}