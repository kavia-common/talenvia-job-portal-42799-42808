import React from "react";

// PUBLIC_INTERFACE
export function Badge({ variant = "default", children }) {
  /** Small status badge.
   * Variants: default | primary | success | error | warning | neutral
   */
  const cls =
    variant === "primary"
      ? "badge badge-primary"
      : variant === "success"
        ? "badge badge-success"
        : variant === "error"
          ? "badge badge-error"
          : variant === "warning"
            ? "badge badge-warning"
            : variant === "neutral"
              ? "badge badge-neutral"
              : "badge";
  return <span className={cls}>{children}</span>;
}
