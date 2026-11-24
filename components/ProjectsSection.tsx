'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { GITHUB_PROFILE_URL, PORTFOLIO_PROJECTS, PROJECT_CATEGORIES, type ShowcaseItem } from '@/lib/portfolio-data';

interface ProjectsSectionProps { onBookNow: () => void; }

const CATEGORY_CONTENT: Record<(typeof PROJECT_CATEGORIES)[number], { kicker: string; heading: string; description: string; image: string }> = {
	'Web & IA': {
		kicker: 'Engenharia de software e IA',
		heading: 'Sistemas e produtos digitais orientados para problemas concretos.',
		description: 'Desenvolvimento web, integração de dados e inteligência artificial aplicada a contextos reais.',
		image: '/5.jpg',
	},
	'UI/UX & Product': {
		kicker: 'Produto e experiência',
		heading: 'Experiências digitais claras, acessíveis e funcionais.',
		description: 'Da compreensão das necessidades à implementação de interfaces consistentes e responsivas.',
		image: '/images/brand-poster.jpg',
	},
	'Comunidade & Media': {
		kicker: 'Comunidade e comunicação',
		heading: 'Criar espaços para partilhar conhecimento e ampliar oportunidades.',
		description: 'Iniciativas, conversas, conteúdos e colaboração para fortalecer o ecossistema tecnológico.',
		image: '/9.jpg',
	},
};

function ProjectCard({ project, index }: { project: ShowcaseItem; index: number }) {
	return (
		<motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.15) }} className="group bg-white rounded-2xl border border-black/[0.07] overflow-hidden flex flex-col">
			<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — abrir projecto`} className="text-left flex flex-col h-full">
				<div className="aspect-[16/10] w-full overflow-hidden bg-[#EDEDEB]"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div>
				<div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
					<div>
						<div className="flex items-center gap-2 text-[11px] text-neutral-500"><span>{project.categoryLabel}</span><span>·</span><span>{project.year}</span></div>
						<h3 className="mt-2 text-lg font-semibold tracking-tight text-[#141414]">{project.title}</h3>
						<p className="mt-2 text-sm leading-relaxed text-[#555]">{project.description}</p>
					</div>
					<div className="mt-5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs font-medium text-[#141414]"><span>Explorar projecto</span><ArrowUpRight className="w-4 h-4" /></div>
				</div>
			</a>
		</motion.article>
	);
}

export default function ProjectsSection({ onBookNow }: ProjectsSectionProps) {
	const [activeCategory, setActiveCategory] = useState<(typeof PROJECT_CATEGORIES)[number]>('Web & IA');
	const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
	const content = CATEGORY_CONTENT[activeCategory];

	return (
		<section id="projectos" className="bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 border-y border-black/[0.06] scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-4">Trabalho seleccionado</p>
						<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.04em] leading-[1.08] text-[#141414] max-w-2xl">Projectos, produtos e iniciativas.</h2>
						<p className="mt-4 text-sm sm:text-base text-[#555] max-w-xl">Uma selecção de trabalho técnico, experiências de produto e iniciativas de comunidade.</p>
					</div>
					<div role="tablist" aria-label="Filtrar projectos" className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-black/[0.08] self-start">
						{PROJECT_CATEGORIES.map((category) => <button key={category} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors ${activeCategory === category ? 'bg-[#141414] text-white' : 'text-[#525252] hover:bg-neutral-100'}`}>{category === 'Web & IA' ? 'Engenharia & IA' : category === 'UI/UX & Product' ? 'Produtos Digitais' : 'Comunidade & Media'}</button>)}
					</div>
				</div>
				<motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[310px] flex items-center bg-[#14161C] mb-7">
					<img src={content.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
					<div className="relative z-10 p-7 sm:p-10 max-w-2xl">
						<p className="text-xs text-white/80 mb-3">{content.kicker}</p>
						<h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">{content.heading}</h3>
						<p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">{content.description}</p>
					</div>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">{filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
				<div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
					<div><h3 className="text-lg font-semibold">Queres conhecer mais do meu trabalho?</h3><p className="mt-1 text-sm text-[#555]">Explora outros repositórios e experiências de desenvolvimento.</p></div>
					<div className="flex flex-wrap gap-3"><a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-black/15 bg-white px-5 py-3 rounded-full text-sm font-medium"><Github className="w-4 h-4" /> GitHub</a><button type="button" onClick={onBookNow} className="inline-flex items-center gap-2 bg-[#141414] text-white px-5 py-3 rounded-full text-sm font-medium">Falar sobre uma ideia <ArrowUpRight className="w-4 h-4" /></button></div>
				</div>
			</div>
		</section>
	);
}
