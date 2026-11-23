'use client';

import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function AboutSection() {
	return (
		<section
			id="about"
			className="bg-white py-14 sm:py-20 lg:py-24 scroll-mt-16"
		>
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				{/* Section Kicker */}
				<div className="flex items-center gap-3 mb-7 sm:mb-8">
					<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
					<span className="text-[12.5px] font-medium text-[#525252]">
						About Me
					</span>
				</div>

				{/* Asymmetric 2-Column Split */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
					{/* Left Column: Graphic Orange Swoosh + B&W Studio Portrait */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-6"
					>
						<div className="relative max-w-[520px] mx-auto md:max-w-none aspect-[4/3.65] rounded-2xl overflow-hidden bg-[#EDEDEB]">
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
									alt="Leandro Malungo — Full-Stack Software Developer"
									referrerPolicy="no-referrer"
									className="w-[74%] h-[92%] object-cover object-top grayscale contrast-125 rounded-t-[140px] shadow-xs"
								/>
							</div>

							{/* Architectural diagonal light glass frame overlay in bottom right */}
							<div
								aria-hidden="true"
								className="absolute -bottom-8 -right-8 w-44 sm:w-52 h-36 sm:h-44 bg-white/55 backdrop-blur-[2px] border border-white/70 rotate-[-14deg] rounded-lg z-20 pointer-events-none"
							/>
						</div>
					</motion.div>

					{/* Right Column: Headline, Authentic Bio & 3-Column Metrics */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-6"
					>
						<h2 className="text-[clamp(1.85rem,3.6vw,2.625rem)] font-semibold tracking-[-0.025em] leading-[1.16] text-[#141414]">
							Design-minded.
							<br />
							Developer-built.
							<br />
							<span className="inline-block bg-[#FDE7C8] px-2.5 py-0.5 rounded-sm mt-1">
								Detailed-obsessed.
							</span>
						</h2>

						<p className="mt-5 text-[14px] sm:text-[14.5px] leading-[1.65] text-[#525252] max-w-[460px]">
							I&apos;m Leandro Malungo, a multidisciplinary product designer and
							full-stack software developer based in Luanda, Angola. I combine
							thoughtful UI / UX with clean architecture and modern web,
							mobile, and AI technologies to craft reliable digital products
							that solve real-world problems.
						</p>

						{/* 3-Column Metrics Row */}
						<div className="mt-7 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-[440px] items-start">
							<div>
								<div className="text-[20px] sm:text-[24px] font-semibold text-[#141414] tabular-nums leading-none">
									4+
								</div>
								<div className="text-[11px] text-[#666666] mt-2">
									Years coding
								</div>
							</div>

							<div>
								<div className="text-[20px] sm:text-[24px] font-semibold text-[#141414] tabular-nums leading-none">
									12+
								</div>
								<div className="text-[11px] text-[#666666] mt-2">
									Projects &amp; Repos
								</div>
							</div>

							<div>
								<div className="text-[#141414] leading-none">
									<Globe className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
								</div>
								<div className="text-[11px] text-[#666666] mt-2 leading-snug">
									Luanda, Angola · Worldwide
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
