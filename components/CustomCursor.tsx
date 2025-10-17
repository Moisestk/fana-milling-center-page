'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor-hover]')) {
        setIsHovered(true);
        // Verificar si el elemento es oscuro
        const computedStyle = window.getComputedStyle(target);
        const backgroundColor = computedStyle.backgroundColor;
        const isDarkElement = backgroundColor.includes('rgb(30, 43, 79)') || 
                             backgroundColor.includes('rgb(18, 93, 163)') ||
                             target.classList.contains('bg-fana-navy') ||
                             target.classList.contains('bg-fana-primary');
        setIsDark(isDarkElement);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor-hover]')) {
        setIsHovered(false);
        setIsDark(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter, true);
    window.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter, true);
      window.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className={`rounded-full ${
          isDark ? 'bg-fana-white' : 'bg-fana-primary'
        }`}
        animate={{
          scale: isHovered ? 5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
        style={{
          width: 8,
          height: 8,
        }}
      />
    </motion.div>
  );
}
