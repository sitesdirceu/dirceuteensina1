import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  AlertTriangle,
  Check,
  XCircle,
  Mail,
  Zap,
  Shield,
  Target,
  Rocket,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/afiliadolpsls")({
  component: AffiliatesPage,
  head: () => {
    const title = "Afiliados - Dirceu Te Ensina 2.0 - LPSLs";
    const description = "Seja um afiliado do treinamento Dirceu Te Ensina 2.0 - LPSLs e ganhe dinheiro divulgando um produto de alta conversão.";
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-sm font-black tracking-tighter">
            <span className="bg-primary px-2 py-0.5 text-primary-foreground">DIRCEU</span>
            <span className="hidden md:inline text-xs text-foreground">TE ENSINA 2.0 - LPSLs</span>
          </Link>
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

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link 
            to="/" 
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para a página principal
          </Link>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary mb-6">
              <Rocket className="h-3.5 w-3.5" />
              Oportunidade para Afiliados
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl mb-6 uppercase">
              🚀 GANHE DINHEIRO DIVULGANDO UM TREINAMENTO FÁCIL DE VENDER!
            </h1>
            <div className="mb-6 inline-block rounded-lg bg-red-600 px-6 py-2 text-lg font-black uppercase text-white shadow-lg animate-pulse">
              ⚠️ AFILIAÇÃO SOMENTE PARA ALUNOS
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O treinamento “Dirceu Te Ensina 2.0 - LPSLs” foi criado para pessoas que querem aprender a faturar online criando Landing Pages com Inteligência Artificial, mesmo começando do zero.
            </p>
          </section>

          {/* Product Info */}
          <section className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-foreground">Alta Conversão Garantida</h2>
                <p className="text-muted-foreground">
                  A página de vendas é altamente persuasiva, possui forte apelo emocional, prova social, gatilhos mentais e uma oferta extremamente acessível, facilitando MUITO a conversão para os afiliados.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-foreground">Renda Online Prática</h2>
                <p className="text-muted-foreground">
                  O produto ensina passo a passo como gerar renda online trabalhando de casa, usando apenas celular ou computador com internet. É um mercado em crescimento e com alta procura em 2026.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-center mb-8 uppercase tracking-tight">
              ✅ O que torna esse produto fácil de vender:
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Página de vendas otimizada para conversão",
                "Método simples e atual usando IA",
                "Público gigante procurando renda extra",
                "Baixo valor de entrada",
                "Garantia de 7 dias",
                "Linguagem fácil e direta",
                "Serve para iniciantes"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background border border-border p-4 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rules Section */}
          <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-black text-red-500 uppercase tracking-tight">
                ⚠️ REGRAS IMPORTANTES PARA AFILIADOS
              </h2>
            </div>
            
            <p className="text-sm font-bold mb-6 text-foreground">
              NÃO faça SPAM em grupos, comentários, inbox, WhatsApp em massa, e-mails não autorizados ou qualquer divulgação abusiva e enganosa.
            </p>
            
            <p className="mb-8 text-muted-foreground">
              Trabalhamos apenas com divulgação PROFISSIONAL e ESTRATÉGICA.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-bold text-green-600 mb-4">
                  <Check className="h-5 w-5" /> Divulgação permitida:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Instagram / TikTok / Facebook / YouTube</li>
                  <li>• SEO / Blog</li>
                  <li>• Google e Bing ADS <span className="text-xs font-bold text-foreground underline italic">"Somente topo de funil"</span></li>
                  <li>• Anúncios pagos / Conteúdo orgânico</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-bold text-red-600 mb-4">
                  <XCircle className="h-5 w-5" /> Proibido:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Qualquer tipo de SPAM</li>
                  <li>• Propaganda enganosa</li>
                  <li>• Práticas que prejudiquem a imagem do produto</li>
                  <li>• Google e Bing Ads para fundo de funil</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-red-500/10">
              <p className="text-sm font-bold text-red-600 leading-relaxed italic">
                Caso seja identificado qualquer tipo de irregularidade, sua afiliação será CANCELADA IMEDIATAMENTE sem aviso prévio. Depois não adianta chorar ou reclamar.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary text-primary-foreground rounded-2xl p-10 shadow-xl shadow-primary/20">
            <Shield className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              QUEREMOS AFILIADOS SÉRIOS E ÉTICOS
            </h2>
            <div className="mb-4 text-xl font-black bg-white text-red-600 py-1 px-4 inline-block rounded">
              AFILIAÇÃO SOMENTE PARA ALUNOS
            </div>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 font-medium">
              Focados em ganhar dinheiro de forma correta e profissional. Quem trabalha certo, vende muito. 🔥
            </p>
            <a
              href="https://www.treinamento.dirceuteensina.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-sm font-black uppercase text-primary transition hover:scale-105 active:scale-95"
            >
              Começar agora como afiliado
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <Link to="/" className="hover:text-primary">Página Principal</Link>
              <span>|</span>
              <a href="https://promowebcenter.com/contato/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Contato</a>
              <span>|</span>
              <a href="#" className="hover:text-primary">Política de Privacidade</a>
            </div>
            <p>© Desde 2023 Dirceu Te Ensina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
