'use client'
import useSWR from 'swr'

const fetcher = (apiURL: string) => fetch(apiURL).then(res => res.json())

function useHoldings() {
  const { data, error, isLoading } = useSWR('/api/portfolio/holdings', fetcher)
  return { data, error, isLoading }
}

export default useHoldings