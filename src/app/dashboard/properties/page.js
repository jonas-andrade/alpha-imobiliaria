"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Imovel({ params }) {
  const { id } = params;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("property_id", id)
        .single();
      if (error) console.error(error);
      else setProperty(data);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>Carregando imóvel...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{property.title}</h1>
      <p>Preço: R$ {property.sale_price?.toLocaleString()}</p>
      <p>Quartos: {property.bedrooms}</p>
      <p>Banheiros: {property.bathrooms}</p>
      <p>{property.has_premium_features ? "Premium" : "Standard"}</p>

      <a
        href={`https://wa.me/558591773278?text=Tenho interesse no imóvel ${property.title}`}
        target="_blank"
        style={{
          display: "inline-block",
          padding: "1rem",
          background: "green",
          color: "white",
          textDecoration: "none",
          marginTop: "1rem",
        }}
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
