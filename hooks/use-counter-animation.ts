"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  repeatOnView?: boolean; // New prop to control repeated animations
}

export function useCounterAnimation({
  end,
  duration = 2000,
  delay = 0,
  startOnView = true,
  repeatOnView = false, // Default to false for backward compatibility
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (repeatOnView) {
            // For repeat mode: reset states and start fresh
            setCount(0);
            setHasStarted(false);
            setIsVisible(true);
          } else if (!hasStarted) {
            // For one-time mode: only start if hasn't started before
            setIsVisible(true);
          }
        } else if (repeatOnView) {
          // Reset when element leaves viewport in repeat mode
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [startOnView, repeatOnView]); // Removed hasStarted from dependencies

  // Counter animation logic
  useEffect(() => {
    if (!isVisible) return;
    
    // For repeat mode, always allow animation; for one-time mode, check hasStarted
    if (!repeatOnView && hasStarted) return;

    setHasStarted(true);
    
    const startTime = Date.now() + delay;
    const startValue = 0;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, delay, hasStarted, repeatOnView]);

  return { count, ref };
}