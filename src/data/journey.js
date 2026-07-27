/**
 * Engineering progression displayed in the portfolio.
 *
 * Each stage explains how engineering knowledge and responsibilities evolved
 * from foundational problem-solving to production-oriented software systems.
 */
export const journeyStages = [
  {
    id: 'foundations',
    number: '01',
    title: 'Foundations',
    subtitle: 'Built strong programming and problem-solving fundamentals.',
    description:
      'Developed structured problem-solving skills through C++, data structures, algorithms, databases, object-oriented programming, and core computer science concepts.',
    technologies: [
      'C++',
      'Data Structures',
      'Algorithms',
      'DBMS',
      'OOP',
      'Problem Solving',
    ],
    principle: 'Strong fundamentals compound over time.',
  },
  {
    id: 'backend-engineering',
    number: '02',
    title: 'Backend Engineering',
    subtitle: 'Learned to design secure and maintainable backend systems.',
    description:
      'Progressed into backend development by designing REST APIs, authentication flows, database-backed applications, and modular server-side services.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'REST APIs',
    ],
    principle: 'Reliability begins with well-designed backend systems.',
  },
  {
    id: 'product-engineering',
    number: '03',
    title: 'Product Engineering',
    subtitle: 'Started delivering complete production-ready applications.',
    description:
      'Connected frontend experiences with secure backend services, relational databases, authentication workflows, version control, and containerized development.',
    technologies: [
      'React',
      'PostgreSQL',
      'Prisma',
      'Git',
      'Docker',
      'Full-Stack Development',
    ],
    principle:
      'Good engineering connects technical decisions with real user needs.',
  },
  {
    id: 'scalable-systems',
    number: '04',
    title: 'Scalable Systems',
    subtitle: 'Focused on architecture, cloud, and long-term scalability.',
    description:
      'Currently building production-oriented SaaS applications while improving multi-tenancy, role-based access control, system design, cloud architecture, and AI integration.',
    technologies: [
      'Multi-Tenancy',
      'RBAC',
      'Docker',
      'AWS',
      'System Design',
      'AI Integration',
    ],
    principle:
      'Architecture should support growth without sacrificing clarity.',
  },
]

/**
 * Engineering topics currently being explored and improved.
 */
export const currentFocus = [
  'System Design',
  'Distributed Systems',
  'Cloud Architecture',
  'Testing & Software Quality',
]