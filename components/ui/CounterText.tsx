'use client';

import { useCounterAnimation } from '@/hooks/use-counter-animation';

interface CounterTextProps {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

const CounterText = ({ value, className = '', duration = 2000, delay = 0 }: CounterTextProps) => {
  // Extract number from string (e.g., "60+" -> 60, "100k+" -> 100, "93%" -> 93)
  const extractNumber = (str: string): number => {
    const match = str.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };
  
  // Get the suffix (e.g., "+", "k+", "%")
  const getSuffix = (str: string): string => {
    const match = str.match(/\d+(.+)/);
    return match ? match[1] : '';
  };
  
  const number = extractNumber(value);
  const suffix = getSuffix(value);
  
  const { count, ref } = useCounterAnimation({
    end: number,
    duration,
    delay,
    startOnView: true,
    repeatOnView: false
  });

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default CounterText;