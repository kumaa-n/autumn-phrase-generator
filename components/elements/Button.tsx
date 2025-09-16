import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({className, ...props }: ButtonProps) {
  return (
    <button
      className={`btn ${className ?? ""}`}
      {...props}
    />
  );
}
