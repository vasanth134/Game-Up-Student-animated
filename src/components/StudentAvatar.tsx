import { motion } from 'motion/react';

interface StudentAvatarProps {
  accentColor: string;
}

export function StudentAvatar({ accentColor }: StudentAvatarProps) {
  return (
    <div className="relative w-40 h-40">
      {/* Head */}
      <div className="absolute w-32 h-32 rounded-full bg-gray-800 left-1/2 -translate-x-1/2 top-8 border-4" style={{ borderColor: accentColor }}>
        {/* Face */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Eyes */}
          <div className="absolute top-12 left-8 w-3 h-3 rounded-full bg-white" />
          <div className="absolute top-12 right-8 w-3 h-3 rounded-full bg-white" />
          
          {/* Smile */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-8 h-4 border-b-2 border-white rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Graduation Cap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36">
        {/* Cap base */}
        <div 
          className="w-full h-3 rounded-sm border-2" 
          style={{ 
            backgroundColor: accentColor,
            borderColor: accentColor
          }} 
        />
        {/* Cap top (mortarboard) */}
        <div 
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-2 border-2"
          style={{ 
            backgroundColor: accentColor,
            borderColor: accentColor,
            transform: 'translateX(-50%) perspective(100px) rotateX(45deg)'
          }}
        />
        {/* Tassel */}
        <motion.div
          className="absolute right-8 top-0 w-1 h-6 rounded-full"
          style={{ backgroundColor: accentColor }}
          animate={{
            rotate: [0, 15, -15, 0],
            x: [0, 3, -3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="absolute bottom-0 w-3 h-3 rounded-full -left-1"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
      </div>
      
      {/* Body/Shoulders */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 rounded-t-full bg-gray-800 border-4 border-b-0"
        style={{ borderColor: accentColor }}
      />
    </div>
  );
}
