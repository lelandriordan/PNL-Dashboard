export function requestPermission(): void {
  if (!("Notification" in window)) {

    console.log("This browser does not support desktop notification")

  } else if (Notification.permission === "granted") {

    const notification = new Notification('Already Subscribed To Desktop Notifications')

  } else if (Notification.permission !== "denied") {

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification('Desktop Notifications Enabled')
      }
    });

  }
}

export function sendNotification(title: string, body: string): void {
  const options = {
    body: body,
    //... TODO: Add Logo, Links, Etc
  }

  const note = new Notification(title, options)
}

export function isSubscribed(): boolean {
  if (!("Notification" in window) || (Notification.permission !== "granted")) {
    console.log("This browser does not support desktop notification")
    return false
  } else {
    const notification = new Notification('Desktop Notifications Enabled')
    return true
  }
}

