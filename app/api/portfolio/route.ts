import { NextResponse } from 'next/server'
import { Portfolio } from '@/types/portfolio'

export async function GET(request: Request) {

  // DEMO
  // Tweak the name property here and then look at the browser without clicking.
  // Notice it doesn't update.
  // Now click the browser and you will see the name revalidate to the updated one without refresh.
  const placeholderPortfolio: Portfolio = {
    id: 1,
    name: 'Example Portfolio'
  }

  return NextResponse.json(placeholderPortfolio)
}