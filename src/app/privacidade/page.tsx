import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da oDois. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="mt-4 text-white/70">
            Última atualização: Janeiro de 2026c
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              1. Introdução
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              A oDois (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) está comprometida em
              proteger a privacidade dos visitantes do nosso site e dos nossos
              clientes. Esta Política de Privacidade explica como coletamos,
              usamos, divulgamos e protegemos suas informações pessoais quando
              você visita nosso site ou utiliza nossos serviços.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <h3 className="text-lg font-semibold text-odois-gray-900 mb-2">
              2.1 Informações fornecidas por você
            </h3>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Nome da empresa</li>
              <li>Mensagens e comunicações enviadas através do formulário de contato</li>
            </ul>
            <h3 className="text-lg font-semibold text-odois-gray-900 mb-2">
              2.2 Informações coletadas automaticamente
            </h3>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Data e hora de acesso</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              3. Como Usamos suas Informações
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Enviar propostas comerciais e orçamentos</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Analisar o uso do site e gerar estatísticas</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros para fins de marketing. Podemos compartilhar suas
              informações nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>
                <strong>Prestadores de serviços:</strong> empresas que nos ajudam
                a operar o site e fornecer nossos serviços (hospedagem, e-mail,
                analytics)
              </li>
              <li>
                <strong>Obrigações legais:</strong> quando exigido por lei,
                processo judicial ou autoridade governamental
              </li>
              <li>
                <strong>Proteção de direitos:</strong> para proteger nossos
                direitos, propriedade ou segurança
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              5. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para melhorar sua
              experiência em nosso site. Os tipos de cookies que utilizamos
              incluem:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o
                funcionamento básico do site
              </li>
              <li>
                <strong>Cookies de análise:</strong> nos ajudam a entender como
                os visitantes interagem com o site
              </li>
              <li>
                <strong>Cookies de preferências:</strong> lembram suas escolhas e
                preferências
              </li>
            </ul>
            <p className="text-odois-gray-600 leading-relaxed mt-4">
              Você pode gerenciar suas preferências de cookies através das
              configurações do seu navegador.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              6. Segurança dos Dados
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais
              apropriadas para proteger suas informações pessoais contra acesso
              não autorizado, alteração, divulgação ou destruição. Isso inclui
              criptografia SSL, firewalls, controles de acesso e monitoramento
              regular de nossos sistemas.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              7. Seus Direitos (LGPD)
            </h2>
            <p className="text-odois-gray-600 leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os
              seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-odois-gray-600 space-y-2">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários ou
                excessivos
              </li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
            <p className="text-odois-gray-600 leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato conosco através do
              e-mail:{" "}
              <a
                href="mailto:privacidade@odois.com.br"
                className="text-odois-primary hover:underline"
              >
                privacidade@odois.com.br
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              8. Retenção de Dados
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Mantemos suas informações pessoais pelo tempo necessário para
              cumprir as finalidades descritas nesta política, a menos que um
              período de retenção mais longo seja exigido ou permitido por lei.
              Quando seus dados não forem mais necessários, eles serão excluídos
              ou anonimizados de forma segura.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              9. Links para Sites de Terceiros
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Esta
              Política de Privacidade não se aplica a esses sites, e não somos
              responsáveis por suas práticas de privacidade. Recomendamos que
              você leia as políticas de privacidade de qualquer site que visitar.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              10. Alterações nesta Política
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Quaisquer alterações serão publicadas nesta página com a data de
              atualização revisada. Recomendamos que você revise esta política
              regularmente para se manter informado sobre como protegemos suas
              informações.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-odois-gray-900 mb-4">
              11. Contato
            </h2>
            <p className="text-odois-gray-600 leading-relaxed">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a
              esta Política de Privacidade ou ao tratamento de seus dados
              pessoais, entre em contato conosco:
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
              <p className="text-odois-gray-600">
                E-mail para assuntos de privacidade:{" "}
                <a
                  href="mailto:privacidade@odois.com.br"
                  className="text-odois-primary hover:underline"
                >
                  privacidade@odois.com.br
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
