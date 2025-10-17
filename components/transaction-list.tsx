"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react"

const transactions = [
  {
    id: "1",
    type: "send",
    amount: "0.5 ETH",
    usd: "$1,245.00",
    to: "0x742d...0bEb",
    status: "completed",
    timestamp: "2 min ago",
    gasUsed: "$0.12",
  },
  {
    id: "2",
    type: "receive",
    amount: "1.2 ETH",
    usd: "$2,988.00",
    from: "0x8f3a...4c2d",
    status: "completed",
    timestamp: "15 min ago",
    gasUsed: "$0.08",
  },
  {
    id: "3",
    type: "send",
    amount: "0.3 ETH",
    usd: "$747.00",
    to: "0x1a2b...9f8e",
    status: "pending",
    timestamp: "1 hour ago",
    gasUsed: "$0.15",
  },
  {
    id: "4",
    type: "receive",
    amount: "2.5 ETH",
    usd: "$6,225.00",
    from: "0x9c4d...3e1f",
    status: "completed",
    timestamp: "3 hours ago",
    gasUsed: "$0.10",
  },
]

export function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest L2 transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    tx.type === "send" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}
                >
                  {tx.type === "send" ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium capitalize">{tx.type}</p>
                  <p className="text-sm text-muted-foreground font-mono">{tx.type === "send" ? tx.to : tx.from}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <p className="font-medium">{tx.amount}</p>
                  <p className="text-sm text-muted-foreground">{tx.usd}</p>
                </div>

                <div className="text-right hidden md:block">
                  <p className="text-sm text-muted-foreground">Gas</p>
                  <p className="text-sm font-medium text-accent">{tx.gasUsed}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge
                    variant={tx.status === "completed" ? "secondary" : "outline"}
                    className={tx.status === "pending" ? "gap-1" : ""}
                  >
                    {tx.status === "pending" && <Clock className="h-3 w-3" />}
                    {tx.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
