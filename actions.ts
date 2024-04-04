"use server"

import { db } from "@/db"
import { gedanke } from "@/schemas/schema"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function createThought(prevState: any, formData: FormData) {
  // "use server"
  const schema = z.object({
    thought: z.string(),
  })

  const data = schema.parse({
    thought: formData.get("thought"),
  })
  try {
    await db.insert(gedanke).values([
      {
        thought: data.thought,
      },
    ])
    // revalidatePath("/gedanke")
    formData.delete("thought")
    return {message: "Gedanke gespeichert"}
  } catch(e) {
    return {message: "irgendwas ist schiefgelaufen"}
  }
}
