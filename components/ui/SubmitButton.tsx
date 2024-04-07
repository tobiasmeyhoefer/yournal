'use client'
 
import { useFormStatus } from 'react-dom'
import { Button } from './button'
 
export function SubmitButton({text}: {text: string}) {
  const { pending } = useFormStatus()
 
  return (
    <Button type="submit" className='bg-red-300 text-black' disabled={pending}>
      {text}
    </Button>
  )
}