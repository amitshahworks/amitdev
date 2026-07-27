/**
 * Selected software projects displayed in the portfolio.
 *
 * Keep all project claims, technologies, URLs, and status values accurate.
 * Do not add features that are only planned or not yet implemented.
 */
export const projects = [
  {
    id: 'nexora',
    title: 'NEXORA',
    subtitle: 'Multi-Tenant SaaS CRM',
    description:
      'A production-oriented CRM platform for managing organizations, users, leads, follow-ups, notifications, and role-based workflows.',
    image: '/projects/nexora.webp',
    imageAlt: 'NEXORA multi-tenant SaaS CRM dashboard',
    status: 'In Development',
    highlights: ['Multi-Tenancy', 'RBAC', 'Secure Authentication'],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
    ],
    liveUrl: 'https://nexora-admission-crm.vercel.app',
    repositoryUrl: null,
  },
  {
    id: 'ai-interview-trainer',
    title: 'AI Interview Trainer',
    subtitle: 'AI Interview Preparation Platform',
    description:
      'An interview-practice application that generates interview sessions, evaluates responses, and stores feedback for later review.',
    image: '/projects/ai-interview-trainer.webp',
    imageAlt: 'AI Interview Trainer application dashboard',
    status: 'Deployed',
    highlights: ['Gemini Integration', 'Interview History', 'JWT Authentication'],
    technologies: [
      'React',
      'Express.js',
      'MongoDB',
      'Gemini API',
    ],
    liveUrl: 'https://ai-interview-trainer-swart.vercel.app/login',
    repositoryUrl:
      'https://github.com/amitshahworks/AI-Interview-Trainer',
  },
  {
    id: 'dispatchiq',
    title: 'DispatchIQ',
    subtitle: 'Distributed Task Queue System',
    description:
      'A production-style background job processing system designed around workers, priorities, retries, scheduling, and job lifecycle tracking.',
    image: '/projects/dispatchiq.webp',
    imageAlt: 'DispatchIQ distributed task queue dashboard',
    status: 'In Development',
    highlights: ['Worker Processing', 'Retries', 'Scheduled Jobs'],
    technologies: [
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Docker',
    ],
    liveUrl: null,
    repositoryUrl: null,
  },
]