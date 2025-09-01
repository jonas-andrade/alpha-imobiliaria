import PropertyCard from "./PropertyCard";
import { Skeleton } from "@/components/ui";

export default function PropertyGrid({ 
  properties = [], 
  loading = false, 
  emptyMessage = "Nenhum imóvel encontrado" 
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Skeleton height="12rem" className="w-full" />
            <div className="p-4 space-y-3">
              <Skeleton height="1.5rem" className="w-3/4" />
              <Skeleton height="1rem" className="w-1/2" />
              <Skeleton height="2rem" className="w-full" />
              <div className="grid grid-cols-2 gap-2">
                <Skeleton height="1rem" />
                <Skeleton height="1rem" />
              </div>
              <Skeleton height="2.5rem" className="w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-6">
          <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-600 mb-6">
          Tente ajustar os filtros ou explorar outras opções
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.property_id} property={property} />
      ))}
    </div>
  );
}