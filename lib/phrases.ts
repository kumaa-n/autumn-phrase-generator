import phrasesData from "@/data/phrases.json"

export function getRandomPhrase(): string {
  const randomIndex = Math.floor(Math.random() * phrasesData.length)
  return phrasesData[randomIndex]
}

export function createTwitterShareUrl(phrase: string): string {
  const text = `「${phrase}」\n\n#秋フレーズジェネレーター\n`
  const url = window.location.origin
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
}
