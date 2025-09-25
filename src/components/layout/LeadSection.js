  "use client";

  export default function LeadSection() {
    return (
      <div className="relative">
        {/* Seção principal */}
        <div className="bg-background p-5 pb-2 md:px-[15vw] lg:px-[20vw] md:pt-12 md:pb-4 w-full flex flex-col justify-center items-center pt-8 pb-2">
          
          <p className="text-foreground font-light text-base lg:text-lg w-full text-center leading-relaxed">
            "Uma imobiliária como nenhuma outra, a Alpha Imobiliária oferece os imóveis mais incríveis e bem localizados em Fortaleza e região metropolitana" — <span className="italic">Diário do Nordeste</span>
          </p>
          
          <a 
            className="tracking-widest duration-500 font-light inline-flex items-center justify-center uppercase text-sm transition-colors border h-10 leading-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-6 w-fit text-center leading-6 py-2 px-6"
            href="/contato"
          >
            Avaliação gratuita do imóvel
          </a>
          
        </div>

        {/* Divisor ondulado */}
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
            className="bg-muted w-full h-[50px]"
          >
            <polygon 
              className="fill-background hidden lg:block" 
              points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
            />
            <polygon 
              className="fill-background lg:hidden block" 
              points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
            />
          </svg>
        </div>
      </div>
    );
  }