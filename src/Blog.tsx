import React from 'react';

/**
 * Blog component embeds the Astro-generated blog.
 * During development the blog runs on a separate dev server,
 * so we point the iframe to that address. In production the
 * blog is served from the /blog/ path of the built site.
 */
function Blog() {
  const src = import.meta.env.DEV ? 'http://localhost:5173/blog/' : '/blog/';
  return (
    <iframe
      title="Blog"
      src={src}
      style={{ width: '100%', height: '80vh', border: 'none' }}
    />
  );
}

export default Blog;
