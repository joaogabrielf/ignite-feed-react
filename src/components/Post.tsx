import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: string
    content: string
  }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post legal'])

  const [newCommentText, setNewCommentText] = useState('')

  const formattedPublishedAt = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event?.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentText() {
    event?.target?.setCustomValidity('')
    setNewCommentText(event?.target?.value)
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter((c) => c !== comment)
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event?.target?.setCustomValidity('Este campo é obrigatório')
  }

  return (
    <article className="rounded-[8px] bg-gray-800 p-10 [&:not(:first-child)]:mt-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={author.avatarUrl} />
          <div className="flex flex-col">
            <strong className="leading-[1.6rem] text-gray-100">
              {author.name}
            </strong>
            <span className="text-sm leading-[1.6rem] text-gray-400">
              Software Developer
            </span>
          </div>
        </div>

        <time
          title={formattedPublishedAt}
          dateTime={publishedAt.toISOString()}
          className="text-sm text-gray-400"
        >
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className="mt-6 leading-[1.6rem] text-gray-300">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p>
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content} className="mt-4">
                <a
                  href="#"
                  className="font-bold text-green-500 no-underline hover:text-green-300"
                >
                  {line.content}
                </a>
              </p>
            )
          } else {
            return null
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="group mt-6 w-full border-t border-solid border-gray-600 pt-6"
      >
        <strong className="leading-[1.6rem] text-gray-100">
          Deixe seu feedback
        </strong>
        <textarea
          placeholder="Deixe um comentario"
          name="comment"
          onChange={handleNewCommentText}
          value={newCommentText}
          className="mt-4 h-24 w-full resize-none rounded-[8px] border-0 bg-gray-900 p-4 leading-[1.4rem] text-gray-100"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <div className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-[8px] border-0 bg-green-500 px-6 py-3 font-bold text-white transition duration-100 disabled:cursor-not-allowed disabled:opacity-50 [&:not(:disabled):hover]:bg-green-300"
            disabled={!newCommentText}
          >
            Publicar
          </button>
        </div>
      </form>
      <div className="mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
