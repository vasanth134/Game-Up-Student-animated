import RoleSection from '../components/RoleSection';
import studentImage from 'figma:asset/94c334eaff88595aa26a02b72e6f94fadd3173e3.png';
import studentContent from '../data/studentContent';
import ControllerSymbols from '../components/ControllerSymbols';

export default function StudentPage() {
  return (
    <div className="relative">
      <RoleSection
        roleName="Student"
        roleImage={studentImage}
        contentCards={studentContent}
        rotationDirection="counterclockwise"
        mainIcon={(
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        )}
      />
      {/* controller symbols overlay for user-stories-style visuals */}
      <ControllerSymbols section="userStories" />
    </div>
  );
}
