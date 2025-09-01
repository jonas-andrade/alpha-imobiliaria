"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("availability", "available")
        .order('created_at', { ascending: false })
        .limit(8);

      if (error) {
        console.error(error);
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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Imóveis em Destaque</h1>

      {loading && <p className="text-gray-500">Carregando...</p>}

      {properties.length === 0 && !loading && (
        <p className="text-gray-500">Nenhum imóvel disponível.</p>
      )}

      <ul className="space-y-2 mb-4">
        {properties.map((p) => (
          <li key={p.id} className="bg-white p-2 border rounded">
            <Link href={`/properties/${p.id}`} className="text-blue-600 hover:underline">
              {p.title || "Imóvel sem título"}
            </Link>
          </li>
        ))}
      </ul>

      <div className="space-x-4">
        <Link href="/properties" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
          Ver todos os imóveis
        </Link>
        <Link href="/contact" className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-500">
          Falar com corretor
        </Link>
      </div>
    </div>
  );
}
