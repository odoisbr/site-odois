"use client";

import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada linha de código é pensada para gerar impacto real no seu negócio — não para impressionar o portfólio.",
  },
  {
    icon: Users,
    title: "Parceria de Verdade",
    description:
      "Trabalhamos lado a lado com nossos clientes, como uma extensão do time. Você sempre sabe o que está acontecendo.",
  },
  {
    icon: Zap,
    title: "Entregas Consistentes",
    description:
      "Processos enxutos, comunicação direta e entregas incrementais para colocar seu produto no ar no prazo.",
  },
];

const differentials = [
  "Time sênior com experiência em startups e grandes empresas",
  "Comunicação transparente e acompanhamento constante",
  "Metodologia ágil com entregas incrementais e visibilidade total",
  "Código limpo, testado e documentado — sem atalhos",
  "Suporte pós-lançamento e evolução contínua do produto",
  "Stack moderna e boas práticas atualizadas de mercado",
];

const slideLeft = {
  hidden: { opacity: 0, x: -32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE, delay: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.1 },
  }),
};

export function About() {
  return (
    <section id="sobre" className="py-24 bg-odois-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statement de abertura */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-odois-magenta font-semibold text-sm uppercase tracking-wider">
            Sobre a oDois
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Sênior de verdade.
            <br />
            <span className="text-odois-magenta">Resultados de verdade.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Conteúdo — entra da esquerda */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-lg text-white/65 leading-relaxed">
              A oDois nasceu da paixão por criar produtos digitais excepcionais.
              Somos uma software house especializada em desenvolvimento sob
              medida, aplicativos mobile e sistemas web para empresas em todo o
              Brasil.
            </p>
            <p className="mt-4 text-lg text-white/65 leading-relaxed">
              Com base em Brasília (DF) e atuação nacional, combinamos expertise
              técnica com visão de negócio para entregar software que gera
              resultados reais — não só código bonito.
            </p>

            {/* Diferenciais */}
            <div className="mt-8 space-y-3">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-odois-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards de valores — entram da direita */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.18] transition-[background-color,border-color] duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
