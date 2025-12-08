/**
 * Constantes da aplicação Mediari Consultoria
 * Centraliza informações importantes da empresa
 */

export const CONTACT_INFO = {
  phone: {
    display: '11 4227-3008',
    link: 'tel:+551142273008',
  },
  email: {
    display: 'contato@mediari.com.br',
    link: 'mailto:contato@mediari.com.br',
  },
  address: 'São Paulo, SP - Brasil',
  socialMedia: {
    instagram: {
      display: '@mediari.consultoria',
      link: 'https://www.instagram.com/mediari.consultoria',
    },
    linkedin: {
      display: 'Mediari Consultoria',
      link: 'https://www.linkedin.com/company/mediari-consultoria-empresarial-ltda',
    },
  },
  whatsapp: [
    { display: '11 91665-8175', link: 'https://wa.me/5511916658175' },
    { display: '11 91045-6115', link: 'https://wa.me/5511910456115' },
    { display: '11 91868-0351', link: 'https://wa.me/5511918680351' },
  ],
} as const;

export const COMPANY_INFO = {
  name: 'Mediari Consultoria',
  fullName: 'Mediari Consultoria Empresarial LTDA',
  description:
    'Consultoria jurídica especializada para empresas e pessoas físicas',
  foundedYear: 2018,
  teamSize: '60+',
  website: 'https://www.mediariconsultoria.com.br',
} as const;

export const SERVICES = {
  main: ['civil', 'criminal', 'contracts', 'consulting'],
  secondary: ['consumer', 'banking', 'labor'],
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s - Mediari Consultoria',
  description:
    'Consultoria jurídica especializada para empresas e pessoas físicas. Soluções em Direito Bancário, do Consumidor, Trabalhista, Civil e Empresarial. Atendimento em São Paulo e região.',
  keywords: [
    'consultoria jurídica',
    'direito empresarial',
    'direito bancário',
    'direito do consumidor',
    'direito trabalhista',
    'direito civil',
    'direito criminal',
    'contratos',
    'assessoria jurídica',
    'advocacia',
    'advogados em São Paulo',
    'consultoria para empresas',
    'defesa do consumidor',
    'revisão de contratos',
    'juros abusivos',
    'negociação de dívidas',
    'busca e apreensão',
    'indenização',
    'danos morais',
    'danos materiais',
    'compliance',
    'LGPD',
    'mediação',
    'arbitragem',
    'contencioso',
    'preventivo',
    'consultoria legal',
    'escritório de advocacia',
    'advogados especialistas',
    'São Paulo',
  ],
} as const;
