import phrasesData from "@/data/phrases.json"

export function getRandomPhrase(): string {
  const randomIndex = Math.floor(Math.random() * phrasesData.length)
  return phrasesData[randomIndex]
}

export function getAllPhrases(): string[] {
  return phrasesData
}

export function getPhrasesPaginated(
  page: number,
  perPage: number,
): {
  phrases: string[]
  totalPages: number
  currentPage: number
  hasNext: boolean
  hasPrev: boolean
} {
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  const phrases = phrasesData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(phrasesData.length / perPage)

  return {
    phrases,
    totalPages,
    currentPage: page,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  }
}

export function createTwitterShareUrl(phrase: string): string {
  const text = `「${phrase}」\n\n#秋フレーズジェネレーター\n`
  const url = window.location.origin
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
}
