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
  Sparkles,
  Wrench
} from 'lucide-react';

export const navItems = [
  { label: '首页', href: '/' },
  { label: '行业资讯', href: '/news' },
  { label: '公司数据库', href: '/companies' },
  { label: '投融资', href: '/funding' },
  { label: '技术论文', href: '/papers' },
  { label: '产业数据', href: '/data' },
  { label: '资源导航', href: '/resources' },
  { label: 'AI 助手', href: '/ai' }
];

export const platformStats = [
  { label: '收录企业', value: '200+', detail: '人形、四足、零部件、服务机器人' },
  { label: '技术论文', value: '5,000+', detail: 'VLA、运动控制、操作、感知' },
  { label: '融资事件', value: '500+', detail: '轮次、估值、投资机构' },
  { label: '产业指标', value: '50+', detail: '出货量、成本、市场规模' }
];

export const platformModules = [
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
  },
  {
    title: 'AI 助手',
    description: '基于智库数据进行企业对比、趋势总结、融资分析和研究问答。',
    href: '/ai',
    meta: 'Research Copilot',
    icon: BrainCircuit
  }
];

export const latestSignals = [
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
];

export const hotTerms = [
  { term: '人形机器人', count: 171 },
  { term: 'VLA', count: 115 },
  { term: '执行器', count: 77 },
  { term: '量产', count: 63 },
  { term: '融资', count: 58 },
  { term: '具身智能', count: 52 }
];

export const companies = [
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
];

export const fundingEvents = [
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
];

export const papers = [
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
];

export const metrics = [
  { name: '全球人形机器人出货量', value: '13,000台', period: '2025年', region: '全球', change: '+465%' },
  { name: '中国人形机器人市场规模', value: '82亿元', period: '2025年', region: '中国', change: '+120%' },
  { name: '中国具身智能融资总额', value: '419亿元', period: '2025年', region: '中国', change: '+291%' },
  { name: '高盛预测2035年全球市场', value: '1,540亿美元', period: '2035年预测', region: '全球', change: '长期增长' }
];

export const resourceCategories = [
  { name: '机器人公司', count: 200, icon: Bot },
  { name: '核心零部件', count: 80, icon: Wrench },
  { name: '研究实验室', count: 45, icon: Microscope },
  { name: '开源项目', count: 60, icon: Database },
  { name: '数据集', count: 35, icon: Database },
  { name: '会议与活动', count: 24, icon: Globe2 },
  { name: '媒体与社区', count: 32, icon: Newspaper },
  { name: '投资机构', count: 90, icon: CircleDollarSign }
];

export const resources = [
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
];

export const assistantPrompts = [
  {
    prompt: '对比宇树科技和智元机器人的技术路线',
    answer: '宇树科技更强调高性价比硬件量产和运动控制积累，智元机器人更强调通用人形产品矩阵、场景拓展和生态合作。'
  },
  {
    prompt: '总结最近一个月人形机器人融资变化',
    answer: '融资继续向头部集中，投资人关注点从概念热度转向订单、交付能力、供应链自研和数据闭环。'
  },
  {
    prompt: '目前人形机器人量产最大的挑战是什么',
    answer: '核心挑战包括可靠性、执行器成本、灵巧操作泛化、真实数据规模和可验证的商业场景。'
  }
];

export const searchHints = [
  { label: 'Search companies', icon: Search },
  { label: 'Track funding', icon: Activity },
  { label: 'Ask AI assistant', icon: Sparkles }
];
