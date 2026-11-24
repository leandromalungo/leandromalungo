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
export const LINKEDIN_PROFILE_URL = 'https://ao.linkedin.com/in/leandromalungo';
export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/leandro_malungo/';
export const FACEBOOK_PROFILE_URL = 'https://www.facebook.com/leandro.malungo.dev';
export const LINKTREE_URL = 'https://linktr.ee/leandromalungo';
export const EMAIL_ADDRESS = 'lmalungo@outlook.com';

export const NAV_LINKS = [
	{ label: 'Sobre', href: '#about' },
	{ label: 'Percurso', href: '#percurso' },
	{ label: 'Reconhecimentos', href: '#reconhecimentos' },
	{ label: 'Estudos de caso', href: '#trabalho' },
	{ label: 'Projectos', href: '#projectos' },
	{ label: 'Ideias', href: '#ideias' },
	{ label: 'Contacto', href: '#contact' },
] as const;

export const PARTNER_LOGOS = [
	{ name: 'GGPEN', src: '/logos/spaceweek.png' },
	{ name: 'HAGRIA Labs', src: '/logos/agri-ia.png' },
	{ name: 'ADN Developer', src: '/logos/podnerd.png' },
	{ name: 'EcoAngola', src: '/logos/ecoangola.png' },
	{ name: 'ANGOTIC', src: '/logos/angotic.png' },
] as const;

export const PROJECT_CATEGORIES = [
	'Web & IA',
	'UI/UX & Product',
	'Comunidade & Media',
] as const;

export const PORTFOLIO_PROJECTS: ShowcaseItem[] = [
	{
		id: 'agriia',
		title: 'Agri IA — HAGRIA Labs',
		category: 'Web & IA',
		categoryLabel: 'AgriTech · IA · Observação da Terra',
		year: '2026',
		description:
			'Produto de tecnologia agrícola que combina inteligência artificial, dados geoespaciais e observação da Terra para apoiar decisões no sector agrícola.',
		image: '/images/ui-agritech.jpg',
		githubUrl: 'https://github.com/leandromalungo/agriia-studio',
	},
	{
		id: 'nasa-space-apps-calumbo',
		title: 'NASA Space Apps Challenge — Calumbo',
		category: 'Web & IA',
		categoryLabel: 'Space Tech · Desenvolvimento Web',
		year: '2026',
		description:
			'Participação numa equipa multidisciplinar que desenvolveu uma solução tecnológica no âmbito do NASA International Space Apps Challenge em Calumbo.',
		image: '/5.jpg',
		githubUrl: 'https://github.com/leandromalungo/Hackathon-Nasa-Space-Apps-Calumbo-2026',
	},
	{
		id: 'ferramenta-decisao',
		title: 'Soluções geoespaciais e apoio à decisão',
		category: 'Web & IA',
		categoryLabel: 'Dados · Sistemas geoespaciais',
		year: '2026',
		description:
			'Exploração de ferramentas digitais que transformam dados territoriais e ambientais em informação útil para análise e tomada de decisão.',
		image: '/7.jpg',
		githubUrl: 'https://github.com/leandromalungo',
	},
	{
		id: 'salao-plus',
		title: 'Salão+',
		category: 'UI/UX & Product',
		categoryLabel: 'Produto Digital · Agendamento',
		year: '2026',
		description:
			'Plataforma de agendamento e gestão de serviços, concebida para organizar disponibilidade, marcações e operações de negócio.',
		image: '/images/ui-saas.jpg',
		githubUrl: 'https://github.com/leandromalungo/sal-o-plus',
	},
	{
		id: 'developer-tools',
		title: 'Comandos de Terminal',
		category: 'UI/UX & Product',
		categoryLabel: 'Ferramentas · Linux · Documentação',
		year: '2025',
		description:
			'Repositório de referência com comandos e apontamentos práticos para ambientes de desenvolvimento e administração de sistemas.',
		image: '/images/brand-poster.jpg',
		githubUrl: 'https://github.com/leandromalungo/Comandos-de-terminal',
	},
	{
		id: 'adn-developer',
		title: 'ADN Developer',
		category: 'Comunidade & Media',
		categoryLabel: 'Fundação · Comunidade tecnológica',
		year: '2025–',
		description:
			'Iniciativa fundada para aproximar estudantes, profissionais e entusiastas de tecnologia de oportunidades, conhecimento e colaboração no espaço lusófono.',
		image: '/3.jpg',
		githubUrl: 'https://adndeveloper.com',
	},
	{
		id: 'podnerd',
		title: 'PodNerd',
		category: 'Comunidade & Media',
		categoryLabel: 'Podcast · Comunicação tecnológica',
		year: '2025–',
		description:
			'Podcast dedicado a conversas com profissionais, criadores e empreendedores sobre desenvolvimento de software, inteligência artificial e carreiras tecnológicas.',
		image: '/10.jpg',
		githubUrl: 'https://www.linkedin.com/in/leandromalungo',
	},
	{
		id: 'editorial',
		title: 'Artigos e participação editorial',
		category: 'Comunidade & Media',
		categoryLabel: 'Investigação · Escrita · Tecnologia',
		year: '2026',
		description:
			'Contributos editoriais sobre tecnologia, inovação, jogos e desenvolvimento do ecossistema tecnológico em Angola.',
		image: '/12.jpg',
		githubUrl: 'https://quebrandocontrole.com.br/site/author/leandro-malungo/',
	},
];
