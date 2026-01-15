"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role"); // role should be set on login
    switch (role) {
      case "admin":
        router.push("/dashboard/admin");
        break;
      case "teacher":
        router.push("/dashboard/teacher");
        break;
      case "student":
        router.push("/dashboard/student");
        break;
      case "staff":
        router.push("/dashboard/staff");
        break;
      default:
        router.push("/"); // fallback to public page
    }
  }, [router]);

  return <div className="text-center mt-20 text-lg">Redirecting...</div>;
}
