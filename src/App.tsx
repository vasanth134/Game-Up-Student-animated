import { CheckSquare, Trophy, ListTodo, User, TrendingUp, ClipboardList, Gift, MessageSquare, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import ParentPage from './pages/ParentPage';
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';
import './styles/globals.css';

export default function App() {
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : '/'));

  useEffect(() => {
    const onHash = () => setHash(window.location.hash.replace(/^#/, ''));
    window.addEventListener('hashchange', onHash);
    // in case hash already set or changed before listener attached
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let Page = <Home />;
  if (hash === '/student' || hash === 'student') Page = <StudentPage />;
  if (hash === '/teacher' || hash === 'teacher') Page = <TeacherPage />;
  if (hash === '/parent' || hash === 'parent') Page = <ParentPage />;
  if (hash === '/admin' || hash === 'admin') Page = <AdminPage />;

  return (
    <div>
      {Page}
    </div>
  );
}
