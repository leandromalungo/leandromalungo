export interface ShowcaseItem {
	id: string;
	title: string;
	category: 'Web & IA' | 'UI/UX & Product' | 'Comunidade & Media';
	categoryLabel: string;
	year: string;
	description: string;
	image: string;
	githubUrl: string;
}

export const GITHUB_PROFILE_URL = 'https://github.com/leandromalungo';

export const LINKEDIN_PROFILE_URL =
	'https://www.linkedin.com/in/leandromalungo';

export const NAV_LINKS = [
	{ label: 'Capabilities', href: '#capabilities' },
	{ label: 'About', href: '#about' },
	{ label: 'Projectos', href: '#projectos' },
	{ label: 'Contact', href: '#contact' },
] as const;

export const PARTNER_LOGOS = [
	{ name: 'ANGOTIC', src: '/logos/angotic.png' },
	{ name: 'Zanecom', src: '/logos/zanecom.png' },
	{ name: 'AGRI IA', src: '/logos/agri-ia.png' },
	{ name: 'ecoangola', src: '/logos/ecoangola.png' },
	{ name: 'SpaceWeek', src: '/logos/spaceweek.png' },
	{ name: 'Podnerd', src: '/logos/podnerd.png' },
	{ name: 'JOGOS 80', src: '/logos/jogos80.png' },
] as const;

export const PROJECT_CATEGORIES = [
	'Web & IA',
	'UI/UX & Product',
	'Comunidade & Media',
] as const;

export const PORTFOLIO_PROJECTS: ShowcaseItem[] = [
	{
		id: 'agriia-studio',
		title: 'Agriia Studio — HAGRIA Labs',
		category: 'Web & IA',
		categoryLabel: 'Applied AI · TypeScript',
		year: '2026',
		description:
			'Plataforma de agricultura de precisão, observação da Terra, análise NDVI e inteligência geoespacial desenvolvida pela HAGRIA Labs.',
		image: '/images/ui-agritech.jpg',
		githubUrl: 'https://github.com/leandromalungo/agriia-studio',
	},
	{
		id: 'nasa-space-apps-calumbo',
		title: 'NASA Space Apps Calumbo 2026',
		category: 'Web & IA',
		categoryLabel: 'Space Tech · TypeScript',
		year: '2026',
		description:
			'Solução web desenvolvida para o NASA International Space Apps Challenge em Calumbo, unindo dados espaciais e impacto local.',
		image: '/5.jpg',
		githubUrl:
			'https://github.com/leandromalungo/Hackathon-Nasa-Space-Apps-Calumbo-2026',
	},
	{
		id: 'agri-ia-angotic',
		title: 'AGRI IA — Vencedor ANGOTIC',
		category: 'Web & IA',
		categoryLabel: 'Startup Espacial · Kotlin & IA',
		year: '2025',
		description:
			'Projeto premiado no Hackathon de Startups Espaciais do ANGOTIC, apoiando produtores agrícolas com inteligência artificial e dados de satélite.',
		image: '/11.jpg',
		githubUrl: 'https://github.com/leandromalungo/agriia-studio',
	},
	{
		id: 'ferramenta-decisao',
		title: 'Ferramenta de Apoio à Decisão',
		category: 'Web & IA',
		categoryLabel: 'Geoespacial · Soluções Inteligentes',
		year: '2025',
		description:
			'Demonstração pública de sistema de apoio à decisão baseado em observação por satélite para mapeamento de vulnerabilidades em Angola.',
		image: '/7.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
	{
		id: 'sal-o-plus',
		title: 'Sal-o-Plus Platform',
		category: 'UI/UX & Product',
		categoryLabel: 'Web App · TypeScript',
		year: '2026',
		description:
			'Aplicação web moderna estruturada com TypeScript e arquitetura modular focada em experiência do utilizador e escalabilidade.',
		image: '/images/ui-saas.jpg',
		githubUrl: 'https://github.com/leandromalungo/sal-o-plus',
	},
	{
		id: 'leandromalungo-3d',
		title: 'Portfólio 3D Interativo',
		category: 'UI/UX & Product',
		categoryLabel: 'Next.js · Three.js & UI',
		year: '2026',
		description:
			'Experiência web imersiva com galeria espacial em WebGL, shaders personalizados e design editorial de alta precisão.',
		image: '/10.jpg',
		githubUrl: 'https://github.com/leandromalungo/leandromalungo',
	},
	{
		id: 'spendly-fintech',
		title: 'Mobile Fintech & Wallet UI',
		category: 'UI/UX & Product',
		categoryLabel: 'Mobile UI/UX · Product Design',
		year: '2026',
		description:
			'Conceito de interface mobile para pagamentos instantâneos e carteira digital com foco em clareza financeira.',
		image: '/images/ui-fintech.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
	{
		id: 'comandos-terminal',
		title: 'Comandos de Terminal & DevOps',
		category: 'UI/UX & Product',
		categoryLabel: 'Developer Tools · Documentação',
		year: '2025',
		description:
			'Repositório público organizado por pastas com soluções práticas de terminal, Linux e configurações de desenvolvimento.',
		image: '/images/brand-poster.jpg',
		githubUrl: 'https://github.com/leandromalungo/Comandos-de-terminal',
	},
	{
		id: 'angotic-pti-2026',
		title: 'ANGOTIC 2026 — Destaque PTI',
		category: 'Comunidade & Media',
		categoryLabel: 'Imprensa · Hackathon Espacial',
		year: '2026',
		description:
			'Matéria no PTI Portal de T.I destacando as cinco startups vencedoras do hackathon espacial do ANGOTIC 2026 em Luanda.',
		image: '/9.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
	{
		id: 'jogos-80-magazine',
		title: 'Revista Jogos 80 — Nostálgicos Tardios',
		category: 'Comunidade & Media',
		categoryLabel: 'Editorial · Retrocomputação',
		year: '2025',
		description:
			'Reportagem especial na Revista Jogos 80 sobre retrocomputação, MSX, pixel art e preservação de jogos em Angola.',
		image: '/12.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
	{
		id: 'semana-verde',
		title: 'Semana Verde da Juventude',
		category: 'Comunidade & Media',
		categoryLabel: 'Hackathon · EcoAngola',
		year: '2026',
		description:
			'Participação no Hackathon da Semana Verde da Juventude em Luanda desenvolvendo soluções tecnológicas sustentáveis.',
		image: '/4.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
	{
		id: 'podnerd-community',
		title: 'Podnerd & Comunidade Tech',
		category: 'Comunidade & Media',
		categoryLabel: 'Comunidade · Talks & Media',
		year: '2025',
		description:
			'Produção visual, palestras e conversas ao vivo sobre engenharia de software, jogos indie e carreira tech em Angola.',
		image: '/3.jpg',
		githubUrl: GITHUB_PROFILE_URL,
	},
];
