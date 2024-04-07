"use client"

import { createThought } from "@/actions"
import { Button } from "@/components/ui/button"
import { SubmitButton } from "@/components/ui/SubmitButton"
import { useRef } from "react"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
  message: "",
}

const NeuerEintrag = () => {
  const [state, formAction] = useFormState(createThought, initialState)
  const ref = useRef<HTMLFormElement>(null)

  return (
    <div className="flex w-full h-full justify-center items-center">
      <form
        ref={ref}
        className="flex flex-col gap-12 w-2/3 xl:w-1/3"
        action={(formData) => {
          formAction(formData)
          ref.current?.reset()
        }}
      >
        <textarea
          name="thought"
          required
          className="h-60 p-5 border border-gray-300 rounded-lg outline-none"
          placeholder="schreibe hier deine Gedanken auf"
        />
        <SubmitButton  text="Speichern"/>
        <p role="status">{state.message}</p>
      </form>
    </div>
  )
}

export default NeuerEintrag
