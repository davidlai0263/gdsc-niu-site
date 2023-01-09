import { JSDOM } from 'jsdom'

export interface Events {
  upcoming: Event[]
  past: Event[]
}

export interface Event {
  date: string
  type: string
  title: string
  photo: string
  url: string
}

export async function getAllEvent() {
  const events: Events = { upcoming: [], past: [] }
  const response = await fetch(`https://gdsc.community.dev/national-ilan-university/`)
  const dom = new JSDOM(await response.text())
  const doc = dom.window.document
  const upcomingEvent = doc.getElementsByClassName('event-list')
  if (upcomingEvent) {
    for (let event of upcomingEvent) {
      events.upcoming.push({
        date: new Date(event.getElementsByClassName('date general-body--color').item(0)?.innerHTML!.split('strong')[1].replace('/', '').replace('<', '').replace('>', '')!).toLocaleDateString('zh-Tw'),
        type: event.getElementsByClassName('react-tags-root').item(0)?.getAttribute('data-tags') ?? '',
        title: event.getElementsByTagName('h4').item(0)?.innerHTML ?? '',
        photo: event.getElementsByClassName('picture __bds-thumbnail-roundness').item(0)?.getElementsByTagName('img').item(0)?.getAttribute('src') ?? '',
        url: 'https://gdsc.community.dev' + event.getElementsByClassName('btn btn-primary purchase-ticket').item(0)?.getAttribute('href'),
      })
    }
  }

  const pastEvent = doc.getElementsByClassName('past-event-list').item(0)?.getElementsByClassName('vertical-box-container')
  if (pastEvent) {
    for (let event of pastEvent) {
      events.past.push({
        date: new Date(event.getElementsByClassName('vertical-box--event-date').item(0)?.innerHTML!).toLocaleDateString('zh-Tw'),
        type: event.getElementsByClassName('vertical-box--event-type').item(0)?.innerHTML ?? '',
        title: event.getElementsByClassName('vertical-box--event-title').item(0)?.innerHTML.split('<br>')[0] ?? '',
        photo: event.getElementsByClassName('event-image').item(0)?.getAttribute('src') ?? '',
        url: 'https://gdsc.community.dev' + event.getAttribute('href'),
      })
    }
  }

  return events
}
