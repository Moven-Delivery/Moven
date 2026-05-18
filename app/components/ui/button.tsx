import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-soft shadow-red-200/60 hover:-translate-y-0.5 hover:bg-red-700",
  secondary:
    "bg-white text-dark ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-orange-200",
  ghost: "bg-transparent text-slate-700 hover:bg-white/80",
  dark: "bg-dark text-white hover:-translate-y-0.5 hover:bg-slate-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 px-3 text-sm",
  md: "h-11 gap-2 px-4 text-sm",
  lg: "h-12 gap-2 px-5 text-base",
};

export function buttonClasses({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ className, size, variant, ...props }: ButtonProps) {
  return <button className={buttonClasses({ className, size, variant })} {...props} />;
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  ariaLabel?: string;
}

export function ButtonLink({
  ariaLabel,
  children,
  className,
  href,
  size,
  variant,
}: ButtonLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={buttonClasses({ className, size, variant })}
      href={href}
    >
      {children}
    </Link>
  );
}
