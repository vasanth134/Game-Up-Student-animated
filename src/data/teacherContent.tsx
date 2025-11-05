import { User, CheckSquare, TrendingUp } from 'lucide-react';
import React from 'react';

export const teacherContent = [
  {
    id: 1,
    title: "As a teacher, you'd:",
    icon: User,
    description: "Assign tasks",
    accentColor: "#00f0ff",
    buttons: [
    //   { id: 1, type: 'cross' as const, delay: 0.2 },
    //   { id: 2, type: 'square' as const, delay: 0.4 },
    //   { id: 3, type: 'circle' as const, delay: 0.6 },
    //   { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 2,
    title: "As a teacher, you'd:",
    icon: CheckSquare,
    description: "Evaluate submissions",
    accentColor: "#39ff14",
    buttons: [
    //   { id: 1, type: 'cross' as const, delay: 0.2 },
    //   { id: 2, type: 'square' as const, delay: 0.4 },
    //   { id: 3, type: 'circle' as const, delay: 0.6 },
    //   { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 3,
    title: "As a teacher, you'd:",
    customContent: (
      <span className="text-xl font-bold" style={{ color: "#ff10f0" }}>
        +10 XP
      </span>
    ),
    description: "Give points",
    accentColor: "#ff10f0",
    buttons: [
    //   { id: 1, type: 'cross' as const, delay: 0.2 },
    //   { id: 2, type: 'square' as const, delay: 0.4 },
    //   { id: 3, type: 'circle' as const, delay: 0.6 },
    //   { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 4,
    title: "As a teacher, you'd:",
    icon: TrendingUp,
    description: "Monitor progress",
    accentColor: "#ffea00",
    buttons: [
    //   { id: 1, type: 'cross' as const, delay: 0.2 },
    //   { id: 2, type: 'square' as const, delay: 0.4 },
    //   { id: 3, type: 'circle' as const, delay: 0.6 },
    //   { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

export default teacherContent;
