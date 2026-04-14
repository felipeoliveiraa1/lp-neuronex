// NeuroNex — single source of truth para copy e dados da landing.
// Edite aqui e o site todo atualiza.

export const site = {
  brand: 'NeuroNex',
  domain: 'https://lp-neuronex.vercel.app',
  description:
    'Tecnologia sob medida pro seu negócio crescer. IA, sistemas e landing pages para automatizar processos, vender mais e crescer com previsibilidade.',
  whatsapp: 'https://wa.me/+5511998002960',
  portfolio: 'https://wa.me/+5511998002960',
  gtmId: 'GTM-NW6PKL3J',
  year: new Date().getFullYear(),
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/+5511998002960',
    github: 'https://github.com/',
  },
} as const;

// Nav --------------------------------------------------------------------

export const nav = {
  links: [
    { label: 'Início', href: '#hero' },
    { label: 'Soluções', href: '#features' },
    { label: 'Processo', href: '#how' },
    { label: 'Cases', href: '#testimonials' },
    { label: 'Contato', href: '#cta-section' },
  ],
  cta: { label: 'Falar com especialista', href: site.whatsapp },
} as const;

// Hero -------------------------------------------------------------------

export const hero = {
  eyebrow: 'Tecnologia sob medida pra crescer',
  titleLine1: 'Tecnologia sob medida',
  titleLine2: 'pro seu negócio',
  titleAccent: 'crescer',
  subtitle:
    'Da IA ao sistema sob medida, entregamos a tecnologia que sua empresa precisa pra automatizar processos, vender mais e crescer com previsibilidade.',
  primaryCta: { label: 'Quero uma proposta', href: site.whatsapp, icon: 'lucide:rocket' },
  secondaryCta: { label: 'Conhecer o trabalho', href: '#features', icon: 'lucide:compass' },
  metrics: [
    { value: '+50', label: 'Projetos entregues' },
    { value: '98%', label: 'Satisfação dos clientes' },
    { value: '+8 anos', label: 'De mercado' },
    { value: '24/7', label: 'Suporte dedicado' },
  ],
} as const;

// Trust ------------------------------------------------------------------

export const trust = {
  label: 'Ferramentas e plataformas que integramos no dia a dia',
  logos: [
    'WhatsApp',
    'Stripe',
    'Supabase',
    'Vercel',
    'n8n',
    'OpenAI',
    'Make',
    'HubSpot',
    'Google',
    'Notion',
    'Figma',
    'GitHub',
  ],
} as const;

// Features (bento grid) --------------------------------------------------

export const features = {
  label: 'Soluções NeuroNex',
  title: 'Cada camada do seu negócio,',
  titleAccent: 'sob um mesmo padrão.',
  description:
    'Da IA que atende às landing pages que convertem — sistemas e interfaces feitos pro jeito que sua empresa vende e opera.',
  cards: [
    {
      id: 'atendimento',
      tag: 'IA · 24/7',
      title: 'Agentes de Atendimento',
      description:
        'Chatbots com IA integrados ao WhatsApp, CRM ou plataforma própria — vendendo, qualificando e respondendo sem parar.',
      widget: 'bars',
    },
    {
      id: 'comercial',
      tag: 'IA · AI',
      title: 'Automação Comercial',
      description:
        'Capture leads, qualifique, envie propostas e faça follow-up no piloto automático — IA cuidando da rotina do time.',
      widget: 'donut',
    },
    {
      id: 'sistemas',
      tag: 'Sistemas · Custom',
      title: 'Sistemas Sob Medida',
      description:
        'Web apps, painéis e ERPs internos desenhados pro jeito que sua empresa trabalha — escaláveis, seguros e prontos pra crescer junto.',
      widget: 'grid',
    },
    {
      id: 'integracoes',
      tag: 'Sistemas · Live',
      title: 'Integrações & APIs',
      description:
        'Conectamos sistemas, automatizamos processos entre ferramentas e construímos APIs robustas pra eliminar tarefa manual.',
      widget: 'pills',
    },
    {
      id: 'lp-conversao',
      tag: 'Landing Pages · A/B',
      title: 'Landing Pages de Conversão',
      description:
        'Páginas de captura e venda com copy estratégica, design persuasivo e métricas reais — pra cada real de tráfego virar resultado.',
      widget: 'funnel',
    },
    {
      id: 'sites',
      tag: 'Landing Pages · SEO',
      title: 'Sites Institucionais Premium',
      description:
        'Sites rápidos, otimizados pra Google e desenhados pra transmitir o nível do seu negócio — SEO técnico, performance e estética sob medida.',
      widget: 'speed',
    },
  ],
} as const;

// Metrics (marquee) ------------------------------------------------------

export const metrics = [
  { value: '+50', label: 'Projetos entregues' },
  { value: '98%', label: 'Satisfação' },
  { value: '+8 anos', label: 'No mercado' },
  { value: '24/7', label: 'Suporte dedicado' },
  { value: '6h', label: 'Resposta média' },
  { value: '100%', label: 'Sob medida' },
];

// How It Works (4 sticky panels) -----------------------------------------

export const how = {
  label: 'Nosso Processo',
  title: 'Do problema ao resultado,',
  titleAccent: 'em quatro etapas.',
  description:
    'Um processo comprovado pra entregar tecnologia que funciona de verdade — sem mistério, sem amadorismo.',
  steps: [
    {
      step: 1,
      title: 'Diagnóstico',
      badge: 'Estratégia',
      description:
        'Mergulhamos no seu negócio pra entender gargalos, metas e oportunidades reais — antes de propor uma linha de código.',
      statusLabel: 'Descoberta',
      statusValue: '6 / 6 mapeados',
      items: [
        { label: 'Fluxo comercial', status: 'on' },
        { label: 'Stack atual', status: 'on' },
        { label: 'Gargalos operacionais', status: 'on' },
        { label: 'Métricas-chave', status: 'on' },
        { label: 'Metas 6 meses', status: 'on' },
        { label: 'Oportunidades de IA', status: 'on' },
        { label: 'ROI projetado', status: 'off' },
        { label: 'Roadmap proposto', status: 'off' },
      ],
    },
    {
      step: 2,
      title: 'Estratégia & Design',
      badge: 'UX · Arquitetura',
      description:
        'Desenhamos a jornada, os telas e a arquitetura do sistema com foco em conversão e escalabilidade — antes de programar.',
      statusLabel: 'Conversão estimada',
      statusValue: 'Leads → Venda  14.2%',
      funnel: [
        { label: 'Visitantes', pct: 100, value: '10.000', width: 92 },
        { label: 'Leads', pct: 38, value: '3.800', width: 68 },
        { label: 'MQL', pct: 22, value: '2.200', width: 42 },
        { label: 'Fechado', pct: 14, value: 'R$ 180K', width: 24 },
      ],
    },
    {
      step: 3,
      title: 'Construção & Integração',
      badge: 'Engenharia',
      description:
        'Desenvolvemos a solução sob medida — sistema, página ou agente — e conectamos a tudo que sua empresa já usa.',
      statusLabel: 'Confiabilidade',
      statusValue: '99.9% uptime',
      gauge: 99,
      gaugeRows: [
        { label: 'Build em produção', color: 'var(--accent-light)' },
        { label: 'Integrações ativas: 12', color: 'var(--accent)' },
        { label: 'Cobertura de testes: 87%', color: 'rgba(255,255,255,0.15)' },
        { label: '0 incidentes críticos', color: '#F59E0B' },
      ],
    },
    {
      step: 4,
      title: 'Ativação & Otimização',
      badge: 'Operação',
      description:
        'Colocamos no ar, acompanhamos métricas reais e ajustamos continuamente pra garantir crescimento sustentável.',
      statusLabel: 'Atividade recente',
      statusValue: 'Últimos 5 min',
      actions: [
        { text: 'Deploy aprovado → produção', time: '2s atrás', state: 'live' },
        { text: 'Nova automação rodando: Proposta automática', time: '14s atrás', state: 'live' },
        { text: 'Relatório semanal enviado ao cliente', time: '1m atrás', state: 'done' },
        { text: 'Alerta de tráfego: pico detectado', time: '3m atrás', state: 'done' },
      ],
    },
  ],
} as const;

// Showcase (mock dashboard) ----------------------------------------------

export const showcase = {
  label: 'Exemplo de entrega',
  title: 'Um sistema sob medida pro',
  titleAccent: 'seu fluxo operacional.',
  description:
    'Exemplo real de painel administrativo que entregamos — com métricas, fluxos e relatórios que fazem sentido pro seu negócio.',
  tabs: ['Painel', 'Vendas', 'Equipe', 'Relatórios'],
  sidebarTitle: 'NeuroCRM',
  sidebarItems: [
    { icon: 'lucide:layout-dashboard', label: 'Painel' },
    { icon: 'lucide:bar-chart-2', label: 'Vendas' },
    { icon: 'lucide:target', label: 'Metas' },
    { icon: 'lucide:users-2', label: 'Equipe' },
    { icon: 'lucide:radio', label: 'Alertas' },
    { icon: 'lucide:settings', label: 'Ajustes' },
  ],
  mainTitle: 'Painel Geral — Abril 2026',
  dateBadge: 'Atualizado há 2 min',
  topMetrics: [
    { value: 'R$ 480K', label: 'Faturamento MRR', delta: '+12,4%' },
    { value: '1.284', label: 'Leads ativos', delta: '+18,7%' },
    { value: '14,2%', label: 'Taxa de conversão', delta: '+3,1pp' },
    { value: 'R$ 8.9K', label: 'Tíquete médio', delta: '+6,8%' },
  ],
} as const;

// Testimonials -----------------------------------------------------------

export const testimonials = {
  label: 'Histórias de clientes',
  title: 'Negócios que cresceram com',
  titleAccent: 'a tecnologia certa.',
  description:
    'De empresas em crescimento a estúdios criativos — times que apostaram no nosso trabalho e colheram resultados de verdade.',
  featured: {
    initials: 'FC',
    name: 'Flavia Cyfer',
    role: 'Fundadora · E-commerce de moda',
    quote:
      'Recuperou faturamento com uma automação de carrinhos abandonados feita sob medida. Em poucas semanas, leads perdidos voltaram a virar venda — sem precisar contratar mais ninguém pro time comercial. Pra mim, o melhor é ter um time que entende de tecnologia E de negócio na mesma conversa.',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  cards: [
    {
      initials: 'RM',
      name: 'Rafael Monteiro',
      role: 'Sócio · Construtech',
      quote:
        'Tinha planilhas demais e nenhum sistema. Construíram um painel sob medida que centralizou obras, equipes e financeiro num lugar só. Hoje a operação roda com metade do esforço e o dobro de clareza.',
      gradient: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
    },
    {
      initials: 'CD',
      name: 'Camila Duarte',
      role: 'Diretora · Studio Atelier',
      quote:
        'Minha landing page anterior não convertia nada. A nova foi entregue em duas semanas, com copy estratégica e design afinado com a marca. No primeiro mês, o custo por lead caiu pela metade.',
      gradient: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
    },
  ],
} as const;

// CTA Final --------------------------------------------------------------

export const ctaFinal = {
  label: 'Vamos começar',
  title: 'Pronto pra dar o',
  titleAccent: 'próximo passo?',
  description:
    'Sistemas, landing pages ou agentes de IA — entregamos a tecnologia certa pro estágio do seu negócio, com suporte de verdade e foco em resultado.',
  primaryCta: { label: 'Falar com especialista', href: site.whatsapp, icon: 'lucide:rocket' },
  secondaryCta: { label: 'Ver portfólio', href: site.portfolio, icon: 'lucide:folder-open' },
} as const;

// Footer -----------------------------------------------------------------

export const footer = {
  tagline: 'Tecnologia sob medida pra negócios que querem crescer.',
  columns: [
    {
      title: 'Soluções',
      links: [
        { label: 'Agentes de IA', href: '#features' },
        { label: 'Sistemas Sob Medida', href: '#features' },
        { label: 'Landing Pages', href: '#features' },
        { label: 'Integrações & APIs', href: '#features' },
        { label: 'Automação Comercial', href: '#features' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nós', href: '#hero' },
        { label: 'Processo', href: '#how' },
        { label: 'Cases', href: '#testimonials' },
        { label: 'Contato', href: '#cta-section' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '#' },
        { label: 'Termos de Uso', href: '#' },
        { label: 'LGPD', href: '#' },
      ],
    },
  ],
} as const;
