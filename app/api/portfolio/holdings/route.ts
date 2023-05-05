import { NextResponse } from 'next/server'
import path from 'path'
import fsPromises from 'fs/promises';
import { Holding } from '@/app/types/holding';

export async function GET(request: Request) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fsPromises.readFile(jsonDirectory + '/fakeHoldings.json', 'utf8')
  const parsedContents = JSON.parse(fileContents)

  // Format the fake CoinGecko data
  const formattedHoldings: Holding = parsedContents.map((h: any) => {
    const sparklines = h.sparkline_in_7d.price.map((d: any) => {
      return {value: d}
    })

    return { 
      ...h,
      sparkline_in_7d: {
        price: sparklines
      }
    }
  })

  return NextResponse.json(formattedHoldings);
}