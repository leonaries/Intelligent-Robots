# 机器人产业智库

Robotics Intelligence Platform 是一个基于 Next.js SaaS Starter 改造的机器人产业导航与智库入口。

## 当前版本

- 首页：机器人产业导航 + 智库模块入口
- 行业资讯：类似 AI Signal 的机器人行业信号流
- 资源导航：公司、零部件、实验室、开源项目、数据集、会议和投资机构入口
- 公司数据库：种子企业档案
- 投融资：种子融资事件
- 技术论文：种子论文雷达
- 产业数据：种子指标预览
- AI 助手：静态研究问答预览
- 登录/团队/权限：保留 Next.js SaaS Starter 的基础能力
- Stripe：模板能力保留，v1 价格页先做静态规划展示

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS v4
- shadcn/ui style components
- Postgres
- Drizzle ORM
- JWT cookie auth
- Stripe integration scaffold

## Local Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Database

Create `.env` from `.env.example`, then set:

```bash
POSTGRES_URL=postgresql://...
AUTH_SECRET=...
BASE_URL=http://localhost:3000
```

Generate and run migrations:

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

Seeded login:

- Email: `test@test.com`
- Password: `admin123`

## Verification

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Notes

The app currently uses seeded static content for public pages so the product shell can be developed without a live ingestion pipeline. Drizzle tables for robotics entities have been added and can replace the static content page by page.
