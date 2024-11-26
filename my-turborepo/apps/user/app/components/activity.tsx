"use client"

import { useState, useEffect } from "react"
import { Button } from "@repo/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select"
import { ChevronRight } from 'lucide-react'

export default function Activity() {
  const [animationComplete, setAnimationComplete] = useState(false)

  // SVG path for the semi-circle
  const radius = 120
  const strokeWidth = 40
  const center = radius + strokeWidth / 2
  const startAngle = -180
  const endAngle = 0
  
  // Calculate the SVG path for the semi-circle
  const getPath = (angle: number) => {
    const start = polarToCartesian(center, center, radius, startAngle)
    const end = polarToCartesian(center, center, radius, angle)
    const largeArcFlag = angle - startAngle <= 180 ? "0" : "1"
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y
    ].join(" ")
  }

  // Helper function to convert polar coordinates to cartesian
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-[400px] h-[500px] max-w-xl bg-[#1C1B3B] text-white border-0 shadow-lg rounded-[10px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-8">
        <CardTitle className="text-2xl font-bold">Activity</CardTitle>
        <Select defaultValue="month">
          <SelectTrigger className="w-[120px] bg-[#252451] border-0 text-white focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="bg-[#252451] border-[#252451] text-white">
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="quarter">Quarter</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-10">
        {/* Gauge Chart */}
        <div className="relative flex justify-center">
          <svg width={300} height={180} className="transform -rotate-180">
            {/* Background track */}
            <path
              d={getPath(0)}
              fill="none"
              stroke="#252451"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Hobby segment */}
            <path
              d={getPath(animationComplete ? -144 : -180)} // -180 + (180 * 0.2)
              fill="none"
              stroke="url(#hobbyGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            {/* Daily payment segment */}
            <path
              d={getPath(animationComplete ? -81 : -180)} // -180 + (180 * 0.55)
              fill="none"
              stroke="url(#dailyGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            {/* Gradients */}
            <defs>
              <linearGradient id="hobbyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#69D0F9" />
                <stop offset="100%" stopColor="#3EBBF4" />
              </linearGradient>
              <linearGradient id="dailyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7B61FF" />
                <stop offset="100%" stopColor="#9C89FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-4xl font-bold">{animationComplete ? "75%" : "0%"}</span>
            <p className="text-sm text-gray-300 mt-1">Total Activity</p>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7B61FF] to-[#9C89FF]" />
              <span className="text-base text-gray-300">Daily payment</span>
            </div>
            <span className="text-base font-medium">55%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#69D0F9] to-[#3EBBF4]" />
              <span className="text-base text-gray-300">Hobby</span>
            </div>
            <span className="text-base font-medium">20%</span>
          </div>
        </div>

        {/* View All Button */}
        <Button 
          variant="ghost" 
          className="w-full bg-[#252451] hover:bg-[#2E2C5E] text-white justify-between py-6 text-base font-medium"
        >
          View all activity
          <ChevronRight className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  )
}