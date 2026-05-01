"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Cloud } from "lucide-react";
import { Button } from "@/components/ui/Button";

const phrases = [
  { prefix: "sua", word: "ideia" },
  { prefix: "seu", word: "projeto" },
  { prefix: "sua", word: "visão" },
  { prefix: "seu", word: "sonho" },
];

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { left: 15, top: 20, delay: 0, duration: 18 },
  { left: 85, top: 30, delay: 2, duration: 22 },
  { left: 25, top: 70, delay: 1, duration: 15 },
  { left: 70, top: 15, delay: 3, duration: 20 },
  { left: 45, top: 85, delay: 0.5, duration: 25 },
  { left: 90, top: 60, delay: 2.5, duration: 17 },
  { left: 10, top: 45, delay: 1.5, duration: 23 },
  { left: 60, top: 90, delay: 4, duration: 19 },
  { left: 35, top: 25, delay: 0.8, duration: 21 },
  { left: 80, top: 75, delay: 3.5, duration: 16 },
  { left: 5, top: 80, delay: 2.2, duration: 24 },
  { left: 55, top: 40, delay: 1.2, duration: 18 },
  { left: 95, top: 10, delay: 4.5, duration: 20 },
  { left: 20, top: 55, delay: 0.3, duration: 22 },
  { left: 75, top: 35, delay: 3.2, duration: 15 },
];

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-odois-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-odois-purple-dark/40 via-odois-gray-900 to-odois-gray-900" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-odois-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-odois-magenta/15 rounded-full blur-[120px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-odois-purple/10 rounded-full blur-[150px] animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-odois-magenta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-odois-magenta"></span>
            </span>
            Software House Brasileira
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transformamos{" "}
            <span className="relative inline-block min-w-[280px] sm:min-w-[380px]">
              {phrases.map((phrase, index) => (
                <span
                  key={phrase.word}
                  className={`absolute left-0 right-0 transition-all duration-500 ${
                    index === currentPhrase
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-white">{phrase.prefix} </span>
                  <span className="gradient-text">{phrase.word}</span>
                </span>
              ))}
              <span className="invisible">{phrases[0].prefix} {phrases[0].word}</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 gradient-bg rounded-full" />
            </span>
            <br />
            <span className="text-white/90">em </span>
            <span className="gradient-text">produto digital</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Desenvolvemos software sob medida, aplicativos mobile e sistemas web
            que impulsionam o crescimento do seu negócio.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="#contato">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Iniciar Projeto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-odois-magenta-vibrant to-odois-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
            <Link href="#cases">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10 hover:text-white"
              >
                Ver Cases
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Code2, title: "Sistemas Web", desc: "Plataformas escaláveis", delay: "0ms" },
              { icon: Smartphone, title: "Apps Mobile", desc: "iOS e Android", delay: "100ms" },
              { icon: Cloud, title: "Cloud & DevOps", desc: "Infraestrutura moderna", delay: "200ms" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/50 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-indicator" />
        </div>
      </div>

      {/* Bottom gradient fade - positioned below the cards */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
