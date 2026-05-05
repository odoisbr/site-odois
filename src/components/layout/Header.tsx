"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const onScroll = () => setIsScrolled(window.scrollY > 80);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        isScrolled
          ? "bg-odois-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — inverte para branco sobre hero escuro */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="odois-logo.svg"
              alt="oDois — Desenvolvimento de Software"
              width={120}
              height={36}
              priority
              className={`h-9 w-auto transition-[filter] duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 hover:text-odois-primary-light ${
                  isScrolled ? "text-odois-gray-700" : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="sm"
              onClick={() => (window.location.href = "#contato")}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-150 ${
              isScrolled
                ? "hover:bg-odois-gray-100 text-odois-gray-700"
                : "hover:bg-white/10 text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation — transição CSS max-height (sem flash) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
            isMobileMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-odois-white border-t border-odois-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-odois-gray-700 hover:text-odois-primary hover:bg-odois-gray-50 rounded-lg transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "#contato";
                  }}
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
