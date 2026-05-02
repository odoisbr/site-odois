"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart",
    content:
      "A oDois entregou nosso MVP em tempo recorde e com qualidade excepcional. O time é extremamente competente e comprometido com o resultado. Foi a melhor decisão que tomamos para o produto.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    role: "Product Manager",
    company: "InnovaApp",
    content:
      "Profissionalismo e expertise técnica de alto nível. Recomendo para qualquer empresa que busque um parceiro de tecnologia confiável.",
    rating: 5,
  },
  {
    name: "Roberto Costa",
    role: "CTO",
    company: "FinFlow",
    content:
      "A comunicação transparente e as entregas consistentes fizeram toda diferença. Parceria que deu muito certo.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-odois-gray-50">
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
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-odois-gray-900 leading-tight">
            O que nossos{" "}
            <span className="text-odois-primary-light">clientes dizem</span>
          </h2>
          <p className="mt-4 text-lg text-odois-gray-600">
            Resultados reais de quem apostou na oDois para construir seu produto
            digital.
          </p>
        </motion.div>

        {/* Layout assimétrico — 1 destaque (2 colunas) + 2 menores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Destaque */}
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 bg-odois-white rounded-2xl p-8 sm:p-10 shadow-sm relative flex flex-col justify-between"
          >
            {/* Aspas decorativas — forma, não gradient */}
            <div className="absolute top-8 right-8 text-[80px] font-serif leading-none text-odois-gray-100 select-none">
              &ldquo;
            </div>

            <div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-odois-gray-700 text-xl leading-relaxed max-w-xl font-medium">
                {testimonials[0].content}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">
                  {testimonials[0].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-odois-gray-900">
                  {testimonials[0].name}
                </div>
                <div className="text-sm text-odois-gray-500">
                  {testimonials[0].role} · {testimonials[0].company}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Menores */}
          <div className="flex flex-col gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                  delay: index * 0.1,
                }}
                className="bg-odois-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-odois-gray-600 text-sm leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-odois-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-odois-gray-500">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mt-20 gradient-bg rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar sua ideia em realidade?
          </h3>
          <p className="text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para entender suas necessidades e propor a
            melhor solução. Orçamento gratuito, sem compromisso.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-odois-white text-odois-primary font-semibold rounded-lg hover:bg-odois-gray-100 transition-colors duration-150"
          >
            Agendar Conversa Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
