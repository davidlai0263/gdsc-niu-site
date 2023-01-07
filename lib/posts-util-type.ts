export interface HackTeamPages {
  team: Team
  notes: Note[]
}

export interface Note {
  id: string
  title: string
  content: string
  tags: any[]
  lastchangeAt: Date
  createdAt: Date
  lastchangeuser?: Lastchangeuser
  isVisited: boolean
  publishType: string
  publishedAt: Date
  userpath: null
  teampath: string
  permalink: null | string
  shortId: string
  bookmarked: boolean
  liked: boolean
  likedCount: number
}

export interface Lastchangeuser {
  name: string
  userpath: string
  photo: string
  biography: null
}

export interface Team {
  canViewAll: boolean
  canManage: boolean
  visibility: string
  members: null
  authors: null
  name: string
  path: string
  logo: string
  description: null
  createdAt: Date
}
