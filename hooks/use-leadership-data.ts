"use client"

import { useState, useEffect } from "react"

export interface LeadershipData {
  id: number
  name: string
  job_title: string
  image_url: string
  description: string
  quote: string
  biography: string
}

export interface IntellectualAsset {
  id: number
  name: string
  position: string
  image: string
  quote: string
  description: string
}

export function useLeadershipData() {
  const [data, setData] = useState<LeadershipData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLeadershipData = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://uucms.uudoon.in/api/leaders/?format=json")
        
        if (!response.ok) {
          throw new Error(`Failed to fetch leadership data: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch leadership data")
        console.error("Error fetching leadership data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchLeadershipData()
  }, [])

  // Transform API data to match component interface
  const transformedData: IntellectualAsset[] = data.map((leader) => ({
    id: leader.id,
    name: leader.name,
    position: leader.job_title,
    image: leader.image_url,
    quote: leader.quote,
    description: leader.description,
  }))

  return {
    data: transformedData,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-trigger the effect by forcing a re-mount or manual fetch
    }
  }
}