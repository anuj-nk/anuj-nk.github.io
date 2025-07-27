export interface Post {
  id: number
  title: string
  content: string
}

export const posts: Post[] = [
  { id: 1, title: 'Welcome to My Blog', content: 'This is a space where I share my thoughts and experiences.' },
  { id: 2, title: 'First Post', content: 'Feel free to explore and connect with me!' },
]
