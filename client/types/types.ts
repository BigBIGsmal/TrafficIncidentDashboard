export interface Incident {
    id: string
    date: string
    time: string
    city: string
    location: string
    latitude: number
    longitude: number
    type: string
    lanes_blocked: number
    direction: string
    involved: string
    source: string
  }
  
  export interface ChartData {
    name: string
    value: number
  }
  
  export interface TimeData {
    hour: string
    incidents: number
  }
  
  export interface CityData {
    city: string
    count: number
  }  