import { createFileRoute } from "@tanstack/react-router";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Globe,
  Home,
  Target,
  Rocket,
  ShieldCheck,
  Award
} from "lucide-react";

export const Route = createFileRoute("/afiliados")({
  component: AffiliatesPage,
  head: () => {
    const title = "Seja Nosso Afiliado - Alta Conversão e Lucro Garantido";
    const description = "Descubra por que o Dirceu Te Ensina é o produto mais fácil de vender hoje. Milhões de pessoas buscam renda extra e nós temos a solução.";
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
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar simplificada */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary px-2 py-1 rounded text-primary-foreground font-black text-sm uppercase">Afiliados</div>
            <span className="font-bold tracking-tighter">DIRCEU TE ENSINA</span>
          </div>
          <a href="/" className="text-sm font-semibold flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="h-4 w-4" /> Ver Página Principal
          </a>
        </div>
      </nav>

      {/* Hero: Foco na Facilidade de Venda */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Rocket className="h-4 w-4" /> Oportunidade Única de Lucro
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            O PRODUTO QUE SE <br className="hidden md:block" />
            <span className="text-primary italic">VENDE SOZINHO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Esqueça produtos difíceis. Nós resolvemos a maior dor do brasileiro hoje: <span className="font-bold text-foreground underline decoration-primary">a necessidade de Renda Extra honesta.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://promowebcenter.com/afiliados"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/25 flex items-center gap-3 w-full sm:w-auto"
            >
              QUERO ME AFILIAR AGORA <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Market Insight: Por que é fácil? */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                POR QUE VOCÊ VAI <br />
                VENDER <span className="text-primary underline">MUITO?</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Demanda Reprimida Gigantesca</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Milhões de pessoas no Brasil e no mundo buscam diariamente formas honestas de fazer dinheiro de casa. A economia mudou e todos querem liberdade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ticket Baixo, Conversão Alta</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O valor acessível remove a barreira do "vou pensar". É uma compra de impulso racional, onde o cliente vê que o retorno vem em poucos dias.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Autoridade Inquestionável</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O Dirceu vive disso desde 2015. Não é teoria de quem começou ontem. Isso gera uma confiança imediata no lead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
              <div className="bg-background border border-border p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tighter text-primary">MILHÕES</div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-60">De Buscas Mensais</div>
                  </div>
                </div>
                <p className="text-lg font-medium italic mb-6">
                  "Todo mundo tem um amigo, parente ou conhecido que está precisando de dinheiro agora. Você só precisa mostrar a solução."
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">Online</div>
                  </div>
                  <div className="bg-card p-4 rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold">Direto</div>
                    <div className="text-[10px] uppercase font-bold opacity-60">Pelo Checkout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Personas: Para quem vender? */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-16">SEU PÚBLICO ESTÁ <span className="text-primary underline">EM TODO LUGAR</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Desempregados", desc: "Buscando uma saída rápida para pagar as contas." },
              { title: "Mães em Casa", desc: "Querem conciliar renda com o cuidado dos filhos." },
              { title: "Estudantes", desc: "Buscando independência sem atrapalhar os estudos." },
              { title: "CLT Insatisfeito", desc: "Quem quer 'demitir o chefe' e ter liberdade." }
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-2xl hover:border-primary transition-all">
                <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Benefits */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Zap className="h-[500px] w-[500px] absolute -right-20 -bottom-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Sua Estrutura de Vendas Pronta</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2">Comissão Top</h3>
              <p className="opacity-80">Receba uma fatia generosa de cada venda. Valorizamos quem traz o cliente.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">Conversão Monstra</h3>
              <p className="opacity-80">Página de vendas testada e aprovada com gatilhos mentais poderosos.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Suporte Afiliado</h3>
              <p className="opacity-80">Grupo de materiais e suporte para te ajudar a escalar seus anúncios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
              A HORA DE <span className="text-primary">LUCRAR</span> É AGORA!
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Não perca a chance de promover o treinamento mais desejado do momento. <br />
              O mercado está pronto. E você?
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="https://promowebcenter.com/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
              >
                QUERO MEU LINK DE AFILIADO
              </a>
              <a
                href="https://promowebcenter.com/contato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-10 py-6 rounded-2xl font-bold text-lg hover:bg-secondary/80 transition flex items-center justify-center gap-2 border border-border"
              >
                <MessageCircle className="h-6 w-6" /> Falar com o Gerente
              </a>
            </div>
            <p className="mt-8 text-sm font-bold text-primary animate-pulse">
              ⚠️ Vagas para novos afiliados podem fechar a qualquer momento!
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="font-black tracking-tighter text-xl mb-4">DIRCEU TE ENSINA</div>
          <p className="text-sm text-muted-foreground">© 2026 Todos os direitos reservados. Fature com ética e honestidade.</p>
        </div>
      </footer>
    </div>
  );
}
