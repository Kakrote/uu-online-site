"use client";

import React from "react";
import { useTextAnimation } from "@/hooks/use-text-animation";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 800,
  as: Component = "div",
}: AnimatedTextProps) {
  const { ref, animationClasses, style } = useTextAnimation({
    delay,
    duration,
  });

  return (
    <Component
      ref={ref}
      className={`${animationClasses} transition-all ease-out ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  href: string;
  [key: string]: any;
}

export function AnimatedButton({
  children,
  className = "",
  delay = 0,
  duration = 800,
  ...props
}: AnimatedButtonProps) {
  const { ref, animationClasses, style } = useTextAnimation({
    delay,
    duration,
  });

  return (
    <div
      ref={ref}
      className={`${animationClasses} transition-all ease-out`}
      style={style}
    >
      <a className={className} {...props}>
        {children}
      </a>
    </div>
  );
}