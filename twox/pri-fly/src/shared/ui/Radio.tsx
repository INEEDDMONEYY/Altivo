import type { InputHTMLAttributes } from "react";

export default function Radio({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="radio"
      className={`h-4 w-4 border-slate-300 text-red-500 focus:ring-red-500 ${className}`}
      {...props}
    />
  );
}
