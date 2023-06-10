interface AvatarProps {
  src: string
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  let avatarClass =
    'h-12 w-12 rounded-[8px] border border-solid border-gray-800'
  const borderClass = 'outline outline-2 outline-green-500'

  avatarClass = hasBorder ? `${avatarClass}  ${borderClass}` : avatarClass

  return <img src={src} alt="Foto de perfil" className={avatarClass} />
}
