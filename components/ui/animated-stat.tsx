"use client";

import React from "react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

interface AnimatedStatProps {
  value: React.ReactNode;
  label: string;
  index: number;
  totalStats: number;
}

function extractNumber(value: React.ReactNode): number {
  if (typeof value === "string") {
    // Extract numbers from strings like "15000+", "99%", etc.
    const match = value.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return 0;
}

function formatValue(originalValue: React.ReactNode, animatedNumber: number): React.ReactNode {
  if (typeof originalValue === "string") {
    // Replace the number in the original string with the animated number
    const suffix = originalValue.replace(/\d+/, "");
    return `${animatedNumber}${suffix}`;
  }
  if (typeof originalValue === "number") {
    return animatedNumber;
  }
  return originalValue;
}

export function AnimatedStat({ value, label, index, totalStats }: AnimatedStatProps) {
  const targetNumber = extractNumber(value);
  const { count, ref } = useCounterAnimation({
    end: targetNumber,
    duration: 2000,
    delay: index * 200, // Stagger the animations
  });

  const displayValue = targetNumber > 0 ? formatValue(value, count) : value;

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center text-white px-2 ${
        index !== totalStats - 1 ? "border-r border-white/20" : ""
      }`}
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
        {displayValue}
      </p>
      <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-center">
        {label}
      </p>
    </div>
  );
}