import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  jsonb,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: varchar('role', { length: 20 }).notNull().default('member'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const teams = pgTable('teams', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  stripeCustomerId: text('stripe_customer_id').unique(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  stripeProductId: text('stripe_product_id'),
  planName: varchar('plan_name', { length: 50 }),
  subscriptionStatus: varchar('subscription_status', { length: 20 }),
});

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  role: varchar('role', { length: 50 }).notNull(),
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  userId: integer('user_id').references(() => users.id),
  action: text('action').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  ipAddress: varchar('ip_address', { length: 45 }),
});

export const invitations = pgTable('invitations', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  email: varchar('email', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull(),
  invitedBy: integer('invited_by')
    .notNull()
    .references(() => users.id),
  invitedAt: timestamp('invited_at').notNull().defaultNow(),
  status: varchar('status', { length: 20 }).notNull().default('pending'),
});

export const topics = pgTable('topics', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 120 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const sources = pgTable('sources', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  url: text('url'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const companies = pgTable('companies', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 160 }).notNull(),
  englishName: varchar('english_name', { length: 160 }),
  slug: varchar('slug', { length: 180 }).notNull().unique(),
  location: varchar('location', { length: 120 }),
  stage: varchar('stage', { length: 120 }),
  focus: varchar('focus', { length: 200 }),
  description: text('description'),
  website: text('website'),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const signals = pgTable('signals', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: varchar('slug', { length: 220 }).notNull().unique(),
  summary: text('summary'),
  category: varchar('category', { length: 80 }).notNull(),
  sourceId: integer('source_id').references(() => sources.id),
  sourceUrl: text('source_url'),
  publishedAt: timestamp('published_at'),
  heatScore: integer('heat_score').default(0),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  relatedCompanyId: integer('related_company_id').references(
    () => companies.id
  ),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const fundingEvents = pgTable('funding_events', {
  id: serial('id').primaryKey(),
  companyId: integer('company_id').references(() => companies.id),
  companyName: varchar('company_name', { length: 160 }).notNull(),
  round: varchar('round', { length: 120 }).notNull(),
  amount: varchar('amount', { length: 120 }),
  valuation: varchar('valuation', { length: 120 }),
  eventDate: timestamp('event_date'),
  investors: jsonb('investors').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const papers = pgTable('papers', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: varchar('slug', { length: 240 }).notNull().unique(),
  authors: text('authors'),
  venue: varchar('venue', { length: 160 }),
  direction: varchar('direction', { length: 120 }),
  publishedAt: timestamp('published_at'),
  summary: text('summary'),
  url: text('url'),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const resources = pgTable('resources', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 160 }).notNull(),
  category: varchar('category', { length: 120 }).notNull(),
  url: text('url').notNull(),
  description: text('description'),
  region: varchar('region', { length: 120 }),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  verifiedAt: timestamp('verified_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const industryMetrics = pgTable('industry_metrics', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 180 }).notNull(),
  value: varchar('value', { length: 120 }).notNull(),
  period: varchar('period', { length: 120 }),
  region: varchar('region', { length: 120 }),
  change: varchar('change', { length: 120 }),
  category: varchar('category', { length: 120 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  teamMembers: many(teamMembers),
  activityLogs: many(activityLogs),
  invitations: many(invitations),
}));

export const usersRelations = relations(users, ({ many }) => ({
  teamMembers: many(teamMembers),
  invitationsSent: many(invitations),
}));

export const invitationsRelations = relations(invitations, ({ one }) => ({
  team: one(teams, {
    fields: [invitations.teamId],
    references: [teams.id],
  }),
  invitedBy: one(users, {
    fields: [invitations.invitedBy],
    references: [users.id],
  }),
}));

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id],
  }),
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
}));

export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  team: one(teams, {
    fields: [activityLogs.teamId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [activityLogs.userId],
    references: [users.id],
  }),
}));

export const signalsRelations = relations(signals, ({ one }) => ({
  source: one(sources, {
    fields: [signals.sourceId],
    references: [sources.id],
  }),
  relatedCompany: one(companies, {
    fields: [signals.relatedCompanyId],
    references: [companies.id],
  }),
}));

export const fundingEventsRelations = relations(fundingEvents, ({ one }) => ({
  company: one(companies, {
    fields: [fundingEvents.companyId],
    references: [companies.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;
export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;
export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
export type Company = typeof companies.$inferSelect;
export type NewCompany = typeof companies.$inferInsert;
export type Signal = typeof signals.$inferSelect;
export type NewSignal = typeof signals.$inferInsert;
export type FundingEvent = typeof fundingEvents.$inferSelect;
export type NewFundingEvent = typeof fundingEvents.$inferInsert;
export type Paper = typeof papers.$inferSelect;
export type NewPaper = typeof papers.$inferInsert;
export type Resource = typeof resources.$inferSelect;
export type NewResource = typeof resources.$inferInsert;
export type IndustryMetric = typeof industryMetrics.$inferSelect;
export type NewIndustryMetric = typeof industryMetrics.$inferInsert;
export type TeamDataWithMembers = Team & {
  teamMembers: (TeamMember & {
    user: Pick<User, 'id' | 'name' | 'email'>;
  })[];
};

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
}
