"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, TrendingUp } from "lucide-react"

export function WalletOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold">$12,847.32</CardTitle>
              <CardDescription className="mt-1">Total Balance</CardDescription>
            </div>
            <Badge variant="secondary" className="gap-1 bg-accent text-accent-foreground">
              <TrendingUp className="h-3 w-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Connected to Optimism L2</span>
          </div>
          <div className="mt-4 text-xs text-muted-foreground font-mono">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <ArrowUpRight className="h-4 w-4" />
            <span className="text-sm font-medium">Send</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
            <ArrowDownLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Receive</span>
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
