import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"

export default function SideBar({
  isOpen,
  toggle,
}: {
  isOpen: boolean
  toggle: () => void
}): JSX.Element {
  return (
    <div
      className="fixed md:hidden w-full bg-white bottom-0 top-0 flex justify-center"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "100%"}`,
      }}
    >
      <ul className="text-center text-xl w-full flex flex-col justify-center">
        <SignedIn>
          <li className="w-full">
            <Link
              onClick={toggle}
              href="/neuerEintrag"
              className="h-full flex justify-center items-center hover:font-bold hover:bg-lightGray py-8 transition-all"
            >
              neuer Gedanke
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle}
              href="/gedanken"
              className="h-full flex justify-center items-center hover:bg-lightGray py-8 hover:font-bold transition-all"
            >
              meine Gedanken
            </Link>
          </li>
        </SignedIn>
        <SignedOut>
          <li className="w-full">
            {/* <Link
              onClick={toggle}
              href="/neuerEintrag"
              className="h-full flex justify-center items-center hover:font-bold hover:bg-lightGray py-8 transition-all"
            >
              Anmelden
            </Link> */}
            <SignInButton>
              <button onClick={toggle} className="hover:font-bold transition-all py-8">Anmelden</button>
            </SignInButton>
          </li>
          <li>
            <SignUpButton>
              <button onClick={toggle} className="hover:font-bold transition-all py-8">Registrieren</button>
            </SignUpButton>
          </li>
        </SignedOut>
      </ul>
    </div>
  )
}
