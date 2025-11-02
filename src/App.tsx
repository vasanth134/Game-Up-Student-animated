import { CheckSquare, Trophy, ListTodo, User, TrendingUp, ClipboardList, Gift, MessageSquare, Zap } from 'lucide-react';
import studentImage from 'figma:asset/94c334eaff88595aa26a02b72e6f94fadd3173e3.png';
import RoleSection from './components/RoleSection';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const studentContent = [
  {
    id: 1,
    title: "As a student, you'd:",
    icon: ListTodo,
    description: "Have a list of tasks to do",
    accentColor: "#00f0ff", // Neon cyan
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 2,
    title: "As a student, you'd:",
    icon: CheckSquare,
    description: "Complete the tasks",
    accentColor: "#39ff14", // Neon green
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
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
    accentColor: "#ff10f0", // Neon magenta
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 4,
    title: "As a student, you'd:",
    icon: Trophy,
    description: "Exchange points for rewards",
    accentColor: "#ffea00", // Neon yellow
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

const teacherContent = [
  {
    id: 1,
    title: "As a teacher, you'd:",
    icon: User,
    description: "Assign tasks",
    accentColor: "#00f0ff", // Neon cyan
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 2,
    title: "As a teacher, you'd:",
    icon: CheckSquare,
    description: "Evaluate submissions",
    accentColor: "#39ff14", // Neon green
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
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
    accentColor: "#ff10f0", // Neon magenta
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 4,
    title: "As a teacher, you'd:",
    icon: TrendingUp,
    description: "Monitor progress",
    accentColor: "#ffea00", // Neon yellow
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

const parentContent = [
  {
    id: 1,
    title: "As a parent, you'd:",
    icon: ClipboardList,
    description: "View your child's tasks",
    accentColor: "#00f0ff", // Neon cyan
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 2,
    title: "As a parent, you'd:",
    icon: TrendingUp,
    description: "Track their progress",
    accentColor: "#39ff14", // Neon green
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 3,
    title: "As a parent, you'd:",
    icon: Gift,
    description: "Give them rewards",
    accentColor: "#ff10f0", // Neon magenta
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

const adminContent = [
  {
    id: 1,
    title: "As an administrator, you'd:",
    icon: TrendingUp,
    description: "View student's progress",
    accentColor: "#00f0ff", // Neon cyan
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 2,
    title: "As an administrator, you'd:",
    icon: MessageSquare,
    description: "View teacher's efforts",
    accentColor: "#39ff14", // Neon green
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  },
  {
    id: 3,
    title: "As an administrator, you'd:",
    icon: Zap,
    description: "Get real time insights",
    accentColor: "#ff10f0", // Neon magenta
    buttons: [
      { id: 1, type: 'cross' as const, delay: 0.2 },
      { id: 2, type: 'square' as const, delay: 0.4 },
      { id: 3, type: 'circle' as const, delay: 0.6 },
      { id: 4, type: 'triangle' as const, delay: 0.8 }
    ]
  }
];

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <RoleSection 
        roleName="Student"
        roleImage={studentImage}
        contentCards={studentContent}
      />
      <RoleSection 
        roleName="Teacher"
        roleImage="https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        contentCards={teacherContent}
      />
      <RoleSection 
        roleName="Parent"
        roleImage="https://images.unsplash.com/photo-1758687126668-770815a22b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBmYW1pbHklMjBjYXJpbmd8ZW58MXx8fHwxNzYyMDYxNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        contentCards={parentContent}
      />
      <RoleSection 
        roleName="School Admin"
        roleImage="https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhZG1pbmlzdHJhdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        contentCards={adminContent}
      />
    </div>
  );
}
