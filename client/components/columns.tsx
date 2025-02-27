"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

export type Incident = {
  city: string
  date: string
  direction: string
  involved: string
  lanes_blocked: number
  latitude: number
  longitude: number
  time: string
}

export const columns: ColumnDef<Incident>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "direction",
    header: "Direction",
    cell: ({ row }) => <Badge variant="secondary">{row.getValue("direction")}</Badge>,
  },
  {
    accessorKey: "involved",
    header: "Vehicle Type",
  },
  {
    accessorKey: "lanes_blocked",
    header: "Lanes Blocked",
  },
]

