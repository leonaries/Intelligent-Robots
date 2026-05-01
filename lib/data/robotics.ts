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
    tagline: 'Robotics Intelligence Platform',
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
      badge: 'Robotics Intelligence Infrastructure',
      title: ['机器人产业智库', '导航入口'],
      description:
        '汇聚全球机器人行业资讯、企业档案、投融资事件、技术论文、产业指标和资源导航，帮助创业者、投资人和工程师快速进入产业地图。',
      primaryCta: '浏览产业导航',
      secondaryCta: '查看今日信号',
      moduleEyebrow: 'Platform Map',
      moduleTitle: '产业智库模块',
      moduleDescription:
        '首页是机器人产业导航图。资讯只是其中一个入口，真正的价值来自结构化公司、融资、论文、数据和资源沉淀。',
      moduleAction: '进入模块',
      latestTitle: '最新行业资讯',
      hotTermsTitle: '本周热词',
      robotEyebrow: 'Embodied AI Map',
      robotTitle: 'Robotics Watch',
      robotMeta: 'Companies · Funding · Papers · Signals'
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
        meta: 'Signal Feed',
        icon: Radio
      },
      {
        title: '公司数据库',
        description: '沉淀企业档案、产品路线、融资阶段、地区分布、团队背景和生态关系。',
        href: '/companies',
        meta: 'Company Graph',
        icon: Building2
      },
      {
        title: '投融资数据库',
        description: '追踪融资轮次、金额、估值、投资机构、历史事件和赛道热度。',
        href: '/funding',
        meta: 'Funding Intel',
        icon: CircleDollarSign
      },
      {
        title: '技术论文',
        description: '聚合 VLA、控制、操作、感知、运动和数据集论文，提供中文解读。',
        href: '/papers',
        meta: 'Paper Radar',
        icon: FileText
      },
      {
        title: '产业数据',
        description: '整理出货量、成本结构、关键零部件、政策地图与市场规模指标。',
        href: '/data',
        meta: 'Market Data',
        icon: BarChart3
      },
      {
        title: '资源导航',
        description: '导航机器人公司、实验室、开源项目、数据集、供应链、会议和社区。',
        href: '/resources',
        meta: 'Resource Map',
        icon: Network
      }
    ],
    latestSignals: [
      {
        title: '人形机器人量产订单成为市场关注焦点',
        category: '行业动态',
        source: '综合信号',
        time: '今日 12:29',
        summary: '工业场景和交付能力成为投资人与客户评估人形机器人公司的核心变量。',
        tags: ['人形机器人', '量产', '工业场景']
      },
      {
        title: 'VLA 模型在真实机器人任务中的泛化能力继续升温',
        category: '技术突破',
        source: '论文雷达',
        time: '今日 11:54',
        summary: '多任务操作、跨平台数据和真实环境泛化仍是技术路线讨论的重点。',
        tags: ['VLA', 'Manipulation', '具身智能']
      },
      {
        title: '具身智能融资继续向头部企业集中',
        category: '融资快讯',
        source: '投融资库',
        time: '本周',
        summary: '投资机构更关注商业化订单、供应链控制力和核心零部件自研比例。',
        tags: ['融资', '估值', '投资机构']
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
        tags: ['Humanoid', 'RaaS', '海外公司']
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
        direction: 'manipulation',
        summary: '通用机器人基础模型，基于预训练VLM和流匹配架构，在多平台真实任务上展现泛化能力。',
        tags: ['VLA', 'flow matching', 'manipulation']
      },
      {
        title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
        authors: 'Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti',
        venue: 'CoRL 2024',
        date: '2024/6/13',
        direction: 'manipulation',
        summary: '开源 7B 参数 VLA 模型，支持消费级 GPU 微调和量化部署。',
        tags: ['VLA', 'open-source', 'robot learning']
      },
      {
        title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models',
        authors: 'Open X-Embodiment Collaboration',
        venue: 'ICRA 2024 Best Paper',
        date: '2024/5/13',
        direction: 'learning',
        summary: '跨机器人形态的大规模学习数据集，验证多具身形态数据联合训练的价值。',
        tags: ['dataset', 'RT-X', 'cross-embodiment']
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
        tags: ['dataset', 'robot learning']
      },
      {
        name: 'OpenVLA',
        category: '开源项目',
        description: '面向通用机器人控制的开源 VLA 模型。',
        url: 'https://openvla.github.io/',
        tags: ['VLA', 'open-source']
      },
      {
        name: 'ICRA',
        category: '会议与活动',
        description: '机器人与自动化领域旗舰会议之一。',
        url: 'https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra',
        tags: ['conference', 'research']
      }
    ],
    searchHints: [
      { label: 'Search companies', icon: Search },
      { label: 'Track funding', icon: Activity }
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
      startUsing: '开始使用'
    },
    pages: {
      news: {
        eyebrow: 'Live Signal Feed',
        title: '行业资讯',
        description: '按照 AI Signal 的信息流方式组织机器人产业信号，但组件风格保持产业智库的一致视觉。',
        filters: ['全部', '人形机器人', '具身智能', '融资', '供应链', '论文', '政策'],
        sources: ['推特信号', '官网新闻', '公众号', '论文', '视频', 'B站'],
        insights: [
          { title: '今日洞察', body: '工业场景和量产交付成为人形机器人主线。' },
          { title: '本周洞察', body: '融资集中于头部，执行器和真实数据成本升温。' },
          { title: '趋势预判', body: 'VLA 与数据闭环会影响下一阶段竞争。' }
        ],
        searchPlaceholder: 'Search signals',
        streamTitle: '信号流 · 今日 28 条',
        sortLabel: '按最新发布'
      },
      resources: {
        eyebrow: 'Resource Map',
        title: '机器人产业资源导航',
        description: '把导航站能力放在单独模块中：公司、零部件、实验室、开源项目、数据集、会议、媒体社区和投资机构。'
      },
      companies: {
        eyebrow: 'Company Graph',
        title: '公司数据库',
        description: '第一版展示种子企业档案，后续接入 Drizzle 表后支持筛选、详情页、融资关联和生态关系图。'
      },
      funding: {
        eyebrow: 'Funding Intel',
        title: '投融资数据库',
        description: '追踪轮次、金额、估值和投资机构，并与公司数据库和资讯信号关联。'
      },
      papers: {
        eyebrow: 'Paper Radar',
        title: '技术论文',
        description: '聚合机器人学习、VLA、运动控制、操作、感知和数据集方向论文，提供中文解读入口。'
      },
      data: {
        eyebrow: 'Market Data',
        title: '产业数据',
        description: '第一版展示关键指标预览，后续扩展为出货量、成本结构、政策地图、零部件价格和市场规模看板。'
      },
      pricing: {
        eyebrow: 'Plans',
        title: '会员能力规划',
        description: '模板保留了 Stripe 集成能力。v1 先隐藏真实支付，把价格页作为能力规划展示，等产品数据和权限边界稳定后再开启订阅。'
      }
    },
    plans: [
      {
        name: 'Research',
        price: 'Free',
        description: '适合早期浏览产业导航、资讯和公开数据库。',
        features: ['公开行业资讯', '资源导航', '公司/论文/融资预览', '研究工作流预览']
      },
      {
        name: 'Intelligence',
        price: 'Soon',
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
      robotMeta: 'Companies · Funding · Papers · Signals'
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
        title: 'Humanoid robot production orders become a market focus',
        category: 'Market',
        source: 'Signal Feed',
        time: 'Today 12:29',
        summary: 'Industrial deployments and delivery capability are becoming key variables for investors and customers.',
        tags: ['Humanoid', 'Production', 'Industrial']
      },
      {
        title: 'VLA generalization in real robot tasks keeps heating up',
        category: 'Research',
        source: 'Paper Radar',
        time: 'Today 11:54',
        summary: 'Multi-task manipulation, cross-platform data, and real-world generalization remain central debates.',
        tags: ['VLA', 'Manipulation', 'Embodied AI']
      },
      {
        title: 'Embodied AI funding continues to concentrate among leaders',
        category: 'Funding',
        source: 'Funding Intel',
        time: 'This week',
        summary: 'Investors are looking harder at commercial orders, supply-chain control, and core component ownership.',
        tags: ['Funding', 'Valuation', 'Investors']
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
      startUsing: 'Start'
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
        description: 'For early browsing of resource maps, news, and public databases.',
        features: ['Public industry news', 'Resource map', 'Company/paper/funding previews', 'Research workflow previews']
      },
      {
        name: 'Intelligence',
        price: 'Soon',
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
