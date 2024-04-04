"use server"

import { db } from "@/db"
import { gedanken } from "@/schemas/schema"
import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function createThought(prevState: any, formData: FormData) {

  const {userId} = auth()
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
    revalidatePath("/gedanken")
    formData.delete("thought")
    return {message: "gespeichert"}
  } catch(e) {
    return {message: "irgendwas ist schiefgelaufen: " + e}
  }
}

export async function getThoughts() {
  const {userId} = auth()
  try {
    const thougths = await db.select().from(gedanken).where(eq(gedanken.user, userId!))
    return thougths
  } catch(e) {
    throw new Error("Something went wrong heroooo")
  }
}

export async function deleteThought(id: number) {
  try {
    await db.delete(gedanken).where(eq(gedanken.id, id))
    revalidatePath("/gedanken")
  } catch(e) {
    throw new Error("Something went wrong heroooo")
  }
}


