// AI Agent Data - Comprehensive database of AI coding assistants
export const agentsData = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    company: 'Anthropic',
    description: 'Advanced AI coding assistant with exceptional reasoning capabilities and deep context understanding',
    strengths: [
      'Complex multi-step tasks',
      'Code refactoring and architecture',
      'Technical documentation',
      'Security analysis',
      'Large codebase understanding'
    ],
    weaknesses: [
      'Slower for simple autocomplete',
      'Requires explicit instructions',
      'Limited IDE integration'
    ],
    bestFor: [
      'Enterprise codebases',
      'Security-critical applications',
      'Complex refactoring projects',
      'Technical writing and documentation'
    ],
    pricing: '$20/month (Pro), Custom (Enterprise)',
    url: 'https://claude.ai/code',
    tags: ['reasoning', 'security', 'enterprise', 'documentation']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    company: 'Cursor Inc.',
    description: 'AI-first code editor with superior IDE integration and intelligent code navigation',
    strengths: [
      'IDE-native experience',
      'Code completion and suggestions',
      'File-wide edits',
      'Chat with codebase',
      'Multiple model support'
    ],
    weaknesses: [
      'Learning curve for new users',
      'Resource intensive',
      'Less effective for non-coding tasks'
    ],
    bestFor: [
      'Daily development work',
      'Quick prototyping',
      'Code exploration',
      'Team collaboration'
    ],
    pricing: 'Free tier, $20/month (Pro)',
    url: 'https://cursor.sh',
    tags: ['ide', 'completion', 'navigation', 'collaboration']
  },
  {
    id: 'devin-ai',
    name: 'Devin AI',
    company: 'Cognition Labs',
    description: 'Autonomous AI software engineer capable of handling entire development projects',
    strengths: [
      'Autonomous project execution',
      'End-to-end development',
      'Deployment automation',
      'Bug fixing and debugging',
      'Learning from mistakes'
    ],
    weaknesses: [
      'Expensive',
      'Less control over process',
      'Still in early access'
    ],
    bestFor: [
      'Full project development',
      'Automated testing',
      'DevOps and deployment',
      'Research and experimentation'
    ],
    pricing: 'Custom enterprise pricing',
    url: 'https://devin.ai',
    tags: ['autonomous', 'full-stack', 'deployment', 'testing']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    company: 'Microsoft/GitHub',
    description: 'AI pair programmer offering real-time code suggestions and completions',
    strengths: [
      'Real-time autocomplete',
      'Wide IDE support',
      'Context-aware suggestions',
      'Multi-language support',
      'Easy integration'
    ],
    weaknesses: [
      'Limited reasoning capability',
      'Can suggest incorrect code',
      'Privacy concerns for enterprises'
    ],
    bestFor: [
      'Beginners learning to code',
      'Rapid prototyping',
      'Boilerplate generation',
      'Common programming patterns'
    ],
    pricing: '$10/month (Individual), $19/user/month (Business)',
    url: 'https://github.com/features/copilot',
    tags: ['autocomplete', 'beginner-friendly', 'multi-language', 'integration']
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    company: 'Codeium',
    description: 'Next-generation AI IDE with advanced flow state and contextual understanding',
    strengths: [
      'Flow-based editing',
      'Deep codebase indexing',
      'Multi-file operations',
      'Smart refactoring',
      'Fast performance'
    ],
    weaknesses: [
      'Newer platform with less maturity',
      'Smaller community',
      'Limited third-party integrations'
    ],
    bestFor: [
      'Large codebase navigation',
      'Complex refactoring',
      'Team productivity',
      'Code quality improvement'
    ],
    pricing: 'Free tier, $15/month (Pro)',
    url: 'https://codeium.com/windsurf',
    tags: ['flow', 'indexing', 'refactoring', 'performance']
  },
  {
    id: 'augment-code',
    name: 'Augment Code',
    company: 'Augment Code Inc.',
    description: 'Enterprise-grade AI coding assistant focused on security and compliance',
    strengths: [
      'Enterprise security',
      'Compliance features',
      'Private deployment options',
      'Custom model training',
      'Audit trails'
    ],
    weaknesses: [
      'Higher cost',
      'Complex setup',
      'Requires IT involvement'
    ],
    bestFor: [
      'Regulated industries',
      'Financial services',
      'Healthcare applications',
      'Government contracts'
    ],
    pricing: 'Custom enterprise pricing',
    url: 'https://augmentcode.com',
    tags: ['enterprise', 'security', 'compliance', 'audit']
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    company: 'Replit',
    description: 'AI-powered coding assistant integrated into the Replit cloud IDE',
    strengths: [
      'Cloud-based development',
      'Instant environment setup',
      'Collaborative coding',
      'Educational features',
      'Zero configuration'
    ],
    weaknesses: [
      'Limited to Replit ecosystem',
      'Performance depends on internet',
      'Less powerful than desktop IDEs'
    ],
    bestFor: [
      'Education and learning',
      'Quick experiments',
      'Remote collaboration',
      'Hackathons'
    ],
    pricing: 'Free tier, $20/month (Core)',
    url: 'https://replit.com',
    tags: ['cloud', 'education', 'collaboration', 'quick-start']
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    company: 'Vercel',
    description: 'Generative UI system that creates React components from text descriptions',
    strengths: [
      'UI component generation',
      'React and Tailwind expertise',
      'Rapid prototyping',
      'Design system integration',
      'One-click deployment'
    ],
    weaknesses: [
      'Focused on frontend only',
      'Limited backend capabilities',
      'May require manual refinement'
    ],
    bestFor: [
      'Frontend prototyping',
      'UI component libraries',
      'Design systems',
      'Landing pages'
    ],
    pricing: 'Free tier, $20/month (Pro)',
    url: 'https://v0.dev',
    tags: ['frontend', 'ui', 'react', 'prototyping']
  },
  {
    id: 'perplexity',
    name: 'Perplexity Pro',
    company: 'Perplexity AI',
    description: 'AI research assistant with coding capabilities and web search integration',
    strengths: [
      'Web search integration',
      'Research and fact-checking',
      'Current information access',
      'Citation and sources',
      'Multi-modal input'
    ],
    weaknesses: [
      'Not IDE-integrated',
      'Less code-focused',
      'Slower for pure coding tasks'
    ],
    bestFor: [
      'Research-heavy projects',
      'Learning new technologies',
      'Finding best practices',
      'Technical decision making'
    ],
    pricing: 'Free tier, $20/month (Pro)',
    url: 'https://perplexity.ai',
    tags: ['research', 'search', 'learning', 'citations']
  },
  {
    id: 'trae',
    name: 'Trae',
    company: 'ByteDance',
    description: 'AI-native IDE with builder mode for autonomous development tasks',
    strengths: [
      'Builder mode automation',
      'Visual project planning',
      'Integrated debugging',
      'Multi-model routing',
      'Cost optimization'
    ],
    weaknesses: [
      'Relatively new platform',
      'Limited documentation',
      'Smaller user community'
    ],
    bestFor: [
      'Full-stack development',
      'Project scaffolding',
      'API development',
      'Database integration'
    ],
    pricing: 'Free tier available',
    url: 'https://trae.io',
    tags: ['automation', 'visual', 'full-stack', 'debugging']
  }
];

export const taskCategories = [
  {
    id: 'learning',
    name: 'Learning & Education',
    description: 'Best for beginners and those learning to code',
    icon: '📚'
  },
  {
    id: 'prototyping',
    name: 'Rapid Prototyping',
    description: 'Quick iteration and experimental development',
    icon: '⚡'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Development',
    description: 'Large-scale, secure, compliant projects',
    icon: '🏢'
  },
  {
    id: 'frontend',
    name: 'Frontend & UI',
    description: 'Web interfaces and component development',
    icon: '🎨'
  },
  {
    id: 'backend',
    name: 'Backend & API',
    description: 'Server-side logic and database work',
    icon: '⚙️'
  },
  {
    id: 'devops',
    name: 'DevOps & Deployment',
    description: 'CI/CD, infrastructure, and deployment automation',
    icon: '🚀'
  },
  {
    id: 'refactoring',
    name: 'Refactoring & Maintenance',
    description: 'Code improvement and technical debt reduction',
    icon: '🔧'
  },
  {
    id: 'research',
    name: 'Research & Learning',
    description: 'Exploring new technologies and best practices',
    icon: '🔍'
  },
  {
    id: 'security',
    name: 'Security & Compliance',
    description: 'Security audits and regulatory compliance',
    icon: '🔒'
  },
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Technical writing and code documentation',
    icon: '📝'
  }
];

export const agentTaskMapping = {
  'learning': ['github-copilot', 'replit-ghostwriter', 'cursor'],
  'prototyping': ['cursor', 'v0', 'github-copilot', 'replit-ghostwriter'],
  'enterprise': ['augment-code', 'claude-code', 'cursor'],
  'frontend': ['v0', 'cursor', 'windsurf', 'github-copilot'],
  'backend': ['claude-code', 'trae', 'cursor', 'devin-ai'],
  'devops': ['devin-ai', 'trae', 'claude-code'],
  'refactoring': ['claude-code', 'windsurf', 'cursor'],
  'research': ['perplexity', 'claude-code', 'cursor'],
  'security': ['claude-code', 'augment-code'],
  'documentation': ['claude-code', 'cursor', 'perplexity']
};

export const comparisonFactors = [
  {
    id: 'ease-of-use',
    name: 'Ease of Use',
    description: 'How easy is it to get started and be productive?'
  },
  {
    id: 'power',
    name: 'Capability',
    description: 'How complex are the tasks it can handle?'
  },
  {
    id: 'integration',
    name: 'IDE Integration',
    description: 'How well does it integrate with your development environment?'
  },
  {
    id: 'speed',
    name: 'Speed',
    description: 'How fast does it respond and complete tasks?'
  },
  {
    id: 'cost',
    name: 'Value for Money',
    description: 'Is the pricing reasonable for the features offered?'
  },
  {
    id: 'privacy',
    name: 'Privacy & Security',
    description: 'How well does it protect your code and data?'
  }
];
