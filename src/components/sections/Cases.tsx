"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cases = [
  {
    title: "Checkout de Débitos Veiculares",
    category: "Aplicação Web",
    description:
      "Sistema de checkout para pagamento de débitos veiculares DETRAN-SP com consulta de débitos, parcelamento e integração de pagamentos.",
    technologies: ["React", "Vite", "TypeScript", "Radix UI"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Revuu — Recrutamento Tech",
    category: "Plataforma SaaS",
    description:
      "Plataforma completa de recrutamento tech com portfólio verificado, code challenges, matching com IA, live coding arena e integração GitHub.",
    technologies: ["Next.js", "Node.js", "TypeScript", "Supabase", "IA"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Attrio — Gestão de Condomínios",
    category: "Plataforma SaaS",
    description:
      "Gestão de condomínios com assembleias digitais, votação online, transcrição automática de atas com IA e controle de presença.",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "IA"],
    color: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  { value: "12", label: "Projetos entregues" },
  { value: "7",  label: "Clientes ativos" },
  { value: "5+", label: "Anos de experiência" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function Cases() {
  return (
    <section id="cases" className="py-24 bg-odois-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-odois-gray-900 leading-tight">
            Cases de{" "}
            <span className="text-odois-primary-light">sucesso</span>
          </h2>
          <p className="mt-4 text-lg text-odois-gray-600">
            Projetos reais desenvolvidos com dedicação que geraram resultados
            mensuráveis para nossos clientes.
          </p>
        </motion.div>

        {/* Grid de cases */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {cases.map((caseItem, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              className="group bg-odois-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Placeholder visual */}
              <div
                className={`aspect-video bg-gradient-to-br ${caseItem.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
                    <span className="text-white/90 text-3xl font-bold">
                      {caseItem.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-odois-white rounded-full text-sm font-medium text-odois-gray-900">
                      Ver detalhes
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <span className="text-xs font-semibold text-odois-primary uppercase tracking-wider">
                  {caseItem.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-odois-gray-900 group-hover:text-odois-primary transition-colors duration-150">
                  {caseItem.title}
                </h3>
                <p className="mt-3 text-odois-gray-600 text-sm leading-relaxed">
                  {caseItem.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {caseItem.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-odois-gray-100 text-odois-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Métricas — cor sólida, sem gradient-text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-odois-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-odois-primary">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-odois-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
