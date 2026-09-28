/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE
 *  Edite aqui TODAS as informações do escritório.
 *  Todos os textos, telefones, e-mails, endereços e imagens
 *  são facilmente editáveis a partir deste arquivo.
 * ============================================================
 */

export const siteConfig = {
  /** Nome do escritório — exibido no header, footer, title e em todo o site */
  nome: "Vasconcelos & Mendes",
  /** Slogan curto exibido no rodapé */
  slogan: "Advocacia e Consultoria Jurídica",
  /** Ano atual para o rodapé */
  ano: 2026,

  /** Número de WhatsApp no formato: 55 + DDD + número (apenas dígitos) */
  whatsappNumero: "5511999999999",
  /** Mensagem pré-preenchida do WhatsApp */
  whatsappMensagem:
    "Olá, gostaria de agendar uma consulta e obter mais informações sobre o atendimento jurídico.",

  /** E-mail de contato */
  email: "contato@vasconcelosmendes.adv.br",
  /** Telefone fixo para exibição */
  telefone: "+55 (11) 3333-4444",
  /** Endereço completo */
  endereco: {
    logradouro: "Av. Paulista, 1000 — 12º andar",
    cidade: "São Paulo, SP",
    cep: "01310-100",
    mapaEmbedUrl: "", // Cole aqui a URL de embed do Google Maps (iframe src)
  },
  /** Horário de atendimento */
  horario: "Seg. a Sex. — 9h às 18h",
  /** Redes sociais (deixe vazio para ocultar) */
  redes: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "",
  },

  /** SEO */
  seo: {
    title: "Vasconcelos & Mendes | Advocacia e Consultoria Jurídica",
    description:
      "Escritório de advocacia especializado em soluções jurídicas estratégicas para pessoas e empresas.",
    ogImage: "https://bolt.new/static/og_default.png",
    url: "https://www.vasconcelosmendes.adv.br",
  },
};

/**
 * Imagens do site — todas centralizadas para fácil substituição.
 * Substitua as URLs pelas imagens definitivas do escritório.
 */
export const imagens = {
  hero: "https://images.pexels.com/photos/6077665/pexels-photo-6077665.jpeg?auto=compress&cs=tinysrgb&w=900",
  escritorio:
    "https://images.pexels.com/photos/35735960/pexels-photo-35735960.jpeg?auto=compress&cs=tinysrgb&w=900",
  cta: "https://images.pexels.com/photos/37726708/pexels-photo-37726708.jpeg?auto=compress&cs=tinysrgb&w=1400",
  blog1:
    "https://images.pexels.com/photos/7054510/pexels-photo-7054510.jpeg?auto=compress&cs=tinysrgb&w=600",
  blog2:
    "https://images.pexels.com/photos/8112153/pexels-photo-8112153.jpeg?auto=compress&cs=tinysrgb&w=600",
  blog3:
    "https://images.pexels.com/photos/7567600/pexels-photo-7567600.jpeg?auto=compress&cs=tinysrgb&w=600",
};

/**
 * Números / destaques do escritório.
 * Edite os valores conforme a realidade.
 */
export const numeros = [
  { valor: "+10", rotulo: "anos de experiência" },
  { valor: "+500", rotulo: "casos atendidos" },
  { valor: "100%", rotulo: "atendimento personalizado" },
  { valor: "6", rotulo: "áreas de atuação" },
];

/**
 * Áreas de atuação.
 * Para adicionar uma nova área, basta inserir um novo objeto no array.
 */
export type Area = {
  id: string;
  titulo: string;
  descricao: string;
  icone: string; // nome do ícone lucide-react
};

export const areas: Area[] = [
  {
    id: "empresarial",
    titulo: "Direito Empresarial",
    descricao:
      "Assessoria jurídica para empresas em contratos, societário, fusões, aquisições e governança corporativa.",
    icone: "Building2",
  },
  {
    id: "civil",
    titulo: "Direito Civil",
    descricao:
      "Atuação em responsabilidade civil, obrigações, contratos e indenizações, com foco na proteção dos seus direitos.",
    icone: "Scale",
  },
  {
    id: "trabalhista",
    titulo: "Direito Trabalhista",
    descricao:
      "Consultoria e representação em litígios trabalhistas, rescisões, verbas e conformidade para empresas.",
    icone: "Briefcase",
  },
  {
    id: "familia",
    titulo: "Direito de Família e Sucessões",
    descricao:
      "Orientação em divórcios, guarda, pensão, inventários, testamentos e planejamento sucessório.",
    icone: "Users",
  },
  {
    id: "imobiliario",
    titulo: "Direito Imobiliário",
    descricao:
      "Elaboração e revisão de contratos de compra e venda, locação, regularização de imóveis e disputas possessórias.",
    icone: "Home",
  },
  {
    id: "consumidor",
    titulo: "Direito do Consumidor",
    descricao:
      "Defesa do consumidor em relações de consumo, contratos de prestação de serviços, vícios e cobranças indevidas.",
    icone: "ShieldCheck",
  },
];

/**
 * Diferenciais do escritório.
 */
export const diferenciais = [
  {
    titulo: "Atendimento personalizado",
    descricao:
      "Cada cliente recebe atenção dedicada, com diagnóstico jurídico individualizado para o seu caso.",
    icone: "HeartHandshake",
  },
  {
    titulo: "Estratégia jurídica individualizada",
    descricao:
      "Desenvolvemos a estratégia mais adequada para cada situação, com análise técnica e visão prática.",
    icone: "Target",
  },
  {
    titulo: "Comunicação transparente",
    descricao:
      "Mantemos você informado em todas as etapas do processo, com linguagem clara e acessível.",
    icone: "MessageSquare",
  },
  {
    titulo: "Excelência técnica",
    descricao:
      "Equipe em constante atualização jurídica, comprometida com a qualidade e o rigor técnico.",
    icone: "Award",
  },
  {
    titulo: "Ética e confidencialidade",
    descricao:
      "Sigilo absoluto e conduta ética em todas as relações profissionais e institucionais.",
    icone: "Lock",
  },
  {
    titulo: "Foco na solução",
    descricao:
      "Buscamos a melhor solução para o seu caso, priorizando resultados efetivos e céleres.",
    icone: "CheckCircle2",
  },
];

/**
 * Equipe — PLACEHOLDERS.
 * Substitua nomes, OAB, fotos e descrições pelos dados reais dos advogados.
 */
export type MembroEquipe = {
  id: string;
  nome: string;
  oab: string;
  cargo: string;
  descricao: string;
  foto: string;
  linkedin?: string;
};

export const equipe: MembroEquipe[] = [
  {
    id: "1",
    nome: "Dr. Ricardo Vasconcelos",
    oab: "OAB/SP 123.456",
    cargo: "Sócio Fundador — Direito Empresarial",
    descricao:
      "Mais de 15 anos de atuação em direito empresarial e societário, com experiência em fusões, aquisições e governança corporativa.",
    foto: "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=500",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "2",
    nome: "Dra. Camila Mendes",
    oab: "OAB/SP 234.567",
    cargo: "Sócia — Direito de Família e Sucessões",
    descricao:
      "Especialista em direito de família e sucessões, com atuação em divórcios consensuais, inventários e planejamento sucessório.",
    foto: "https://images.pexels.com/photos/27015641/pexels-photo-27015641.jpeg?auto=compress&cs=tinysrgb&w=500",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "3",
    nome: "Dr. Felipe Andrade",
    oab: "OAB/SP 345.678",
    cargo: "Advogado Sênior — Direito Trabalhista",
    descricao:
      "Atuação consultiva e contenciosa em direito do trabalho, com foco em conformidade empresarial e resolução de litígios.",
    foto: "https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&w=500",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "4",
    nome: "Dra. Juliana Rocha",
    oab: "OAB/SP 456.789",
    cargo: "Advogada — Direito Civil e do Consumidor",
    descricao:
      "Especialista em responsabilidade civil e direito do consumidor, com ampla experiência em litígios e negociação.",
    foto: "https://images.pexels.com/photos/36819473/pexels-photo-36819473.jpeg?auto=compress&cs=tinysrgb&w=500",
    linkedin: "https://www.linkedin.com/",
  },
];

/**
 * Depoimentos — PLACEHOLDERS.
 * IMPORTANTE: não inventar depoimentos reais. Substitua por avaliações reais
 * e autorizadas pelos clientes.
 */
export const depoimentos = [
  {
    texto: "[Depoimento real do cliente — substitua por uma avaliação autorizada.]",
    autor: "[Nome do cliente]",
    cargo: "[Cargo / Empresa]",
  },
  {
    texto: "[Depoimento real do cliente — substitua por uma avaliação autorizada.]",
    autor: "[Nome do cliente]",
    cargo: "[Cargo / Empresa]",
  },
  {
    texto: "[Depoimento real do cliente — substitua por uma avaliação autorizada.]",
    autor: "[Nome do cliente]",
    cargo: "[Cargo / Empresa]",
  },
];

/**
 * Artigos do blog — conteúdo demonstrativo.
 * Estrutura preparada para futura integração com CMS ou banco de dados.
 */
export type Artigo = {
  id: string;
  titulo: string;
  categoria: string;
  data: string;
  resumo: string;
  imagem: string;
  slug: string;
};

export const artigos: Artigo[] = [
  {
    id: "1",
    titulo: "O que fazer ao receber uma notificação extrajudicial?",
    categoria: "Direito Civil",
    data: "12 Set 2026",
    resumo:
      "Receber uma notificação extrajudicial pode gerar dúvidas. Entenda os primeiros passos e como se posicionar juridicamente.",
    imagem: imagens.blog1,
    slug: "notificacao-extrajudicial",
  },
  {
    id: "2",
    titulo: "Principais cuidados jurídicos para empresas",
    categoria: "Direito Empresarial",
    data: "05 Set 2026",
    resumo:
      "Contratos, societário, trabalhista: conheça os pontos de atenção que toda empresa deve monitorar continuamente.",
    imagem: imagens.blog2,
    slug: "cuidados-juridicos-empresas",
  },
  {
    id: "3",
    titulo: "Direitos do consumidor em contratos de prestação de serviços",
    categoria: "Direito do Consumidor",
    data: "28 Ago 2026",
    resumo:
      "Saiba quais são os seus direitos ao contratar serviços e como identificar cláusulas abusivas nos contratos.",
    imagem: imagens.blog3,
    slug: "direitos-consumidor-prestacao-servicos",
  },
];

/**
 * Perguntas frequentes (FAQ).
 */
export const faq = [
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A primeira consulta é um encontro inicial no qual compreendemos sua situação, avaliamos os aspectos jurídicos do caso e orientamos sobre os próximos passos. Pode ser presencial ou online.",
  },
  {
    pergunta: "O atendimento pode ser realizado online?",
    resposta:
      "Sim. Oferecemos atendimento online por videoconferência para clientes em qualquer cidade, com a mesma qualidade e sigilo do atendimento presencial.",
  },
  {
    pergunta: "Quais documentos devo levar para a consulta?",
    resposta:
      "Depende da área, mas em geral recomenda-se levar documentos de identidade, CPF, comprovante de residência e todos os documentos relacionados ao caso (contratos, notificações, petições, etc.).",
  },
  {
    pergunta: "O escritório atende empresas?",
    resposta:
      "Sim. Atuamos com assessoria jurídica empresarial contínua e também em demandas pontuais, cobrindo áreas societária, trabalhista, contratual e de compliance.",
  },
  {
    pergunta: "Como entrar em contato com um advogado?",
    resposta:
      "Você pode nos contatar pelo formulário neste site, por telefone, e-mail ou WhatsApp. Nossa equipe retornará o contato em até um dia útil.",
  },
];

/**
 * Links do menu de navegação.
 */
export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Conteúdos", href: "#blog" },
  { label: "Contato", href: "#contato" },
];
