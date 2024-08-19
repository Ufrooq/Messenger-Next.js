"use client"
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";


export default function Home() {

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <h1>Loading....</h1>
    )
  }
  if (user) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}
