import { JSDOM } from 'jsdom'

export interface CardDetail {
  name: string
  company: string
  title: string
  photo: string
}

export async function getAllMember() {
  const cardDetails: CardDetail[] = []
  const response = await fetch(`https://gdsc.community.dev/national-ilan-university/`)
  const dom = new JSDOM(await response.text())
  const doc = dom.window.document
  const peopleCard = doc.getElementsByClassName('people-card general-card')
  for (let person of peopleCard) {
    cardDetails.push({
      name: person.getElementsByClassName('people-card--name').item(0)?.innerHTML ?? '',
      company: person.getElementsByClassName('people-card--company').item(0)?.innerHTML ?? '',
      title: person.getElementsByClassName('people-card--title').item(0)?.innerHTML ?? '',
      photo: person.getElementsByClassName('people-card--avatar').item(0)?.getAttribute('src') ?? '',
    })
  }

  return cardDetails
}
