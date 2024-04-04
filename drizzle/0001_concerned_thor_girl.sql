DROP TABLE "books";--> statement-breakpoint
ALTER TABLE "authors" RENAME TO "gedanke";--> statement-breakpoint
ALTER TABLE "gedanke" RENAME COLUMN "name" TO "thought";--> statement-breakpoint
ALTER TABLE "gedanke" DROP COLUMN IF EXISTS "bio";