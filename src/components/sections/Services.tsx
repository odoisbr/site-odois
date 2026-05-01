import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Criamos sistemas web sob medida: plataformas SaaS, portais corporativos e aplicações complexas com React e Next.js.",
    features: ["React & Next.js", "Node.js", "APIs RESTful", "SEO otimizado"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de aplicativos mobile para iOS e Android com React Native. Apps profissionais que engajam usuários.",
    features: ["React Native", "iOS & Android", "UI/UX nativo", "Push notifications"],
  },
  {
    icon: Database,
    title: "Sistemas sob Demanda",
    description:
      "Software personalizado para gestão empresarial: ERPs, CRMs e sistemas de automação desenvolvidos sob medida.",
    features: ["Arquitetura escalável", "Integrações", "Dashboards", "Automação"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infraestrutura cloud robusta na AWS e GCP com práticas DevOps para escalabilidade e alta disponibilidade.",
    features: ["AWS & GCP", "CI/CD", "Monitoramento", "Segurança"],
  },
  {
    icon: Code2,
    title: "APIs & Integrações",
    description:
      "Desenvolvimento de APIs REST e GraphQL e integrações com sistemas terceiros para conectar seu ecossistema digital.",
    features: ["REST & GraphQL", "Webhooks", "Microservices", "Documentação"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    description:
      "Orientação estratégica para decisões tecnológicas: do MVP ao product-market fit, definimos o melhor caminho.",
    features: ["Discovery de produto", "Roadmap", "Code review", "Mentoria"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-odois-gray-900">
            Desenvolvimento de software{" "}
            <span className="gradient-text">sob medida</span> para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-odois-gray-600">
            Da ideia à implementação, nossa software house oferece todo o suporte
            para transformar seu projeto em um produto digital de alta performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group p-8 rounded-2xl border border-odois-gray-200 hover:border-odois-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-odois-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-odois-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-odois-gray-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-odois-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contato"
            className="inline-flex items-center text-odois-primary font-semibold hover:text-odois-primary-dark transition-colors group"
          >
            Fale sobre seu projeto
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
