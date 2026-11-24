'use client';

import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { EMAIL_ADDRESS, GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '@/lib/portfolio-data';
import { scrollToSection } from './Navbar';

interface HeroSectionProps {
	onBookCall: () => void;
	onSelectHighlight: (item: {
		title: string;
		categoryLabel: string;
		description: string;
		image: string;
	}) => void;
}

export default function HeroSection({ onBookCall, onSelectHighlight }: HeroSectionProps) {
	return (
		<section id="hero" className="bg-[#F7F7F5] scroll-mt-16">
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-7"
					>
						<p className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#A45B16] mb-5">
							Desenvolvedor Front-end · Empreendedor de Tecnologia
						</p>
						<h1 className="text-[clamp(2.8rem,7vw,5.6rem)] font-semibold tracking-[-0.055em] leading-[0.98] text-[#141414] max-w-4xl">
							Construo tecnologia para resolver problemas reais.
						</h1>
						<p className="mt-7 text-base sm:text-lg leading-[1.7] text-[#525252] max-w-2xl">
							Sou Leandro Malungo, desenvolvedor de software angolano e estudante de Ciências da Computação. Trabalho na criação de produtos digitais, experiências web e soluções que cruzam engenharia de software, dados e inteligência artificial.
						</p>
						<p className="mt-3 text-sm sm:text-base leading-[1.7] text-[#666666] max-w-2xl">
							Para além do código, crio iniciativas, colaboro com comunidades e procuro transformar conhecimento tecnológico em oportunidades e impacto.
						</p>
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<button type="button" onClick={onBookCall} className="inline-flex items-center gap-3 bg-[#141414] hover:bg-neutral-800 text-white rounded-full px-6 py-3.5 text-sm font-medium transition-colors">
								Entrar em contacto <ArrowUpRight className="w-4 h-4" />
							</button>
							<button type="button" onClick={() => scrollToSection('#projectos')} className="inline-flex items-center gap-2 border border-black/15 hover:bg-white text-[#141414] rounded-full px-6 py-3.5 text-sm font-medium transition-colors">
								Ver projectos <ArrowDown className="w-4 h-4" />
							</button>
						</div>
						<div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-[#666666]">
							<a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Linkedin className="w-4 h-4" /> LinkedIn</a>
							<a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Github className="w-4 h-4" /> GitHub</a>
							<a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center gap-2 hover:text-black">Email</a>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.55, delay: 0.08 }}
						className="lg:col-span-5"
					>
						<div className="relative max-w-[470px] mx-auto lg:ml-auto">
							<div className="aspect-[4/5] overflow-hidden bg-[#E6E4DE] rounded-[2rem]">
								<img src="/1.jpg" alt="Leandro Malungo" className="w-full h-full object-cover object-top" />
							</div>
							<div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white px-5 py-4 max-w-[260px]">
								<p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Com base em</p>
								<p className="mt-1 text-lg font-semibold text-[#141414]">Luanda, Angola</p>
								<p className="text-sm text-neutral-600">A construir com visão global.</p>
							</div>
							<div className="absolute -top-4 -right-3 sm:-right-5 bg-[#E8D9C6] px-4 py-3 text-sm font-medium text-[#3A2C1F]">
								Engenharia · Inovação · Impacto
							</div>
						</div>
						<div className="mt-12 grid grid-cols-3 gap-3 text-center">
							<div><p className="text-xl font-semibold">2026</p><p className="text-[11px] text-neutral-500 mt-1">Reconhecimentos</p></div>
							<div><p className="text-xl font-semibold">Founder</p><p className="text-[11px] text-neutral-500 mt-1">HAGRIA Labs & ADN</p></div>
							<div><p className="text-xl font-semibold">Angola</p><p className="text-[11px] text-neutral-500 mt-1">Origem e actuação</p></div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
