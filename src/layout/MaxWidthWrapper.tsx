import React from "react";
import { cn } from "../lib/utils";

interface MaxWidthWrapperProps {
  className: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <main
      className={cn(
        "mx-auto h-full max-w-screen-2xl overflow-hidden px-2 py-4",
        className
      )}
    >
      {children}
    </main>
  );
};
export default MaxWidthWrapper;
