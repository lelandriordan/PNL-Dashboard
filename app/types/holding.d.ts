export type SparklineValue = {
  value: number
}

export type Holding = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  sparkline_in_7d: {
    price: SparklineValue[]
  }
}
