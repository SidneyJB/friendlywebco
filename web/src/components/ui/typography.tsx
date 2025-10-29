import React from 'react';
import { cn } from '@/lib/utils';

// Single Typography component with variant prop
export function Typography({
  variant = "p",
  children,
  className,
  ...props
}: {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "small" | "muted";
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {

  const variants = {
    h1: "text-4xl font-bold text-slate-900 mb-6 leading-tight",
    h2: "text-3xl font-bold text-slate-900 mb-4",
    h3: "text-xl font-semibold text-slate-900 mb-2",
    h4: "text-lg font-semibold text-slate-900 mb-1",
    p: "text-slate-600 leading-relaxed",
    small: "text-sm text-slate-500",
    muted: "text-slate-500",
  };

  const Component = variant.startsWith('h') ? (variant as 'h1' | 'h2' | 'h3' | 'h4') : 'p';

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

// List components
export function Ul({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("space-y-2 text-slate-600", className)} {...props}>
      {children}
    </ul>
  );
}

export function Li({ children, className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("flex items-start gap-2", className)} {...props}>
      <span className="text-slate-400 mt-1.5">•</span>
      <span>{children}</span>
    </li>
  );
}

// Layout components
export function Section({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16", className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container mx-auto px-4", className)} {...props}>
      {children}
    </div>
  );
}

export function ContentWrapper({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-4xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
