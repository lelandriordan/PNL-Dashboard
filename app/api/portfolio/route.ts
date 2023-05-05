import { NextResponse } from 'next/server'
import { Portfolio } from '@/app/types/portfolio'

export async function GET(request: Request) {
  const placeholderPortfolio: Portfolio = {
    id: 1,
    name: 'Example Portfolio'
  }

  return NextResponse.json(placeholderPortfolio)
}