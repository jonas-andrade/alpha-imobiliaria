export const PROPERTY_TYPES = {
  house: "Casa",
  apartment: "Apartamento",
  condo: "Condomínio",
  land: "Terreno",
  commercial: "Comercial",
};

export const AVAILABILITY_STATUS = {
  available: "Disponível",
  sold: "Vendido",
  rented: "Alugado",
  pending: "Pendente",
};

export const formatPrice = (price) => {
  if (!price || price === 0) return "Preço sob consulta";
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatArea = (area) => {
  if (!area) return null;
  return `${area}m²`;
};

export const getPropertyTypeLabel = (type) => {
  return PROPERTY_TYPES[type] || type;
};

export const getAvailabilityLabel = (availability) => {
  return AVAILABILITY_STATUS[availability] || availability;
};
