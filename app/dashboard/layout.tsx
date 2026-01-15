// app/dashboard/layout.tsx 
import Navbar from "../components/Navaber";
import Sidebar from "../components/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
