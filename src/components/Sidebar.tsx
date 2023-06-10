import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  const imgUrl =
    'https://plus.unsplash.com/premium_photo-1686050416689-1b1f64fd5000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  return (
    <aside className="overflow-hidden rounded-lg bg-gray-800">
      <img src={imgUrl} alt="" className="h-[72px] w-full object-cover" />

      <div className="flex flex-col items-center">
        <Avatar src="https://github.com/joaogabrielf.png" />
        <strong className="mt-1 leading-[1.6rem] text-gray-100">
          Joao Franco
        </strong>
        <span className="text-sm leading-[1.6rem] text-gray-400">
          Software Developer
        </span>
      </div>

      <footer className="mt-6 border border-solid border-gray-600 px-8 pb-8 pt-6">
        <a
          href="#"
          className="flex h-[50px] items-center justify-center gap-2 rounded-lg border border-solid border-green-500 bg-transparent px-5 py-0 font-bold text-green-500 no-underline transition duration-100 hover:bg-green-500 hover:text-white"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
