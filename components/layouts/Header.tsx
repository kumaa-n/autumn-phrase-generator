"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="navbar bg-neutral text-base-100">
      <div className="flex-1">
        <Link href="/" className="text-base sm:text-lg">
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
