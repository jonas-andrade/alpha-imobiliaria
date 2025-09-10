"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function RelatedSales() {
  const [properties, setProperties] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentlyViewedLoading, setRecentlyViewedLoading] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("has_photos", true)
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;

        const processed = data.map((p) => {
          const baseUrl = `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}`;
          return {
            ...p,
            mainImage: `${baseUrl}/fachada.jpg`,
            hoverImage: `${baseUrl}/sala.jpg`,
          };
        });

        setProperties(processed);
      } catch (err) {
        console.error("Erro ao buscar imóveis:", err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentlyViewed = async () => {
      try {
        // Verifica se localStorage está disponível (lado cliente)
        if (typeof window === 'undefined') {
          setRecentlyViewedLoading(false);
          return;
        }

        const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
        
        if (stored.length === 0) {
          setRecentlyViewed([]);
          setRecentlyViewedLoading(false);
          return;
        }

        // Busca os detalhes dos imóveis recentemente vistos
        const propertyIds = stored.map(item => item.property_id || item.id);
        
        if (propertyIds.length === 0) {
          setRecentlyViewed([]);
          setRecentlyViewedLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .in("property_id", propertyIds)
          .eq("has_photos", true);

        if (error) throw error;

        // Processa os dados e mantém a ordem do localStorage
        const processed = data?.map((p) => {
          const baseUrl = `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}`;
          return {
            ...p,
            mainImage: `${baseUrl}/fachada.jpg`,
            hoverImage: `${baseUrl}/sala.jpg`,
          };
        }) || [];

        // Ordena conforme a ordem do localStorage (mais recente primeiro)
        const orderedRecent = [];
        stored.forEach(storedItem => {
          const found = processed.find(p => p.property_id === (storedItem.property_id || storedItem.id));
          if (found) orderedRecent.push(found);
        });

        setRecentlyViewed(orderedRecent.slice(0, 3)); // Limita a 3 itens
      } catch (err) {
        console.error("Erro ao buscar imóveis recentemente vistos:", err);
        setRecentlyViewed([]);
      } finally {
        setRecentlyViewedLoading(false);
      }
    };

    fetchProperties();
    fetchRecentlyViewed();
  }, []);

  // Função para adicionar aos recentemente vistos (para usar em outras páginas)
  const addToRecentlyViewed = (property) => {
    if (typeof window === 'undefined') return;

    const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    
    // Remove duplicatas
    const filtered = stored.filter(item => 
      (item.property_id || item.id) !== property.property_id
    );
    
    // Adiciona no início
    const updated = [
      { 
        property_id: property.property_id,
        title: property.title,
        sale_price: property.sale_price,
        timestamp: new Date().toISOString()
      },
      ...filtered
    ].slice(0, 10); // Mantém apenas os 10 mais recentes

    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
  };

  if (loading)
    return (
      <p className="py-10 text-center text-muted-foreground">
        Carregando imóveis em destaque...
      </p>
    );

  return (
    <div className="bg-secondary-greige py-10 w-full flex flex-col items-center tracking-wide">
      {/* Destaques */}
      <p className="text-primary font-sans font-normal text-base uppercase pb-10">
        Imóveis em Destaque
      </p>

      {properties.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 lg:px-10">
          {properties.map((property, index) => (
            <Link
              key={property.property_id}
              href={`/dashboard/properties/${property.property_id}`}
              className="cursor-pointer relative group max-w-[700px] w-full"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative aspect-[3/2] w-full rounded overflow-hidden">
                <Image
                  src={
                    hoverIndex === index ? property.hoverImage : property.mainImage
                  }
                  alt={property.title || "Imóvel"}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-base font-serif">{property.title}</p>
                  <p className="text-base font-sans font-medium">
                    {property.sale_price?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-sans font-medium">
                    {property.financing_compatible
                      ? "Financiamento disponível"
                      : "À Vista"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-muted-foreground">
          Nenhum imóvel em destaque encontrado.
        </p>
      )}

      {/* Divider */}
      <hr className="border-t border-gray-300 my-10 w-full max-w-6xl" />

      {/* Recently Viewed */}
      <div className="w-full flex flex-col items-center tracking-wide">
        <p className="text-primary font-sans font-normal text-base uppercase pb-10">
          Vistos Recentemente
        </p>

        {recentlyViewedLoading ? (
          <p className="py-10 text-center text-muted-foreground">
            Carregando imóveis recentemente vistos...
          </p>
        ) : recentlyViewed.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 lg:px-10">
            {recentlyViewed.map((property) => (
              <Link
                key={property.property_id}
                href={`/dashboard/properties/${property.property_id}`}
                className="cursor-pointer relative group max-w-[700px] w-full"
              >
                <div className="relative aspect-[3/2] w-full rounded overflow-hidden">
                  <Image
                    src={property.mainImage}
                    alt={property.title || "Imóvel"}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <p className="text-base font-serif">{property.title}</p>
                    <p className="text-base font-sans font-medium">
                      {property.sale_price?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base font-sans font-medium">
                      {property.financing_compatible
                        ? "Financiamento disponível"
                        : "À Vista"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center col-span-full">
            Nenhum imóvel visto recentemente.
          </p>
        )}
      </div>
    </div>
  );
}