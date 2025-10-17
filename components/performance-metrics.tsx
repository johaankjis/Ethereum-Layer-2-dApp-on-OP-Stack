"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Zap, Clock } from "lucide-react"

export function PerformanceMetrics() {
  const metrics = [
    {
      label: "App Start Time",
      value: "0.98s",
      target: "< 1.2s",
      icon: Zap,
      status: "good",
    },
    {
      label: "Cold Start Latency",
      value: "142ms",
      target: "25% ↓",
      icon: Clock,
      status: "good",
    },
    {
      label: "Uptime",
      value: "99.94%",
      target: "≥ 99.9%",
      icon: Activity,
      status: "good",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Real-time system performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.target}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">{metric.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
