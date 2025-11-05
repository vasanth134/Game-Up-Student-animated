import RoleSection from '../components/RoleSection';
import parentContent from '../data/parentContent';
import ControllerSymbols from '../components/ControllerSymbols';

const parentImage = "https://images.unsplash.com/photo-1758687126668-770815a22b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBmYW1pbHklMjBjYXJpbmd8ZW58MXx8fHwxNzYyMDYxNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function ParentPage() {
  return (
    <div className="relative">
      <RoleSection
        roleName="Parent"
        roleImage={parentImage}
        contentCards={parentContent}
        rotationDirection="counterclockwise"
        mainIcon={(
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )}
      />
      <ControllerSymbols section="userStories" />
    </div>
  );
}
