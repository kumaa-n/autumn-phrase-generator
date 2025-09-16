"use client"

import { useState, useEffect } from "react"

import Button from "@/components/elements/Button"
import { Card, CardContent } from "@/components/elements/Card"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { getPhrasesPaginated } from "@/lib/phrases"

export default function PhrasesPage() {
  const perPage: number = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [phrasesData, setPhrasesData] = useState<{
    phrases: string[]
    totalPages: number
    currentPage: number
    hasNext: boolean
    hasPrev: boolean
  } | null>(null)

  useEffect(() => {
    const data = getPhrasesPaginated(currentPage, perPage)
    setPhrasesData(data)
  }, [currentPage])

  const goToNextPage = () => {
    if (phrasesData?.hasNext) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const goToPrevPage = () => {
    if (phrasesData?.hasPrev) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  if (!phrasesData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />

      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          {/* タイトル */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">秋フレーズ一覧</h1>
            <p className="text-lg text-autumn-muted">秋のようなフレーズをご覧いただけます</p>
          </div>

          {/* カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {phrasesData.phrases.map((phrase, index) => (
              <Card
                key={`${currentPage}-${index}`}
              >
                <CardContent>
                  <blockquote className="text-sm sm:text-base md:text-lg text-center text-autumn-emphasis font-medium leading-relaxed">
                    「{phrase}」
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              onClick={goToPrevPage}
              disabled={!phrasesData.hasPrev}
              className={"btn-neutral w-full sm:w-auto"}
            >
              前のページ
            </Button>

            <div className="text-center text-autumn-muted bg-autumn-soft px-4 py-2 rounded-lg shadow-sm order-first sm:order-none">
              {phrasesData.currentPage} / {phrasesData.totalPages}
            </div>

            <Button
              onClick={goToNextPage}
              disabled={!phrasesData.hasNext}
              className={"btn-neutral w-full sm:w-auto"}
            >
              次のページ
            </Button>
          </div>

          {/* ページ情報 */}
          <div className="text-center text-autumn-muted bg-autumn-soft px-4 py-2 mt-8 rounded-lg inline-block shadow-sm">
            全 {phrasesData.totalPages * perPage} 件中 {(phrasesData.currentPage - 1) * perPage + 1} -{" "}
            {Math.min(phrasesData.currentPage * perPage, phrasesData.totalPages * perPage)} 件を表示
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
