import React from "react"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={`bg-white rounded-xl border border-autumn-soft py-6 shadow-sm ${className ?? ""}`}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={`p-6 flex items-center justify-center min-h-[100px] ${className ?? ""}`}
      {...props}
    />
  )
}

export {
  Card,
  CardContent,
}
