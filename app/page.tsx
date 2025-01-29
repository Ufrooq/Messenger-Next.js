"use client"
import { PageLoader } from "@/components/PageLoader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <PageLoader />
    )
  }
  if (user) {
    router.push("/dashboard")
  } else {
    router.push("/login")
  }
}
