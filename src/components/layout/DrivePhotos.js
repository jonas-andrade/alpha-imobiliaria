"use client";
import { useEffect, useState } from "react";
import { fetchDriveImages } from "@/lib/driveApi";
import Image from "next/image";

export default function DrivePhotos({ propertyId, apiKey }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadPhotos = async () => {
      const images = await fetchDriveImages(propertyId, apiKey);
      setPhotos(images);
      setLoading(false);
    };
    loadPhotos();
  }, [propertyId, apiKey]);

  if (loading) return <p>Carregando fotos...</p>;
  if (!photos.length) return <p>Nenhuma foto encontrada.</p>;

  const prev = () => setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Foto principal */}
      <div className="relative w-96 h-64">
        <Image
          src={photos[current].url}
          alt={photos[current].name}
          fill
          className="object-cover rounded"
        />
        {/* Setas */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-70 hover:opacity-100"
        >
          ▶
        </button>
        {/* Indicadores */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {photos.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="flex gap-2 overflow-x-auto">
        {photos.map((photo, idx) => (
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.name}
            width={64}
            height={48}
            className={`object-cover rounded cursor-pointer transition-transform duration-200 ${
              idx === current ? "scale-105 border-2 border-black" : ""
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
