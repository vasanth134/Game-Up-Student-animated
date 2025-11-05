import RoleSection from '../components/RoleSection';
import teacherContent from '../data/teacherContent';
import ControllerSymbols from '../components/ControllerSymbols';

const teacherImage = "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function TeacherPage() {
  return (
    <div className="relative">
      <RoleSection
        roleName="Teacher"
        roleImage={teacherImage}
        contentCards={teacherContent}
        rotationDirection="counterclockwise"
        mainIcon={(
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        )}
      />
      <ControllerSymbols section="userStories" />
    </div>
  );
}
