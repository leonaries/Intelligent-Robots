# Intelligent Robots Crawler

Python worker space for future news collection, content extraction, deduping,
classification, and AI processing.

Suggested responsibilities:

- Fetch RSS feeds and public news pages.
- Extract readable article text and metadata.
- Normalize sources before storing them in Postgres.
- Run scheduled jobs or queue consumers outside the web request path.

The first scaffold is intentionally small. Add source-specific crawlers only
after the source list and usage policy are confirmed.
