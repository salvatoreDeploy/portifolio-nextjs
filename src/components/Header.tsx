import Link from 'next/link'
import { NavBar } from './NavBar'
import { DownloadSimple } from 'phosphor-react'
import Image from 'next/image'

import dynamic from 'next/dynamic'

const ModeToogle = dynamic(() => import('../components/theme/theme-toogle'), {
  ssr: false,
})

export function Header() {
  return (
    <div className="bg-zinc-900 border border-transparent border-b-zinc-700 h-26 drop-shadow-lg items-center font-medium">
      <div className="flex max-w-[1600] m-auto justify-between items-center p-5 w-[85%] text-white ">
        <div className="flex">
          <Link href={'/'} className="mr-6 items-center">
            <Image
              src="/assets/logo-dark.svg"
              width={138}
              height={54}
              alt="Logotipo"
            />
          </Link>

          <NavBar />
        </div>

        <div className="flex gap-8 items-center justify-center">
          <div>
            <ModeToogle />
          </div>
          <div className="flex gap-4">
            <span>Curriculum CV</span>
            <Link download={true} href="/">
              <DownloadSimple
                size={24}
                className="transition-colors text-zinc-500/60 hover:text-zinc-400/80"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
