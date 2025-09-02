"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PropertiesAdmin() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const { data, error } = await supabase.from("properties").select("*");
      if (error) {
        console.error("Erro ao buscar imóveis:", error.message);
      } else {
        setProperties(data);
      }
    }
    fetchProperties();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Imóveis</h1>
      {properties.length === 0 ? (
        <p>Nenhum imóvel encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {properties.map((p) => (
            <li key={p.id} className="p-4 bg-white shadow rounded">
              <h2 className="font-bold">{p.title}</h2>
              <p>{p.description}</p>
              <span className="text-sm text-gray-600">
                R$ {p.price?.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
