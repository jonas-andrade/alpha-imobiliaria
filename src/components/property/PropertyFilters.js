"use client";
import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { PROPERTY_TYPES } from "@/lib/constants";

export default function PropertyFilters({ onFilter, initialFilters = {} }) {
  const [filters, setFilters] = useState({
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
    propertyType: initialFilters.propertyType || "",
    bedrooms: initialFilters.bedrooms || "",
    location: initialFilters.location || "",
    hasPool: initialFilters.hasPool || false,
    hasGourmet: initialFilters.hasGourmet || false,
    readyToLive: initialFilters.readyToLive || false,
    financingCompatible: initialFilters.financingCompatible || false
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      minPrice: "",
      maxPrice: "",
      propertyType: "",
      bedrooms: "",
      location: "",
      hasPool: false,
      hasGourmet: false,
      readyToLive: false,
      financingCompatible: false
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros de Busca</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Price Range */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Preço mínimo"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
          />
          <Input
            type="number"
            placeholder="Preço máximo"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
          />
        </div>

        {/* Property Type */}
        <select
          value={filters.propertyType}
          onChange={(e) => handleFilterChange("propertyType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Tipo do Imóvel</option>
          {Object.entries(PROPERTY_TYPES).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>

        {/* Bedrooms */}
        <select
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Quartos</option>
          <option value="1">1 Quarto</option>
          <option value="2">2 Quartos</option>
          <option value="3">3 Quartos</option>
          <option value="4">4 Quartos</option>
          <option value="5">5+ Quartos</option>
        </select>

        {/* Location */}
        <div className="md:col-span-2">
          <Input
            placeholder="Localização (ex: Meireles, Aldeota)"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>
      </div>

      {/* Feature Checkboxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.hasPool}
            onChange={(e) => handleFilterChange("hasPool", e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">🏊‍♂️ Piscina</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.hasGourmet}
            onChange={(e) => handleFilterChange("hasGourmet", e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">🍽️ Área Gourmet</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.readyToLive}
            onChange={(e) => handleFilterChange("readyToLive", e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">🏠 Pronto p/ Morar</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.financingCompatible}
            onChange={(e) => handleFilterChange("financingCompatible", e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">💰 Financiável</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="primary" onClick={applyFilters} className="flex-1">
          🔍 Buscar Imóveis
        </Button>
        <Button variant="outline" onClick={clearFilters}>
          Limpar
        </Button>
      </div>
    </div>
  );
}
