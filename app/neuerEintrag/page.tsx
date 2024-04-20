"use client"

import { createThought } from "@/actions"
import FlyingTips from "@/components/FlyingTips"
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
    <>
      <div className="flex w-full h-full justify-center items-center z-10">
        <form
          ref={ref}
          className="flex flex-col gap-12 w-11/12 md:w-2/3 xl:w-1/3"
          action={(formData) => {
            formAction(formData)
            ref.current?.reset()
          }}
        >
          <textarea
            name="thought"
            required
            className="h-60 p-5 border border-black border-b-4 border-r-4 rounded-lg outline-none bg-white dark:bg-neutral-800"
            placeholder="schreibe hier deine Gedanken auf"
          />
          <SubmitButton  text="Speichern"/>
          <p role="status">{state.message}</p>
        </form>
      </div>
      <FlyingTips/>
    </>
  )
}

export default NeuerEintrag
