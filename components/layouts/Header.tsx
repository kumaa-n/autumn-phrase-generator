"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  function NavLinks({ className, tabIndex = undefined }: { className: string, tabIndex?: number }) {
    const navLinks = [
      { href: "/", label: "ホーム" },
      { href: "/phrases", label: "フレーズ一覧" },
    ];

    return (
      <ul className={className} tabIndex={tabIndex}>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <header className="navbar bg-neutral text-base-100">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2 text-base sm:text-lg">
          <Image src="/autumn-leaves.svg" alt="ロゴ" width={24} height={24} priority />
          秋フレーズジェネレーター
        </Link>
      </div>
      <div className="flex-none">
        {/* デスクトップ */}
        <NavLinks  className="menu menu-horizontal px-1 hidden sm:flex" />

        {/* モバイル */}
        <div className="dropdown dropdown-end sm:hidden">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <Image src="/dots_menu.svg" alt="メニュー" width={30} height={30} priority />
          </button>
          <NavLinks tabIndex={0} className="dropdown-content menu bg-white rounded-box mt-2 w-52 p-2 shadow text-autumn-muted" />
        </div>
      </div>
    </header>
  )
}
