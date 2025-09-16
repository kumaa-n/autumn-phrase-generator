import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "秋っぽいフレーズ一覧 | 秋フレーズジェネレーター",
  description: "秋っぽいフレーズをご覧いただけます",
}

export default function PhrasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
