"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { MapComponent } from "@/components/map"
import { DatePickerWithRange } from "@/components/data-range"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Cell } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart"
import type { Incident } from "@/components/columns"

// Sample data - replace with your actual data
const incidents: Incident[] = [
  {
    city: "Pasig City",
    date: "8/20/2018",
    direction: "EB",
    involved: "TAXI AND MC",
    lanes_blocked: 1,
    latitude: 14.586343,
    longitude: 121.061481,
    time: "7:55 AM",
  },
  {
    city: "Pasig City",
    date: "2/25/2025",
    direction: "EB",
    involved: "TAXI AND MC",
    lanes_blocked: 1,
    latitude: 14.586343,
    longitude: 121.061481,
    time: "7:55 AM",
  },
  {
    city: "Mandaluyong",
    date: "8/20/2018",
    direction: "NB",
    involved: "L300",
    lanes_blocked: 1,
    latitude: 14.589432,
    longitude: 121.057243,
    time: "8:42 AM",
  },
  {
    city: "Makati City",
    date: "8/20/2018",
    direction: "SB",
    involved: "SUV AND L300",
    lanes_blocked: 1,
    latitude: 14.559818,
    longitude: 121.040737,
    time: "9:13 AM",
  },
  {
    city: "Mandaluyong",
    date: "8/20/2018",
    direction: "NB",
    involved: "L300",
    lanes_blocked: 1,
    latitude: 14.589432,
    longitude: 121.057243,
    time: "8:42 AM",
  },
  {
    city: "San Juan",
    date: "8/20/2018",
    direction: "EB",
    involved: "2 CARS",
    lanes_blocked: 1,
    latitude: 14.601846,
    longitude: 121.046754,
    time: "10:27 AM",
  },
  {
    city: "Makati City",
    date: "8/20/2018",
    direction: "SB",
    involved: "BUS",
    lanes_blocked: 1,
    latitude: 14.556079,
    longitude: 121.062936,
    time: "11:18 AM",
  },
  {
    city: "Quezon City",
    date: "8/20/2018",
    direction: "NB",
    involved: "CAR AND BUS",
    lanes_blocked: 1,
    latitude: 14.592515,
    longitude: 121.058225,
    time: "12:33 PM",
  },
  {
    city: "Mandaluyong",
    date: "8/20/2018",
    direction: "NB",
    involved: "3 CARS",
    lanes_blocked: 2,
    latitude: 14.574014,
    longitude: 121.04841,
    time: "12:39 PM",
  },
  {
    city: "Mandaluyong",
    date: "8/20/2018",
    direction: "NB",
    involved: "3 CARS",
    lanes_blocked: 2,
    latitude: 14.574014,
    longitude: 121.04841,
    time: "12:39 PM",
  },
  {
    city: "Quezon City",
    date: "8/20/2018",
    direction: "NB",
    involved: "BUS AND CAR",
    lanes_blocked: 1,
    latitude: 14.619717,
    longitude: 121.050978,
    time: "2:51 PM",
  },
  {
    city: "Pasig City",
    date: "8/20/2018",
    direction: "SB",
    involved: "TRUCK",
    lanes_blocked: 1,
    latitude: 14.577625,
    longitude: 121.073462,
    time: "4:14 PM",
  },
  {
    city: "Quezon City",
    date: "8/20/2018",
    direction: "NB",
    involved: "CLOSED VAN, TRUCK, CAR AND MC",
    lanes_blocked: 1,
    latitude: 14.638481,
    longitude: 121.07454,
    time: "5:17 PM",
  },
  {
    city: "Quezon City",
    date: "8/20/2018",
    direction: "NB",
    involved: "BUS",
    lanes_blocked: 1,
    latitude: 14.638481,
    longitude: 121.07454,
    time: "6:21 PM",
  },
  {
    city: "Quezon City",
    date: "8/21/2018",
    direction: "SB",
    involved: "BUS",
    lanes_blocked: 1,
    latitude: 14.628035,
    longitude: 121.047229,
    time: "7:05 AM",
  },
];

const cityData = [
  { name: "Quezon City", value: 45 },
  { name: "Manila", value: 32 },
  { name: "Makati", value: 28 },
  { name: "Pasig", value: 21 },
]

const vehicleData = [
  { name: "Bus", value: 35 },
  { name: "Car", value: 45 },
  { name: "Motorcycle", value: 20 },
  { name: "Truck", value: 15 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const timeData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  incidents: Math.floor(Math.random() * 20),
}))

export default function DashboardPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [totalBlockedLanes, setTotalBlockedLanes] = useState(0);

  const [totalIncidents,setTotalIncidents] = useState(0);

  useEffect(() => {
    setTotalIncidents(incidents.length); // Set incident count
  }, []);
  

  useEffect(() => {
    const total = incidents.reduce((sum, incident) => sum + incident.lanes_blocked, 0);
    setTotalBlockedLanes(total);
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <h2 className="text-2xl font-bold tracking-tight">Traffic Incidents Dashboard</h2>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Filters */}
        <div className="grid gap-4 md:grid-cols-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quezon">Quezon City</SelectItem>
              <SelectItem value="manila">Manila</SelectItem>
              <SelectItem value="makati">Makati</SelectItem>
            </SelectContent>
          </Select>



          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bus">Bus</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="motorcycle">Motorcycle</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Lanes Blocked" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Lane</SelectItem>
              <SelectItem value="2">2 Lanes</SelectItem>
              <SelectItem value="3">3+ Lanes</SelectItem>
            </SelectContent>
          </Select>

          <DatePickerWithRange />
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalIncidents}</div>
              <p className="text-xs text-muted-foreground">+2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalIncidents}</div>
              <p className="text-xs text-muted-foreground">Currently in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lanes Affected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBlockedLanes}</div>
              <p className="text-xs text-muted-foreground">Total blocked lanes</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Incidents Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={chartConfig}>
                <LineChart
                  data={timeData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <ChartTooltip />
                  <Line
                    type="monotone"
                    dataKey="incidents"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Incidents by City</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={chartConfig}>
                <BarChart
                  data={cityData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 10,
                    left: 50,
                    bottom: 0,
                  }}
                >
                  <ChartTooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Map and Vehicle Distribution */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Incident Locations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px]">
                <MapComponent incidents={incidents} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig}>
                  <PieChart>
                    <Pie
                      data={vehicleData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {vehicleData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 90} 70% 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={incidents} />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}