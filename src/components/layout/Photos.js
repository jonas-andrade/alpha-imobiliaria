"use client";
import { useEffect, useState } from "react";
import { fetchDriveImages } from "@/lib/driveApi";
import Image from "next/image";

export default function Photos({ propertyId, apiKey }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const colors = [
    "#1C1C1C", "#2E2B2B", "#3E2723", "#6D4C41",
    "#A1887F", "#D7CCC8", "#B0BEC5", "#CFD8DC",
    "#795548", "#FFEBCF", "#8D6E63", "#4E342E",
  ];
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const loadPhotos = async () => {
      const images = await fetchDriveImages(propertyId, apiKey);
      setPhotos(images);
      setLoading(false);
    };
    loadPhotos();
  }, [propertyId, apiKey]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-white font-medium">Carregando fotos...</span>
      </div>
    );

  if (!photos.length)
    return (
      <div className="flex justify-center items-center h-[80vh] text-white font-medium">
        Nenhuma foto encontrada.
      </div>
    );

  const handleClick = () => {
    setCurrent((c) => (c + 1) % photos.length);
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const radialBg = `radial-gradient(circle at center, ${bgColor} 0%, #000000 100%)`;

  return (
    <div
      className="flex justify-center items-center h-[80vh] p-4 transition-all duration-700 rounded-3xl shadow-[0_0_150px_50px_rgba(0,0,0,0.6)] overflow-hidden"
      style={{ background: radialBg }}
    >
      <div
        className="relative w-full max-w-4xl h-[70vh] cursor-pointer rounded-2xl overflow-hidden"
        onClick={handleClick}
      >
        {photos.map((photo, idx) => {
          const offset = idx - current;
          if (offset < -3 || offset > 0) return null;

          return (
            <div
              key={photo.id}
              className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500"
              style={{
                transform: `translate(${offset * 10}px, ${Math.abs(offset) * 8}px) scale(${1 - Math.abs(offset) * 0.05}) rotate(${offset * 2}deg)`,
                zIndex: 10 - Math.abs(offset),
                opacity: offset === 0 ? 1 : 0.6,
                filter: offset === 0 ? "none" : "brightness(0.8)",
              }}
            >
              <Image
                src={photo.url}
                alt={photo.name}
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority={offset === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
