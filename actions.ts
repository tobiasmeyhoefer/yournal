"use server"

import { db } from "@/db"
import { gedanken } from "@/schemas/schema"
import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { z } from "zod"

const {userId} = auth()

export async function createThought(prevState: any, formData: FormData) {
  // "use server"
  const schema = z.object({
    thought: z.string(),
  })

  const data = schema.parse({
    thought: formData.get("thought"),
  })

  try {
    await db.insert(gedanken).values([
      {
        user: userId!,
        thought: data.thought,
      },
    ])
    // revalidatePath("/gedanken")
    formData.delete("thought")
    return {message: "gedanken gespeichert"}
  } catch(e) {
    return {message: "irgendwas ist schiefgelaufen: " + e}
  }
}

export async function getThoughts() {

  try {
    const thougths = await db.select().from(gedanken).where(eq(gedanken.user, userId!))
    return thougths
  } catch(e) {
    throw new Error("Something went wrong heroooo")
  }
}
