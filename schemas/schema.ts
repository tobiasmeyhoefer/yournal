import { pgTable, integer, serial, text, timestamp } from "drizzle-orm/pg-core"

export const gedanke = pgTable("gedanke", {
  id: serial("id").primaryKey(),
  thought: text("thought").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})