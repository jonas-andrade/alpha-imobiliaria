"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Sian Phillips",
    role: "vendedora",
    comment: "Eles fizeram tudo perfeitamente e ainda me deixaram confortável durante o processo.",
    photo: "/images/sian.jpg",
  },
  {
    name: "Taran & Celine Wilkhu",
    role: "compradores",
    comment: "Um serviço rápido e fácil, respeitando nosso estilo de vida.",
    photo: "/images/taran-wilkhu.jpg",
  },
  {
    name: "Olivia Wilson",
    role: "vendedora",
    comment: "Profissionalismo e atenção aos detalhes em cada etapa da venda.",
    photo: "/images/olivia.jpg",
  },
];

export default function LookingToSell() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Quer vender seu imóvel?</h2>
        <p className="text-lg md:text-xl font-light mb-4">
          Desde 2005 ajudamos milhares de pessoas a venderem imóveis excepcionais. O primeiro passo é uma avaliação de mercado gratuita, onde visitamos sua casa.
        </p>
        <p className="mb-8">
          Conte-nos como entrar em contato e retornaremos com todos os detalhes.
        </p>
      </div>

      {/* Formulário */}
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-md rounded-md mb-16">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nome" className="border border-gray-300 rounded px-4 py-2" />
          <input type="text" placeholder="Sobrenome" className="border border-gray-300 rounded px-4 py-2" />
          <input type="tel" placeholder="Telefone" className="border border-gray-300 rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2" />
          <select className="border border-gray-300 rounded px-4 py-2 md:col-span-2">
            <option>Como prefere ser contatado?</option>
            <option>Email</option>
            <option>Telefone</option>
          </select>
          <p className="text-sm text-gray-500 md:col-span-2">
            Usaremos essas informações apenas para responder sua solicitação (sem marketing, prometemos).
          </p>
          <button type="submit" className="md:col-span-2 bg-primary text-white uppercase tracking-widest py-3 rounded hover:bg-primary-dark transition">
            Enviar Solicitação
          </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="font-bold text-xl mb-2">Exposição Internacional</h3>
          <p>Mais de 40 milhões de visualizações anuais em nosso site, com 25% do tráfego vindo de hotspots internacionais.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Mídias Sociais</h3>
          <p>Mais de 700k seguidores no Instagram, influenciando compradores em todo o mundo.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Cobertura de Imprensa</h3>
          <p>55 artigos mensais em média e um blog de design premiado — exposição diária garantida.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full md:w-1/2 h-150">
              <Image src={t.photo} alt={t.name} fill className="object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 text-lg italic font-light">
              {t.comment} — <span className="font-semibold">{t.name}</span>, {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
