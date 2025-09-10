"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="opacity-100 transition duration-[900ms] ease-[cubic-bezier(0.17,0.55,0.55,1)] delay-[200ms]">
      <div className="p-5 py-10 pb-8 lg:pb-10 bg-primary flex items-center justify-center flex-col">
        <p className="text-primary-foreground font-serif font-light text-base text-center lg:text-lg">
          “Um dos 100 melhores do mundo” —{" "}
          <span className="italic">GQ</span>
        </p>
        <Link
          href="/dashboard/sell"
          className="mt-6 mx-5 md:mx-0 px-6 py-2 border border-primary-foreground text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary-foreground hover:text-primary transition text-center leading-6"
        >
          “Descubra o valor do seu imóvel”
        </Link>
      </div>

      {/* Ondinha decorativa */}
      <div className="w-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1280 50"
          preserveAspectRatio="none"
          className="bg-primary-foreground w-full h-[50px] will-change-transform"
        >
          <polygon
            className="fill-primary hidden lg:block"
            points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
          ></polygon>
          <polygon
            className="fill-primary lg:hidden block"
            points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}
