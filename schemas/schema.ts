import { pgTable, integer, serial, text, timestamp } from "drizzle-orm/pg-core"

export const gedanken = pgTable("gedanken", {
  id: serial("id").primaryKey(),
  user: text("user").notNull(),
  thought: text("thought").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})