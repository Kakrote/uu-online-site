"use client";

import { useState, useEffect, useRef } from "react";

interface UseTextAnimationProps {
  delay?: number;
  duration?: number;
  triggerOnView?: boolean;
}

export function useTextAnimation({
  delay = 0,
  duration = 800,
  triggerOnView = true,
}: UseTextAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
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
  }, [triggerOnView, isAnimated]);

  useEffect(() => {
    if (isVisible && !isAnimated) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, isAnimated]);

  const animationClasses = isAnimated
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  const transitionClasses = `transition-all duration-${duration} ease-out`;

  return {
    ref,
    isAnimated,
    animationClasses,
    transitionClasses,
    style: {
      transitionDuration: `${duration}ms`,
    },
  };
}