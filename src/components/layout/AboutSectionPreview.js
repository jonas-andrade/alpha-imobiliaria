"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionPreview() {
  return (
    <section className="w-full bg-primary-foreground">
      {/* Texto + Imagem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-[12vw] py-16">
        <div>
          <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
            “A Alpha Conceito nasceu em 2014 com o compromisso de oferecer um
            atendimento transparente, ético e personalizado no mercado
            imobiliário de Fortaleza. Nosso foco é garantir negociações seguras
            e sólidas, sempre com profissionalismo e dedicação aos clientes.”
          </p>
          <p className="mt-6 font-semibold text-sm uppercase tracking-widest text-muted-foreground">
            — Alpha Conceito Imobiliária
          </p>
        </div>
        <div className="relative w-full h-[700px]">
          <Image
            src="/images/about-vertical.jpg"
            alt="Equipe Alpha Conceito"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Faixa com fundo + texto */}
      <div className="relative w-full h-[400px] flex items-center justify-center text-center text-white px-6">
        <Image
          src="/images/about-background.jpg"
          alt="Fachada Alpha Conceito"
          fill
          className="object-cover brightness-50"
        />
        <p className="relative z-10 max-w-3xl text-lg md:text-xl font-light">
          “Alpha Conceito: confiança, transparência e excelência no mercado
          imobiliário desde 2014.”
        </p>
        <div className="absolute bottom-8 z-10">
          <Link
            href="/dashboard/about"
            className="px-6 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
          >
            Sobre nós
          </Link>
        </div>
      </div>
    </section>
  );
}
