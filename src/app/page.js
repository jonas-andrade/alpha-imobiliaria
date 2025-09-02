"use client";
import Image from 'next/image';



export default function Home() {

  return (
 <div className="relative w-full h-screen bg-gray-100">
      <Image
        src="/images/hero.jpg"
        alt="Casa à venda"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Todos os Imóveis</h1>
      </div>
    </div>
  );
}
