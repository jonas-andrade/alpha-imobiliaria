import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-72">
      {/* Fachada */}
      {property.photos_highlight && property.photos_highlight.length > 0 && (
        <img
          src={property.photos_highlight[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold">{property.title}</h3>
        <p className="text-gray-700">Preço: R$ {property.sale_price?.toLocaleString()}</p>
        <p className="text-gray-700">Quartos: {property.bedrooms}</p>
        <p className="text-gray-700">Banheiros: {property.bathrooms}</p>

        <Link href={`/imovel/${property.property_id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Ver Detalhes
          </button>
        </Link>
      </div>
    </div>
  );
}
