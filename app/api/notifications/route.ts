import { NextResponse } from 'next/server'
import path from 'path'
import fsPromises from 'fs/promises';

export async function GET(request: Request, response: NextResponse) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fsPromises.readFile(jsonDirectory + '/fakeNotifications.json', 'utf8')
  const parsedContents = JSON.parse(fileContents)

  const newNotification = {
    "sender": "Example Sender",
    "content": "Real Time Test Worked",
    "date": "1 Sec Ago"
  }
  const withNewNotification = [newNotification, ...parsedContents]

  // DEMO
  // Flip the comment below to simulate a new notification.
  // The notification list will update automatically.
  return NextResponse.json(parsedContents);
  // return NextResponse.json(withNewNotification);
}

export async function POST(request: Request, response: NextResponse) {

}