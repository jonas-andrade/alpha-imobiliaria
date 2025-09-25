"use client";

import Image from "next/image";

export default function Sobre() {
  return (
    <main className="w-full">
      {/* Hero institucional */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/about-background.jpg"
          alt="Alpha Conceito Imobiliária"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sobre a Alpha Conceito
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Confiança, transparência e excelência no mercado imobiliário desde
            2014.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A{" "}
            <span className="font-semibold text-gray-900">ALPHA CONCEITO</span>{" "}
            iniciou suas atividades em 2014 visando construir uma história
            sólida e confiável no mercado imobiliário de Fortaleza. Atuando com
            ética, transparência e excelência, oferecemos atendimento
            personalizado que garante segurança em todos os negócios realizados.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Nossa atuação dinâmica e profissional nos tornou referência no
            mercado regional, consolidando a{" "}
            <span className="font-semibold text-gray-900">ALPHA CONCEITO</span>{" "}
            como uma das empresas mais eficientes e respeitadas do setor.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-primary-foreground px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ética
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Baseamos cada negociação na integridade e na confiança.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Transparência
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Comunicação clara em todas as etapas do processo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Excelência
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Busca contínua por qualidade em nossos serviços.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Atendimento
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Experiência personalizada para cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contato
          </h2>
          <div className="space-y-2 text-center text-gray-700">
            <p>
              Alpha Imobiliária <br />
              Av. Pacífico, 731, Cidade Alpha, Sala 305 – Eusébio, CE
            </p>
            <p>CRECI 1167J</p>
            <p>
              Telefone: <span className="font-medium">(85) 4141-3632</span>
            </p>
            <p>
              WhatsApp:{" "}
              <span className="font-medium">(85) 99635-3513</span> /{" "}
              <span className="font-medium">(85) 98842-9111</span>
            </p>
            <p>
              E-mail:{" "}
              <a
                href="mailto:comercialalphaconceito@gmail.com"
                className="text-blue-600 hover:underline"
              >
                comercialalphaconceito@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
