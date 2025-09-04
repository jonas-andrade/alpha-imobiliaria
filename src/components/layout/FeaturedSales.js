"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

export default function FeaturedSales() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("has_photos", true)
          .order("created_at", { ascending: false })
          .limit(6);

        if (error) {
          console.error("Erro ao buscar imóveis:", error);
          setProperties([]);
        } else {
          setProperties(data || []);
        }
      } catch (err) {
        console.error(err);
        setProperties([]);
      }
      setLoading(false);
    };

    fetchFeaturedProperties();
  }, []);

  const renderSkeleton = () => (
    <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="space-y-4 animate-pulse">
          <div className="aspect-[3/2] bg-border rounded-lg" />
          <div className="h-4 bg-border w-3/4 rounded" />
          <div className="h-4 bg-border w-1/2 rounded" />
        </div>
      ))}
    </div>
  );

  if (loading) return renderSkeleton();

  if (properties.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center py-20">
        <p className="text-muted-foreground text-center">Nenhum imóvel em destaque.</p>
      </div>
    );

  return (
    <div className="bg-secondary-greige w-full py-8 md:py-12 flex flex-col items-center">
      <div className="w-full max-w-screen-2xl px-5 md:px-10 flex flex-col">
        
        <div className="flex justify-between items-center mb-8">
          <p className="text-primary font-sans uppercase tracking-wide text-sm md:text-base">
            Featured Sales
          </p>
          <a
            href="/dashboard/properties"
            className="hidden lg:inline-flex items-center justify-center h-10 px-4 border border-primary text-primary font-sans uppercase text-sm hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            View All Sales
          </a>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={property.property_id} property={property} isNew={index < 3} />
          ))}
        </div>

      
        <div className="flex justify-center mt-8 lg:hidden">
          <a
            href="/dashboard/properties"
            className="inline-flex items-center justify-center h-10 px-4 border border-primary text-primary font-sans uppercase text-sm hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            View All Sales
          </a>
        </div>
      </div>
    </div>
  );
}
