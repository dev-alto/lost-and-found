import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="w-full h-screen p-4 flex flex-col items-center justify-center gap-4">
        <section className="starting:opacity-0 opacity-100 delay-500 transition-opacity duration-2000">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl text-center font-bold bg-linear-to-t from-neutral-900 to-white bg-clip-text text-transparent transition-all">lost and found</h1>
        </section>
        <section className="text-center font-mono starting:opacity-0 opacity-100 delay-1500 transition-opacity duration-2000">
          <p>viewing this page means you have recovered something of mine.</p>
          <p>you may receive compensation for returning this something to me.</p>
          <p>inquire to <Link className="text-yellow-500 hover:animate-pulse hover:font-black transition-all" href={"mailto:found@devalto.dev"}>found@devalto.dev</Link> to commence the reprocurement process.</p>
        </section>
      </main>
      
      <section className="absolute bottom-0 w-full p-4 flex flex-col items-center justify-center font-mono opacity-50">
        <p className="">🅻🅴|🆁🆉</p>
        <p className="">found.devalto.dev</p>
      </section>
    </div>
  )
}
