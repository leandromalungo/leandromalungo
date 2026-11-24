'use client';

import { motion } from 'motion/react';

const experiences = [
	{
		role: 'Fundador · Desenvolvimento de Produto',
		organization: 'HAGRIA Labs',
		description: 'Lidero a concepção e o desenvolvimento de soluções tecnológicas, com foco em software, inteligência artificial e dados geoespaciais. O trabalho inclui transformar necessidades concretas em produtos digitais e coordenar a evolução técnica de iniciativas como a Agri IA.',
	},
	{
		role: 'Fundador',
		organization: 'ADN Developer',
		description: 'Criei uma iniciativa para conectar estudantes, programadores e profissionais de tecnologia a conhecimento, eventos, hackathons, bolsas e oportunidades no espaço lusófono.',
	},
	{
		role: 'Apresentador e Host',
		organization: 'PodNerd',
		description: 'Conduzo conversas com profissionais, empreendedores e criadores sobre desenvolvimento de software, inteligência artificial, inovação e percursos de carreira na tecnologia.',
	},
	{
		role: 'Embaixador',
		organization: 'GGPEN — Gabinete de Gestão do Programa Espacial Nacional',
		description: 'Represento e ajudo a aproximar jovens do programa espacial nacional, contribuindo para a divulgação de oportunidades e para a valorização da tecnologia e inovação espacial em Angola.',
	},
	{
		role: 'Membro',
		organization: 'Global Shapers Community — Luanda Hub',
		description: 'Colaboro com jovens líderes em iniciativas de desenvolvimento comunitário, educação, participação juvenil e impacto social.',
	},
	{
		role: 'Voluntário na área tecnológica',
		organization: 'EcoAngola',
		description: 'Contribuo com competências de desenvolvimento de software para iniciativas ambientais e soluções digitais que apoiam educação, comunicação e participação comunitária.',
	},
];

export default function JourneySection() {
	return (
		<section id="percurso" className="bg-[#F7F7F5] py-16 sm:py-20 lg:py-24 scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-4">Percurso profissional e comunitário</p>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<div className="lg:col-span-4">
						<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.04em] leading-[1.08]">Tecnologia também se constrói com pessoas.</h2>
						<p className="mt-5 text-sm sm:text-base leading-relaxed text-[#555]">O meu percurso cruza desenvolvimento de produtos, iniciativa empreendedora, comunicação de conhecimento e participação em comunidades.</p>
						<div className="mt-9 border-t border-black/10 pt-6">
							<p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Formação e aprendizagem contínua</p>
							<p className="mt-3 text-sm leading-relaxed text-[#555]">Tenho aprofundado conhecimentos em ciência da computação, inteligência artificial e desenvolvimento de software através de cursos e estudo prático.</p>
						</div>
						<div className="mt-7 border-t border-black/10 pt-6">
							<p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Cursos e formações</p>
							<ul className="mt-3 space-y-2 text-sm text-[#555]">
								<li>CS50x — Introduction to Computer Science, HarvardX</li>
								<li>CS50 AI — Artificial Intelligence with Python, HarvardX</li>
								<li>Formações em análise de dados, NLP, assistentes virtuais e UX Design — Blip</li>
							</ul>
						</div>
					</div>
					<div className="lg:col-span-8">
						<div className="border-l border-black/15 pl-6 sm:pl-8 space-y-8">
							{experiences.map((item, index) => (
								<motion.article key={item.organization} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.04, 0.2) }} className="relative">
									<span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#A45B16] ring-4 ring-[#F7F7F5]" />
									<p className="text-xs font-medium text-[#A45B16]">{item.role}</p>
									<h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-[#141414]">{item.organization}</h3>
									<p className="mt-2 text-sm leading-[1.7] text-[#555]">{item.description}</p>
								</motion.article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
