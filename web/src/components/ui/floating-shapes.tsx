"use client";

import React, { useState, useEffect } from 'react';

interface FloatingShape {
  size: 'small' | 'medium' | 'large';
  position: { left: string; top: string };
  animationDuration: number;
  animationReverse?: boolean;
  opacity?: number;
  color?: 'blue' | 'pink';
}

interface GeometricShape {
  size: { width: string; height: string };
  position: { left: string; top: string };
  borderRadius: string;
  border: string;
  animationDuration: number;
  color: string;
}

interface Dot {
  size: string;
  position: { left: string; top: string };
  animationDuration: number;
  color: string;
}

interface FloatingShapesProps {
  shapes?: FloatingShape[];
  geometricShapes?: GeometricShape[];
  dots?: Dot[];
}

export function FloatingShapes({ shapes = [], geometricShapes = [], dots = [] }: FloatingShapesProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Floating gradient orbs */}
      {shapes.map((shape, index) => {
        const sizeClasses = {
          small: isMobile ? 'w-4 h-4' : 'w-8 h-8',
          medium: isMobile ? 'w-6 h-6' : 'w-12 h-12',
          large: isMobile ? 'w-8 h-8' : 'w-16 h-16'
        };

        const opacity = shape.opacity ?? (shape.size === 'small' ? 0.9 : shape.size === 'medium' ? 0.95 : 1.0);
        const animationName = shape.animationReverse ? 'float-reverse' : 'float';
        const gradientColor = shape.color === 'pink' ? 'rgba(255, 105, 180, 0.8)' : 'rgba(0, 240, 255, 0.8)';

        return (
          <div
            key={`shape-${index}`}
            className={`absolute ${sizeClasses[shape.size]} rounded-full blur-sm`}
            style={{
              background: `radial-gradient(circle, ${gradientColor} 0%, ${gradientColor.replace('0.8', '0')} 70%)`,
              left: shape.position.left,
              top: shape.position.top,
              opacity: opacity,
              animation: `${animationName} ${shape.animationDuration}s ease-in-out infinite`,
            }}
          />
        );
      })}

      {/* Geometric shapes with borders */}
      {geometricShapes.map((shape, index) => {
        const mobileScale = isMobile ? 0.6 : 1;
        const scaledWidth = parseInt(shape.size.width) * mobileScale;
        const scaledHeight = parseInt(shape.size.height) * mobileScale;

        return (
          <div
            key={`geometric-${index}`}
            className="absolute"
            style={{
              left: shape.position.left,
              top: shape.position.top,
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
              border: shape.border.replace('0.3', '0.8').replace('0.4', '0.9'),
              borderRadius: shape.borderRadius,
              opacity: 0.9,
              animation: `morphShape ${shape.animationDuration}s ease-in-out infinite`,
            }}
          />
        );
      })}

      {/* Animated dots */}
      {dots.map((dot, index) => {
        const mobileScale = isMobile ? 0.7 : 1;
        const scaledSize = parseInt(dot.size) * mobileScale;

        return (
          <div
            key={`dot-${index}`}
            className="absolute rounded-full"
            style={{
              left: dot.position.left,
              top: dot.position.top,
              width: `${scaledSize}px`,
              height: `${scaledSize}px`,
              backgroundColor: dot.color,
              opacity: 0.9,
              animation: `morphDot ${dot.animationDuration}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </>
  );
}
