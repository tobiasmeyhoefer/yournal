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
  // const { isSignedIn, isLoading, user } = useUser()
  return (
    <>
      <main className="flex justify-center items-center h-full flex-col gap-4">
        <h1 className="text-5xl font-bold">YOURNAL</h1>
        <p className="text-1xl">Mehr als nur ein Tagebuch</p>
      </main>
    </>
  )
}

// const Header = () => {
//   // const { isSignedIn } = useUser()

//   return (
//     <>
//       <header className="absolute p-10 flex justify-between w-full">
//         <div className="flex gap-6">
//           <SignedIn>
//             <Link href={"/neuerEintrag"}>Neuer Eintrag</Link>
//             <Link href={"/gedanken"}>Meine gedanken</Link>
//           </SignedIn>
//         </div>
//         <div className="flex gap-6">
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           <SignedOut>
//             <SignInButton>
//               <button>Anmelden</button>
//             </SignInButton>
//             <SignUpButton>
//               <button>Registrieren</button>
//             </SignUpButton>
//           </SignedOut>
//         </div>
//       </header>
//     </>
//   )
// }
