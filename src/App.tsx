import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaogabrielf.png',
      name: 'João Gabriel',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
      },
      { type: 'link', content: 'devonlane.design' },
    ],
    publishedAt: new Date('2023-04-12T14:30:00.000Z'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/yreidn.png',
      name: 'Quinho Quinn',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
      },
      { type: 'link', content: 'devonlane.design' },
    ],
    publishedAt: new Date('2023-04-12T14:30:00.000Z'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto my-8 grid max-w-[70rem] grid-cols-[256px_1fr] items-start gap-8 px-4 py-0 md:grid-cols-[1fr]">
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
