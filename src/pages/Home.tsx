import { useEffect, useState } from 'react';

export default function Home() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl mb-8">Game Up — Role pages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button onClick={() => (window.location.hash = '/student')} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">Student</button>
        <button onClick={() => (window.location.hash = '/teacher')} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">Teacher</button>
        <button onClick={() => (window.location.hash = '/parent')} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">Parent</button>
        <button onClick={() => (window.location.hash = '/admin')} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">School Admin</button>
      </div>

      <p className="mt-8 text-sm text-gray-400">{new Date(now).toLocaleString()}</p>
    </div>
  );
}
