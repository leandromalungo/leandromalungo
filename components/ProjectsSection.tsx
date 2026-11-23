'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import {
	GITHUB_PROFILE_URL,
	PORTFOLIO_PROJECTS,
	PROJECT_CATEGORIES,
	type ShowcaseItem,
} from '@/lib/portfolio-data';

interface ProjectsSectionProps {
	onBookNow: () => void;
}

const MIDDLE_HERO_CONTENT: Record<
	(typeof PROJECT_CATEGORIES)[number],
	{
		kicker: string;
		heading: string;
		description: string;
		image: string;
	}
> = {
	'Web & IA': {
		kicker: 'Engenharia & IA Aplicada',
		heading: 'Sistemas inteligentes pensados para escala e impacto real.',
		description:
			'Arquitectura web moderna, modelos geoespaciais e aplicações orientadas a dados que transformam desafios complexos em ferramentas rápidas e intuitivas.',
		image: '/5.jpg',
	},
	'UI/UX & Product': {
		kicker: 'Design & Experiência Digital',
		heading: 'Interfaces claras, funcionais e centradas nas pessoas.',
		description:
			'Do protótipo ao código em produção, cada ecrã é desenhado com rigor visual, tipografia precisa e interações fluidas em qualquer dispositivo.',
		image: '/images/brand-poster.jpg',
	},
	'Comunidade & Media': {
		kicker: 'Partilha & Ecossistema Tech',
		heading: 'Construindo cultura digital e tecnologia com propósito.',
		description:
			'Palestras, hackathons, publicações e colaborações que aproximam design, engenharia de software e inovação na comunidade tecnológica.',
		image: '/9.jpg',
	},
};

function ProjectCard({
	project,
	index,
}: {
	project: ShowcaseItem;
	index: number;
}) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{
				duration: 0.35,
				delay: Math.min(index * 0.05, 0.15),
				ease: [0.16, 1, 0.3, 1],
			}}
			className="group bg-white rounded-2xl border border-black/[0.07] overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-md"
		>
			<a
				href={project.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${project.title} — Ver mais no GitHub`}
				className="text-left flex flex-col h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
			>
				<div className="aspect-[16/10] w-full overflow-hidden bg-[#EDEDEB] relative">
					<img
						src={project.image}
						alt={project.title}
						referrerPolicy="no-referrer"
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					/>
				</div>

				<div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
					<div>
						<div className="flex items-center gap-2 text-[11.5px] text-neutral-500">
							<span>{project.categoryLabel}</span>
							<span aria-hidden="true">·</span>
							<span className="tabular-nums">{project.year}</span>
						</div>

						<h3 className="mt-1.5 text-[18px] font-semibold tracking-tight text-[#141414] group-hover:text-black">
							{project.title}
						</h3>

						<p className="mt-2 text-[13.5px] leading-relaxed text-[#525252] line-clamp-2">
							{project.description}
						</p>
					</div>

					<div className="mt-5 pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-[12.5px] font-medium text-[#141414]">
						<span className="inline-flex items-center gap-1.5">
							<Github className="w-3.5 h-3.5" />
							<span>Ver mais no GitHub</span>
						</span>
						<ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</div>
				</div>
			</a>
		</motion.article>
	);
}

export default function ProjectsSection({ onBookNow }: ProjectsSectionProps) {
	const [activeCategory, setActiveCategory] =
		useState<(typeof PROJECT_CATEGORIES)[number]>('Web & IA');

	const filteredProjects = PORTFOLIO_PROJECTS.filter(
		(item) => item.category === activeCategory
	);

	const topProjects = filteredProjects.slice(0, 2);
	const bottomProjects = filteredProjects.slice(2);
	const middleHero = MIDDLE_HERO_CONTENT[activeCategory];

	return (
		<section
			id="projectos"
			className="bg-[#FAFAFA] py-14 sm:py-20 lg:py-24 border-y border-black/[0.06] scroll-mt-16"
		>
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				{/* Header Row: Kicker + Title + Filter Tabs (no "Todos") */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
							<span className="text-[12.5px] font-medium text-[#525252]">
								Projectos
							</span>
						</div>

						<h2 className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.12] text-[#141414] text-balance max-w-xl">
							Projectos selecionados,
							<br className="hidden sm:inline" /> criados com precisão.
						</h2>
					</div>

					{/* Interactive Category Filter Control */}
					<div
						role="tablist"
						aria-label="Filtrar projectos por categoria"
						className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-black/[0.08] self-start lg:self-auto"
					>
						{PROJECT_CATEGORIES.map((category) => {
							const isActive = activeCategory === category;
							return (
								<button
									key={category}
									type="button"
									role="tab"
									aria-selected={isActive}
									onClick={() => setActiveCategory(category)}
									className={`px-3.5 py-2 text-[12px] font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
										isActive
											? 'bg-[#141414] text-white'
											: 'text-[#525252] hover:text-[#141414] hover:bg-neutral-100'
									}`}
								>
									{category}
								</button>
							);
						})}
					</div>
				</div>

				{/* Top Row of Projects */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
					{topProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				{/* Middle Hero Banner with Dark Overlay, Heading & Paragraph Description */}
				<motion.div
					key={activeCategory}
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-40px' }}
					transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
					className="my-6 sm:my-8 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] flex items-center bg-[#14161C]"
				>
					<img
						src={middleHero.image}
						alt={middleHero.heading}
						referrerPolicy="no-referrer"
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/68 to-black/30"
					/>

					<div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl">
						<div className="flex items-center gap-3 mb-3">
							<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
							<span className="text-[12px] sm:text-[12.5px] font-medium text-white/90">
								{middleHero.kicker}
							</span>
						</div>

						<h3 className="text-[clamp(1.5rem,3.2vw,2.35rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-white text-balance">
							{middleHero.heading}
						</h3>

						<p className="mt-3 text-[13.5px] sm:text-[15px] leading-[1.6] text-white/85 max-w-xl">
							{middleHero.description}
						</p>

						<div className="mt-6">
							<a
								href={GITHUB_PROFILE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#141414] text-[12.5px] font-medium px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
							>
								<Github className="w-4 h-4" />
								<span>Explorar no GitHub</span>
								<ArrowUpRight className="w-3.5 h-3.5" />
							</a>
						</div>
					</div>
				</motion.div>

				{/* Bottom Row of Projects */}
				{bottomProjects.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
						{bottomProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				)}

				{/* Bottom Action Strip */}
				<div className="mt-10 sm:mt-12 rounded-2xl bg-white border border-black/[0.07] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
					<div>
						<h3 className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-[#141414]">
							Explore todos os repositórios ou inicie um projecto
						</h3>
						<p className="mt-1 text-[13.5px] text-[#525252]">
							Código aberto em TypeScript, Next.js, Kotlin, Spring e IA aplicada.
						</p>
					</div>

					<div className="flex items-center gap-3 flex-wrap">
						<a
							href={GITHUB_PROFILE_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#141414] border border-black/15 text-[13px] font-medium px-5 py-3 rounded-full transition-colors whitespace-nowrap shrink-0"
						>
							<Github className="w-4 h-4" />
							<span>GitHub (@leandromalungo)</span>
						</a>

						<button
							type="button"
							onClick={onBookNow}
							className="inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-neutral-800 text-white text-[13px] font-medium px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0"
						>
							<span>Book Now</span>
							<ArrowUpRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
