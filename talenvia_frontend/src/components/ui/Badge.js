import React from "react";

// PUBLIC_INTERFACE
export function Badge({ variant = "default", children }) {
  /** Small status badge. Variants: default | primary | success | error */
  const cls =
    variant === "primary"
      ? "badge badge-primary"
      : variant === "success"
        ? "badge badge-success"
        : variant === "error"
          ? "badge badge-error"
          : "badge";
  return <span className={cls}>{children}</span>;
}
