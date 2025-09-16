"use client"

import { useState } from "react"
import { Share, RefreshCw } from "lucide-react"
import Link from "next/link"

import Button from "@/components/elements/Button"
import { Card, CardContent } from "@/components/elements/Card"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { getRandomPhrase, createTwitterShareUrl } from "@/lib/phrases"

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState<string>("")

  const generatePhrase = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    const newPhrase = getRandomPhrase()
    setCurrentPhrase(newPhrase)
    setIsGenerating(false)
  }

  const shareOnTwitter = () => {
    if (currentPhrase) {
      const shareUrl = createTwitterShareUrl(currentPhrase)
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <>
      <Header />

      <div className="flex-1 flex">
        <div className="mx-auto px-4 py-16">
          {/* タイトル */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">秋フレーズジェネレーター</h1>
            <p className="text-lg text-autumn-muted">フレーズから、秋っぽさを感じてください</p>
          </div>

          {/* フレーズ表示エリア */}
          <div className="max-w-2xl mx-auto">
            <Card className="mb-8">
              <CardContent>
                {currentPhrase ? (
                  <blockquote className="text-lg md:text-xl text-center text-autumn-emphasis font-medium">
                    「{currentPhrase}」
                  </blockquote>
                ) : (
                  <div className="text-center text-autumn-muted">
                    「フレーズを生成」ボタンをクリックして、
                    <br />
                    秋っぽさを感じるフレーズを見つけよう
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-4">
              <Button
                onClick={generatePhrase}
                disabled={isGenerating}
                className={"btn-neutral btn-lg"}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    生成中...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5" />
                    フレーズを生成
                  </>
                )}
              </Button>

              {currentPhrase && (
                <Button
                  onClick={shareOnTwitter}
                  className={"btn-neutral btn-lg"}
                >
                  <Share className="mr-2 h-5 w-5" />
                  Xで共有
                </Button>
              )}
            </div>

            <div className="text-center mt-8">
              <Link href="/phrases" className="text-autumn-primary autumn-hover-transition underline text-lg font-medium">
                すべてのフレーズを見る →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
