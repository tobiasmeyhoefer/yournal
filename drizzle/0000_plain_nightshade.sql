CREATE TABLE IF NOT EXISTS "gedanken" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" text NOT NULL,
	"thought" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
