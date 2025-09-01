"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    let query = supabase.from("properties").select("*");

    if (minPrice) query = query.gte("sale_price", minPrice);
    if (maxPrice) query = query.lte("sale_price", maxPrice);

    const { data, error } = await query;
    if (error) console.error(error);
    else setProperties(data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Imóveis em destaque</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          placeholder="Preço mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={fetchProperties}>Filtrar</button>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {properties.length > 0 ? (
          properties.map((p) => <PropertyCard key={p.property_id} property={p} />)
        ) : (
          <p>Nenhum imóvel encontrado...</p>
        )}
      </div>
    </div>
  );
}
