import { hashPassword } from '@/lib/auth/session';
import {
  companies,
  fundingEvents,
  industryMetrics,
  papers,
  resources,
  signals,
  sources,
  teamMembers,
  teams,
  topics,
  users
} from './schema';
import { db } from './drizzle';

async function seedAuth() {
  const email = 'test@test.com';
  const password = 'admin123';
  const passwordHash = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values({
      email,
      passwordHash,
      role: 'owner'
    })
    .onConflictDoNothing()
    .returning();

  if (!user) {
    console.log('Initial user already exists.');
    return;
  }

  const [team] = await db
    .insert(teams)
    .values({
      name: 'Robotics Intelligence Team'
    })
    .returning();

  await db.insert(teamMembers).values({
    teamId: team.id,
    userId: user.id,
    role: 'owner'
  });

  console.log('Initial user and team created.');
}

async function seedIndustryData() {
  await db
    .insert(topics)
    .values([
      { name: '人形机器人', slug: 'humanoid-robots' },
      { name: 'VLA', slug: 'vla' },
      { name: '执行器', slug: 'actuators' },
      { name: '融资', slug: 'funding' }
    ])
    .onConflictDoNothing();

  const [signalSource] = await db
    .insert(sources)
    .values({
      name: '综合信号',
      type: 'curated',
      url: 'https://example.com'
    })
    .returning();

  const insertedCompanies = await db
    .insert(companies)
    .values([
      {
        name: '宇树科技',
        englishName: 'Unitree Robotics',
        slug: 'unitree-robotics',
        location: '杭州',
        stage: 'C+轮 / 筹备IPO',
        focus: '四足 / 人形机器人',
        description:
          '以四足机器人起家，逐步扩展到人形机器人和通用机器人平台，具备较强硬件量产能力。',
        tags: ['四足机器人', '人形机器人', '硬件量产']
      },
      {
        name: '智元机器人',
        englishName: 'Agibot',
        slug: 'agibot',
        location: '上海',
        stage: 'B+轮 / 冲击港股',
        focus: '通用人形机器人',
        description:
          '围绕通用人形机器人构建产品矩阵，强调工业、商业和服务场景落地。',
        tags: ['通用机器人', '量产交付', '工业场景']
      }
    ])
    .onConflictDoNothing()
    .returning();

  const unitree = insertedCompanies.find((company) => company.slug === 'unitree-robotics');

  await db
    .insert(signals)
    .values([
      {
        title: '人形机器人量产订单成为市场关注焦点',
        slug: 'humanoid-mass-production-orders',
        summary:
          '工业场景和交付能力成为投资人与客户评估人形机器人公司的核心变量。',
        category: '行业动态',
        sourceId: signalSource?.id,
        heatScore: 92,
        tags: ['人形机器人', '量产', '工业场景'],
        relatedCompanyId: unitree?.id
      },
      {
        title: 'VLA 模型在真实机器人任务中的泛化能力继续升温',
        slug: 'vla-real-robot-generalization',
        summary: '多任务操作、跨平台数据和真实环境泛化仍是技术路线讨论的重点。',
        category: '技术突破',
        sourceId: signalSource?.id,
        heatScore: 88,
        tags: ['VLA', 'Manipulation', '具身智能']
      }
    ])
    .onConflictDoNothing();

  await db
    .insert(fundingEvents)
    .values([
      {
        companyName: '银河通用',
        round: '最新轮',
        amount: '约21亿元',
        valuation: '约200亿元',
        eventDate: new Date('2025-12-15'),
        investors: ['中国移动链长基金', '中金资本', '中科院基金']
      },
      {
        companyName: 'Figure',
        round: 'Series C',
        amount: '超10亿美元',
        valuation: '390亿美元',
        eventDate: new Date('2025-09-16'),
        investors: ['Parkway Venture Capital', 'NVIDIA', 'Intel Capital']
      }
    ])
    .onConflictDoNothing();

  await db
    .insert(papers)
    .values([
      {
        title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
        slug: 'openvla-open-source-vla-model',
        authors: 'Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti',
        venue: 'CoRL 2024',
        direction: 'manipulation',
        publishedAt: new Date('2024-06-13'),
        summary: '开源 7B 参数 VLA 模型，支持消费级 GPU 微调和量化部署。',
        tags: ['VLA', 'open-source', 'robot learning']
      }
    ])
    .onConflictDoNothing();

  await db
    .insert(resources)
    .values([
      {
        name: 'Open X-Embodiment',
        category: '数据集',
        url: 'https://robotics-transformer-x.github.io/',
        description: '跨机器人形态的真实机器人学习数据集。',
        tags: ['dataset', 'robot learning']
      },
      {
        name: 'OpenVLA',
        category: '开源项目',
        url: 'https://openvla.github.io/',
        description: '面向通用机器人控制的开源 VLA 模型。',
        tags: ['VLA', 'open-source']
      }
    ])
    .onConflictDoNothing();

  await db
    .insert(industryMetrics)
    .values([
      {
        name: '全球人形机器人出货量',
        value: '13,000台',
        period: '2025年',
        region: '全球',
        change: '+465%',
        category: '市场规模'
      },
      {
        name: '中国具身智能融资总额',
        value: '419亿元',
        period: '2025年',
        region: '中国',
        change: '+291%',
        category: '投融资'
      }
    ])
    .onConflictDoNothing();

  console.log('Robotics industry seed data inserted.');
}

async function seed() {
  await seedAuth();
  await seedIndustryData();
}

seed()
  .catch((error) => {
    console.error('Seed process failed:', error);
    process.exit(1);
  })
  .finally(() => {
    console.log('Seed process finished. Exiting...');
    process.exit(0);
  });
