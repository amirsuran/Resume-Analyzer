import * as React from "react";

type AnimatedShinyTextProps = React.HTMLAttributes<HTMLDivElement>;

export function AnimatedShinyText({
  className,
  children,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <div
      className={[
        "inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-sm dark:border-sky-500/30 dark:bg-slate-950/60 dark:text-sky-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
