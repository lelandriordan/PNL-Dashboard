'use client'
import useSWR from 'swr'

const fetcher = (apiURL: string) => fetch(apiURL).then(res => res.json())

export default function useStatPnl1D() {
  const { data, error, isLoading } = useSWR('/api/portfolio/statistics/pnl/1d', fetcher)
  return { data, error, isLoading }
}

export function useStatPnl1M() {
  const { data, error, isLoading } = useSWR('/api/portfolio/statistics/pnl/1m', fetcher)
  return { data, error, isLoading }
}

export function useStatTotalValue() {
  const { data, error, isLoading } = useSWR('/api/portfolio/statistics/value', fetcher)
  return { data, error, isLoading }
}
