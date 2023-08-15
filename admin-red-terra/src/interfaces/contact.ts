export interface IContact {
  id: string
  bannerUrl: string
  telephone: string
  email: string
  description: string
  quote: string
  quoteAuthor: string
  language: 'en' | 'br'
  createdAt: Date
  updatedAt: Date
}
