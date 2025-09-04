"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[600px] overflow-hidden">
  
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="lg:w-3/5 w-full h-1/2 lg:h-full relative">
              <Image
                src={src}
                alt={`Propriedade ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:to-black/5"></div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-8 h-1 transition-all duration-300 ${
                      i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

           
            <div className="lg:w-2/5 w-full h-1/2 lg:h-full flex flex-col justify-center bg-background px-8 lg:px-12 py-8">
              <div className="space-y-4 max-w-md">
                <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase font-light">
                  Today at Alpha Imobiliária
                </p>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight">
                  Conte com a Alpha Imobiliária
                </h2>

                <p className="text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                  Compromisso em proporcionar a melhor moradia com o melhor preço para sua família.
                </p>

                <div className="pt-2">
                  <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-light text-sm tracking-wide transition-all duration-300">
                    Ver Imóveis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}