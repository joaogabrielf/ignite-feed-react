import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="flex justify-center bg-gray-800 px-0 py-5">
      <img src={igniteLogo} alt="Logo ignite" className="h-8" />
    </header>
  )
}
