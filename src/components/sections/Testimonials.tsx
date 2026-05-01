import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart",
    content:
      "A oDois entregou nosso MVP em tempo recorde e com qualidade excepcional. O time é extremamente competente e comprometido com o resultado.",
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
      "A comunicação transparente e as entregas consistentes fizeram toda diferença no nosso projeto. Parceria que deu muito certo!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-odois-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-odois-gray-900">
            O que nossos{" "}
            <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="mt-4 text-lg text-odois-gray-600">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-odois-gray-600 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-odois-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-odois-gray-500">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 gradient-bg rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar sua ideia em realidade?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto. Nossa equipe está pronta para
            entender suas necessidades e propor a melhor solução.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-white text-odois-primary font-semibold rounded-lg hover:bg-odois-gray-100 transition-colors"
          >
            Agendar Conversa
          </a>
        </div>
      </div>
    </section>
  );
}
