"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lightbulb,
  Code2,
  PenLine,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Spring sem bounce para elementos de texto (Jakub: production polish)
const spring = { type: "spring", duration: 0.55, bounce: 0 } as const;
// Spring com leve bounce para elementos físicos que "pousam" (Jakub + Jhey)
const springSnap = { type: "spring", duration: 0.6, bounce: 0.15 } as const;

const stats = [
  { number: "12",  label: "Projetos entregues" },
  { number: "7",   label: "Clientes ativos" },
  { number: "5+",  label: "Anos de experiência" },
  { number: "24h", label: "Resposta garantida" },
];

const ideaChips = [
  { icon: Lightbulb, label: "Descoberta",  style: { top: "18%",    left: "7%"  }, delay: 0.12 },
  { icon: PenLine,   label: "Design",      style: { top: "20%",    right: "8%" }, delay: 0.26 },
  { icon: Code2,     label: "Código",      style: { bottom: "22%", left: "10%" }, delay: 0.40 },
  { icon: Rocket,    label: "Lançamento",  style: { bottom: "18%", right: "7%" }, delay: 0.54 },
];

const servicePills = [
  { icon: Globe,      label: "Web & SaaS",     iconColor: "text-sky-400",    gradient: "from-sky-500/10 to-cyan-500/10",     border: "border-sky-500/15",    style: { top: "14%",    left: "4%"  }, rotate: -2, delay: 0.06 },
  { icon: Smartphone, label: "Apps Mobile",    iconColor: "text-violet-400", gradient: "from-violet-500/10 to-pink-500/10",  border: "border-violet-500/15", style: { top: "14%",    right: "4%" }, rotate:  2, delay: 0.16 },
  { icon: Database,   label: "Sistemas",       iconColor: "text-emerald-400",gradient: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/15",style: { bottom: "14%", left: "4%"  }, rotate:  1, delay: 0.26 },
  { icon: Cloud,      label: "Cloud & DevOps", iconColor: "text-amber-400",  gradient: "from-amber-500/10 to-orange-500/10", border: "border-amber-500/15",  style: { bottom: "14%", right: "4%" }, rotate: -1, delay: 0.36 },
];

const serviceCards = [
  { icon: Globe,      title: "Web & SaaS",     tags: ["React", "Next.js", "Node.js"],    gradient: "from-sky-500/10 to-cyan-500/10",     iconColor: "text-sky-400",    border: "border-sky-500/15",    rotate: -1   },
  { icon: Smartphone, title: "Apps Mobile",    tags: ["React Native", "iOS", "Android"], gradient: "from-violet-500/10 to-pink-500/10",  iconColor: "text-violet-400", border: "border-violet-500/15", rotate:  1.5 },
  { icon: Database,   title: "Sistemas",       tags: ["ERPs", "CRMs", "Automação"],      gradient: "from-emerald-500/10 to-teal-500/10", iconColor: "text-emerald-400",border: "border-emerald-500/15",rotate:  0.5 },
  { icon: Cloud,      title: "Cloud & DevOps", tags: ["AWS", "GCP", "CI/CD"],            gradient: "from-amber-500/10 to-orange-500/10", iconColor: "text-amber-400",  border: "border-amber-500/15",  rotate: -1.5 },
];

// Variante reutilizável: opacidade + y + blur + spring
function fadeUp(delay = 0, y = 20, blurPx = 6, bounceVal = 0) {
  return {
    initial: { opacity: 0, y, filter: `blur(${blurPx}px)` } as const,
    animate: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring" as const, duration: 0.55, bounce: bounceVal, delay },
    },
  };
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<1 | 2 | 3>(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setPhase((prev) => {
        const next: 1 | 2 | 3 = v < 0.36 ? 1 : v < 0.70 ? 2 : 3;
        return prev !== next ? next : prev;
      });
    });
  }, [scrollYProgress]);

  return (
    <section id="hero" ref={sectionRef} className="relative" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-odois-gray-900">

        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,_var(--tw-gradient-stops))] from-odois-purple-dark/50 via-odois-gray-900/80 to-odois-gray-900" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-odois-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-odois-magenta/12 rounded-full blur-[140px] animate-pulse-slower" />
        </div>

        {/* Grid sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />

        <AnimatePresence initial={false}>

          {/* ── Fase 1: "De ideia" + chips de processo ── */}
          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0, scale: 0.94, y: -24, filter: "blur(12px)",
                transition: { duration: 0.5, ease: EASE },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Chips entram com spring + leve bounce — sentem que "pousam" */}
              {ideaChips.map((chip) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ ...springSnap, delay: chip.delay }}
                  className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1]"
                  style={chip.style}
                >
                  <chip.icon className="h-3.5 w-3.5 text-white/55" />
                  <span className="text-xs text-white/55 whitespace-nowrap">{chip.label}</span>
                </motion.div>
              ))}

              {/* Headline com entrada dramática */}
              <motion.h1
                initial={{ opacity: 0, y: 36, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring, duration: 0.7 }}
                className="text-[clamp(64px,13vw,172px)] font-bold text-white leading-none tracking-tight text-center px-8"
              >
                De ideia
              </motion.h1>
            </motion.div>
          )}

          {/* ── Fase 2: "De ideia / a produto." + pills de serviço ── */}
          {phase === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0, scale: 0.94, y: -24, filter: "blur(12px)",
                transition: { duration: 0.45, ease: EASE },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Pills entram com spring + bounce — físico e vivo */}
              {servicePills.map((svc) => (
                <motion.div
                  key={svc.label}
                  initial={{ opacity: 0, y: 14, scale: 0.88, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{ ...springSnap, delay: svc.delay }}
                  className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${svc.gradient} border ${svc.border}`}
                  style={{ ...svc.style, rotate: `${svc.rotate}deg` }}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <svc.icon className={`h-3.5 w-3.5 ${svc.iconColor}`} />
                  </div>
                  <span className="text-xs font-medium text-white/65 whitespace-nowrap">{svc.label}</span>
                </motion.div>
              ))}

              {/* Headline: "De ideia" estabelecida, "a produto." é o momento central */}
              <h1 className="text-[clamp(52px,10vw,138px)] font-bold text-white leading-[1.08] tracking-tight text-center px-8">
                <motion.span
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ ...spring, duration: 0.35 }}
                  className="block"
                >
                  De ideia
                </motion.span>
                {/* "a produto." — snap com bounce, blur intenso: é o reveal da frase */}
                <motion.span
                  initial={{ opacity: 0, y: 52, filter: "blur(16px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ ...springSnap, duration: 0.7, bounce: 0.18, delay: 0.1 }}
                  className="block text-odois-magenta"
                >
                  a produto.
                </motion.span>
              </h1>
            </motion.div>
          )}

          {/* ── Fase 3: hero completo com stagger por elemento ── */}
          {phase === 3 && (
            <motion.div
              key="phase3"
              exit={{
                opacity: 0, scale: 0.96, filter: "blur(8px)",
                transition: { duration: 0.4, ease: EASE },
              }}
              className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8"
            >
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Texto — cada elemento tem seu próprio spring */}
                <div>
                  {/* Badge */}
                  <motion.div {...fadeUp(0, 12, 4)} className="flex mb-10">
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-white/65 text-sm font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-odois-magenta opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-odois-magenta" />
                      </span>
                      Software House Brasileira · Brasília, DF
                    </span>
                  </motion.div>

                  {/* Headline com stagger por linha */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                    <motion.span {...fadeUp(0.08, 22, 5)} className="block">
                      De ideia
                    </motion.span>
                    <motion.span {...fadeUp(0.16, 22, 7)} className="block text-odois-magenta">
                      a produto
                    </motion.span>
                    <motion.span {...fadeUp(0.24, 22, 5)} className="block">
                      em semanas.
                    </motion.span>
                  </h1>

                  {/* Subtítulo */}
                  <motion.p {...fadeUp(0.33, 14, 4)} className="mt-6 text-lg text-white/50 max-w-md leading-relaxed">
                    Software sob medida, apps mobile e sistemas web por uma equipe
                    sênior que entende de produto e de negócio.
                  </motion.p>

                  {/* CTAs */}
                  <motion.div {...fadeUp(0.42, 12, 3)} className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link href="#contato">
                      <Button size="lg" className="group relative overflow-hidden h-14 px-8">
                        <span className="relative z-10 flex items-center gap-2">
                          Solicitar Orçamento Grátis
                          <ArrowRight className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-odois-magenta-vibrant to-odois-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Button>
                    </Link>
                    <Link href="#cases">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="h-14 text-white/75 border-white/[0.15] hover:bg-white/[0.07] hover:text-white hover:border-white/25"
                      >
                        Ver Cases
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Stats — cada número staggered */}
                  <div className="mt-14 flex flex-wrap items-center">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.number}
                        {...fadeUp(0.50 + i * 0.06, 8, 3)}
                        className="flex items-center"
                      >
                        <div className={`text-center ${i === 0 ? "pr-5" : "px-5"}`}>
                          <div className="text-2xl font-bold text-white">{stat.number}</div>
                          <div className="text-xs text-white/38 mt-0.5">{stat.label}</div>
                        </div>
                        {i < stats.length - 1 && <div className="w-px h-7 bg-white/[0.1]" />}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Cards — stagger com blur + spring */}
                <div className="hidden lg:grid grid-cols-2 gap-4">
                  {serviceCards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20, rotate: card.rotate, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, rotate: card.rotate, filter: "blur(0px)" }}
                      transition={{ ...spring, duration: 0.6, delay: 0.12 + i * 0.09 }}
                      whileHover={{ scale: 1.03, rotate: 0, transition: { type: "spring", duration: 0.3, bounce: 0 } }}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} cursor-default`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4">
                        <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-white text-sm leading-tight">{card.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {card.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium text-white/45 bg-white/[0.06] px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Scroll indicator — sai junto com fase 1 */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
                <div className="w-1 h-2.5 bg-white/35 rounded-full animate-scroll-indicator" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
