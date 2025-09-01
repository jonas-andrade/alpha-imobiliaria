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