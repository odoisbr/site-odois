"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MessageSquare, User, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const lines = [
      `*Novo contato via site oDois*`,
      ``,
      `*Nome:* ${data.name}`,
      `*Email:* ${data.email}`,
      ...(data.phone ? [`*Telefone:* ${data.phone}`] : []),
      ...(data.company ? [`*Empresa:* ${data.company}`] : []),
      ``,
      `*Mensagem:*`,
      data.message,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/5561999911676?text=${text}`, "_blank");
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-odois-gray-900">
              Vamos construir algo{" "}
              <span className="gradient-text">incrível juntos</span>
            </h2>
            <p className="mt-6 text-lg text-odois-gray-600 leading-relaxed">
              Conte-nos sobre seu projeto ou ideia. Nossa equipe entrará em contato
              para entender melhor suas necessidades e propor a solução ideal.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-odois-gray-500">Email</div>
                  <a
                    href="mailto:contato@odois.com.br"
                    className="text-odois-gray-900 font-medium hover:text-odois-primary transition-colors"
                  >
                    contato@odois.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-odois-gray-500">WhatsApp</div>
                  <a
                    href="https://wa.me/5561999911676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-odois-gray-900 font-medium hover:text-odois-primary transition-colors"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>
            </div>

            {/* Why contact us */}
            <div className="mt-10 p-6 rounded-2xl gradient-bg-subtle border border-odois-primary/10">
              <h4 className="font-semibold text-odois-gray-900 mb-4">
                Por que escolher a oDois?
              </h4>
              <ul className="space-y-2 text-odois-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-odois-primary mt-2 flex-shrink-0" />
                  Resposta rápida em até 24 horas úteis
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-odois-primary mt-2 flex-shrink-0" />
                  Orçamento gratuito e sem compromisso
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-odois-primary mt-2 flex-shrink-0" />
                  Consultoria inicial para entender seu projeto
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-odois-primary mt-2 flex-shrink-0" />
                  Proposta detalhada com cronograma e investimento
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-odois-gray-50 rounded-3xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-odois-gray-900 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-odois-gray-600">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-xl font-semibold text-odois-gray-900 mb-6">
                  Envie sua mensagem
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-odois-gray-400 pointer-events-none" />
                    <Input
                      {...register("name")}
                      placeholder="Seu nome *"
                      className="pl-12"
                      error={errors.name?.message}
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-odois-gray-400 pointer-events-none" />
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="Seu email *"
                      className="pl-12"
                      error={errors.email?.message}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-odois-gray-400 pointer-events-none" />
                    <Input
                      {...register("phone")}
                      placeholder="Telefone (opcional)"
                      className="pl-12"
                    />
                  </div>

                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-odois-gray-400 pointer-events-none" />
                    <Input
                      {...register("company")}
                      placeholder="Empresa (opcional)"
                      className="pl-12"
                    />
                  </div>
                </div>

                <Textarea
                  {...register("message")}
                  placeholder="Conte-nos sobre seu projeto... *"
                  rows={5}
                  error={errors.message?.message}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-odois-gray-500 text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="/privacidade" className="text-odois-primary hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
