import { useEffect, useState } from 'react';
import { Post } from '../types/post';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch posts and handle state updates
    // Trigger notify API (should NOT block rendering or re-renders)
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error loading posts: {error}</div>;

  return (
    <main>
      <h1>Recent Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span>{post.publishedAt}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
