import { auth } from "@/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function h2() {
  const getSession = await auth()

  if (getSession?.user) redirect("/")

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          You are not logged in.
        </h2>
        <p className="text-gray-600 mb-6">
          Access to this page is restricted. Please log in to continue.
        </p>
      </div>
    </div>
  )
}
