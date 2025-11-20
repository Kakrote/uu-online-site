"use client";

import { useState, useEffect, useRef } from "react";

interface UseHoverCounterProps {
  end: number;
  duration?: number;
  isHovered: boolean;
}

export function useHoverCounter({
  end,
  duration = 1500,
  isHovered,
}: UseHoverCounterProps) {
  const [count, setCount] = useState(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (!isHovered) {
      setCount(0);
      isAnimatingRef.current = false;
      return;
    }

    // Don't start new animation if already animating
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
      setCount(currentValue);

      if (progress < 1 && isHovered) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [isHovered, end, duration]);

  return count;
}