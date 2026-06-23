import type React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Button({
  children,
  ariaLabel = "button",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={[
        "w-10 h-10 flex items-center justify-center rounded-xl border",
        "border-gray-100 dark:border-white/10",
        "text-gray-500 dark:text-gray-400",
        "hover:text-[#28a745] hover:border-[#28a745]",
        "transition-colors",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
