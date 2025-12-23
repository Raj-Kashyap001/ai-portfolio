export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export type Post = {
  id: string
  slug: string
  title:string
  content: string
  image: string
  tags: string[]
  date: string
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'QuantumLeap Analytics',
    description:
      'A comprehensive web platform for data analytics, providing businesses with real-time insights through interactive dashboards and visualizations. Built with a focus on performance and scalability.',
    image: 'project-1',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'ConnectSphere',
    description:
      'A mobile-first social networking application designed to connect like-minded individuals through events and shared interests. Features include real-time chat, event creation, and a recommendation engine.',
    image: 'project-2',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    liveUrl: '#',
  },
  {
    id: 'proj-3',
    title: 'Aura Fashion E-commerce',
    description:
      'An elegant e-commerce site for a high-end fashion brand. The platform features a clean, minimalist design, a seamless checkout process, and a custom CMS for easy product management.',
    image: 'project-3',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Headless CMS'],
    githubUrl: '#',
  },
  {
    id: 'proj-4',
    title: 'Arcadia VR',
    description:
      'A virtual reality experience that transports users to breathtaking architectural wonders. Developed using Unity and the latest VR technologies to create a fully immersive and interactive environment.',
    image: 'project-4',
    tags: ['Unity', 'C#', 'VR', '3D Modeling'],
    liveUrl: '#',
  },
  {
    id: 'proj-5',
    title: 'Project Nebula',
    description:
      'A data visualization tool that maps complex network infrastructures. It helps network administrators monitor, troubleshoot, and optimize their systems with an intuitive graphical interface.',
    image: 'project-5',
    tags: ['Vue.js', 'Three.js', 'WebSocket', 'Python'],
    githubUrl: '#',
  },
  {
    id: 'proj-6',
    title: 'Zenith SaaS',
    description:
      'A multi-tenant SaaS platform offering project management tools for small to medium-sized businesses. Features include task tracking, team collaboration, and reporting functionalities.',
    image: 'project-6',
    tags: ['Angular', '.NET Core', 'PostgreSQL', 'Microservices'],
    liveUrl: '#',
  },
]

export const posts: Post[] = [
  {
    id: 'post-1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    content:
      'React Hooks have revolutionized how we write components. This post explores advanced patterns and best practices for using hooks like useEffect, useReducer, and creating your own custom hooks to manage complex state and side effects in your applications. We cover everything from performance considerations to testing strategies, ensuring you can leverage the full power of hooks in your projects.',
    image: 'blog-1',
    tags: ['React', 'JavaScript', 'Web Development'],
    date: '2024-05-15',
  },
  {
    id: 'post-2',
    slug: 'the-art-of-ui-ux-design',
    title: 'The Art of UI/UX: Principles for Great Design',
    content:
      "A great user interface is more than just aesthetics; it's about creating an intuitive and enjoyable experience. This article breaks down the fundamental principles of UI/UX design, including user research, wireframing, prototyping, and usability testing. Learn how to apply these concepts to craft products that users love.",
    image: 'blog-2',
    tags: ['UI/UX', 'Design', 'Product'],
    date: '2024-04-22',
  },
  {
    id: 'post-3',
    slug: 'agile-methodology-for-modern-teams',
    title: 'Agile Methodology for Modern Teams',
    content:
      'Agile is more than just a buzzword; it’s a mindset that empowers teams to deliver value faster and more efficiently. We explore the core tenets of agile development, compare popular frameworks like Scrum and Kanban, and provide practical tips for implementing agile practices in your team, whether you are a developer, designer, or project manager.',
    image: 'blog-3',
    tags: ['Agile', 'Productivity', 'Teamwork'],
    date: '2024-03-30',
  },
  {
    id: 'post-4',
    slug: 'demystifying-serverless-architecture',
    title: 'Demystifying Serverless Architecture',
    content:
      "Serverless computing is changing the way we build and deploy applications. This guide explains what serverless is, its benefits, and its potential drawbacks. We walk through building a simple serverless API using services like AWS Lambda and API Gateway, showing you how to get started with this powerful paradigm.",
    image: 'blog-4',
    tags: ['Serverless', 'Cloud', 'Architecture'],
    date: '2024-02-18',
  },
]
