"use client";
import Photos from "@/components/layout/Photos";
import { useParams } from "next/navigation";

export default function PropertyPhotosPage() {
  const { id } = useParams();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;

  return (
    <div className="p-8 font-serif bg-white text-gray-900">
      <div className="flex items-end gap-2 mb-4">
        <h1 className="text-lg md:text-xl font-light tracking-wide">
          Fotos do Imóvel
        </h1>
        <span className="text-[10px] md:text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded tracking-wide">
          Clique para alternar fotos
        </span>
      </div>

      <div className="border-t border-gray-200 mb-3" />

      <Photos propertyId={id} apiKey={apiKey} />
    </div>
  );
}
