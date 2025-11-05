import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Symbol {
  id: string;
  type: 'triangle' | 'circle' | 'cross' | 'square';
  x: number;
  y: number;
  size: number;
  rotation: number;
}

interface ControllerSymbolsProps {
  section?: 'hero' | 'narrative1' | 'narrative2' | 'using' | 'improve' | 'userStories' | 'contact';
}

const ControllerSymbols = ({ section = 'hero' }: ControllerSymbolsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const symbolsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Define symbols with different positions for each section
  const getSymbolsConfig = (): Symbol[] => {
    const configs: Record<string, Symbol[]> = {
      hero: [
        { id: '1', type: 'triangle', x: 15, y: 20, size: 140, rotation: 0 },
        { id: '2', type: 'circle', x: 85, y: 25, size: 130, rotation: 0 },
        { id: '3', type: 'cross', x: 10, y: 70, size: 135, rotation: 0 },
        { id: '4', type: 'square', x: 80, y: 75, size: 125, rotation: 0 },
        { id: '5', type: 'triangle', x: 50, y: 15, size: 120, rotation: 180 },
        { id: '6', type: 'circle', x: 25, y: 45, size: 115, rotation: 0 },
        { id: '7', type: 'square', x: 60, y: 60, size: 110, rotation: 45 },
        { id: '8', type: 'cross', x: 40, y: 80, size: 105, rotation: 90 },
        { id: '9', type: 'triangle', x: 70, y: 40, size: 100, rotation: 270 },
        { id: '10', type: 'circle', x: 90, y: 55, size: 95, rotation: 0 },
        { id: '11', type: 'cross', x: 5, y: 40, size: 90, rotation: 45 },
        { id: '12', type: 'square', x: 35, y: 10, size: 85, rotation: 0 },
      ],
      narrative1: [
        { id: '1', type: 'triangle', x: 20, y: 30, size: 150, rotation: 45 },
        { id: '2', type: 'circle', x: 75, y: 20, size: 140, rotation: 0 },
        { id: '3', type: 'cross', x: 15, y: 65, size: 145, rotation: 90 },
        { id: '4', type: 'square', x: 85, y: 70, size: 135, rotation: 45 },
        { id: '5', type: 'triangle', x: 45, y: 10, size: 130, rotation: 135 },
        { id: '6', type: 'circle', x: 30, y: 50, size: 125, rotation: 0 },
        { id: '7', type: 'cross', x: 60, y: 55, size: 120, rotation: 180 },
        { id: '8', type: 'square', x: 10, y: 25, size: 115, rotation: 90 },
        { id: '9', type: 'triangle', x: 90, y: 45, size: 110, rotation: 0 },
        { id: '10', type: 'circle', x: 50, y: 80, size: 105, rotation: 0 },
        { id: '11', type: 'square', x: 5, y: 10, size: 100, rotation: 135 },
        { id: '12', type: 'cross', x: 95, y: 15, size: 95, rotation: 270 },
      ],
      narrative2: [
        { id: '1', type: 'triangle', x: 10, y: 25, size: 155, rotation: 90 },
        { id: '2', type: 'circle', x: 80, y: 30, size: 145, rotation: 0 },
        { id: '3', type: 'cross', x: 20, y: 75, size: 150, rotation: 180 },
        { id: '4', type: 'square', x: 75, y: 65, size: 140, rotation: 90 },
        { id: '5', type: 'triangle', x: 55, y: 20, size: 135, rotation: 270 },
        { id: '6', type: 'circle', x: 35, y: 55, size: 130, rotation: 0 },
        { id: '7', type: 'square', x: 15, y: 45, size: 125, rotation: 45 },
        { id: '8', type: 'cross', x: 65, y: 10, size: 120, rotation: 90 },
        { id: '9', type: 'triangle', x: 90, y: 60, size: 115, rotation: 180 },
        { id: '10', type: 'circle', x: 45, y: 85, size: 110, rotation: 0 },
        { id: '11', type: 'cross', x: 5, y: 5, size: 105, rotation: 45 },
        { id: '12', type: 'square', x: 95, y: 90, size: 100, rotation: 270 },
      ],
      using: [
        { id: '1', type: 'triangle', x: 12, y: 35, size: 160, rotation: 135 },
        { id: '2', type: 'circle', x: 88, y: 25, size: 150, rotation: 0 },
        { id: '3', type: 'cross', x: 18, y: 70, size: 155, rotation: 270 },
        { id: '4', type: 'square', x: 82, y: 80, size: 145, rotation: 135 },
        { id: '5', type: 'triangle', x: 48, y: 12, size: 140, rotation: 315 },
        { id: '6', type: 'circle', x: 28, y: 48, size: 135, rotation: 0 },
        { id: '7', type: 'square', x: 65, y: 58, size: 130, rotation: 90 },
        { id: '8', type: 'cross', x: 8, y: 15, size: 125, rotation: 0 },
        { id: '9', type: 'triangle', x: 92, y: 55, size: 120, rotation: 225 },
        { id: '10', type: 'circle', x: 38, y: 82, size: 115, rotation: 0 },
        { id: '11', type: 'cross', x: 75, y: 5, size: 110, rotation: 180 },
        { id: '12', type: 'square', x: 5, y: 90, size: 105, rotation: 315 },
      ],
      improve: [
        { id: '1', type: 'circle', x: 18, y: 28, size: 165, rotation: 0 },
        { id: '2', type: 'triangle', x: 82, y: 22, size: 158, rotation: 45 },
        { id: '3', type: 'square', x: 14, y: 72, size: 162, rotation: 90 },
        { id: '4', type: 'cross', x: 88, y: 78, size: 148, rotation: 180 },
        { id: '5', type: 'circle', x: 52, y: 18, size: 142, rotation: 0 },
        { id: '6', type: 'triangle', x: 32, y: 52, size: 138, rotation: 270 },
        { id: '7', type: 'cross', x: 68, y: 62, size: 132, rotation: 45 },
        { id: '8', type: 'square', x: 6, y: 12, size: 128, rotation: 135 },
        { id: '9', type: 'circle', x: 94, y: 48, size: 122, rotation: 0 },
        { id: '10', type: 'triangle', x: 42, y: 88, size: 118, rotation: 315 },
        { id: '11', type: 'square', x: 78, y: 8, size: 112, rotation: 225 },
        { id: '12', type: 'cross', x: 24, y: 38, size: 108, rotation: 90 },
      ],
      userStories: [
        { id: '1', type: 'square', x: 16, y: 32, size: 170, rotation: 180 },
        { id: '2', type: 'cross', x: 84, y: 28, size: 163, rotation: 270 },
        { id: '3', type: 'circle', x: 12, y: 68, size: 168, rotation: 0 },
        { id: '4', type: 'triangle', x: 86, y: 74, size: 155, rotation: 135 },
        { id: '5', type: 'square', x: 54, y: 16, size: 145, rotation: 90 },
        { id: '6', type: 'cross', x: 36, y: 54, size: 140, rotation: 45 },
        { id: '7', type: 'circle', x: 64, y: 64, size: 135, rotation: 0 },
        { id: '8', type: 'triangle', x: 4, y: 20, size: 130, rotation: 315 },
        { id: '9', type: 'square', x: 96, y: 52, size: 125, rotation: 225 },
        { id: '10', type: 'cross', x: 46, y: 84, size: 120, rotation: 180 },
        { id: '11', type: 'circle', x: 72, y: 4, size: 115, rotation: 0 },
        { id: '12', type: 'triangle', x: 28, y: 42, size: 110, rotation: 90 },
      ],
      contact: [
        { id: '1', type: 'triangle', x: 20, y: 30, size: 175, rotation: 60 },
        { id: '2', type: 'circle', x: 80, y: 26, size: 168, rotation: 0 },
        { id: '3', type: 'cross', x: 16, y: 74, size: 172, rotation: 135 },
        { id: '4', type: 'square', x: 84, y: 76, size: 162, rotation: 270 },
        { id: '5', type: 'triangle', x: 50, y: 14, size: 148, rotation: 240 },
        { id: '6', type: 'circle', x: 30, y: 56, size: 143, rotation: 0 },
        { id: '7', type: 'square', x: 70, y: 60, size: 138, rotation: 180 },
        { id: '8', type: 'cross', x: 8, y: 18, size: 133, rotation: 45 },
        { id: '9', type: 'triangle', x: 92, y: 46, size: 128, rotation: 120 },
        { id: '10', type: 'circle', x: 40, y: 86, size: 123, rotation: 0 },
        { id: '11', type: 'square', x: 60, y: 6, size: 118, rotation: 315 },
        { id: '12', type: 'cross', x: 26, y: 44, size: 113, rotation: 90 },
      ],
    };

    return configs[section] || configs.hero;
  };

  const symbols = getSymbolsConfig();

  // Assign one color per symbol type
  const getColorForType = (type: Symbol['type']): string => {
    switch (type) {
      case 'triangle': return '#746CFE'; // Purple
      case 'circle': return '#AD0DBF';    // Pink
      case 'cross': return '#D91832';     // Red
      case 'square': return '#1A0BC1';    // Blue
    }
  };

  const renderSymbol = (symbol: Symbol) => {
    const color = getColorForType(symbol.type);
    const neonFilter = `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 15px ${color}) drop-shadow(0 0 20px ${color})`;
    
    switch (symbol.type) {
      case 'triangle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: neonFilter }}>
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'circle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: neonFilter }}>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={color}
              strokeWidth="5"
            />
          </svg>
        );
      case 'cross':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: neonFilter }}>
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="75"
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              x1="75"
              y1="25"
              x2="25"
              y2="75"
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'square':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: neonFilter }}>
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate symbols on mount
      symbolsRef.current.forEach((symbol, index) => {
        if (!symbol) return;

        // Initial animation
        gsap.fromTo(
          symbol,
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 0.6,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
            delay: index * 0.1,
          }
        );

        // Floating animation
        gsap.to(symbol, {
          y: `+=${Math.random() * 30 - 15}`,
          x: `+=${Math.random() * 20 - 10}`,
          rotation: `+=${Math.random() * 30 - 15}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [section]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {symbols.map((symbol, index) => {
        // remove shapes that fall into the central orbit area (a circular hole)
        const dx = symbol.x - 50;
        const dy = symbol.y - 50;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const ORBIT_CLEAR_RADIUS = 35; // percent radius from center to keep clear
        if (distance < ORBIT_CLEAR_RADIUS) return null;

        return (
          <div
            key={symbol.id}
            ref={(el) => (symbolsRef.current[index] = el)}
            className="absolute will-change-transform"
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              width: `${symbol.size}px`,
              height: `${symbol.size}px`,
              transform: `translate(-50%, -50%) rotate(${symbol.rotation}deg)`,
            }}
          >
            {renderSymbol(symbol)}
          </div>
        );
      })}
    </div>
  );
};

export default ControllerSymbols;
