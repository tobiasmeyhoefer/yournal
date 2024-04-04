import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {

  return (
    <>
      <main className="flex justify-center items-center h-full flex-col gap-4">
        <h1 className="text-5xl font-bold">YOURNAL</h1>
        <p className="text-1xl">Mehr als nur ein Tagebuch</p>
      </main>
    </>
  )
}