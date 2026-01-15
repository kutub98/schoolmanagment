/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "../utils/auth";


export default function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }
    const decoded = verifyToken(token);
    if (!decoded || !allowedRoles.includes((decoded as any).role)) {
      router.push("/");
    } else {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [router, allowedRoles]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  return <>{children}</>;
}
