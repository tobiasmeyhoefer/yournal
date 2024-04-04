"use client"

import { createThought } from "@/actions"
import { useFormState, useFormStatus } from "react-dom"

const initialState = {
  message: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending} className="bg-gray-900 text-gray-50 p-3 rounded-lg hover:bg-gray-800">
      speichern
    </button>
  )
}

const NeuerEintrag = () => {
  const [state, formAction] = useFormState(createThought, initialState)

  return (
    <div className="flex w-full h-full justify-center items-center">
      <form className="flex flex-col gap-12 w-1/3" action={formAction}>
        <textarea
          name="thought"
          required
          className="h-60 p-5 border border-gray-400 rounded-lg outline-none"
          placeholder="schreibe hier deine Gedanken auf"
        />
        <SubmitButton/>
        <p role="status">{state.message}</p>
      </form>
    </div>
  )
}

export default NeuerEintrag
