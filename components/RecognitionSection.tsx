'use client';

import { motion } from 'motion/react';

const highlights = [
	{
		type: 'Prémio · 2026',
		title: 'Hackathon de Startups Espaciais — ANGOTIC',
		description: 'Vencedor da Trilha 2 com a Agri IA, uma solução que combina inteligência artificial e observação da Terra para apoiar a agricultura.',
	},
	{
		type: 'Prémio · 2026',
		title: 'Semana Verde da Juventude — Ciência & STEM',
		description: 'Distinção conquistada em equipa no hackathon nacional, com o desenvolvimento de uma solução tecnológica orientada para desafios ambientais e de sustentabilidade.',
	},
	{
		type: 'Programa de aceleração · 2027',
		title: 'DISTRICT by Aerospace Valley',
		description: 'Participação da HAGRIA Labs no programa de aceleração e imersão internacional em Toulouse, França, na sequência do reconhecimento da Agri IA no ANGOTIC.',
	},
	{
		type: 'Programa · 2026',
		title: 'LISPA Jump Start — 3.ª edição',
		description: 'Selecção de um projecto para a terceira edição do programa de aceleração de ideias do ecossistema de inovação financeira angolano.',
	},
	{
		type: 'Destaque editorial · 2025',
		title: 'Revista Jogos 80',
		description: 'Participação numa edição especial sobre jogos clássicos e cultura retro, com reflexão sobre o contexto e a comunidade de retrogaming em Angola.',
	},
];

export default function RecognitionSection() {
	return (
		<section id="reconhecimentos" className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-4">Reconhecimentos e marcos</p>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
					<div className="lg:col-span-4">
						<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.04em] leading-[1.08]">Trabalho, colaboração e resultados.</h2>
						<p className="mt-5 text-sm sm:text-base leading-relaxed text-[#555]">Alguns marcos que assinalam o caminho percorrido em inovação, empreendedorismo e participação no ecossistema tecnológico.</p>
					</div>
					<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{highlights.map((item, index) => (
							<motion.article key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.04, 0.16) }} className="p-5 sm:p-6 border-t border-black/15 bg-[#FAFAF8]">
								<p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A45B16]">{item.type}</p>
								<h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-[#555]">{item.description}</p>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
