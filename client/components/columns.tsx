"use client"

import type { ColumnDef } from "@tanstack/react-table"


export type Location = {
    location: string
    city: string
    incidents: number
    avgLanesBlocked: number
    commonType: string
  }

  export const columns: ColumnDef<Location>[] = [
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "incidents",
      header: "Total Incidents",
    },
    {
      accessorKey: "avgLanesBlocked",
      header: "Avg. Lanes Blocked",
    },
    {
      accessorKey: "commonType",
      header: "Most Common Type",
    },
  ]