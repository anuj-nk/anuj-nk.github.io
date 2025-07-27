import React from 'react'

const posts = [
  { id: 1, title: 'Welcome to My Blog', content: 'This is a space where I share my thoughts and experiences.' },
  { id: 2, title: 'First Post', content: 'Feel free to explore and connect with me!' },
]

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
