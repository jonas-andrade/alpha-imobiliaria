"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/dashboard/properties", label: "Imóveis" },
  { href: "/dashboard/about", label: "Sobre" },
  { href: "/dashboard/contact", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200"> {/* fundo sempre branco */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-light text-gray-900 tracking-tight">
            Alpha Imobiliária
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-gray-500 hover:text-gray-900 font-light text-sm tracking-wide transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/auth/login" 
            className="text-gray-500 hover:text-gray-900 font-light text-sm tracking-wide transition-colors duration-300"
          >
            Entrar
          </Link>
          <Link 
            href="/auth/register" 
            className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 font-light text-sm tracking-wide transition-all duration-300"
          >
            Anunciar Imóvel
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg 
            className="w-5 h-5 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-500 hover:text-gray-900 font-light text-base tracking-wide transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-200 flex flex-col space-y-4">
              <Link 
                href="/auth/login" 
                className="text-gray-500 hover:text-gray-900 font-light text-base tracking-wide transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Entrar
              </Link>
              <Link 
                href="/auth/register" 
                className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 font-light text-sm tracking-wide transition-all duration-300 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Anunciar Imóvel
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
