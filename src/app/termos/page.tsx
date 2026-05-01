import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso da oDois. Condições para utilização do nosso site e serviços.",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="gradient-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Termos de Uso
          </h1>
          <p className="mt-4 text-white/70">
            Última atualização: Janeiro de 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Ao acessar e utilizar o site da oDois (&quot;Site&quot;), você concorda em
              cumprir e estar vinculado a estes Termos de Uso. Se você não
              concordar com qualquer parte destes termos, não deverá utilizar
              nosso Site ou serviços. Reservamo-nos o direito de modificar estes
              termos a qualquer momento, sendo sua responsabilidade revisá-los
              periodicamente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              2. Descrição dos Serviços
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              A oDois é uma empresa de tecnologia especializada em:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Desenvolvimento de software sob demanda</li>
              <li>Desenvolvimento de aplicativos mobile (iOS e Android)</li>
              <li>Desenvolvimento de sistemas e plataformas web</li>
              <li>Consultoria em tecnologia e transformação digital</li>
              <li>Infraestrutura cloud e DevOps</li>
              <li>Integrações e desenvolvimento de APIs</li>
            </ul>
            <p className="text-odois-gray-600 leading-relaxed mt-4">
              Os serviços específicos, escopo, prazos e valores são definidos em
              contratos ou propostas comerciais individuais acordados entre as
              partes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              3. Uso do Site
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Ao utilizar nosso Site, você concorda em:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Fornecer informações verdadeiras, precisas e completas</li>
              <li>
                Não utilizar o Site para fins ilegais ou não autorizados
              </li>
              <li>
                Não tentar acessar áreas restritas ou sistemas não autorizados
              </li>
              <li>
                Não interferir ou interromper o funcionamento do Site ou
                servidores
              </li>
              <li>
                Não transmitir vírus, malware ou qualquer código malicioso
              </li>
              <li>
                Não coletar informações de outros usuários sem autorização
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Todo o conteúdo presente no Site, incluindo, mas não limitado a:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Textos, artigos e documentação</li>
              <li>Logotipos, marcas e identidade visual</li>
              <li>Imagens, gráficos e ilustrações</li>
              <li>Design, layout e interface</li>
              <li>Código-fonte e software</li>
            </ul>
            <p className="text-odois-gray-600 leading-relaxed mt-4">
              São de propriedade exclusiva da oDois ou licenciados para uso, e
              estão protegidos pelas leis de propriedade intelectual aplicáveis.
              É proibida a reprodução, distribuição, modificação ou uso comercial
              sem autorização prévia por escrito.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              5. Projetos e Entregas
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Para projetos contratados:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>
                O escopo, prazos e condições serão definidos em proposta
                comercial ou contrato específico
              </li>
              <li>
                A propriedade intelectual do código desenvolvido será
                transferida ao cliente após quitação total do projeto, salvo
                acordo em contrário
              </li>
              <li>
                Bibliotecas, frameworks e componentes de terceiros mantêm suas
                respectivas licenças originais
              </li>
              <li>
                Componentes reutilizáveis desenvolvidos pela oDois podem ser
                utilizados em outros projetos, a menos que acordado
                exclusividade
              </li>
              <li>
                Alterações de escopo podem impactar prazos e valores, devendo
                ser formalizadas por escrito
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              6. Confidencialidade
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Comprometemo-nos a manter em sigilo todas as informações
              confidenciais compartilhadas por nossos clientes durante a
              prestação de serviços. Isso inclui, mas não se limita a: dados de
              negócio, estratégias, informações técnicas, dados de usuários e
              qualquer informação identificada como confidencial. Esta obrigação
              permanece válida mesmo após o término da relação comercial.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              7. Limitação de Responsabilidade
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              A oDois não será responsável por:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>
                Danos indiretos, incidentais, especiais ou consequenciais
                decorrentes do uso ou impossibilidade de uso do Site
              </li>
              <li>
                Conteúdo de sites de terceiros acessados através de links em
                nosso Site
              </li>
              <li>
                Interrupções temporárias do Site por manutenção ou problemas
                técnicos
              </li>
              <li>
                Perda de dados ou lucros cessantes, exceto nos casos previstos
                em contrato específico
              </li>
              <li>
                Uso indevido das informações ou serviços por parte do usuário
              </li>
            </ul>
            <p className="text-odois-gray-600 leading-relaxed mt-4">
              Em qualquer caso, nossa responsabilidade será limitada ao valor
              efetivamente pago pelo cliente pelos serviços prestados.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              8. Garantias
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Para serviços contratados, oferecemos garantia contra defeitos de
              desenvolvimento pelo período especificado em cada proposta ou
              contrato. Esta garantia cobre correções de bugs e ajustes
              relacionados ao escopo original do projeto. Não estão cobertos pela
              garantia: alterações de escopo, problemas causados por terceiros,
              modificações não autorizadas no código, ou falhas decorrentes de
              infraestrutura não gerenciada pela oDois.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              9. Comunicações
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Ao fornecer seu e-mail através do formulário de contato ou ao
              contratar nossos serviços, você concorda em receber comunicações
              relacionadas ao seu projeto ou solicitação. Comunicações de
              marketing serão enviadas apenas mediante consentimento expresso, e
              você pode cancelar o recebimento a qualquer momento através do link
              de descadastro presente nos e-mails ou entrando em contato conosco.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              10. Rescisão
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Reservamo-nos o direito de suspender ou encerrar seu acesso ao Site
              ou serviços, a nosso critério, sem aviso prévio, caso você viole
              estes Termos de Uso ou por qualquer outra razão que consideremos
              necessária. Em caso de rescisão de contratos de serviços, aplicam-se
              as condições específicas acordadas entre as partes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              11. Lei Aplicável e Foro
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa
              do Brasil. Qualquer disputa decorrente destes termos ou do uso do
              Site será submetida ao foro da comarca de domicílio da oDois, com
              exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              12. Disposições Gerais
            </h2>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>
                Se qualquer disposição destes Termos for considerada inválida ou
                inexequível, as demais disposições permanecerão em pleno vigor
              </li>
              <li>
                A falha da oDois em exercer ou fazer cumprir qualquer direito não
                constituirá renúncia a tal direito
              </li>
              <li>
                Estes Termos constituem o acordo integral entre você e a oDois em
                relação ao uso do Site
              </li>
              <li>
                Podemos ceder nossos direitos e obrigações sob estes Termos a
                terceiros, mediante notificação
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              13. Contato
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="mt-4 p-6 bg-odois-gray-50 rounded-xl">
              <p className="text-odois-gray-900 font-semibold">oDois</p>
              <p className="text-odois-gray-600 mt-2">
                E-mail:{" "}
                <a
                  href="mailto:contato@odois.com.br"
                  className="text-odois-primary hover:underline"
                >
                  contato@odois.com.br
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-12 pt-8 border-t border-odois-gray-200">
          <Link
            href="/"
            className="inline-flex items-center text-odois-primary hover:text-odois-primary-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
