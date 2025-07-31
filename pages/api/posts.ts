import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../types/post';

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Async Patterns in React',
    excerpt: 'Understanding async programming in modern React projects.',
    content: 'Full content about async patterns...',
    publishedAt: '2024-06-01T10:00:00Z'
  },
  {
    id: 2,
    title: 'Optimizing Next.js Performance',
    excerpt: 'Learn key optimizations for SSR and SSG.',
    content: 'Full content on Next.js performance...',
    publishedAt: '2024-06-03T13:30:00Z'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  setTimeout(() => {
    res.status(200).json(MOCK_POSTS);
  }, 700); // Artificial delay for loading demonstration
}
