import React from 'react'
import { posts } from '../data/posts'

function Blog() {
  return (
    <div className="blog-container">
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
      <p>
        Read more on my <a href="/blog/">Astro blog</a>.
      </p>
    </div>
  )
}

export default Blog
