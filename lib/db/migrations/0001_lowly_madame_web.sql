CREATE TABLE "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(160) NOT NULL,
	"english_name" varchar(160),
	"slug" varchar(180) NOT NULL,
	"location" varchar(120),
	"stage" varchar(120),
	"focus" varchar(200),
	"description" text,
	"website" text,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "companies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "funding_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_id" integer,
	"company_name" varchar(160) NOT NULL,
	"round" varchar(120) NOT NULL,
	"amount" varchar(120),
	"valuation" varchar(120),
	"event_date" timestamp,
	"investors" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "industry_metrics" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(180) NOT NULL,
	"value" varchar(120) NOT NULL,
	"period" varchar(120),
	"region" varchar(120),
	"change" varchar(120),
	"category" varchar(120),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "papers" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" varchar(240) NOT NULL,
	"authors" text,
	"venue" varchar(160),
	"direction" varchar(120),
	"published_at" timestamp,
	"summary" text,
	"url" text,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "papers_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(160) NOT NULL,
	"category" varchar(120) NOT NULL,
	"url" text NOT NULL,
	"description" text,
	"region" varchar(120),
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"verified_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "signals" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" varchar(220) NOT NULL,
	"summary" text,
	"category" varchar(80) NOT NULL,
	"source_id" integer,
	"source_url" text,
	"published_at" timestamp,
	"heat_score" integer DEFAULT 0,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"related_company_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "signals_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120) NOT NULL,
	"type" varchar(50) NOT NULL,
	"url" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(120) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "topics_name_unique" UNIQUE("name"),
	CONSTRAINT "topics_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "funding_events" ADD CONSTRAINT "funding_events_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "signals" ADD CONSTRAINT "signals_source_id_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."sources"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "signals" ADD CONSTRAINT "signals_related_company_id_companies_id_fk" FOREIGN KEY ("related_company_id") REFERENCES "public"."companies"("id") ON DELETE no action ON UPDATE no action;