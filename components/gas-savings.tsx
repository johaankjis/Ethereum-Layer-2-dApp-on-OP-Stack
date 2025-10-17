"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown } from "lucide-react"

export function GasSavings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-accent" />
          Gas Savings
        </CardTitle>
        <CardDescription>L2 vs L1 comparison</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Average L1 Cost</span>
            <span className="font-mono font-medium">$24.50</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Average L2 Cost</span>
            <span className="font-mono font-medium text-accent">$1.72</span>
          </div>
          <div className="h-px bg-border my-2" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total Saved</span>
            <span className="text-2xl font-bold text-accent">$342.80</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Savings Rate</span>
            <span className="text-lg font-bold text-accent">93%</span>
          </div>
          <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[93%] bg-accent rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
