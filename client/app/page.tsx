"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, Pie, PieChart, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DataTable } from "../components/data-table"
import { columns } from "../components/columns"
import { MapComponent } from "../components/map"
import TrafficDataComponent from "@/components/traffic-data";

const incidentTypes = [
  { name: "Vehicular Accident", value: 10 },
  { name: "Stalled Vehicle", value: 7 },
  { name: "Multiple Collision", value: 4 },
  { name: "Road Work", value: 3 },
  { name: "Vehicle Fire", value: 2 },
];

const cityData = [
  { city: "Quezon City", count: 9 },
  { city: "Pasig City", count: 6 },
  { city: "Makati City", count: 5 },
  { city: "Mandaluyong", count: 4 },
  { city: "San Juan", count: 2 },
  { city: "Pasay City", count: 3 },
  { city: "Marikina", count: 2 },
];

const vehicleTypes = [
  { type: "Car", count: 10 },
  { type: "Bus", count: 6 },
  { type: "Motorcycle", count: 5 },
  { type: "Truck", count: 4 },
  { type: "Taxi", count: 3 },
  { type: "SUV", count: 2 },
  { type: "Van", count: 2 },
  { type: "PUJ", count: 2 },
];

const directionData = [
  { direction: "NB", value: 10 },
  { direction: "SB", value: 8 },
  { direction: "EB", value: 6 },
  { direction: "WB", value: 3 },
];

export default function DashboardPage() {
  return (
    <main className="p-6">
    <h1 className="text-2xl font-bold mb-4">Traffic Accident Dashboard</h1>
    <TrafficDataComponent />
  </main>
  )
}

