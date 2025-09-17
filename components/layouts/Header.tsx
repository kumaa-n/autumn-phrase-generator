"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="navbar bg-neutral text-base-100">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2 text-base sm:text-lg">
          <Image src="/autumn-leaves.svg" alt="ロゴ" width={24} height={24} priority />
          秋フレーズジェネレーター
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/phrases">フレーズ一覧</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
