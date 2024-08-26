"use client"
import { PageLoader } from "@/components/PageLoader";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";


export default function Home() {

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <PageLoader />
    )
  }
  if (user) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}
