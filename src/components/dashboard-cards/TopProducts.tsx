import React from 'react'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import BarChart from '../BarChart';

export default function TopProducts
() {
  return (
    <Card className="inline-block">
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Top 5 products</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart />
        </CardContent>
      </Card>
  )
}
