export default function AIPerformanceHeader() {
  return (
    <header className="flex-none px-8 py-6 z-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-white tracking-tight">AI Performance Monitor</h1>
        <div className="flex items-center gap-2 text-text-secondary">
          <span className="text-sm">Real-time latency tracking and cost analysis</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">Live</span>
        </div>
      </div>
    </header>
  )
}