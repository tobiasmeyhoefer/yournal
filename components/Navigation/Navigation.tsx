"use client"
import { useEffect, useState } from "react"
import Navbar from "./NavBar"
import SideBar from "./SideBar"
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation"


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const toggle = () => {
    // router.refresh()
    // console.log(oldPathname)
    // console.log(pathname)
    // if(oldPathname == pathname) {
    //   setIsOpen(!isOpen)
    // }
  }

  const superToggle = () => {
    setIsOpen(!isOpen)
    window.history
  }

  const pathname = usePathname()
  const [oldPathname, setOldPathname] = useState(pathname)

  useEffect(() => {
    setOldPathname(pathname)
    setIsOpen(false); 
}, [ pathname ]);

  const deactivate = () => {
    setIsOpen(false)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={superToggle} deactivate={deactivate}/>
    </>
  )
}
