import RoleSection from '../components/RoleSection';
import studentImage from 'figma:asset/94c334eaff88595aa26a02b72e6f94fadd3173e3.png';
import studentContent from '../data/studentContent';
import ControllerSymbols from '../components/ControllerSymbols';

export default function StudentPage() {
  return (
    <div className="relative">
      <RoleSection roleName="Student" roleImage={studentImage} contentCards={studentContent} />
      {/* controller symbols overlay for user-stories-style visuals */}
      <ControllerSymbols section="userStories" />
    </div>
  );
}
