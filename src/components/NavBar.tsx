import Link from 'next/link'

export function NavBar() {
  return (
    <nav className="flex items-center gap-6 list-none text-md font-bold">
      <li className="transition-colors text-zinc-500/60 hover:text-zinc-400/80">
        <Link href={'/'}>Tecnologias</Link>
      </li>
      <li className="transition-colors text-zinc-500/60 hover:text-zinc-400/80">
        <Link href={'/'}>Projetos</Link>
      </li>
      <li className="transition-colors text-zinc-500/60 hover:text-zinc-400/80">
        <Link href={'/'}>Contato</Link>
      </li>
    </nav>
  )
}
