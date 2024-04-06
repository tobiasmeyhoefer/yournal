"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function NavBar({
  toggle,
  deactivate,
}: {
  toggle: () => void
  deactivate: () => void
}) {
  const pathname = usePathname()

  return (
    <nav className="w-full h-32 sticky top-0 flex justify-center z-20">
      <div className="flex justify-between items-center h-full w-full max-w-screen-2xl">
        <button type="button" className="inline-flex items-center md:hidden pl-10" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 -960 960 960" width="42">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        <ul className="hidden md:flex gap-x-6 items-center w-full h-full">
          <SignedIn>
            <li className="h-full text-lg min-w-60">
              <Link
                href="/neuerEintrag"
                className={`h-full flex justify-center items-center hover:font-bold transition-all ${
                  pathname === "/neuerEintrag" ? "font-bold" : ""
                }`}
              >
                neuer Gedanke
              </Link>
            </li>
            <li className="h-full text-lg min-w-60">
              <Link
                href="/gedanken"
                className={`h-full flex justify-center items-center hover:font-bold transition-all ${
                  pathname === "/gedanken" ? "font-bold" : ""
                }`}
              >
                meine Gedanken
              </Link>
            </li>
          </SignedIn>
        </ul>
        <div className="gap-6 flex">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="hidden md:flex">
            <SignedOut>
              <SignInButton>
                <button>Anmelden</button>
              </SignInButton>
              <SignUpButton>
                <button>Registrieren</button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
        <Link
          href={"/"}
          onClick={deactivate}
          className="font-bold text-xl h-full w-60 flex justify-center items-center"
        >
          YOURNAL
        </Link>
      </div>
    </nav>
  )
}
