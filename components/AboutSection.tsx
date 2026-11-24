'use client';

import { motion } from 'motion/react';

export default function AboutSection() {
	return (
		<section id="about" className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<div className="flex items-center gap-3 mb-8">
					<span className="w-7 h-[2px] bg-[#B96B22]" />
					<span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Sobre mim</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
					<motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-5">
						<div className="aspect-[4/4.5] max-w-[440px] mx-auto md:mx-0 overflow-hidden bg-[#EDEDEB] rounded-2xl">
							<img src="/1.jpg" alt="Leandro Malungo, desenvolvedor de software e empreendedor tecnológico" className="w-full h-full object-cover object-top" />
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="md:col-span-7">
						<h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-semibold tracking-[-0.04em] leading-[1.08] text-[#141414]">
							Tecnologia com intenção. <span className="text-[#A45B16]">Conhecimento com impacto.</span>
						</h2>
						<div className="mt-6 space-y-4 text-[15px] sm:text-base leading-[1.75] text-[#555555]">
							<p>Sou Leandro Malungo, desenvolvedor de software de Luanda, Angola. O meu trabalho está centrado na concepção e desenvolvimento de produtos digitais, com particular interesse em engenharia front-end, arquitectura de aplicações, inteligência artificial aplicada e soluções orientadas por dados.</p>
							<p>Gosto de acompanhar um produto desde a compreensão do problema e definição da experiência até à implementação técnica. Procuro escrever software claro, sustentável e útil — tecnologia que funcione no contexto real das pessoas e organizações que a utilizam.</p>
							<p>Em paralelo à actividade técnica, envolvo-me na criação de iniciativas e comunidades, na comunicação de conhecimento e em projectos que aproximam tecnologia, educação, empreendedorismo e desenvolvimento social.</p>
							<p>Actualmente, frequento a licenciatura em Ciências da Computação e continuo a aprofundar conhecimentos em desenvolvimento de software, inteligência artificial e sistemas.</p>
						</div>
						<div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-2 sm:grid-cols-3 gap-5">
							<div><p className="text-sm font-semibold text-[#141414]">Engenharia</p><p className="mt-1 text-xs text-neutral-500">Software e produtos digitais</p></div>
							<div><p className="text-sm font-semibold text-[#141414]">Investigação</p><p className="mt-1 text-xs text-neutral-500">IA, dados e novas tecnologias</p></div>
							<div><p className="text-sm font-semibold text-[#141414]">Comunidade</p><p className="mt-1 text-xs text-neutral-500">Liderança e partilha</p></div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
