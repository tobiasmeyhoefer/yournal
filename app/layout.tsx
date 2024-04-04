import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import { deDE } from "@clerk/localizations"
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

const space_grotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yournal",
  description: "Beyond Journaling",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: neobrutalism }} localization={deDE}>
      <html lang="de">
        <body className={space_grotesk.className}>
          <header className="absolute p-10 flex justify-between w-full items-center h-20">
            <div className="flex gap-10 items-center">
              <Link href={"/"} className="font-bold text-3xl mr-16 h-full">YOURNAL</Link>
              <SignedIn>
                <Link href={"/neuerEintrag"} className="h-full hover:font-bold transition-all">neuer Gedanke</Link>
                <Link href={"/gedanken"} className="h-full hover:font-bold transition-all">meine Gedanken</Link>
              </SignedIn>
            </div>
            <div className="flex gap-6">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button>Anmelden</button>
                </SignInButton>
                <SignUpButton>
                  <button>Registrieren</button>
                </SignUpButton>
              </SignedOut>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
