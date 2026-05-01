import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Github, Mail, MapPin } from "lucide-react";

const footerLinks = {
  servicos: [
    { label: "Desenvolvimento Web", href: "#servicos" },
    { label: "Aplicativos Mobile", href: "#servicos" },
    { label: "Software sob Demanda", href: "#servicos" },
    { label: "Consultoria", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/odois", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/odois", label: "Instagram" },
  { icon: Github, href: "https://github.com/odois", label: "GitHub" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-odois-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/odois-logo.svg"
                alt="oDois"
                width={100}
                height={30}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-odois-gray-400 text-sm leading-relaxed">
              Transformamos ideias em produtos digitais de alta performance.
              Desenvolvimento de software com excelência e inovação.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-odois-gray-800 hover:bg-odois-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-odois-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-odois-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-odois-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@odois.com.br"
                  className="text-odois-gray-400 hover:text-white transition-colors text-sm"
                >
                  contato@odois.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-odois-primary flex-shrink-0 mt-0.5" />
                <span className="text-odois-gray-400 text-sm">
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-odois-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-odois-gray-500 text-sm">
              &copy; {currentYear} oDois. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacidade"
                className="text-odois-gray-500 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-odois-gray-500 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
