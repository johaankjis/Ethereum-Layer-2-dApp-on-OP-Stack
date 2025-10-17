import { WalletOverview } from "@/components/wallet-overview"
import { TransactionList } from "@/components/transaction-list"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { GasSavings } from "@/components/gas-savings"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <WalletOverview />
        <div className="grid gap-6 md:grid-cols-2">
          <GasSavings />
          <PerformanceMetrics />
        </div>
        <TransactionList />
      </main>
    </div>
  )
}
