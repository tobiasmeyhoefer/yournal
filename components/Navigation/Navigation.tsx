"use client"
import { useEffect, useState } from "react"
import Navbar from "./NavBar"
import SideBar from "./SideBar"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {}

  const superToggle = () => {
    setIsOpen(!isOpen)
    window.history
  }

  const deactivate = () => {
    setIsOpen(false)
  }

  return (
    <div className="h-full">
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={superToggle} deactivate={deactivate}/>
    </div>
  )
}
