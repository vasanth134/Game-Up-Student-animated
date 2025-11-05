import RoleSection from '../components/RoleSection';
import adminContent from '../data/adminContent';
import ControllerSymbols from '../components/ControllerSymbols';

const adminImage = "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhZG1pbmlzdHJhdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function AdminPage() {
  return (
    <div className="relative">
      <RoleSection
        roleName="School Admin"
        roleImage={adminImage}
        contentCards={adminContent}
        rotationDirection="counterclockwise"
        mainIcon={(
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )}
      />
      <ControllerSymbols section="userStories" />
    </div>
  );
}
