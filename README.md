# oDois Site

Reformulação do site institucional da oDois, com foco em performance, conteúdo claro e uma experiência mais moderna para apresentação da software house.

A proposta é reconstruir o site atual em **Astro.js**, com hospedagem na **Cloudflare Pages**, mantendo a comunicação de marca e reorganizando a experiência para ficar mais leve, rápida e fácil de manter.

## Objetivo

O novo site deve apresentar a oDois como uma software house brasileira especializada em:

- Desenvolvimento Web
- Aplicativos Mobile
- Sistemas sob demanda
- Cloud & DevOps
- APIs & Integrações
- Consultoria Técnica

Além de comunicar diferenciais como equipe sênior, foco em resultados, parceria com o cliente e entregas ágeis.

## Referência de conteúdo

O conteúdo atual do site destaca a seguinte estrutura:

- Hero principal com proposta de valor da marca
- Blocos de serviços
- Cases de sucesso
- Seção sobre a empresa
- Depoimentos de clientes
- Chamada para contato
- Páginas legais como Política de Privacidade e Termos de Uso

## Stack alvo

- **Astro.js** para a aplicação principal
- **TypeScript** para tipagem e manutenção
- **Cloudflare Pages** para deploy e hospedagem
- **Componentização** para reaproveitamento de seções e páginas
- **SEO básico** com meta tags, Open Graph e estrutura semântica

## Páginas esperadas

- `/` - página inicial
- `/servicos` - detalhamento dos serviços
- `/cases` - portfólio e cases de sucesso
- `/sobre` - apresentação institucional
- `/depoimentos` - prova social
- `/contato` - formulário e canais de contato
- `/privacidade` - política de privacidade
- `/termos` - termos de uso

## Direção do projeto

A reformulação deve priorizar:

- carregamento rápido
- layout responsivo
- tipografia e hierarquia visual mais fortes
- navegação objetiva
- conteúdo institucional bem organizado
- preparo para crescimento futuro do site

## Estrutura sugerida

```text
src/
  components/
  layouts/
  pages/
  styles/
  content/
public/
```

## Desenvolvimento local

Se o projeto estiver configurado com Astro, os comandos mais comuns são:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

O fluxo de publicação recomendado é:

1. subir o código no repositório
2. conectar o repositório à Cloudflare Pages
3. configurar o build do Astro
4. publicar automaticamente a cada push na branch principal

## Próximos passos

- definir identidade visual da nova versão
- mapear conteúdo final de cada seção
- montar a base de componentes em Astro
- integrar formulários e links de contato
- preparar o deploy na Cloudflare Pages

## Sobre a oDois

A oDois atua com desenvolvimento de software sob medida, aplicativos mobile e sistemas web, combinando visão técnica e foco em negócio para transformar ideias em produtos digitais de alta performance.
