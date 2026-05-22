import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  XCircle,
  Laptop,
  Wifi,
  Heart,
  Mail,
  Play,
  Clock,
  MapPin,
  Infinity as InfinityIcon,
  Users,
  GraduationCap,
  Briefcase,
  Youtube,
  Target,
  Home,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  Star,
  Shield,
} from "lucide-react";
import personaMae from "@/assets/persona-mae.jpg";
import personaEstudante from "@/assets/persona-estudante.jpg";
import personaProfissional from "@/assets/persona-profissional.jpg";
import personaCriador from "@/assets/persona-criador.jpg";
import personaDesempregado from "@/assets/persona-desempregado.jpg";
import personaEmpreendedor from "@/assets/persona-empreendedor.jpg";
import personaAposentado from "@/assets/persona-aposentado.jpg";
import dirceuHistoria from "@/assets/dirceu-historia.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => {
    const title = "Renda Extra com IA: Crie Landing Pages e Fature até R$4.986/mês";
    const description = "Aprenda como faturar uma renda extra de R$50 a R$4986,93/mês criando Landing Pages para serviços locais com IA. Método comprovado e lucrativo.";
     const url = "https://cursorendaextraia.vercel.app";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Renda Extra com IA: Landing Pages para Serviços Locais",
            "description": description,
            "provider": {
              "@type": "Person",
              "name": "Dirceu Souza",
              "sameAs": url
            },
            "offers": {
              "@type": "Offer",
              "category": "Paid",
              "price": "67.00",
              "priceCurrency": "BRL",
              "url": "https://promowebcenter.com/botao-site-checkout"
            }
          })
        }
      ]
    };
  },
});

const stats = [
  { value: "11", label: "Anos de Experiência" },
  { value: "100%", label: "Online" },
  { value: "Suporte", label: "Direto Comigo" },
];

const modules = [
  {
    title: "Módulo 1: Mentalidade e Liberdade",
    desc: "Prepare sua mente para sair da CLT e assumir o controle total da sua vida financeira.",
    icon: Target,
  },
  {
    title: "Módulo 2: O Poder da IA na Prática",
    desc: "As ferramentas secretas que eu uso para criar landing pages profissionais em minutos.",
    icon: Cpu,
  },
  {
    title: "Módulo 3: Criando Landing Pages que Vendem",
    desc: "Clique a clique, sem precisar de código, criando páginas de alto padrão.",
    icon: Laptop,
  },
  {
    title: "Módulo 4: Prospecção de Clientes Reais",
    desc: "Onde encontrar empresas que pagam bem e como fechar contratos sem parecer um vendedor.",
    icon: MapPin,
  },
  {
    title: "Módulo 5: Escala e Quadruplicação",
    desc: "Como gerenciar seu novo negócio home office e escalar seus ganhos mensais.",
    icon: Zap,
  },
];

const bonuses = [
  {
    title: "Script de Abordagem Irresistível",
    desc: "O que falar para o cliente para fechar a venda rapidamente.",
    value: "R$ 197,00",
  },
  {
    title: "Meus Modelos Prontos",
    desc: "Páginas que eu já usei para faturar alto, prontas para você usar.",
    value: "R$ 497,00",
  },
  {
    title: "Suporte VIP Direto Comigo",
    desc: "Acesso ao meu suporte pessoal para tirar todas as suas dúvidas.",
    value: "INESTIMÁVEL",
  },
];

const beforeItems = [
  "Trabalhando 8+ horas por dia para os outros",
  "Chefe mandando em cada passo",
  "Salário fixo que não cobria as despesas",
  "Trânsito estressante todos os dias",
  "Pouquíssimo tempo com a família",
  "Estresse e ansiedade constantes",
  "Sem perspectiva de crescimento real",
];

const afterItems = [
  "Trabalhando apenas 2-5 horas por dia para mim",
  "Eu sou meu próprio patrão",
  "Renda ilimitada e crescente todos os meses",
  "Trabalhando de onde quiser, até de pijama",
  "Todo o tempo do mundo para quem amo",
  "Paz interior e satisfação pessoal",
  "Liberdade total para crescer",
];

const personas = [
  {
    icon: Heart,
    image: personaMae,
    title: "Mães que Querem Trabalhar em Casa",
    desc: "Você sonha em conciliar a maternidade com uma renda de verdade, sem precisar deixar seus filhos na creche ou com terceiros? Este método foi feito 100% para você criar sua liberdade em casa!",
  },
  {
    icon: GraduationCap,
    image: personaEstudante,
    title: "Estudantes Buscando Independência",
    desc: "Cansado de depender da mesada dos pais ou de estágios que pagam muito pouco? Aprenda a gerar sua própria renda enquanto estuda e conquiste sua independência financeira agora!",
  },
  {
    icon: Briefcase,
    image: personaProfissional,
    title: "Profissionais Insatisfeitos",
    desc: "Já não aguenta mais seu trabalho atual, chefe exigente, metas absurdas e horários que sugam toda sua energia? Construa sua saída em paralelo e demita seu chefe!",
  },
  {
    icon: Youtube,
    image: personaCriador,
    title: "Criadores de Canais Dark Frustrados",
    desc: "Seu canal dark não monetizou, foi desmonetizado ou derrubado? Aprenda um modelo sustentável, seguro e que NÃO depende dos algoritmos para gerar renda todo mês!",
  },
  {
    icon: Users,
    image: personaDesempregado,
    title: "Desempregados em Busca de Renda",
    desc: "Está sem emprego, enviando currículos sem resposta e a conta não para de chegar? Esse pode ser o caminho mais rápido para você gerar sua primeira venda online ainda este mês!",
  },
  {
    icon: Sparkles,
    image: personaEmpreendedor,
    title: "Empreendedores Iniciantes",
    desc: "Quer abrir seu próprio negócio digital mas não sabe por onde começar nem tem dinheiro para investir? Aqui você aprende um modelo validado, do zero, sem precisar gastar nada.",
  },
  {
    icon: Award,
    image: personaAposentado,
    title: "Aposentados que Querem Renda Extra",
    desc: "Aposentadoria não está dando conta das contas e você quer complementar a renda trabalhando em casa, no seu ritmo? Esse método é simples, didático e perfeito para você!",
  },
];


const faqs = [
  {
    q: "Preciso ter experiência com internet para começar?",
    a: "Não! O método foi pensado para iniciantes. Se você sabe ligar um computador e acessar a internet, já tem o suficiente para começar. Eu te ensino tudo do zero, passo a passo.",
  },
  {
    q: "Quanto tempo leva para ver os primeiros resultados?",
    a: "Depende da sua dedicação. Alunos que aplicam o método consistentemente costumam ver os primeiros resultados em apenas 3 dias, mas é claro que vai depender muito do seu esforço e dedicação.",
  },
  {
    q: "Preciso investir dinheiro além do curso?",
    a: "Não. O método foi desenhado para você começar gastando R$0,00. Você usa ferramentas gratuitas e Inteligência Artificial.",
  },
  {
    q: "O que é vendido na área de membros?",
    a: "Aulas em vídeo passo a passo, materiais de apoio, modelos prontos, atualizações constantes e suporte direto comigo.",
  },
  {
    q: "Por quanto tempo terei acesso ao conteúdo?",
    a: "O acesso é por 1 ano. Você compra uma vez e tem 12 meses completos de acesso a todo o conteúdo, incluindo as atualizações lançadas dentro desse período.",
  },
  {
    q: "Tem suporte para tirar dúvidas?",
    a: "Sim! O suporte é direto comigo, por e-mail. Basta clicar no link Contato no final do site e me enviar sua dúvida, que eu respondo o mais rápido possível.",
  },
  {
    q: "Funciona para qualquer nicho?",
    a: "Sim. O método é aplicável a praticamente qualquer nicho de serviços locais: dentistas, advogados, estética, mecânicas e muito mais.",
  },
  {
    q: "Posso assistir as aulas pelo celular?",
    a: "Claro! A área de membros é 100% responsiva. Você assiste pelo celular, tablet ou computador.",
  },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [onlineCount, setOnlineCount] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + change;
        return Math.min(Math.max(next, 10), 30);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scarcity Bar */}
      <div className="bg-primary py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground md:text-xs">
        🔥 ÚLTIMAS VAGAS COM DESCONTO ESPECIAL - OFERTA TERMINA EM BREVE
      </div>

      {/* Top WhatsApp bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-black tracking-tighter">
            <span className="bg-primary px-2 py-0.5 text-primary-foreground">DIRCEU</span>
            <span className="hidden md:inline text-xs">TE ENSINA 2.0 - LPSLs</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-[10px] font-bold md:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              {onlineCount} ALUNOS ONLINE AGORA
            </div>
            <a
              href="https://promowebcenter.com/contato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-black uppercase text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Contato
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 -z-10 opacity-20 [background:radial-gradient(circle_at_30%_20%,var(--primary),transparent_60%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Desde 2015 vivendo 100% da internet
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Vou Te Ensinar a Fazer{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Dinheiro Online Ainda em 2026
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Aprenda comigo agora em 2026 passo a passo, clique a clique como
              eu faço para faturar uma renda extra de{" "}
              <span className="font-semibold text-primary">R$50</span> a{" "}
              <span className="font-semibold text-primary">R$4986,93</span> por
              mês ou até mais trabalhando de casa, criando e vendendo{" "}
              <span className="font-extrabold text-primary underline decoration-primary/40 underline-offset-4">
                Landing Pages de serviços Locais
              </span>{" "}
              usando{" "}
              <span className="font-extrabold text-primary underline decoration-primary/40 underline-offset-4">
                Inteligência Artificial sem gastar um único centavo
              </span>
              . Se eu consigo, você também consegue!
            </p>

            <div className="mt-8 transform transition-all hover:scale-105">
              <div className="relative inline-block">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-75 blur animate-pulse"></div>
                <div className="relative rounded-lg bg-background px-6 py-4 border-2 border-primary/50">
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-shimmer">
                    COMECE A FATURAR SEUS PRIMEIROS REAIS EM 3 DIAS
                  </h2>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Laptop, label: "Notebook, computador e celular" },
                { icon: Wifi, label: "Acesso à Internet" },
                { icon: Heart, label: "Vontade de Mudar" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" /> {label}
                </span>
              ))}
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-glow)]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Eu0WOPbCpz4?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0"
                title="Apresentação do treinamento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="https://promowebcenter.com/botao-site-checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-10 py-5 text-lg font-black uppercase tracking-wider text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.6)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Quero Minha Liberdade Agora <ArrowRight className="h-6 w-6 animate-bounce-x" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <p className="flex items-center gap-2 text-sm font-bold text-primary animate-pulse">
                <Users className="h-4 w-4" /> 127 pessoas entraram nas últimas 24h
              </p>
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Método comprovado desde 2015
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card/60 p-4">
                  <div className="text-2xl font-extrabold text-primary md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={dirceuHistoria}
              alt="Dirceu Souza trabalhando de casa desde 2015"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, oklch(0.16 0.02 250 / 0.9) 100%)",
              }}
            />
            <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              Trabalhando de casa desde
            </div>
            <div
              className="absolute bottom-6 left-6 text-6xl font-black"
              style={{ color: "var(--primary)" }}
            >
              2015
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Minha História
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              De Demitido a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Livre Financeiramente
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Até 2015, eu estava exatamente onde você provavelmente está
                agora: dentro do velho ciclo "acorda-trabalha-dorme", no sufoco
                do trânsito, enfrentando ônibus lotados, encarando metas e
                prazos que não me traziam nada.
              </p>
              <p>
                Aquele ano foi um divisor de águas, pois tomei uma das decisões
                mais ousadas da minha vida: larguei minha carteira assinada e
                comecei a buscar o tal do dinheiro online. Na verdade, eu fui{" "}
                <span className="font-bold text-primary">"DEMITIDO"</span>.
              </p>
              <p>
                Confesso, não foi fácil no início. Tive medo, receio do
                desconhecido, e a insegurança sobre como eu ia me sustentar e
                sustentar minha família, apertava o coração.
              </p>
              <p>
                Mas a vontade de ter liberdade, de construir algo meu, era maior
                que tudo isso. Então, eu me joguei de cabeça.
              </p>
              <p className="font-semibold text-foreground">
                Testei, errei, ajustei. E, finalmente encontrei o caminho certo!
              </p>
              <blockquote className="rounded-xl border-l-4 border-primary bg-card p-5 italic text-foreground">
                "Hoje, eu vivo dessa liberdade que um dia só existia nos meus
                sonhos. Quando vou ao mercado, não preciso mais escolher entre
                uma coisa e outra. Posso proporcionar o que há de melhor para
                minha família."
                <footer className="mt-3 text-sm not-italic text-muted-foreground">
                  — Dirceu Souza, de Joinville-SC para o Mundo
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS / VIDEO */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Resultados Reais
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold md:text-4xl">
            Meus Resultados Trabalhando no{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Conforto da Minha Casa
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Veja com seus próprios olhos como é possível construir uma vida de
            liberdade trabalhando de casa, com apenas um computador e internet.
          </p>

          <div className="mx-auto mt-10 aspect-video max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-glow)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/Z54J_yYQI4A?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0"
              title="Meus Resultados Trabalhando em Casa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Clique para assistir minha história de transformação
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "11", l: "Anos Online", icon: Clock },
              { v: "100%", l: "Home Office", icon: Home },
              { v: "0", l: "Chefes", icon: XCircle },
              { v: "∞", l: "Liberdade", icon: InfinityIcon },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-border bg-card p-5"
              >
                <s.icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-3xl font-extrabold">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME OFFICE FREEDOM SECTION */}
      <section className="border-t border-border bg-gradient-to-b from-background to-primary/5 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card border border-border p-8 rounded-2xl shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-muted-foreground line-through">A Vida que Te Ensinaram</h4>
                        <p className="text-sm text-muted-foreground italic">"Acorde cedo, pegue trânsito, obedeça ordens, receba um salário que mal paga as contas e espere pelo final de semana."</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-border w-full" />

                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black text-xl text-primary">A Liberdade que Eu Vou Te Entregar</h4>
                        <p className="text-lg font-medium">Trabalhe da sua casa, no seu horário, sendo o seu próprio chefe e faturando alto com o poder da Inteligência Artificial.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Liberdade Geográfica e Financeira</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
                Você Decide Se <span className="text-primary">Trabalha ou Não</span> Hoje
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Chega de viver sob as ordens de uma empresa que não te valoriza. No meu treinamento, eu te mostro como construir o seu **próprio império home office**.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Esqueça o despertador e o trânsito estressante",
                  "Trabalhe de pijama ou da sua cafeteria favorita",
                  "Tenha tempo real para ver seus filhos crescerem",
                  "O seu lucro depende apenas do seu esforço, não de um RH"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a 
                  href="#cta"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
                >
                  EU QUERO ESSA LIBERDADE <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT'S POSSIBLE */}
      <section className="border-t border-border bg-primary/5 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Como isso é possível?
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              O Atalho Para <span className="text-primary">Faturar Rápido</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Você não precisa ser um expert em design ou programação. O segredo está em usar a <span className="font-bold text-foreground">Inteligência Artificial</span> a seu favor para entregar em minutos o que levava dias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">IA Cria Tudo</h3>
              <p className="text-muted-foreground">A inteligência artificial escreve os textos, cria as imagens e estrutura toda a página para você em minutos.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Demanda Infinita</h3>
              <p className="text-muted-foreground">Todo negócio local (dentistas, advogados, oficinas) precisa de uma Landing Page para vender mais. Eles pagam bem por isso!</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Rapidez Absurda</h3>
              <p className="text-muted-foreground">O processo é simples e qualquer pessoa consegue fazer. Aplicando o método e trabalhando do jeito certo, você consegue fechar um cliente e entregar no mesmo dia!</p>
            </div>
          </div>

          <div className="mt-16 bg-card border-2 border-primary/20 p-8 rounded-3xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">É por isso que você pode</h3>
            <div className="inline-block px-6 py-3 bg-primary text-primary-foreground font-black text-2xl md:text-3xl rounded-xl skew-x-[-2deg] hover:skew-x-0 transition-transform cursor-default">
              FATURAR SEUS PRIMEIROS REAIS EM 3 DIAS
            </div>
            <p className="mt-6 text-muted-foreground">
              Sem precisar gastar com ferramentas caras, sem precisar de equipe e sem anos de estudo. Você só precisa trabalhar da forma correta para ter resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* EVOLUTION SECTION */}
      <section className="border-t border-border py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">A Nova Era da Criação</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black">Do Arcaico ao <span className="text-primary">Ilimitado</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-8 rounded-2xl border border-destructive/20 bg-destructive/5 relative">
                <div className="absolute -top-4 -left-4 bg-destructive text-destructive-foreground px-4 py-1 rounded-lg font-bold text-sm transform -rotate-3">
                  ERA ARCAICA
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-destructive" /> WordPress e Elementor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Antes das IAs, eu perdia dias configurando WordPress, lidando com Elementor, plugins pesados que travavam o site e ferramentas complexas. Era um trabalho braçal, cansativo e que exigia meses de estudo para ficar "bom". Hoje, essas ferramentas se tornaram **arcaicas**.
                </p>
                <div className="mt-4 flex items-center gap-2 text-destructive font-bold text-sm">
                  <XCircle className="w-4 h-4" /> Lento, difícil e caro.
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <ArrowRight className="w-8 h-8 text-primary rotate-90 md:rotate-0" />
              </div>

              <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 relative">
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-1 rounded-lg font-bold text-sm transform rotate-3">
                  ERA DA INTELIGÊNCIA ARTIFICIAL
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <Cpu className="w-5 h-5" /> O Poder da IA
                </h3>
                <p className="text-foreground leading-relaxed font-medium">
                  Hoje, tudo mudou. O que levava dias, a IA faz em **minutos**. Com o meu método, qualquer pessoa com vontade de mudar sua realidade consegue criar Landing Pages de alto padrão trabalhando de forma inteligente e correta.
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary font-black text-sm uppercase">
                  <Zap className="w-4 h-4 fill-primary" /> Rápido, simples e lucrativo.
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-primary/40 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(var(--primary-rgb),0.15)] relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-2 rounded-full font-black text-lg tracking-tighter">
                INVESTIMENTO ZERO
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  "Você não vai gastar nem um único centavo para começar."
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
                <p className="text-lg text-muted-foreground">
                  Eu desenhei esse treinamento para que você tenha o **custo inicial de R$ 0,00**. 
                </p>
                <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                  <p className="text-primary font-black text-xl md:text-2xl">
                    MINHA PROMESSA:
                  </p>
                  <p className="mt-2 text-foreground font-bold text-lg">
                    Você só irá investir em ferramentas quando o seu faturamento inicial <span className="underline decoration-primary decoration-4 underline-offset-4">QUADRUPLICAR</span>.
                  </p>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  O risco é todo meu. O lucro é todo seu.
                </p>
                <a 
                  href="https://promowebcenter.com/botao-site-checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary py-4 text-lg font-black uppercase text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  QUERO COMEÇAR SEM GASTAR NADA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              A Transformação
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Vem Comigo Nessa Jornada?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Compare a vida que você tem hoje com a vida que você pode
              conquistar
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/15 px-3 py-1 text-xs font-bold uppercase text-destructive">
                <XCircle className="h-4 w-4" /> Antes
              </div>
              <ul className="space-y-3">
                {beforeItems.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--success)]/30 bg-[var(--success)]/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--success)]/15 px-3 py-1 text-xs font-bold uppercase text-[var(--success)]">
                <CheckCircle2 className="h-4 w-4" /> Depois
              </div>
              <ul className="space-y-3">
                {afterItems.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                    <span className="text-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Target className="h-3.5 w-3.5" /> Para Quem É?
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Este Método é{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Feito Para Você
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Se você se identifica com{" "}
              <span className="font-bold text-foreground">qualquer um</span>{" "}
              desses perfis, pode ter certeza:{" "}
              <span className="font-bold text-primary">
                esse é o seu momento de virar o jogo!
              </span>
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {personas.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      {/* GUARANTEE SECTION */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <Shield className="w-full h-full text-primary relative z-10" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center text-primary font-black text-2xl md:text-3xl">7</div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">Risco Zero: <span className="text-primary">Garantia Blindada</span> de 7 Dias</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eu confio tanto no meu método que eu tiro todo o risco das suas costas. Entre no treinamento, assista as aulas, aplique o método. Se em até 7 dias você não estiver satisfeito, basta me enviar um e-mail e eu devolvo <span className="font-bold text-foreground">100% do seu dinheiro</span>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OFFER SECTION (PRICE ANCHOR) */}
      <section className="py-24 bg-gradient-to-b from-card/50 to-background border-t border-border" id="oferta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background border-2 border-primary p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_80px_rgba(var(--primary-rgb),0.2)] relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-10 py-3 rounded-full font-black text-xl animate-bounce shadow-xl">
              OFERTA EXCLUSIVA
            </div>

            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Oferta Especial de Lançamento</h2>
              <p className="text-lg font-bold text-destructive animate-pulse">
                ATENÇÃO: Este valor promocional pode subir a qualquer momento sem aviso prévio. Aproveite o descontão agora!
              </p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex justify-between items-center text-muted-foreground line-through decoration-destructive decoration-2">
                  <span>Preço Original:</span>
                  <span>R$ 197,00</span>
                </div>
                <div className="h-px bg-border w-full" />
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>DESCONTO DE 66%:</span>
                  <span className="text-green-500">- R$ 130,00</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Hoje por apenas:</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold">12x de</span>
                  <span className="text-6xl md:text-8xl font-black text-primary tracking-tighter">R$ 7,00</span>
                </div>
                <p className="text-xl font-bold">ou R$ 67,00 à vista</p>
              </div>

              <div className="pt-6">
                <a
                  href="https://promowebcenter.com/botao-site-checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl py-6 text-xl md:text-2xl font-black uppercase tracking-wider text-primary-foreground shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(var(--primary-rgb),0.4)]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    SIM! QUERO MINHA VAGA AGORA <ArrowRight className="h-7 w-7" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
                
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-60">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Shield className="w-4 h-4" /> COMPRA 100% SEGURA
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" /> ACESSO IMEDIATO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Perguntas que Todo Mundo Faz
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Separei as dúvidas mais comuns para te ajudar a decidir
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold transition hover:bg-muted/30"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-sm font-semibold">Ainda tem alguma dúvida sobre o treinamento?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Entre em contato pelo link{" "}
              <a href="#contato-footer" className="font-bold text-primary hover:underline">
                Contato
              </a>{" "}
              no final do site que eu te respondo o mais rápido possível.
            </p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer
        className="border-t border-border bg-card/40 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-card p-6 text-center">
            <h3
              className="text-2xl font-black"
              style={{ color: "var(--primary)" }}
            >
              DIRCEU SOUZA
            </h3>
            <p className="mt-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              De Joinville - SC para o Mundo!!
            </p>

            <p className="mt-6 text-sm">
              🤔 Ainda tem alguma dúvida sobre a área de membros{" "}
              <span className="font-bold text-primary">DIRCEU TE ENSINA 2.0 - LPSLs?</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Use o link <span className="font-bold text-primary">Contato</span> abaixo — o suporte é <span className="font-bold text-primary">direto comigo</span> e respondo o mais rápido possível!
            </p>
          </div>

          <div id="contato-footer" className="mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <a href="https://promowebcenter.com/contato/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                <Mail className="h-3.5 w-3.5" /> Contato
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary">Política de Privacidade</a>
              <span>|</span>
              <Link to="/afiliadolpsls" className="hover:text-primary">Afiliados</Link>
            </div>
            <p>© Desde 2023 Dirceu Te Ensina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
