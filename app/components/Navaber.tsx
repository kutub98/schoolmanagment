import Link from "next/link";

export default function Navbar() {
  return (
    
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard/admin" className="hover:bg-gray-200 p-2 rounded">Admin</Link>
        <Link href="/dashboard/teacher" className="hover:bg-gray-200 p-2 rounded">Teacher</Link>
        <Link href="/dashboard/student" className="hover:bg-gray-200 p-2 rounded">Student</Link>
        <Link href="/dashboard/staff" className="hover:bg-gray-200 p-2 rounded">Staff</Link>
      </nav>
    
  );
}