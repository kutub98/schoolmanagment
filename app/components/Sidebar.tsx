import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard/admin" className="hover:bg-gray-200 p-2 rounded">Admin</Link>
        <Link href="/dashboard/teacher" className="hover:bg-gray-200 p-2 rounded">Teacher</Link>
        <Link href="/dashboard/student" className="hover:bg-gray-200 p-2 rounded">Student</Link>
        <Link href="/dashboard/staff" className="hover:bg-gray-200 p-2 rounded">Staff</Link>
      </nav>
    </aside>
  );
}
