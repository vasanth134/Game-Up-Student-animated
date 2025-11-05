import RoleSection from '../components/RoleSection';
import parentContent from '../data/parentContent';

const parentImage = "https://images.unsplash.com/photo-1758687126668-770815a22b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBmYW1pbHklMjBjYXJpbmd8ZW58MXx8fHwxNzYyMDYxNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function ParentPage() {
  return (
    <RoleSection roleName="Parent" roleImage={parentImage} contentCards={parentContent} />
  );
}
