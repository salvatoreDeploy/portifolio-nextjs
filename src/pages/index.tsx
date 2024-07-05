import { Header } from '../components/Header'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import Link from 'next/link'
import { HeroImg } from '../components/HeroImg'
import dynamic from 'next/dynamic'

const HardSkills = dynamic(() => import('../components/HardSkills'), {
  ssr: false,
})

const ThemeProvider = dynamic(
  () => import('../components/theme/theme-provider'),
  {
    ssr: false,
  },
)

export default function Home() {
  return (
    <ThemeProvider>
      <Header />

      <div className="flex max-w-[1600] m-auto mt-36 justify-between w-[85%] max-h-[266px] pt-36">
        <div className="w-[100%] ">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-0.5 bg-slate-500" />
            <p className="font-medium text-sm tracking-[7.5px] uppercase">
              meu nome é
            </p>
          </div>

          <p className="text-white font-bold text-5xl pt-6">
            Henrique José de {''}{' '}
            <span className="text-orange-500">Araujo.</span>
          </p>

          <p className="text-white mt-8">
            Sou desenvolvedor web. Gosto de construir tudo, desde sites simples
            até sites mais complexos. Tenho foco em Front-end e possuo maior
            proficiência e experiência no ecossistema Javascript
          </p>

          <div className="flex gap-8 mt-10 ">
            <Link href="https://www.instagram.com/henrique_j_a/">
              <div className=" flex items-center justify-center transition-colors text-zinc-50 rounded hover:bg-accent h-9 w-9">
                <InstagramLogo size={24} />
              </div>
            </Link>

            <Link href="https://github.com/salvatoreDeploy">
              <div className=" flex items-center justify-center transition-colors text-zinc-50 rounded hover:bg-accent h-9 w-9">
                <GithubLogo size={24} />
              </div>
            </Link>

            <div className=" flex items-center justify-center transition-colors text-zinc-50 rounded hover:bg-accent h-9 w-9">
              <LinkedinLogo size={24} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-[100%] pt-36">
          <HeroImg />
        </div>
      </div>

      <HardSkills />
    </ThemeProvider>
  )
}
