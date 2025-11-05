import RoleSection from '../components/RoleSection';
import adminContent from '../data/adminContent';

const adminImage = "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhZG1pbmlzdHJhdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjA2MTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function AdminPage() {
  return (
    <RoleSection roleName="School Admin" roleImage={adminImage} contentCards={adminContent} />
  );
}
