"use client"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"
import { Button } from "./button"

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus()

  if (pending) {
    return (
      <Button className="bg-red-200 text-black border rounded-lg border-b-4 border-r-4 border-black" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {text}
      </Button>
    )
  } else {
    return (
      <Button type="submit" className="bg-red-300 text-black border rounded-lg border-b-4 border-r-4 border-black hover:bg-red-200" disabled={pending}>
        {text}
      </Button>
    )
  }
}
