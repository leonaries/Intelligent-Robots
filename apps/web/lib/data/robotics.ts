import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CircleDollarSign,
  Database,
  FileText,
  Globe2,
  Microscope,
  Network,
  Newspaper,
  Radio,
  Search,
  Wrench
} from 'lucide-react';
import type { Locale } from '@/lib/i18n/settings';

const roboticsContent = {
  zh: {
    brand: '机器人产业智库',
    tagline: '',
    header: {
      dashboard: '控制台'
    },
    navItems: [
      { label: '首页', href: '/' },
      { label: '行业资讯', href: '/news' },
      { label: '公司数据库', href: '/companies' },
      { label: '投融资', href: '/funding' },
      { label: '技术论文', href: '/papers' },
      { label: '产业数据', href: '/data' },
      { label: '资源导航', href: '/resources' }
    ],
    home: {
      badge: '机器人产业情报基础设施',
      title: ['机器人产业智库', '导航入口'],
      description:
        '汇聚全球机器人行业资讯、企业档案、投融资事件、技术论文、产业指标和资源导航，帮助创业者、投资人和工程师快速进入产业地图。',
      primaryCta: '浏览产业导航',
      secondaryCta: '查看今日信号',
      moduleEyebrow: '平台地图',
      moduleTitle: '产业智库模块',
      moduleDescription:
        '首页是机器人产业导航图。资讯只是其中一个入口，真正的价值来自结构化公司、融资、论文、数据和资源沉淀。',
      moduleAction: '进入模块',
      latestTitle: '最新行业资讯',
      hotTermsTitle: '本周热词',
      robotEyebrow: '具身智能地图',
      robotTitle: '机器人产业观察',
      robotMeta: '公司 · 融资 · 论文 · 信号',
      robotFallbackAlt: '机器人与未来科技场景'
    },
    platformStats: [
      { label: '收录企业', value: '200+', detail: '人形、四足、零部件、服务机器人' },
      { label: '技术论文', value: '5,000+', detail: 'VLA、运动控制、操作、感知' },
      { label: '融资事件', value: '500+', detail: '轮次、估值、投资机构' },
      { label: '产业指标', value: '50+', detail: '出货量、成本、市场规模' }
    ],
    platformModules: [
      {
        title: '行业资讯',
        description: '实时捕获机器人新闻、社媒信号、政策与公司动态，形成每日洞察和热词趋势。',
        href: '/news',
        meta: '信号流',
        icon: Radio
      },
      {
        title: '公司数据库',
        description: '沉淀企业档案、产品路线、融资阶段、地区分布、团队背景和生态关系。',
        href: '/companies',
        meta: '公司图谱',
        icon: Building2
      },
      {
        title: '投融资数据库',
        description: '追踪融资轮次、金额、估值、投资机构、历史事件和赛道热度。',
        href: '/funding',
        meta: '融资情报',
        icon: CircleDollarSign
      },
      {
        title: '技术论文',
        description: '聚合 VLA、控制、操作、感知、运动和数据集论文，提供中文解读。',
        href: '/papers',
        meta: '论文雷达',
        icon: FileText
      },
      {
        title: '产业数据',
        description: '整理出货量、成本结构、关键零部件、政策地图与市场规模指标。',
        href: '/data',
        meta: '市场数据',
        icon: BarChart3
      },
      {
        title: '资源导航',
        description: '导航机器人公司、实验室、开源项目、数据集、供应链、会议和社区。',
        href: '/resources',
        meta: '资源地图',
        icon: Network
      }
    ],
    latestSignals: [
      {
        slug: 'humanoid-production-orders-market-focus',
        title: '人形机器人量产订单成为市场关注焦点',
        category: '行业动态',
        source: '综合信号',
        time: '今日 12:29',
        summary: '工业场景和交付能力成为投资人与客户评估人形机器人公司的核心变量。',
        tags: ['人形机器人', '量产', '工业场景']
      },
      {
        slug: 'vla-generalization-real-robot-tasks',
        title: 'VLA 模型在真实机器人任务中的泛化能力继续升温',
        category: '技术突破',
        source: '论文雷达',
        time: '今日 11:54',
        summary: '多任务操作、跨平台数据和真实环境泛化仍是技术路线讨论的重点。',
        tags: ['VLA', '机器人操作', '具身智能']
      },
      {
        slug: 'embodied-ai-funding-concentrates-leaders',
        title: '具身智能融资继续向头部企业集中',
        category: '融资快讯',
        source: '投融资库',
        time: '本周',
        summary: '投资机构更关注商业化订单、供应链控制力和核心零部件自研比例。',
        tags: ['融资', '估值', '投资机构']
      }
    ],
    newsItems: [
      {
        slug: 'humanoid-production-orders-market-focus',
        title: '人形机器人量产订单成为市场关注焦点',
        category: '行业动态',
        source: '综合信号',
        time: '今日 12:29',
        summary: '工业场景和交付能力成为投资人与客户评估人形机器人公司的核心变量。',
        image:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85',
        tags: ['人形机器人', '量产', '工业场景'],
        companies: ['宇树科技', '智元机器人', 'Figure'],
        related: ['公司数据库', '投融资数据库', '产业数据'],
        signalScore: 92,
        readTime: '4 分钟',
        takeaways: [
          '订单和交付节奏正在替代单纯 Demo，成为市场判断人形机器人公司的核心信号。',
          '工业客户更关注稳定性、维护成本和与现有产线的集成能力。',
          '具备供应链控制力和真实场景数据闭环的团队更容易获得融资溢价。'
        ],
        body: [
          '人形机器人行业正在从展示能力进入交付能力验证阶段。相比早期强调运动控制、外观形态和公开演示，市场现在更关心是否能形成可复制的工业场景订单。',
          '对于投资人与产业客户来说，量产订单不仅代表收入预期，也代表硬件可靠性、供应链组织、现场服务和软件迭代机制已经进入更高强度的验证。',
          '这类信号后续会与公司数据库、融资事件和产业指标联动，帮助判断哪些企业只是拥有技术亮点，哪些企业正在接近商业化拐点。'
        ]
      },
      {
        slug: 'vla-generalization-real-robot-tasks',
        title: 'VLA 模型在真实机器人任务中的泛化能力继续升温',
        category: '技术突破',
        source: '论文雷达',
        time: '今日 11:54',
        summary: '多任务操作、跨平台数据和真实环境泛化仍是技术路线讨论的重点。',
        image:
          'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=85',
        tags: ['VLA', '机器人操作', '具身智能'],
        companies: ['Figure', '智元机器人'],
        related: ['技术论文', '资源导航'],
        signalScore: 88,
        readTime: '5 分钟',
        takeaways: [
          'VLA 的竞争焦点正在从单任务效果转向跨任务、跨平台和真实环境泛化。',
          '数据来源、数据质量和机器人本体差异会直接影响模型迁移能力。',
          '开源模型和数据集会降低研究门槛，但商业落地仍依赖工程闭环。'
        ],
        body: [
          'VLA 模型正在成为机器人操作方向最重要的技术叙事之一。它把视觉、语言和动作建模连接起来，希望让机器人能更自然地理解任务并执行操作。',
          '近期讨论的重点不再只是模型参数量，而是训练数据是否覆盖足够多的真实任务、机器人平台和环境扰动。真实世界泛化能力会决定模型能否从实验室进入工厂、仓储和服务场景。',
          '对于产业智库来说，VLA 相关论文需要与开源项目、数据集、公司产品路线和融资事件放在一起看，才能判断技术热度是否真正转化为产业能力。'
        ]
      },
      {
        slug: 'embodied-ai-funding-concentrates-leaders',
        title: '具身智能融资继续向头部企业集中',
        category: '融资快讯',
        source: '投融资库',
        time: '本周',
        summary: '投资机构更关注商业化订单、供应链控制力和核心零部件自研比例。',
        image:
          'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=1200&q=85',
        tags: ['融资', '估值', '投资机构'],
        companies: ['银河通用', '星动纪元', '宇树科技'],
        related: ['投融资数据库', '公司数据库'],
        signalScore: 84,
        readTime: '3 分钟',
        takeaways: [
          '融资正在从概念驱动转向交付能力、客户订单和供应链能力驱动。',
          '头部团队更容易获得产业资本与战略投资方支持。',
          '估值分化会进一步放大公司数据库和融资数据库的关联价值。'
        ],
        body: [
          '具身智能融资热度仍在延续，但资金分布开始更明显地向头部公司集中。投资机构不再只看技术故事，而是更重视客户订单、成本结构和团队的工程组织能力。',
          '在硬件密集型赛道中，供应链控制力和关键零部件自研比例会影响毛利、交付稳定性和长期竞争壁垒。',
          '后续融资事件需要与公司阶段、产品路线和新闻信号一起追踪，才能形成可用的产业判断。'
        ]
      },
      {
        slug: 'actuator-supply-chain-cost-curve',
        title: '执行器供应链进入成本曲线观察窗口',
        category: '供应链',
        source: '产业数据',
        time: '昨日',
        summary: '关节模组、减速器、力矩传感器和控制器成本变化，正在影响整机商业化节奏。',
        image:
          'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1200&q=85',
        tags: ['执行器', '供应链', '成本'],
        companies: ['宇树科技', '傅利叶智能'],
        related: ['产业数据', '资源导航'],
        signalScore: 79,
        readTime: '4 分钟',
        takeaways: [
          '执行器成本下降会直接影响人形机器人整机价格带。',
          '核心零部件自研与外采之间的权衡会影响交付速度和毛利。',
          '供应链企业可能成为产业数据库中最值得持续跟踪的隐藏层。'
        ],
        body: [
          '机器人整机价格下降并不只取决于规模化生产，也取决于执行器、减速器、传感器和控制器等关键部件的成本曲线。',
          '当行业进入订单验证阶段，供应链稳定性会变成客户采购决策的一部分。谁能更好地控制核心零部件，谁就更容易在交付周期、维护成本和产品迭代上形成优势。',
          '因此，产业智库不应只追踪整机公司，也需要逐步建立零部件和供应链导航层。'
        ]
      }
    ],
    hotTerms: [
      { term: '人形机器人', count: 171 },
      { term: 'VLA', count: 115 },
      { term: '执行器', count: 77 },
      { term: '量产', count: 63 },
      { term: '融资', count: 58 },
      { term: '具身智能', count: 52 }
    ],
    companies: [
      {
        name: '宇树科技',
        englishName: 'Unitree Robotics',
        location: '杭州',
        stage: 'C+轮 / 筹备IPO',
        focus: '四足 / 人形机器人',
        description: '以四足机器人起家，逐步扩展到人形机器人和通用机器人平台，具备较强硬件量产能力。',
        tags: ['四足机器人', '人形机器人', '硬件量产']
      },
      {
        name: '智元机器人',
        englishName: 'Agibot',
        location: '上海',
        stage: 'B+轮 / 冲击港股',
        focus: '通用人形机器人',
        description: '围绕通用人形机器人构建产品矩阵，强调工业、商业和服务场景落地。',
        tags: ['通用机器人', '量产交付', '工业场景']
      },
      {
        name: '傅利叶智能',
        englishName: 'Fourier Intelligence',
        location: '上海',
        stage: 'E轮 / 筹备上市',
        focus: '康复 / 通用人形机器人',
        description: '从康复机器人扩展到通用人形机器人，具备医疗和服务场景经验。',
        tags: ['康复机器人', '服务机器人', '人形机器人']
      },
      {
        name: 'Figure',
        englishName: 'Figure AI',
        location: 'Sunnyvale',
        stage: 'Series C',
        focus: '人形机器人',
        description: '美国人形机器人代表公司之一，围绕商业交付、数据闭环和RaaS模式推进。',
        tags: ['人形机器人', '机器人即服务', '海外公司']
      }
    ],
    fundingEvents: [
      {
        company: '银河通用',
        round: '最新轮',
        amount: '约21亿元',
        date: '2025/12/15',
        valuation: '约200亿元',
        investors: ['中国移动链长基金', '中金资本', '中科院基金']
      },
      {
        company: '星动纪元',
        round: 'A+轮',
        amount: '近10亿元',
        date: '2025/11/20',
        valuation: '超10亿美元',
        investors: ['吉利资本', '北汽产投', '北京AI产业投资基金']
      },
      {
        company: 'Figure',
        round: 'Series C',
        amount: '超10亿美元',
        date: '2025/9/16',
        valuation: '390亿美元',
        investors: ['Parkway Venture Capital', 'NVIDIA', 'Intel Capital']
      },
      {
        company: '宇树科技',
        round: 'C+轮',
        amount: '近7亿元',
        date: '2025/6/23',
        valuation: '超120亿元',
        investors: ['中国移动', '腾讯', '阿里巴巴', '吉利资本']
      }
    ],
    papers: [
      {
        title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control',
        authors: 'Kevin Black, Noah Brown, Danny Driess',
        venue: 'arXiv / RSS 2025',
        date: '2024/10/31',
        direction: '机器人操作',
        summary: '通用机器人基础模型，基于预训练VLM和流匹配架构，在多平台真实任务上展现泛化能力。',
        tags: ['VLA', '流匹配', '机器人操作']
      },
      {
        title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
        authors: 'Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti',
        venue: 'CoRL 2024',
        date: '2024/6/13',
        direction: '机器人操作',
        summary: '开源 7B 参数 VLA 模型，支持消费级 GPU 微调和量化部署。',
        tags: ['VLA', '开源模型', '机器人学习']
      },
      {
        title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models',
        authors: 'Open X-Embodiment Collaboration',
        venue: 'ICRA 2024 Best Paper',
        date: '2024/5/13',
        direction: '机器人学习',
        summary: '跨机器人形态的大规模学习数据集，验证多具身形态数据联合训练的价值。',
        tags: ['数据集', 'RT-X', '跨具身形态']
      }
    ],
    metrics: [
      { name: '全球人形机器人出货量', value: '13,000台', period: '2025年', region: '全球', change: '+465%' },
      { name: '中国人形机器人市场规模', value: '82亿元', period: '2025年', region: '中国', change: '+120%' },
      { name: '中国具身智能融资总额', value: '419亿元', period: '2025年', region: '中国', change: '+291%' },
      { name: '高盛预测2035年全球市场', value: '1,540亿美元', period: '2035年预测', region: '全球', change: '长期增长' }
    ],
    resourceCategories: [
      { name: '机器人公司', count: 200, icon: Bot },
      { name: '核心零部件', count: 80, icon: Wrench },
      { name: '研究实验室', count: 45, icon: Microscope },
      { name: '开源项目', count: 60, icon: Database },
      { name: '数据集', count: 35, icon: Database },
      { name: '会议与活动', count: 24, icon: Globe2 },
      { name: '媒体与社区', count: 32, icon: Newspaper },
      { name: '投资机构', count: 90, icon: CircleDollarSign }
    ],
    resources: [
      {
        name: 'Open X-Embodiment',
        category: '数据集',
        description: '跨机器人形态的真实机器人学习数据集。',
        url: 'https://robotics-transformer-x.github.io/',
        tags: ['数据集', '机器人学习']
      },
      {
        name: 'OpenVLA',
        category: '开源项目',
        description: '面向通用机器人控制的开源 VLA 模型。',
        url: 'https://openvla.github.io/',
        tags: ['VLA', '开源模型']
      },
      {
        name: 'ICRA',
        category: '会议与活动',
        description: '机器人与自动化领域旗舰会议之一。',
        url: 'https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra',
        tags: ['学术会议', '研究']
      }
    ],
    searchHints: [
      { label: '搜索公司', icon: Search },
      { label: '追踪融资', icon: Activity }
    ],
    labels: {
      location: '地区',
      focus: '方向',
      valuation: '估值',
      company: '公司',
      round: '轮次',
      amount: '金额',
      date: '日期',
      investors: '投资方',
      itemsOrganized: '个已整理资源',
      visitResource: '访问资源',
      original: '原文',
      comingSoon: '即将开放',
      startUsing: '开始使用',
      readFullArticle: '阅读全文',
      viewSignal: '查看信号',
      signalScore: '信号强度',
      relatedCompanies: '关联公司',
      relatedModules: '关联模块',
      keyTakeaways: '关键信息',
      crawlerReady: '可接入采集',
      newsImageAlt: '机器人产业资讯配图'
    },
    pages: {
      news: {
        eyebrow: '实时信号流',
        title: '行业资讯',
        description: '按照 AI Signal 的信息流方式组织机器人产业信号，但组件风格保持产业智库的一致视觉。',
        filters: ['全部', '人形机器人', '具身智能', '融资', '供应链', '论文', '政策'],
        sources: ['推特信号', '官网新闻', '公众号', '论文', '视频', 'B站'],
        insights: [
          { title: '今日洞察', body: '工业场景和量产交付成为人形机器人主线。' },
          { title: '本周洞察', body: '融资集中于头部，执行器和真实数据成本升温。' },
          { title: '趋势预判', body: 'VLA 与数据闭环会影响下一阶段竞争。' }
        ],
        searchPlaceholder: '搜索产业信号',
        streamTitle: '信号流 · 今日 28 条',
        sortLabel: '按最新发布'
      },
      resources: {
        eyebrow: '资源地图',
        title: '机器人产业资源导航',
        description: '把导航站能力放在单独模块中：公司、零部件、实验室、开源项目、数据集、会议、媒体社区和投资机构。'
      },
      companies: {
        eyebrow: '公司图谱',
        title: '公司数据库',
        description: '第一版展示种子企业档案，后续接入 Drizzle 表后支持筛选、详情页、融资关联和生态关系图。'
      },
      funding: {
        eyebrow: '融资情报',
        title: '投融资数据库',
        description: '追踪轮次、金额、估值和投资机构，并与公司数据库和资讯信号关联。'
      },
      papers: {
        eyebrow: '论文雷达',
        title: '技术论文',
        description: '聚合机器人学习、VLA、运动控制、操作、感知和数据集方向论文，提供中文解读入口。'
      },
      data: {
        eyebrow: '市场数据',
        title: '产业数据',
        description: '第一版展示关键指标预览，后续扩展为出货量、成本结构、政策地图、零部件价格和市场规模看板。'
      },
      pricing: {
        eyebrow: '会员方案',
        title: '会员能力规划',
        description: '模板保留了 Stripe 集成能力。v1 先隐藏真实支付，把价格页作为能力规划展示，等产品数据和权限边界稳定后再开启订阅。'
      }
    },
    plans: [
      {
        name: '研究版',
        price: '免费',
        isComingSoon: false,
        description: '适合早期浏览产业导航、资讯和公开数据库。',
        features: ['公开行业资讯', '资源导航', '公司/论文/融资预览', '研究工作流预览']
      },
      {
        name: '情报版',
        price: '即将开放',
        isComingSoon: true,
        description: '面向需要深度数据库、收藏、监控和研究工作流的团队。',
        features: ['高级筛选与导出', '企业收藏与监控', '融资与论文提醒', '团队协作与权限']
      }
    ]
  },
  en: {
    brand: 'Robotics Intelligence',
    tagline: 'Industrial Knowledge Platform',
    header: {
      dashboard: 'Dashboard'
    },
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'News', href: '/news' },
      { label: 'Companies', href: '/companies' },
      { label: 'Funding', href: '/funding' },
      { label: 'Papers', href: '/papers' },
      { label: 'Data', href: '/data' },
      { label: 'Resources', href: '/resources' }
    ],
    home: {
      badge: 'Robotics Intelligence Infrastructure',
      title: ['Robotics Industry', 'Intelligence Hub'],
      description:
        'A structured entry point for global robotics news, company profiles, funding events, research papers, market indicators, and curated resources.',
      primaryCta: 'Browse resources',
      secondaryCta: 'View signals',
      moduleEyebrow: 'Platform Map',
      moduleTitle: 'Intelligence Modules',
      moduleDescription:
        'The homepage acts as an industry map. News is one entry point; the deeper value comes from structured company, funding, paper, data, and resource layers.',
      moduleAction: 'Open module',
      latestTitle: 'Latest Signals',
      hotTermsTitle: 'Hot Terms',
      robotEyebrow: 'Embodied AI Map',
      robotTitle: 'Robotics Watch',
      robotMeta: 'Companies · Funding · Papers · Signals',
      robotFallbackAlt: 'Robot and future technology scene'
    },
    platformStats: [
      { label: 'Companies', value: '200+', detail: 'Humanoid, quadruped, components, service robotics' },
      { label: 'Papers', value: '5,000+', detail: 'VLA, motion control, manipulation, perception' },
      { label: 'Funding Events', value: '500+', detail: 'Rounds, valuation, investors' },
      { label: 'Market Metrics', value: '50+', detail: 'Shipments, cost, market size' }
    ],
    platformModules: [
      {
        title: 'Industry News',
        description: 'Track robotics news, social signals, policy updates, and company moves as daily intelligence.',
        href: '/news',
        meta: 'Signal Feed',
        icon: Radio
      },
      {
        title: 'Company Database',
        description: 'Build structured profiles across products, funding stage, geography, teams, and ecosystem links.',
        href: '/companies',
        meta: 'Company Graph',
        icon: Building2
      },
      {
        title: 'Funding Database',
        description: 'Track rounds, amounts, valuations, investors, historical events, and sector momentum.',
        href: '/funding',
        meta: 'Funding Intel',
        icon: CircleDollarSign
      },
      {
        title: 'Technical Papers',
        description: 'Aggregate VLA, control, manipulation, perception, locomotion, and dataset research.',
        href: '/papers',
        meta: 'Paper Radar',
        icon: FileText
      },
      {
        title: 'Industry Data',
        description: 'Organize shipment, cost structure, component, policy, and market size indicators.',
        href: '/data',
        meta: 'Market Data',
        icon: BarChart3
      },
      {
        title: 'Resource Map',
        description: 'Curate robotics companies, labs, open-source projects, datasets, suppliers, events, and communities.',
        href: '/resources',
        meta: 'Resource Map',
        icon: Network
      }
    ],
    latestSignals: [
      {
        slug: 'humanoid-production-orders-market-focus',
        title: 'Humanoid robot production orders become a market focus',
        category: 'Market',
        source: 'Signal Feed',
        time: 'Today 12:29',
        summary: 'Industrial deployments and delivery capability are becoming key variables for investors and customers.',
        tags: ['Humanoid', 'Production', 'Industrial']
      },
      {
        slug: 'vla-generalization-real-robot-tasks',
        title: 'VLA generalization in real robot tasks keeps heating up',
        category: 'Research',
        source: 'Paper Radar',
        time: 'Today 11:54',
        summary: 'Multi-task manipulation, cross-platform data, and real-world generalization remain central debates.',
        tags: ['VLA', 'Manipulation', 'Embodied AI']
      },
      {
        slug: 'embodied-ai-funding-concentrates-leaders',
        title: 'Embodied AI funding continues to concentrate among leaders',
        category: 'Funding',
        source: 'Funding Intel',
        time: 'This week',
        summary: 'Investors are looking harder at commercial orders, supply-chain control, and core component ownership.',
        tags: ['Funding', 'Valuation', 'Investors']
      }
    ],
    newsItems: [
      {
        slug: 'humanoid-production-orders-market-focus',
        title: 'Humanoid robot production orders become a market focus',
        category: 'Market',
        source: 'Signal Feed',
        time: 'Today 12:29',
        summary:
          'Industrial deployments and delivery capability are becoming key variables for investors and customers.',
        image:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85',
        tags: ['Humanoid', 'Production', 'Industrial'],
        companies: ['Unitree Robotics', 'Agibot', 'Figure AI'],
        related: ['Company Database', 'Funding Database', 'Industry Data'],
        signalScore: 92,
        readTime: '4 min read',
        takeaways: [
          'Orders and delivery cadence are replacing demos as the core signal for humanoid robotics companies.',
          'Industrial customers care more about reliability, maintenance cost, and integration with existing lines.',
          'Teams with supply-chain control and real-world data loops are more likely to receive valuation premiums.'
        ],
        body: [
          'The humanoid robotics market is moving from capability demonstrations to delivery validation. Instead of focusing only on locomotion, appearance, and public demos, the market is watching whether companies can generate repeatable industrial orders.',
          'For investors and industrial customers, production orders represent more than revenue potential. They signal that hardware reliability, supply-chain organization, field service, and software iteration are entering a more demanding phase.',
          'These signals should be connected with company profiles, funding events, and market indicators to understand which teams are close to commercial inflection points.'
        ]
      },
      {
        slug: 'vla-generalization-real-robot-tasks',
        title: 'VLA generalization in real robot tasks keeps heating up',
        category: 'Research',
        source: 'Paper Radar',
        time: 'Today 11:54',
        summary:
          'Multi-task manipulation, cross-platform data, and real-world generalization remain central debates.',
        image:
          'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=85',
        tags: ['VLA', 'Manipulation', 'Embodied AI'],
        companies: ['Figure AI', 'Agibot'],
        related: ['Technical Papers', 'Resource Map'],
        signalScore: 88,
        readTime: '5 min read',
        takeaways: [
          'VLA competition is shifting from single-task performance to cross-task, cross-platform, real-world generalization.',
          'Data source, data quality, and embodiment differences directly shape transfer capability.',
          'Open models and datasets lower research barriers, while commercial deployment still depends on engineering loops.'
        ],
        body: [
          'VLA models are becoming one of the most important technical narratives in robot manipulation. They connect vision, language, and action modeling so robots can interpret tasks and execute operations more naturally.',
          'Recent debate is less about parameter count alone and more about whether training data covers enough real tasks, robot platforms, and environmental variation. Real-world generalization will determine whether models can move from labs into factories, warehouses, and service scenarios.',
          'For an industry intelligence platform, VLA papers should be viewed together with open-source projects, datasets, company roadmaps, and funding events.'
        ]
      },
      {
        slug: 'embodied-ai-funding-concentrates-leaders',
        title: 'Embodied AI funding continues to concentrate among leaders',
        category: 'Funding',
        source: 'Funding Intel',
        time: 'This week',
        summary:
          'Investors are looking harder at commercial orders, supply-chain control, and core component ownership.',
        image:
          'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=1200&q=85',
        tags: ['Funding', 'Valuation', 'Investors'],
        companies: ['Galaxea AI', 'RobotEra', 'Unitree Robotics'],
        related: ['Funding Database', 'Company Database'],
        signalScore: 84,
        readTime: '3 min read',
        takeaways: [
          'Funding is shifting from concept-driven narratives toward delivery capability, customer orders, and supply-chain strength.',
          'Leading teams are more likely to attract industrial capital and strategic investors.',
          'Valuation divergence increases the value of linking company records with funding history.'
        ],
        body: [
          'Embodied AI funding remains active, but capital is increasingly concentrating among leading companies. Investors are looking beyond the technical story and paying closer attention to customer orders, cost structure, and engineering organization.',
          'In hardware-intensive categories, supply-chain control and ownership of key components influence margin, delivery stability, and long-term defensibility.',
          'Future funding events should be tracked alongside company stage, product roadmap, and news signals to support stronger industry judgment.'
        ]
      },
      {
        slug: 'actuator-supply-chain-cost-curve',
        title: 'Actuator supply chains enter the cost-curve watch window',
        category: 'Supply Chain',
        source: 'Industry Data',
        time: 'Yesterday',
        summary:
          'Cost shifts in joint modules, reducers, torque sensors, and controllers are shaping commercialization timelines.',
        image:
          'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1200&q=85',
        tags: ['Actuators', 'Supply Chain', 'Cost'],
        companies: ['Unitree Robotics', 'Fourier Intelligence'],
        related: ['Industry Data', 'Resource Map'],
        signalScore: 79,
        readTime: '4 min read',
        takeaways: [
          'Actuator cost reduction directly affects humanoid robot price bands.',
          'The trade-off between in-house components and external suppliers affects delivery speed and margin.',
          'Supply-chain companies may become one of the most important hidden layers in the industry database.'
        ],
        body: [
          'Robot price reductions depend not only on production scale but also on the cost curve of actuators, reducers, sensors, and controllers.',
          'As the industry enters order validation, supply-chain stability becomes part of customer procurement decisions. Companies that control key components can gain advantages in delivery cycles, maintenance cost, and product iteration.',
          'An industry intelligence platform should therefore track not only robot makers but also the component and supply-chain layer.'
        ]
      }
    ],
    hotTerms: [
      { term: 'Humanoid robots', count: 171 },
      { term: 'VLA', count: 115 },
      { term: 'Actuators', count: 77 },
      { term: 'Mass production', count: 63 },
      { term: 'Funding', count: 58 },
      { term: 'Embodied AI', count: 52 }
    ],
    companies: [
      {
        name: 'Unitree Robotics',
        englishName: 'Unitree Robotics',
        location: 'Hangzhou',
        stage: 'Series C+ / IPO preparation',
        focus: 'Quadruped / humanoid robots',
        description: 'Started with quadruped robots and expanded into humanoids and general-purpose robot platforms with strong hardware production capability.',
        tags: ['Quadruped', 'Humanoid', 'Hardware production']
      },
      {
        name: 'Agibot',
        englishName: 'Agibot',
        location: 'Shanghai',
        stage: 'Series B+ / HKEX preparation',
        focus: 'General humanoid robots',
        description: 'Builds a product matrix around general humanoid robots, emphasizing industrial, commercial, and service deployment.',
        tags: ['General robots', 'Delivery', 'Industrial']
      },
      {
        name: 'Fourier Intelligence',
        englishName: 'Fourier Intelligence',
        location: 'Shanghai',
        stage: 'Series E / IPO preparation',
        focus: 'Rehabilitation / general humanoid robots',
        description: 'Expanded from rehabilitation robots into general humanoids with experience in medical and service scenarios.',
        tags: ['Rehabilitation', 'Service robotics', 'Humanoid']
      },
      {
        name: 'Figure AI',
        englishName: 'Figure AI',
        location: 'Sunnyvale',
        stage: 'Series C',
        focus: 'Humanoid robots',
        description: 'A leading US humanoid robotics company focused on commercial delivery, data loops, and RaaS models.',
        tags: ['Humanoid', 'RaaS', 'US company']
      }
    ],
    fundingEvents: [
      {
        company: 'Galaxea AI',
        round: 'Latest round',
        amount: 'Approx. RMB 2.1B',
        date: '2025/12/15',
        valuation: 'Approx. RMB 20B',
        investors: ['China Mobile Fund', 'CICC Capital', 'CAS Fund']
      },
      {
        company: 'RobotEra',
        round: 'Series A+',
        amount: 'Nearly RMB 1B',
        date: '2025/11/20',
        valuation: 'Over USD 1B',
        investors: ['Geely Capital', 'BAIC Capital', 'Beijing AI Fund']
      },
      {
        company: 'Figure AI',
        round: 'Series C',
        amount: 'Over USD 1B',
        date: '2025/9/16',
        valuation: 'USD 39B',
        investors: ['Parkway Venture Capital', 'NVIDIA', 'Intel Capital']
      },
      {
        company: 'Unitree Robotics',
        round: 'Series C+',
        amount: 'Nearly RMB 700M',
        date: '2025/6/23',
        valuation: 'Over RMB 12B',
        investors: ['China Mobile', 'Tencent', 'Alibaba', 'Geely Capital']
      }
    ],
    papers: [
      {
        title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control',
        authors: 'Kevin Black, Noah Brown, Danny Driess',
        venue: 'arXiv / RSS 2025',
        date: '2024/10/31',
        direction: 'manipulation',
        summary: 'A general robot foundation model using pretrained VLMs and flow matching, showing generalization across real-world platforms.',
        tags: ['VLA', 'flow matching', 'manipulation']
      },
      {
        title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
        authors: 'Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti',
        venue: 'CoRL 2024',
        date: '2024/6/13',
        direction: 'manipulation',
        summary: 'An open 7B VLA model that supports consumer-GPU fine-tuning and quantized deployment.',
        tags: ['VLA', 'open-source', 'robot learning']
      },
      {
        title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models',
        authors: 'Open X-Embodiment Collaboration',
        venue: 'ICRA 2024 Best Paper',
        date: '2024/5/13',
        direction: 'learning',
        summary: 'A large-scale cross-embodiment robot learning dataset validating the value of training across robot forms.',
        tags: ['dataset', 'RT-X', 'cross-embodiment']
      }
    ],
    metrics: [
      { name: 'Global humanoid robot shipments', value: '13,000 units', period: '2025', region: 'Global', change: '+465%' },
      { name: 'China humanoid robotics market size', value: 'RMB 8.2B', period: '2025', region: 'China', change: '+120%' },
      { name: 'China embodied AI funding total', value: 'RMB 41.9B', period: '2025', region: 'China', change: '+291%' },
      { name: 'Goldman Sachs 2035 global forecast', value: 'USD 154B', period: '2035 forecast', region: 'Global', change: 'Long-term growth' }
    ],
    resourceCategories: [
      { name: 'Robot companies', count: 200, icon: Bot },
      { name: 'Core components', count: 80, icon: Wrench },
      { name: 'Research labs', count: 45, icon: Microscope },
      { name: 'Open source', count: 60, icon: Database },
      { name: 'Datasets', count: 35, icon: Database },
      { name: 'Events', count: 24, icon: Globe2 },
      { name: 'Media & communities', count: 32, icon: Newspaper },
      { name: 'Investors', count: 90, icon: CircleDollarSign }
    ],
    resources: [
      {
        name: 'Open X-Embodiment',
        category: 'Dataset',
        description: 'A real-world robot learning dataset across different embodiments.',
        url: 'https://robotics-transformer-x.github.io/',
        tags: ['dataset', 'robot learning']
      },
      {
        name: 'OpenVLA',
        category: 'Open source',
        description: 'An open-source VLA model for general robot control.',
        url: 'https://openvla.github.io/',
        tags: ['VLA', 'open-source']
      },
      {
        name: 'ICRA',
        category: 'Event',
        description: 'One of the flagship conferences in robotics and automation.',
        url: 'https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra',
        tags: ['conference', 'research']
      }
    ],
    searchHints: [
      { label: 'Search companies', icon: Search },
      { label: 'Track funding', icon: Activity }
    ],
    labels: {
      location: 'Location',
      focus: 'Focus',
      valuation: 'Valuation',
      company: 'Company',
      round: 'Round',
      amount: 'Amount',
      date: 'Date',
      investors: 'Investors',
      itemsOrganized: 'curated resources',
      visitResource: 'Visit resource',
      original: 'Source',
      comingSoon: 'Coming soon',
      startUsing: 'Start',
      readFullArticle: 'Read the full article',
      viewSignal: 'View signal',
      signalScore: 'Signal score',
      relatedCompanies: 'Related companies',
      relatedModules: 'Related modules',
      keyTakeaways: 'Key takeaways',
      crawlerReady: 'Crawler-ready',
      newsImageAlt: 'Robotics industry news image'
    },
    pages: {
      news: {
        eyebrow: 'Live Signal Feed',
        title: 'Industry News',
        description: 'Robotics signals organized in an AI Signal-style feed, with a consistent industrial intelligence visual system.',
        filters: ['All', 'Humanoids', 'Embodied AI', 'Funding', 'Supply Chain', 'Papers', 'Policy'],
        sources: ['X signals', 'Company news', 'WeChat', 'Papers', 'Video', 'Bilibili'],
        insights: [
          { title: 'Today', body: 'Industrial scenarios and delivery capability are the core humanoid robotics narrative.' },
          { title: 'This Week', body: 'Funding is concentrating in leaders while actuators and real-world data costs heat up.' },
          { title: 'Trend', body: 'VLA and data loops will shape the next competitive stage.' }
        ],
        searchPlaceholder: 'Search signals',
        streamTitle: 'Signal feed · 28 today',
        sortLabel: 'Newest first'
      },
      resources: {
        eyebrow: 'Resource Map',
        title: 'Robotics Resource Map',
        description: 'A dedicated navigation layer for companies, components, labs, open-source projects, datasets, events, media, communities, and investors.'
      },
      companies: {
        eyebrow: 'Company Graph',
        title: 'Company Database',
        description: 'The first version shows seed company profiles. Later it can connect to Drizzle tables for filters, details, funding links, and ecosystem graphs.'
      },
      funding: {
        eyebrow: 'Funding Intel',
        title: 'Funding Database',
        description: 'Track rounds, amounts, valuations, and investors, linked with company records and signal feeds.'
      },
      papers: {
        eyebrow: 'Paper Radar',
        title: 'Technical Papers',
        description: 'Aggregate robotics learning, VLA, control, manipulation, perception, and dataset papers with research entry points.'
      },
      data: {
        eyebrow: 'Market Data',
        title: 'Industry Data',
        description: 'A preview of key indicators, later expanding into shipments, cost structures, policy maps, component prices, and market dashboards.'
      },
      pricing: {
        eyebrow: 'Plans',
        title: 'Membership Roadmap',
        description: 'The template keeps Stripe integration. v1 uses this page as a capability roadmap until product data and permission boundaries are stable.'
      }
    },
    plans: [
      {
        name: 'Research',
        price: 'Free',
        isComingSoon: false,
        description: 'For early browsing of resource maps, news, and public databases.',
        features: ['Public industry news', 'Resource map', 'Company/paper/funding previews', 'Research workflow previews']
      },
      {
        name: 'Intelligence',
        price: 'Soon',
        isComingSoon: true,
        description: 'For teams that need deeper databases, saved views, monitoring, and research workflows.',
        features: ['Advanced filters and export', 'Company watchlists', 'Funding and paper alerts', 'Team collaboration and permissions']
      }
    ]
  }
};

export type RoboticsContent = (typeof roboticsContent)[Locale];

export function getRoboticsContent(locale: Locale): RoboticsContent {
  return roboticsContent[locale];
}
