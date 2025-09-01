"use client";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui";
import { formatPrice, formatArea, getPropertyTypeLabel } from "@/lib/utils";

export default function PropertyCard({ property }) {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Função para pegar a primeira imagem ou placeholder
  const getImageSrc = () => {
    if (imageError || !property.photos_highlight || property.photos_highlight.length === 0) {
      return "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Sem+Foto";
    }
    return property.photos_highlight[0];
  };

  // Função para toggle favoritos (implementar depois com auth)
  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // TODO: Implementar lógica de favoritos no backend
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-sm group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={getImageSrc()}
          alt={property.title || "Imóvel"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {/* Property Type */}
          {property.property_type && (
            <Badge variant="primary" size="sm">
              {getPropertyTypeLabel(property.property_type)}
            </Badge>
          )}
          
          {/* Ready to Live */}
          {property.ready_to_live && (
            <Badge variant="success" size="sm">
              Pronto para Morar
            </Badge>
          )}
          
          {/* Premium Features */}
          {property.has_premium_features && (
            <Badge variant="warning" size="sm">
              Premium
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg 
            className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
            fill={isFavorite ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Virtual Tour Badge */}
        {property.link_3d_tour && (
          <div className="absolute bottom-3 left-3">
            <Badge variant="primary" size="sm">
              📐 Tour 3D
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {property.title || "Imóvel sem título"}
        </h3>

        {/* Location */}
        {property.location && (
          <p className="text-sm text-gray-600 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{property.location}</span>
          </p>
        )}

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-blue-600">
            {formatPrice(property.sale_price)}
          </p>
          {property.financing_compatible && (
            <p className="text-xs text-green-600 font-medium">
              ✅ Aceita Financiamento
            </p>
          )}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
          {/* Bedrooms */}
          {property.bedrooms && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" />
              </svg>
              {property.bedrooms} Quartos
            </div>
          )}
          
          {/* Suites */}
          {property.suites > 0 && (
            <div className="flex items-center">
              <span className="text-lg mr-1">🛏️</span>
              {property.suites} Suítes
            </div>
          )}

          {/* Bathrooms */}
          {property.bathrooms && (
            <div className="flex items-center">
              <span className="text-lg mr-1">🚿</span>
              {property.bathrooms} Banheiros
            </div>
          )}

          {/* Parking */}
          {property.parking_spaces && (
            <div className="flex items-center">
              <span className="text-lg mr-1">🚗</span>
              {property.parking_spaces} Vagas
            </div>
          )}

          {/* Built Area */}
          {property.built_area_m2 && (
            <div className="flex items-center">
              <span className="text-lg mr-1">📐</span>
              {formatArea(property.built_area_m2)}
            </div>
          )}

          {/* Land Area */}
          {property.land_area_m2 && (
            <div className="flex items-center">
              <span className="text-lg mr-1">🌱</span>
              {formatArea(property.land_area_m2)} terreno
            </div>
          )}
        </div>

        {/* Premium Features */}
        {(property.has_pool || property.has_gourmet_area || property.has_barbecue || property.has_solar_energy) && (
          <div className="flex flex-wrap gap-1 mb-4">
            {property.has_pool && (
              <Badge variant="primary" size="sm">🏊‍♂️ Piscina</Badge>
            )}
            {property.has_gourmet_area && (
              <Badge variant="success" size="sm">🍽️ Gourmet</Badge>
            )}
            {property.has_barbecue && (
              <Badge variant="warning" size="sm">🔥 Churrasqueira</Badge>
            )}
            {property.has_solar_energy && (
              <Badge variant="success" size="sm">☀️ Solar</Badge>
            )}
            {property.closed_gate && (
              <Badge variant="default" size="sm">🚪 Condomínio</Badge>
            )}
          </div>
        )}

        {/* Construction Year */}
        {property.construction_year && (
          <p className="text-xs text-gray-500 mb-3">
            🏗️ Construção: {property.construction_year}
          </p>
        )}

        {/* Action Button */}
        <Link href={`/properties/${property.property_id}`}>
          <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center group">
            Ver Detalhes
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
