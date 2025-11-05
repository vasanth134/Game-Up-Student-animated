import { ClipboardList, TrendingUp, Gift } from 'lucide-react';
import React from 'react';

export const parentContent = [
  {
    id: 1,
    title: "As a parent, you'd:",
    icon: ClipboardList,
    description: "View your child's tasks",
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
    title: "As a parent, you'd:",
    icon: TrendingUp,
    description: "Track their progress",
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
    title: "As a parent, you'd:",
    icon: Gift,
    description: "Give them rewards",
    accentColor: "#ff10f0",
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

export default parentContent;
