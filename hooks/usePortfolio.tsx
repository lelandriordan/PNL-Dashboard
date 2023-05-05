'use client'
import useSWR from 'swr'

const fetcher = (apiURL: string) => fetch(apiURL).then(res => res.json())

function usePortfolio() {
  const { data: portfolio, error, isLoading } = useSWR('/api/portfolio', fetcher)
  return { portfolio, error, isLoading }
}

export default usePortfolio