CREATE TABLE "visitor_presence" (
	"visitor_id" varchar(64) NOT NULL,
	"pathname" varchar(240) NOT NULL,
	"last_seen_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "visitor_presence_visitor_id_pathname_pk" PRIMARY KEY("visitor_id","pathname")
);
--> statement-breakpoint
CREATE INDEX "visitor_presence_last_seen_at_idx" ON "visitor_presence" USING btree ("last_seen_at");--> statement-breakpoint
CREATE INDEX "visitor_presence_pathname_last_seen_at_idx" ON "visitor_presence" USING btree ("pathname","last_seen_at");