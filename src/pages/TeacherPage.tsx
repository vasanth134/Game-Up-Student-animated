import RoleSection from '../components/RoleSection';
import teacherContent from '../data/teacherContent';

const teacherImage = "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function TeacherPage() {
  return (
    <RoleSection roleName="Teacher" roleImage={teacherImage} contentCards={teacherContent} />
  );
}
