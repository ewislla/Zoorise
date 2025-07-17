import { RoadmapPhase, TokenomicsData, FAQItem, SocialLink } from '../types';

export const LAUNCH_DATE = '2024-04-01T00:00:00Z';

export const TOKENOMICS_DATA: TokenomicsData[] = [
  { label: 'Public Sale', value: 80, color: '#F4A261' },
  { label: 'Community Rewards', value: 15, color: '#2A9D8F' },
  { label: 'Development', value: 5, color: '#1E1E1E' },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 1,
    title: 'Phase 1',
    subtitle: 'The Awakening',
    description: [
      'Community building',
      'Social media presence',
      'Pumpfun launch'
    ],
    icon: '🦁',
    completed: false,
  },
  {
    id: 2,
    title: 'Phase 2',
    subtitle: 'The Roar',
    description: [
      '1000+ holders',
      'Major exchange listings',
      'Influencer partnerships'
    ],
    icon: '🐘',
    completed: false,
  },
  {
    id: 3,
    title: 'Phase 3',
    subtitle: 'The Stampede',
    description: [
      '10,000+ holders',
      'NFT collection launch',
      'Community events'
    ],
    icon: '🐅',
    completed: false,
  },
  {
    id: 4,
    title: 'Phase 4',
    subtitle: 'The Kingdom',
    description: [
      '100,000+ holders',
      'Mobile app',
      'Ecosystem expansion'
    ],
    icon: '👑',
    completed: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is ZooriseCoin ($ZOO)?',
    answer: 'ZooriseCoin is a community-driven memecoin launched on Solana with a wild zoo theme. We\'re building a vibrant ecosystem where holders can participate in community governance and enjoy wild gains!'
  },
  {
    question: 'How do I buy $ZOO tokens?',
    answer: 'You can buy $ZOO tokens through Pumpfun using your Solana wallet. Simply connect your wallet, swap SOL for $ZOO, and join our pack!'
  },
  {
    question: 'Is $ZOO safe to invest in?',
    answer: 'While no investment is without risk, $ZOO features a fair launch with no presale, locked liquidity, and a renounced contract. Always do your own research before investing.'
  },
  {
    question: 'What makes $ZOO different from other memecoins?',
    answer: 'Our strong community focus, transparent tokenomics, and commitment to building a lasting ecosystem sets us apart. We\'re not just another memecoin - we\'re building the future of community-driven crypto.'
  },
  {
    question: 'Where can I get support?',
    answer: 'Join our Telegram community for 24/7 support from our team and fellow zoo members. We\'re always here to help!'
  },
  {
    question: 'What are the tokenomics?',
    answer: 'Total supply: 1 billion $ZOO. 80% public sale, 15% community rewards, 5% development. No taxes, LP locked, contract renounced.'
  },
  {
    question: 'Is the team doxxed?',
    answer: 'Our team remains anonymous to focus on community-driven development. However, we\'re fully committed to transparency and building trust through our actions.'
  },
  {
    question: 'What\'s the roadmap?',
    answer: 'Our roadmap includes four phases: The Awakening (launch), The Roar (growth), The Stampede (expansion), and The Kingdom (ecosystem). Each phase brings new features and milestones.'
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Telegram',
    url: 'https://t.me/zoorisecoin',
    icon: '📱',
    count: '5.2K'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/zoorisecoin',
    icon: '🐦',
    count: '12.8K'
  },
  {
    platform: 'Discord',
    url: 'https://discord.gg/zoorisecoin',
    icon: '🎮',
    count: '3.4K'
  },
];

export const HOW_TO_BUY_STEPS = [
  {
    step: 1,
    title: 'Get a Solana Wallet',
    description: 'Download Phantom or Solflare wallet',
    icon: '👛'
  },
  {
    step: 2,
    title: 'Buy SOL',
    description: 'Purchase SOL from Binance or Coinbase',
    icon: '💰'
  },
  {
    step: 3,
    title: 'Visit Pumpfun',
    description: 'Go to Pumpfun and connect your wallet',
    icon: '🚀'
  },
  {
    step: 4,
    title: 'Swap SOL for $ZOO',
    description: 'Exchange your SOL for $ZOO tokens',
    icon: '🔄'
  },
  {
    step: 5,
    title: 'Join the Zoo!',
    description: 'Welcome to the wild side of crypto',
    icon: '🦁'
  },
];