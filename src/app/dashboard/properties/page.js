"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("has_photos", true)
          .order("created_at", { ascending: false });

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

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="bg-background min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-light text-foreground">
              Todos os Imóveis
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[4/3] bg-border rounded" />
                <div className="h-4 bg-border rounded w-1/2" />
                <div className="h-6 bg-border rounded w-3/4" />
                <div className="h-4 bg-border rounded w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-xs text-muted-foreground/80 tracking-[0.2em] uppercase font-light mb-4">
            Nosso Portfólio
          </p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground">
            Todos os Imóveis
          </h1>
        </div>

       
        {properties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-light text-lg">
              Nenhum imóvel encontrado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {properties.map((property) => (
              <PropertyCard key={property.property_id} property={property} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
