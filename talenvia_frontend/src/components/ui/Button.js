import React from "react";

// PUBLIC_INTERFACE
export function Button({ variant = "default", children, className = "", ...props }) {
  /** Talenvia themed button. Variants: default | primary | ghost */
  const cls =
    variant === "primary"
      ? "btn btn-primary"
      : variant === "ghost"
        ? "btn btn-ghost"
        : "btn";
  return (
    <button className={`${cls} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
