import React from 'react';

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
  return (
    <>
      {/* Floating gradient orbs */}
      {shapes.map((shape, index) => {
        const sizeClasses = {
          small: 'w-8 h-8',
          medium: 'w-12 h-12',
          large: 'w-16 h-16'
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
      {geometricShapes.map((shape, index) => (
        <div
          key={`geometric-${index}`}
          className="absolute"
          style={{
            left: shape.position.left,
            top: shape.position.top,
            width: shape.size.width,
            height: shape.size.height,
            border: shape.border.replace('0.3', '0.8').replace('0.4', '0.9'),
            borderRadius: shape.borderRadius,
            opacity: 0.9,
            animation: `morphShape ${shape.animationDuration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Animated dots */}
      {dots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className="absolute rounded-full"
          style={{
            left: dot.position.left,
            top: dot.position.top,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: 0.9,
            animation: `morphDot ${dot.animationDuration}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}
