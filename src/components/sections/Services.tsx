"use client";

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
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Plataformas SaaS, portais corporativos e aplicações complexas com React e Next.js. Código limpo, SEO sólido, performance real.",
    features: ["React & Next.js", "Node.js", "APIs RESTful", "SEO otimizado"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps iOS e Android com React Native. Profissionais, performáticos e com UX nativa que engaja e retém usuários.",
    features: ["React Native", "iOS & Android", "UI/UX nativo", "Push notifications"],
  },
  {
    icon: Database,
    title: "Sistemas sob Demanda",
    description:
      "ERPs, CRMs e sistemas de automação desenvolvidos sob medida. Sem código genérico, sem gambiarras — só o que o seu processo precisa.",
    features: ["Arquitetura escalável", "Integrações", "Dashboards", "Automação"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infraestrutura robusta na AWS e GCP com práticas DevOps para escalar sem dor. CI/CD, monitoramento e alta disponibilidade.",
    features: ["AWS & GCP", "CI/CD", "Monitoramento", "Segurança"],
  },
  {
    icon: Code2,
    title: "APIs & Integrações",
    description:
      "APIs REST e GraphQL e integrações com sistemas terceiros para conectar seu ecossistema digital em um fluxo único e coerente.",
    features: ["REST & GraphQL", "Webhooks", "Microservices", "Documentação"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    description:
      "Do MVP ao product-market fit: definimos o melhor caminho técnico para que você gaste tempo e dinheiro no que realmente importa.",
    features: ["Discovery de produto", "Roadmap", "Code review", "Mentoria"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-odois-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho com statement grande */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-16"
        >
          <motion.span
            variants={headingVariants}
            className="text-odois-primary font-semibold text-sm uppercase tracking-wider"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="mt-3 text-4xl sm:text-5xl font-bold text-odois-gray-900 leading-tight"
          >
            Tudo que você precisa
            <br />
            <span className="text-odois-primary-light">
              para construir e escalar.
            </span>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="mt-5 text-lg text-odois-gray-600 leading-relaxed"
          >
            Da ideia à implementação, suporte técnico completo para transformar
            seu projeto em um produto digital que gera resultado.
          </motion.p>
        </motion.div>

        {/* Lista numerada com stagger — quebra a grade idêntica */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} className="flex gap-5 group">
              <span className="text-[2.75rem] font-bold text-odois-gray-200 tabular-nums leading-none select-none pt-0.5 flex-shrink-0 transition-colors duration-200 group-hover:text-odois-primary/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="h-[18px] w-[18px] text-odois-primary flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-odois-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-odois-gray-600 leading-relaxed mb-3 text-[0.9375rem]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium text-odois-gray-500 bg-odois-gray-100 px-2.5 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="#contato"
            className="inline-flex items-center text-odois-primary font-semibold hover:text-odois-primary-dark transition-colors duration-150 group"
          >
            Orçamento gratuito para seu projeto
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
