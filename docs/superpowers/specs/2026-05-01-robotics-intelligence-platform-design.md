# Robotics Intelligence Platform Design

Date: 2026-05-01

## Product Positioning

The product is a robotics industry navigation and intelligence platform. It should feel like an entry map for the robotics ecosystem on the surface, while gradually becoming a structured industry knowledge base underneath.

The homepage should not be a pure news site. It should help users quickly find important robotics resources, companies, funding information, papers, datasets, industry signals, and research tools. The news feed is one module inside the platform, not the whole product.

Primary audience:

- Robotics founders and operators tracking competitors, suppliers, and funding.
- Investors researching companies, rounds, sectors, and market signals.
- Engineers and researchers following papers, datasets, open-source projects, and technical trends.
- Industry analysts who need fast summaries and structured references.

## Visual Direction

The visual language should be technological and future-facing, but simpler than a dense sci-fi dashboard.

Use:

- Dark industrial background with restrained cyan and amber accents.
- Thin borders, compact cards, sharp but not harsh spacing.
- Real robotics imagery in the hero or module highlights.
- SaaS-quality components inspired by 21st.dev: refined buttons, pills, cards, search boxes, side panels, and hover states.
- Information hierarchy inspired by AISignal for the news page only.

Avoid:

- Overly decorative scanning effects.
- Dense military-style dashboards.
- A homepage that looks like only a news stream.
- Pure link-directory aesthetics with no intelligence layer.

## Information Architecture

Top-level navigation:

- Home
- Industry News
- Companies
- Funding
- Papers
- Industry Data
- Resources
- AI Assistant

Homepage role:

- Present the platform as a robotics industry map.
- Show high-level platform modules.
- Surface latest signals and hot terms.
- Provide fast entry points into structured databases.
- Include a search or command entry for companies, topics, papers, and funding events.

## Homepage Sections

### Hero

Headline: position the site as a robotics industry intelligence platform.

Content:

- Short value proposition.
- Robotics image or visual asset.
- Search/command entry.
- Optional live status or update timestamp.

### Metric Overview

Show platform scale and coverage:

- Companies tracked.
- Papers indexed.
- Funding events.
- Industry indicators.
- Resources curated.

Use mock data in the first implementation. Keep the data layer ready to replace mock values with API results later.

### Navigation Modules

Use large module cards as the core homepage experience:

- Industry News: real-time signals, articles, policies, company updates.
- Companies: company profiles, locations, products, funding stages, relationships.
- Funding: rounds, amounts, investors, valuations, sectors.
- Papers: VLA, control, manipulation, perception, locomotion, datasets.
- Industry Data: shipment, cost structure, parts, policy, market size.
- Resources: companies, labs, datasets, open-source projects, suppliers, events.
- AI Assistant: research questions, comparisons, trend summaries.

Each card should show:

- Module title.
- One-sentence description.
- A small status/count label.
- A clear link or click target.

### Latest Signals

Small right-side or lower section showing latest robotics news. This links to the Industry News page.

Signal fields:

- Title.
- Category.
- Source.
- Published date/time.
- Tags.
- Related entities.

### Hot Terms

Compact list of current hot terms:

- Humanoid robots.
- VLA.
- Actuators.
- Mass production.
- Funding.
- Embodied AI.

## Industry News Page

The Industry News page can use AISignal-style layout:

- Source navigation.
- Live update status.
- Today/weekly/monthly insight cards.
- Hot terms.
- Search and tag filters.
- Date navigation.
- Signal feed.

Component styling should remain consistent with the platform homepage, using the cleaner future-tech design.

## Resources Page

This is where the navigation-site idea becomes explicit.

Resource categories:

- Robotics companies.
- Hardware and parts suppliers.
- Research labs.
- Open-source projects.
- Datasets.
- Conferences and events.
- Policy and standards.
- Media and communities.
- Investment institutions.

Each resource should eventually support:

- Name.
- Category.
- URL.
- Description.
- Region.
- Tags.
- Related companies or topics.
- Verification status.

## Data Model Direction

Core entities:

- Article or Signal
- Company
- FundingEvent
- Investor
- Paper
- Resource
- Topic
- Metric
- Source
- User
- SavedItem

Important relationships:

- Signals can link to companies, papers, topics, investors, and funding events.
- Companies can link to funding events, papers, resources, topics, and metrics.
- Papers can link to topics, institutions, authors, and companies.
- Resources can link to companies and topics.

The first implementation can use seeded mock data, but the database schema should be designed for these relationships.

## Technical Architecture

Use a monorepo:

- `apps/web`: Next.js frontend.
- `apps/api`: NestJS backend.
- `packages/database`: Prisma schema, migrations, seed data.
- `packages/ui`: shared UI components if needed.
- `packages/config`: shared TypeScript, ESLint, and formatting config if useful.

Stack:

- Next.js with App Router.
- Tailwind CSS.
- NestJS REST API.
- PostgreSQL on Neon.
- Prisma ORM.
- pnpm workspaces.

First implementation should prioritize a polished frontend shell and seeded content. Backend APIs can be added immediately after the schema is stable.

## Initial Pages

Build these first:

- `/`: homepage as robotics navigation and intelligence entry.
- `/news`: industry news signal feed.
- `/resources`: curated robotics resource navigation.
- `/companies`: company database list.
- `/funding`: funding events list.
- `/papers`: paper radar list.
- `/data`: industry indicators preview page with seeded metrics.
- `/ai`: assistant preview page with suggested research prompts and static example answers.

## Error Handling

Frontend:

- Empty states for each module.
- Loading skeletons for list pages.
- Fallback when images fail to load.
- Search with no results state.

Backend:

- Validate query parameters.
- Return consistent error shape.
- Keep seed data idempotent.

## Testing

Initial verification:

- Typecheck web and API.
- Lint workspace.
- Verify homepage and key module pages render.
- Use browser screenshots for desktop and mobile layout checks.

Later:

- API unit tests for services.
- Database seed and relation tests.
- E2E tests for search/filter/navigation flows.

## Version One Decisions

- Product name for implementation: `机器人产业智库` in Chinese and `Robotics Intelligence Platform` in English.
- Public login is out of scope for version one.
- AI Assistant is a static preview in version one, using suggested prompts and seeded example answers.
- Data ingestion is manual seeded data in version one. Automated crawling and ingestion can be added after the core schema and UI are stable.
