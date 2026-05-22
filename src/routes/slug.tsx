import { createFileRoute } from "@tanstack/react-router";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Globe,
  Home
} from "lucide-react";

export const Route = createFileRoute("/slug")({
  component: AffiliatesPage,
  head: () => {
    const title = "Programa de Afiliados - Dirceu Te Ensina";
    const description = "Junte-se ao nosso programa de afiliados e fature alto ajudando pessoas a conquistarem a liberdade financeira trabalhando de casa.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
});

function AffiliatesPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Comissões Generosas",
      desc: "Ganhe uma excelente porcentagem sobre cada venda realizada através do seu link exclusivo."
    },
    {
      icon: TrendingUp,
      title: "Alta Conversão",
      desc: "Nossa página de vendas é otimizada para converter visitantes em alunos pagantes."
    },
    {
      icon: Globe,
      title: "Mercado Gigante",
      desc: "Milhões de pessoas no Brasil e no mundo buscam formas honestas de ganhar dinheiro em casa."
    },
    {
      icon: ShieldCheck,
      title: "Produto de Qualidade",
      desc: "Divulgue um método validado por quem vive da internet desde 2015."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter">
            <span className="bg-primary px-2 py-0.5 text-primary-foreground">DIRCEU</span>
            <span>AFILIADOS</span>
          </div>
          <a
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="h-4 w-4" /> Voltar ao Site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Lucre Ajudando Outras Pessoas a <br />
            <span className="text-primary">Trabalharem de Casa</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            O mercado de renda extra digital nunca esteve tão aquecido. Milhões de pessoas buscam diariamente uma forma honesta e comprovada de faturar online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://promowebcenter.com/afiliados"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Quero ser Afiliado <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why it's easy to sell */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que é tão fácil vender este treinamento?</h2>
            <p className="text-muted-foreground">O produto certo para o público certo no momento certo.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insight */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Oportunidade Gigantesca</h2>
              <p className="text-lg opacity-90 mb-6">
                No Brasil e no mundo, a busca por "como ganhar dinheiro na internet" bate recordes todos os meses. Milhões de pessoas estão cansadas do modelo tradicional de trabalho e buscam desesperadamente por uma saída.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                  <p>Público alvo: mães, estudantes, profissionais insatisfeitos e desempregados.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                  <p>Baixo ticket de entrada: facilidade na decisão de compra.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
                  <p>Autoridade real: Dirceu vive disso desde 2015.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-4xl font-black mb-2">MILHÕES</h3>
                <p className="text-xl font-medium opacity-80">De potenciais compradores aguardando sua indicação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card border border-border p-10 rounded-3xl shadow-xl">
            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Pronto para começar a faturar?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Não perca tempo e comece hoje mesmo a divulgar o treinamento que está mudando a vida de centenas de brasileiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://promowebcenter.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition flex items-center justify-center gap-2"
              >
                Solicitar Afiliação Agora
              </a>
              <a
                href="https://promowebcenter.com/contato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-secondary/80 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" /> Falar com Suporte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Dirceu Te Ensina. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
