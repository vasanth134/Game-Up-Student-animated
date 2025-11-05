import React, { useState, useEffect, isValidElement, cloneElement } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Square, Circle } from 'lucide-react';

// Gaming controller button component - PlayStation style
const GameButton = ({ type, color }: { type: 'cross' | 'square' | 'circle' | 'triangle'; color: string }) => {
  const renderSymbol = () => {
    switch (type) {
      case 'cross':
        return <X size={80} strokeWidth={4} style={{ color, filter: `drop-shadow(0 0 12px ${color})` }} />;
      case 'square':
        return <Square size={80} strokeWidth={4} style={{ color, filter: `drop-shadow(0 0 12px ${color})` }} />;
      case 'circle':
        return <Circle size={80} strokeWidth={4} style={{ color, filter: `drop-shadow(0 0 12px ${color})` }} />;
      case 'triangle':
        return (
          <div className="relative w-20 h-20" style={{ color, filter: `drop-shadow(0 0 12px ${color})` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 20 2 20" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderSymbol()}
    </div>
  );
};

interface ContentCard {
  id: number;
  title: string;
  icon?: React.ComponentType<any>;
  customContent?: React.ReactNode;
  description: string;
  accentColor: string;
  buttons: Array<{
    id: number;
    type: 'cross' | 'square' | 'circle' | 'triangle';
    delay: number;
  }>;
}

interface RoleSectionProps {
  roleName: string;
  roleImage: string;
  contentCards: ContentCard[];
  /**
   * Controls the rotation direction for orbiting elements. 'clockwise' = default, 'counterclockwise' = reverse.
   */
  rotationDirection?: 'clockwise' | 'counterclockwise';
  /** optional main icon (overrides roleImage). SVGs should use currentColor for stroke/fill so accentColor applies */
  mainIcon?: React.ReactNode;
}

export default function RoleSection({ roleName, roleImage, contentCards, rotationDirection = 'clockwise', mainIcon }: RoleSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const DISPLAY_DURATION = 3500; // 3.5 seconds per card

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentCards.length);
    }, DISPLAY_DURATION);

    return () => clearInterval(timer);
  }, [contentCards.length]);

  const currentCard = contentCards[currentIndex];
  const IconComponent = currentCard.icon;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-950 snap-start">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated background circles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
              borderColor: currentCard.accentColor,
              opacity: 0.15
            }}
            animate={{
                  scale: [1, 1.15, 1],
                  rotate: rotationDirection === 'counterclockwise' ? [0, -180, -360] : [0, 180, 360]
                }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Controller Buttons - Background */}
      <AnimatePresence mode="wait">
        {currentCard.buttons.map((button, index) => {
          const positions = [
            { left: '12%', top: '18%' },
            { right: '12%', top: '25%' },
            { left: '8%', bottom: '22%' },
            { right: '15%', bottom: '18%' }
          ];
          
          return (
            <motion.div
              key={`${currentCard.id}-${button.id}`}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1],
                y: [0, -20, 0],
                rotate: [0, 360]
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 1.2,
                delay: button.delay,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: button.delay
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: button.delay
                }
              }}
              className="absolute pointer-events-none z-0"
              style={positions[index]}
            >
              <GameButton type={button.type} color={currentCard.accentColor} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Central Role Icon - Always present */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Subtle glow ring around role */}
          <motion.div
            className="absolute -inset-20 rounded-full"
            style={{
              background: `radial-gradient(circle, ${currentCard.accentColor}20, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Role Image or mainIcon (if provided) */}
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-900 border-4 flex items-center justify-center"
            style={{ 
              borderColor: currentCard.accentColor
            }}
            animate={{
              borderColor: currentCard.accentColor
            }}
            transition={{ duration: 0.5 }}
          >
            {mainIcon ? (
              // allow SVGs to inherit the accent color via currentColor
              <div className="flex items-center justify-center w-full h-full" style={{ color: currentCard.accentColor }}>
                {isValidElement(mainIcon)
                  ? cloneElement(mainIcon as React.ReactElement, ({
                      // force a smaller visual size by inline style (overrides svg class size)
                      style: {
                        ...(mainIcon as any).props?.style,
                        width: '56%',
                        height: '56%',
                      },
                    } as any))
                  : mainIcon}
              </div>
            ) : (
              <img 
                src={roleImage} 
                alt={roleName} 
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>

          {/* Orbiting task icon or text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              className="absolute"
              style={{
                left: '50%',
                top: '50%'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: rotationDirection === 'counterclockwise' ? -360 : 360
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            >
              <motion.div
                style={{
                  x: 160,
                  y: -30
                }}
                animate={{
                  y: [-30, -40, -30]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {currentCard.customContent ? (
                  // For custom content (like +XP)
                  <div 
                    className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center border-4 shadow-2xl"
                    style={{ 
                      borderColor: currentCard.accentColor
                    }}
                  >
                    {currentCard.customContent}
                  </div>
                ) : IconComponent ? (
                  // For icon slides
                  <div 
                    className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center border-4 shadow-2xl"
                    style={{ 
                      borderColor: currentCard.accentColor
                    }}
                  >
                    <IconComponent size={48} strokeWidth={2.5} style={{ color: currentCard.accentColor }} />
                  </div>
                ) : null}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Title - Top */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${currentCard.id}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-center"
        >
          <h2 className="text-5xl md:text-6xl text-white">
            {currentCard.title}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Description - Bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`desc-${currentCard.id}`}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-4xl md:text-5xl text-gray-300 max-w-3xl px-8">
            {currentCard.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator dots - Bottom center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        {contentCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="rounded-full transition-all duration-300"
            animate={{
              scale: index === currentIndex ? 1.5 : 1,
            }}
            style={{
              width: '14px',
              height: '14px',
              backgroundColor: index === currentIndex ? currentCard.accentColor : '#4b5563'
            }}
          />
        ))}
      </div>
    </div>
  );
}
