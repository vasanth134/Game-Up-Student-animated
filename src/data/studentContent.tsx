import { ListTodo, CheckSquare, Trophy } from 'lucide-react';
import React from 'react';

export const studentContent = [
  {
    id: 1,
    title: "As a student, you'd:",
    icon: ListTodo,
    description: "Have a list of tasks to do",
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
    title: "As a student, you'd:",
    icon: CheckSquare,
    description: "Complete the tasks",
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
    title: "As a student, you'd:",
    customContent: (
      <span className="text-2xl font-bold" style={{ color: "#ff10f0" }}>
        +XP
      </span>
    ),
    description: "Get points",
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
    title: "As a student, you'd:",
    icon: Trophy,
    description: "Exchange points for rewards",
    accentColor: "#ffea00",
    buttons: [
    //   { id: 1, type: 'cross' as const, delay: 0.2 },
    //   { id: 2, type: 'square' as const, delay: 0.4 },
    //   { id: 3, type: 'circle' as const, delay: 0.6 },
    //   { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

export default studentContent;
