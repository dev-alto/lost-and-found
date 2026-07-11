import Link from 'next/link'

import { PerspectiveCard } from './components/PerspectiveCard'

export default function Home() {
  return (
    <div>
      <main className="w-full h-screen p-4 flex flex-col items-center justify-center gap-4">
        <PerspectiveCard maxAngleX={20} maxAngleY={40}>
          <div className="starting:opacity-0 opacity-100 delay-500 transition-opacity duration-2000">
            <h1 className="group text-5xl sm:text-7xl lg:text-9xl text-center font-bold bg-linear-to-t from-neutral-900 to-white bg-clip-text text-transparent transition-all cursor-help">
              <span className="text-sky-500 sm:text-transparent starting:text-transparent group-hover:text-sky-500 transition-colors delay-3500 sm:delay-0 hover:delay-0 duration-1000">lost</span>
              {' and '}
              <span className='text-lime-500 sm:text-transparent starting:text-transparent group-hover:text-lime-500 transition-colors delay-4000 sm:delay-0 hover:delay-500 duration-1000'>found</span>
            </h1>
          </div>
        </PerspectiveCard>
        <section className="text-center text-balance font-mono starting:opacity-0 opacity-100 delay-1500 transition-opacity duration-2000">
          <p>viewing this page means you have recovered something of mine.</p>
          <p className="opacity-80">you may receive compensation for returning this something to me.</p>
          <p>inquire to <Link className="text-yellow-500 hover:animate-pulse font-black transition-all" href={"mailto:found@devalto.dev"}>found@devalto.dev</Link> to commence the reprocurement process.</p>
        </section>
      </main>

      <section className="pointer-events-none">
        <video src={"/assets/backdrop.webm"} className="-z-10 absolute top-0 w-full h-full object-cover starting:opacity-0 opacity-15 transition-all duration-3000 delay-2500" autoPlay loop muted></video>
        
        <div className="starting:opacity-0 opacity-100 transition-all duration-3000 delay-2500">
          <div className="-z-10 absolute top-0 w-full h-full outline-white outline-10 outline-dashed scale-80 opacity-0 sm:opacity-5" />

          <div className="absolute bottom-0 w-full p-4 flex flex-col items-center justify-center font-mono opacity-50">
            <p>🅻🅴|🆁🆉</p>
            <p>found.devalto.dev</p>
          </div>
        </div>
      </section>
    </div>
  )
}
