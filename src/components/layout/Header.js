"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/dashboard/properties", label: "Imóveis" },
  { href: "/dashboard/agents", label: "Corretores" },
  { href: "/dashboard/about", label: "Sobre" },
  { href: "/dashboard/contact", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">Alpha Imobiliária</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">Entrar</Link>
          <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Anunciar Imóvel
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden py-4 border-t flex flex-col space-y-2 px-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 py-2">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col space-y-2">
            <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 py-2">Entrar</Link>
            <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
              Anunciar Imóvel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
