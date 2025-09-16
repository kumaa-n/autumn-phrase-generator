import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
})

export const metadata: Metadata = {
  title: "秋フレーズジェネレーター",
  description: "フレーズから、秋っぽさを感じてください",
  icons: {
    icon: "/autumn-leaves.svg",
  },
  openGraph: {
    title: "秋フレーズジェネレーター",
    description: "フレーズから、秋っぽさを感じてください",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "秋フレーズジェネレーター",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "秋フレーズジェネレーター",
    description: "フレーズから、秋っぽさを感じてください",
    images: ["/ogp.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
