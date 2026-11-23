export interface ShowcaseItem {
	id: string;
	title: string;
	category: string;
	year: string;
	description: string;
	image: string;
}

export const NAV_LINKS = [
	{ label: 'Capabilities', href: '#capabilities' },
	{ label: 'About', href: '#about' },
	{ label: 'Brand & Social', href: '#brand-social' },
	{ label: 'UI/UX & Product', href: '#product-design' },
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

export const BRAND_SHOWCASE_ITEMS: ShowcaseItem[] = [
	{
		id: 'brand-poster',
		title: 'Brand Identity & Print Systems',
		category: 'Brand & Visual Design',
		year: '2026',
		description:
			'Editorial identity systems, bold Swiss-inspired typography, and campaign layouts engineered for high contrast and clarity.',
		image: '/images/brand-poster.jpg',
	},
	{
		id: 'angotic-pti',
		title: 'ANGOTIC 2026 Space Hackathon',
		category: 'Press & Recognition',
		year: '2026',
		description:
			'Featured in PTI Portal de T.I among the five winning startups at the ANGOTIC 2026 Space Hackathon.',
		image: '/9.jpg',
	},
	{
		id: 'jogos-80',
		title: 'Jogos 80 Magazine Feature',
		category: 'Editorial & Retrocomputing',
		year: '2025',
		description:
			'Two-page editorial profile highlighting retrocomputing, pixel art, and software craftsmanship in Angola.',
		image: '/12.jpg',
	},
	{
		id: 'agri-ia',
		title: 'AGRI IA — ANGOTIC Winner',
		category: 'Applied AI & Agriculture',
		year: '2025',
		description:
			'Award-winning spatial intelligence platform helping Angolan farmers monitor crops and make data-driven decisions.',
		image: '/11.jpg',
	},
	{
		id: 'semana-verde',
		title: 'Semana Verde da Juventude',
		category: 'Hackathon · Luanda',
		year: '2026',
		description:
			'Collaborative sustainability hackathon hosted in Luanda with EcoAngola and international partners.',
		image: '/4.jpg',
	},
	{
		id: 'world-space-week',
		title: 'World Space Week Angola',
		category: 'Geospatial & Satellites',
		year: '2026',
		description:
			'Earth observation and satellite platform presentation at Parque de Ciência e Tecnologia de Luanda.',
		image: '/5.jpg',
	},
	{
		id: 'ferramenta-decisao',
		title: 'Decision Support Platform',
		category: 'Soluções Inteligentes',
		year: '2025',
		description:
			'Live public demonstration of a satellite-backed decision support system for vulnerability mapping in Angola.',
		image: '/7.jpg',
	},
	{
		id: 'zanecom-talk',
		title: 'Tech Ecosystem Keynote',
		category: 'Public Speaking',
		year: '2025',
		description:
			'Stage talk on building resilient developer ecosystems and launching practical digital products.',
		image: '/10.jpg',
	},
	{
		id: 'podnerd-brand',
		title: 'Podnerd Community & Media',
		category: 'Media & Identity',
		year: '2025',
		description:
			'Podcast visual identity, apparel, and social graphics for Angola’s developer and nerd culture community.',
		image: '/3.jpg',
	},
	{
		id: 'bruno-interview',
		title: 'Live Developer Podcast',
		category: 'Community & Talks',
		year: '2025',
		description:
			'International live conversation sharing software engineering journeys and mobile/web product building.',
		image: '/6.jpg',
	},
	{
		id: 'dicas-workshop',
		title: 'Developer Career Workshop',
		category: 'Mentorship & Teaching',
		year: '2025',
		description:
			'Interactive session guiding aspiring engineers on practical problem-solving and portfolio creation.',
		image: '/8.jpg',
	},
	{
		id: 'angotic-stage',
		title: 'ANGOTIC Finalists Stage',
		category: 'Innovation Awards',
		year: '2026',
		description:
			'Closing ceremony on the main stage alongside mentors, jury members, and fellow startup founders.',
		image: '/2.jpg',
	},
];

export const PRODUCT_DESIGN_ITEMS: ShowcaseItem[] = [
	{
		id: 'ui-agritech',
		title: 'AgriCrop — Spatial AI Dashboard',
		category: 'UI/UX & Product Design',
		year: '2026',
		description:
			'Web and mobile decision-support interface combining NDVI satellite imagery, crop stress telemetry, and instant field alerts.',
		image: '/images/ui-agritech.jpg',
	},
	{
		id: 'ui-fintech',
		title: 'Spendly — Mobile Wallet & Payments',
		category: 'Mobile App Design',
		year: '2026',
		description:
			'Streamlined iOS & Android banking experience focused on one-tap peer transfers, clear balances, and calm visual hierarchy.',
		image: '/images/ui-fintech.jpg',
	},
	{
		id: 'ui-saas',
		title: 'Nexus — Workforce & Talent SaaS',
		category: 'Web & Companion App',
		year: '2025',
		description:
			'Modular enterprise dashboard and mobile companion app unifying team workflows, candidate funnels, and role discovery.',
		image: '/images/ui-saas.jpg',
	},
];
