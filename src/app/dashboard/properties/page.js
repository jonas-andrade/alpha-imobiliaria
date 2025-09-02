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
        const { data, error } = await supabase.from("properties").select("*");

        if (error) {
          console.error("Erro ao buscar imóveis:", error); setProperties([]);
        } else { setProperties(data || []); }

      } catch (err) {
        console.error(err); setProperties([]);
      }
      setLoading(false);
    };

    fetchProperties();
  }, []);


  if (loading) return <p className="p-4 text-gray-500">Carregando imóveis...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Todos os Imóveis</h1>

      {properties.length === 0 ? (
        <p className="text-gray-500">Nenhum imóvel encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.property_id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}