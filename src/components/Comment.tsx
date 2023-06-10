import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }: any) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar src="https://github.com/joaogabrielf.png" hasBorder={false} />

      <div className="flex-1">
        <div className="rounded-[8px] bg-gray-700 p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm">João Gabriel</strong>
              <time
                title="09 de Junho as 13h53"
                dateTime="2023-06-09 13:53:00"
                className="text-sm leading-[1.6rem] text-gray-400"
              >
                Cerca de 1h atras
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentario"
              className="cursor-pointer rounded-[2px] border-0 bg-transparent leading-[0] text-gray-400 transition-colors hover:text-red-500"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">{content}</p>
        </div>
        <footer className="mt-4">
          <button
            className="flex cursor-pointer items-center rounded-[2px] border-0 bg-transparent text-gray-400 hover:text-green-300"
            onClick={handleLikeComment}
          >
            <ThumbsUp className="mr-2" />
            Aplaudir
            <span className="before:px-1 before:py-0 before:content-['•']">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
