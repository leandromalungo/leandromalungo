'use client';

import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function AboutSection() {
	return (
		<section id="about" className="bg-white py-20 md:py-24 scroll-mt-16">
			<div className="max-w-[1120px] mx-auto px-6">
				{/* Section Kicker */}
				<div className="flex items-center gap-3 mb-8">
					<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
					<span className="text-[12.5px] font-medium text-[#525252]">
						About Me
					</span>
				</div>

				{/* Asymmetric 2-Column Split */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
					{/* Left Column: Graphic Orange Swoosh + B&W Studio Portrait */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-6"
					>
						<div className="relative aspect-[4/3.65] rounded-2xl overflow-hidden bg-[#EDEDEB]">
							{/* Vivid Orange Graphic Ribbon Backdrop */}
							<svg
								viewBox="0 0 600 540"
								preserveAspectRatio="none"
								aria-hidden="true"
								className="absolute inset-0 w-full h-full pointer-events-none"
							>
								<path
									d="M-30,420 C60,340 90,220 220,165 C345,112 370,12 520,-20 L630,-20 L630,360 C520,275 430,270 330,330 C215,398 160,510 55,560 L-30,560 Z"
									fill="#F5820D"
								/>
							</svg>

							{/* Studio Portrait of Leandro Malungo in crisp grayscale */}
							<div className="relative z-10 w-full h-full flex items-end justify-center">
								<img
									src="/1.jpg"
									alt="Leandro Malungo — Software Developer & Product Designer"
									referrerPolicy="no-referrer"
									className="w-[74%] h-[92%] object-cover object-top grayscale contrast-125 rounded-t-[140px] shadow-xs"
								/>
							</div>

							{/* Architectural diagonal light glass frame overlay in bottom right */}
							<div
								aria-hidden="true"
								className="absolute -bottom-8 -right-8 w-52 h-44 bg-white/55 backdrop-blur-[2px] border border-white/70 rotate-[-14deg] rounded-lg z-20 pointer-events-none"
							/>
						</div>
					</motion.div>

					{/* Right Column: Headline, Bio & 3-Column Metrics */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-6"
					>
						<h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.025em] leading-[1.16] text-[#141414]">
							Design-minded.
							<br />
							Developer-built.
							<br />
							<span className="inline-block bg-[#FDE7C8] px-2.5 py-0.5 rounded-sm mt-1">
								Detailed-obsessed.
							</span>
						</h2>

						<p className="mt-5 text-[14px] leading-[1.65] text-[#525252] max-w-[440px]">
							I&apos;m Leandro Malungo, a multidisciplinary designer and software
							developer from Luanda, Angola. I combine thoughtful UI / UX with
							functional technology and applied AI to build products that solve
							real problems.
						</p>

						{/* 3-Column Metrics Row */}
						<div className="mt-8 grid grid-cols-3 gap-6 max-w-[440px] items-start">
							<div>
								<div className="text-[24px] font-semibold text-[#141414] tabular-nums leading-none">
									4+
								</div>
								<div className="text-[11px] text-[#666666] mt-2">
									Years of creating
								</div>
							</div>

							<div>
								<div className="text-[24px] font-semibold text-[#141414] tabular-nums leading-none">
									12+
								</div>
								<div className="text-[11px] text-[#666666] mt-2">Projects</div>
							</div>

							<div>
								<div className="text-[#141414] leading-none">
									<Globe className="w-6 h-6 stroke-[1.75]" />
								</div>
								<div className="text-[11px] text-[#666666] mt-2 leading-snug">
									Angola, Available worldwide.
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
