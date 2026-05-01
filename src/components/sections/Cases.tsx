import Image from "next/image";
import { ExternalLink } from "lucide-react";

const cases = [
  {
    title: "Checkout de Débitos Veiculares",
    category: "Aplicação Web",
    description:
      "Sistema de checkout para pagamento de débitos veiculares DETRAN-SP com consulta de débitos, parcelamento e integração de pagamentos.",
    technologies: ["React", "Vite", "TypeScript", "Radix UI"],
    image: "/cases/checkoutsmart.png",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Revuu - Recrutamento Tech",
    category: "Plataforma SaaS",
    description:
      "Plataforma completa de recrutamento tech com portfólio verificado, code challenges, matching com IA, live coding arena e integração GitHub.",
    technologies: ["Next.js", "Node.js", "TypeScript", "Supabase", "IA"],
    image: "/cases/revuu.png",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Attrio - Gestão de Condomínios",
    category: "Plataforma SaaS",
    description:
      "Plataforma completa para gestão de condomínios com assembleias digitais, votação online, transcrição automática de atas com IA e controle de presença.",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "IA"],
    image: "/cases/attrio.png",
    color: "from-emerald-500 to-teal-600",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 bg-odois-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-odois-gray-900">
            Cases de <span className="gradient-text">sucesso</span> em desenvolvimento de software
          </h2>
          <p className="mt-4 text-lg text-odois-gray-600">
            Projetos de software sob medida que desenvolvemos com dedicação e que
            geraram resultados reais para nossos clientes.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className={`aspect-video bg-gradient-to-br ${caseItem.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white/80 text-4xl font-bold">
                      {caseItem.title.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-odois-gray-900">
                      Ver detalhes
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-odois-primary uppercase tracking-wider">
                  {caseItem.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-odois-gray-900 group-hover:text-odois-primary transition-colors">
                  {caseItem.title}
                </h3>
                <p className="mt-3 text-odois-gray-600 text-sm leading-relaxed">
                  {caseItem.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseItem.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-odois-gray-100 text-odois-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "30+", label: "Clientes satisfeitos" },
            { value: "5+", label: "Anos de experiência" },
            { value: "99%", label: "Taxa de satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-odois-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
