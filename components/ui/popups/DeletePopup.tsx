"use client"

import { useState } from "react"
import { Button } from "../button"
import { SubmitButton } from "../SubmitButton"

const DeletePopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    return (
      <div className="absolute bg-black/70 top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-all">
        <div className="bg-white p-10 rounded-lg border border-black border-b-4 border-r-4 flex flex-col items-center justify-center gap-6">
          <p className="text-neutral-900">Möchtest du diesen Gedanken wirklich löschen?</p>
          <div className="flex gap-6">
            <SubmitButton text="Löschen"></SubmitButton>
            <Button
              className="bg-red-500 text-black border rounded-lg border-b-4 border-r-4 border-black hover:bg-red-400"
              onClick={() => setIsOpen(false)}
            >
              Abbruch
            </Button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <Button
        className="bg-red-300 text-black border rounded-lg border-b-4 border-r-4 border-black hover:bg-red-200"
        onClick={() => setIsOpen(true)}
      >
        Löschen
      </Button>
    )
  }
}

export default DeletePopup
