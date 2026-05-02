"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  User,
  Building2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    setTimeout(() => setIsSubmitted(false), 10000);
  };

  return (
    <section id="contato" className="py-24 bg-odois-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-odois-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-odois-gray-900 leading-tight">
              Vamos construir algo{" "}
              <span className="text-odois-primary-light">incrível juntos</span>
            </h2>
            <p className="mt-6 text-lg text-odois-gray-600 leading-relaxed">
              Conte sobre seu projeto ou ideia. Nossa equipe entra em contato
              para entender suas necessidades e propor a solução ideal.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-odois-gray-500">Email</div>
                  <a
                    href="mailto:contato@odois.com.br"
                    className="text-odois-gray-900 font-medium hover:text-odois-primary transition-colors duration-150"
                  >
                    contato@odois.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-odois-gray-500">WhatsApp</div>
                  <a
                    href="https://wa.me/5561999911676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-odois-gray-900 font-medium hover:text-odois-primary transition-colors duration-150"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>
            </div>

            {/* Gatilhos de conversão */}
            <div className="mt-10 p-6 rounded-2xl gradient-bg-subtle border border-odois-primary/10">
              <h4 className="font-semibold text-odois-gray-900 mb-4">
                Por que a oDois?
              </h4>
              <ul className="space-y-3 text-odois-gray-600">
                {[
                  "Orçamento gratuito e sem compromisso",
                  "Proposta detalhada com cronograma e investimento em 48h",
                  "Consultoria inicial para entender seu projeto a fundo",
                  "Resposta garantida em até 24 horas úteis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <ArrowRight className="h-4 w-4 text-odois-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulário com AnimatePresence */}
          <div className="bg-odois-gray-50 rounded-3xl p-8 md:p-10 min-h-[480px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-odois-gray-900 mb-3">
                    Mensagem recebida!
                  </h3>
                  <p className="text-odois-gray-600 max-w-xs leading-relaxed">
                    Nossa equipe responde em até{" "}
                    <strong className="text-odois-gray-900">4 horas úteis</strong>{" "}
                    com uma proposta personalizada para o seu projeto.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease }}
                >
                  <h3 className="text-xl font-semibold text-odois-gray-900 mb-6">
                    Envie sua mensagem
                  </h3>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-odois-gray-400 pointer-events-none" />
                        <Input
                          {...register("name")}
                          placeholder="Seu nome *"
                          className="pl-11"
                          error={errors.name?.message}
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-odois-gray-400 pointer-events-none" />
                        <Input
                          {...register("email")}
                          type="email"
                          placeholder="Seu email *"
                          className="pl-11"
                          error={errors.email?.message}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-odois-gray-400 pointer-events-none" />
                        <Input
                          {...register("phone")}
                          placeholder="Telefone (opcional)"
                          className="pl-11"
                        />
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-odois-gray-400 pointer-events-none" />
                        <Input
                          {...register("company")}
                          placeholder="Empresa (opcional)"
                          className="pl-11"
                        />
                      </div>
                    </div>

                    <Textarea
                      {...register("message")}
                      placeholder="Conte sobre seu projeto... *"
                      rows={5}
                      error={errors.message?.message}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Solicitar Orçamento Grátis
                    </Button>

                    {/* Reversão de risco */}
                    <p className="text-xs text-odois-gray-500 text-center leading-relaxed">
                      Gratuito · Sem compromisso · Resposta em até 24h.{" "}
                      <a
                        href="/privacidade"
                        className="text-odois-primary hover:underline"
                      >
                        Política de Privacidade
                      </a>
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
