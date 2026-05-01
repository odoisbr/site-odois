import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada linha de código é pensada para gerar impacto real no seu negócio.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Trabalhamos lado a lado com nossos clientes, como uma extensão do time.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description:
      "Processos enxutos e entregas contínuas para colocar seu produto no ar rápido.",
  },
];

const differentials = [
  "Equipe senior com experiência em startups e grandes empresas",
  "Comunicação transparente e acompanhamento constante",
  "Metodologia ágil com entregas incrementais",
  "Código limpo, testado e documentado",
  "Suporte pós-lançamento e evolução contínua",
  "Stack moderna e boas práticas de mercado",
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
              Sobre a oDois
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-odois-gray-900">
              Software house brasileira que{" "}
              <span className="gradient-text">impulsiona negócios</span>
            </h2>
            <p className="mt-6 text-lg text-odois-gray-600 leading-relaxed">
              A oDois nasceu da paixão por criar produtos digitais excepcionais.
              Somos uma software house especializada em desenvolvimento de software
              sob medida, aplicativos mobile e sistemas web para empresas em todo
              o Brasil.
            </p>
            <p className="mt-4 text-lg text-odois-gray-600 leading-relaxed">
              Com base em Brasília (DF) e atuação nacional, combinamos expertise
              técnica com visão de negócio para entregar software personalizado
              que gera resultados reais.
            </p>

            {/* Differentials */}
            <div className="mt-8 space-y-3">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-odois-primary flex-shrink-0 mt-0.5" />
                  <span className="text-odois-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-odois-gray-200 hover:border-odois-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-odois-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-odois-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl gradient-bg-subtle border border-odois-primary/10">
              <h4 className="font-semibold text-odois-gray-900 mb-4">
                Tecnologias que dominamos
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Tailwind CSS",
                  "GraphQL",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium bg-white text-odois-gray-700 rounded-lg border border-odois-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
