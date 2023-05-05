import { NextResponse } from 'next/server'
import path from 'path'
import fsPromises from 'fs/promises';

export async function GET(request: Request) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fsPromises.readFile(jsonDirectory + '/fakeTotalValue.json', 'utf8')
  const parsedContents = JSON.parse(fileContents)

  return NextResponse.json(parsedContents);
}