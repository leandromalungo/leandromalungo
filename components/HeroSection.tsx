'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PARTNER_LOGOS } from '@/lib/portfolio-data';
import { scrollToSection } from './Navbar';

interface HeroSectionProps {
	onBookCall: () => void;
	onSelectHighlight: (item: {
		title: string;
		category: string;
		description: string;
		image: string;
	}) => void;
}

export default function HeroSection({
	onBookCall,
	onSelectHighlight,
}: HeroSectionProps) {
	return (
		<section id="hero" className="bg-[#F7F7F5] scroll-mt-16">
			{/* Main Hero Split */}
			<div className="max-w-[1240px] mx-auto px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
					{/* Left Column: Oversized Typographic Hierarchy & CTA */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
						className="lg:col-span-5 flex flex-col justify-between"
					>
						<h1 className="text-[44px] sm:text-[54px] lg:text-[62px] font-medium tracking-[-0.035em] leading-[1.03] text-[#141414] text-balance max-w-md">
							Build your
							<br />
							dream product
							<br />
							today.
						</h1>

						<div className="mt-10 lg:mt-28">
							<p className="text-[14px] leading-[1.55] text-[#4A4A4A] max-w-[330px]">
								Unlock success with thoughtful UI/UX, full-stack engineering, and
								applied AI. Build now for unparalleled results.
							</p>

							{/* CTA Pill + Overlapping Portrait Avatars */}
							<div className="mt-6 flex items-center gap-4 flex-wrap">
								<button
									type="button"
									onClick={onBookCall}
									className="inline-flex items-center gap-4 bg-[#141414] hover:bg-neutral-800 text-white rounded-full pl-5 pr-2 py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
								>
									<span className="text-[13px] font-medium">
										Hiring? Book a call
									</span>
									<span className="w-8 h-8 rounded-full bg-white text-[#141414] flex items-center justify-center">
										<ArrowRight className="w-4 h-4" />
									</span>
								</button>

								{/* Overlapping Avatar Cluster */}
								<button
									type="button"
									onClick={() => scrollToSection('#brand-social')}
									title="Explore featured projects and milestones"
									className="flex items-center -space-x-2.5 cursor-pointer group"
								>
									<img
										src="/1.jpg"
										alt="Leandro Malungo portrait"
										referrerPolicy="no-referrer"
										className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-[#F7F7F5]"
									/>
									<img
										src="/3.jpg"
										alt="Leandro Podnerd studio"
										referrerPolicy="no-referrer"
										className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-[#F7F7F5]"
									/>
									<img
										src="/10.jpg"
										alt="Leandro stage keynote"
										referrerPolicy="no-referrer"
										className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-[#F7F7F5]"
									/>
									<span className="w-9 h-9 rounded-full bg-[#ECECE8] group-hover:bg-[#E0E0DA] ring-2 ring-[#F7F7F5] flex items-center justify-center text-[10px] font-semibold text-[#141414] tabular-nums transition-colors">
										+12
									</span>
								</button>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Asymmetric 3-Column Bento Mosaic */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
						className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch"
					>
						{/* Bento Column 1 */}
						<div className="flex flex-col gap-3.5">
							{/* Top Photo Card */}
							<button
								type="button"
								onClick={() =>
									onSelectHighlight({
										title: 'Leandro Malungo',
										category: 'Full-Stack Developer',
										description:
											'Software developer based in Luanda, Angola. Building web, mobile, backend APIs, and applied AI products.',
										image: '/1.jpg',
									})
								}
								className="relative h-[225px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EAEBEE] to-[#D7D9DF] text-left group cursor-pointer"
							>
								<img
									src="/1.jpg"
									alt="Leandro Malungo — Full-Stack Developer"
									referrerPolicy="no-referrer"
									className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
								/>
								<div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 shadow-sm">
									<div className="flex items-center gap-1.5">
										<span className="text-[12px] font-semibold text-[#141414] leading-tight">
											Leandro
										</span>
										<span className="w-3.5 h-3.5 rounded-full bg-[#141414] text-white inline-flex items-center justify-center">
											<Check className="w-2.5 h-2.5 stroke-[3]" />
										</span>
									</div>
									<p className="text-[10.5px] text-neutral-500 leading-tight mt-0.5">
										Frontend &amp; Full-Stack
									</p>
								</div>
							</button>

							{/* Bottom Soft Lavender Card */}
							<div className="flex-1 min-h-[195px] rounded-2xl bg-[#DFD3F8] p-5 relative overflow-hidden flex flex-col justify-between">
								<div
									aria-hidden="true"
									className="absolute -bottom-10 -right-10 w-44 h-44 rotate-12 rounded-3xl bg-white/25 pointer-events-none"
								/>
								<h2 className="text-[19px] font-medium tracking-tight leading-[1.2] text-[#141414] relative z-10">
									Applied AI &amp;
									<br />
									Product Stack
								</h2>
								<p className="text-[11.5px] leading-[1.45] text-[#2F2B3A] mt-6 relative z-10">
									Web apps, mobile interfaces, backend services, and AI-driven
									tools engineered with clean code and clear communication.
								</p>
							</div>
						</div>

						{/* Bento Column 2 */}
						<div className="flex flex-col gap-3.5">
							{/* Top Soft Sage Mint Card */}
							<div className="min-h-[195px] rounded-2xl bg-[#E2F1DE] p-5 relative overflow-hidden flex flex-col justify-between">
								<div
									aria-hidden="true"
									className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#CBE7C4]/80 pointer-events-none"
								/>
								<h2 className="text-[19px] font-medium tracking-tight leading-[1.2] text-[#141414] relative z-10">
									Quick
									<br />
									and adaptable
								</h2>
								<p className="text-[11.5px] leading-[1.45] text-[#253324] mt-6 relative z-10">
									Go from concept to functional prototype fast. Easily adapt
									scope, features, and visual direction as your product grows.
								</p>
							</div>

							{/* Bottom Photo Card */}
							<button
								type="button"
								onClick={() =>
									onSelectHighlight({
										title: 'Product & UI/UX Architecture',
										category: 'Design & Engineering',
										description:
											'Keynote speaker and product builder transforming complex ideas into intuitive digital experiences.',
										image: '/10.jpg',
									})
								}
								className="relative flex-1 min-h-[225px] rounded-2xl overflow-hidden bg-[#EDEDEB] text-left group cursor-pointer"
							>
								<img
									src="/10.jpg"
									alt="Leandro Malungo speaking on stage"
									referrerPolicy="no-referrer"
									className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
								/>
								<div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 shadow-sm">
									<div className="flex items-center gap-1.5">
										<span className="text-[12px] font-semibold text-[#141414] leading-tight">
											Malungo
										</span>
										<span className="w-3.5 h-3.5 rounded-full bg-[#141414] text-white inline-flex items-center justify-center">
											<Check className="w-2.5 h-2.5 stroke-[3]" />
										</span>
									</div>
									<p className="text-[10.5px] text-neutral-500 leading-tight mt-0.5">
										UI/UX Designer
									</p>
								</div>
							</button>
						</div>

						{/* Bento Column 3 */}
						<div className="flex flex-col gap-3.5">
							{/* Top Compact Photo Card */}
							<button
								type="button"
								onClick={() =>
									onSelectHighlight({
										title: 'Community & Media',
										category: 'Podnerd · Luanda',
										description:
											'Sharing technology insights, developer culture, and mobile craftsmanship across Angola.',
										image: '/3.jpg',
									})
								}
								className="relative h-[175px] rounded-2xl overflow-hidden bg-[#EAEBEE] text-left group cursor-pointer"
							>
								<img
									src="/3.jpg"
									alt="Leandro Malungo — Mobile & Media"
									referrerPolicy="no-referrer"
									className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
								/>
								<div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs rounded-xl px-2.5 py-1 shadow-sm">
									<div className="flex items-center gap-1.5">
										<span className="text-[11.5px] font-semibold text-[#141414] leading-tight">
											Luanda
										</span>
										<span className="w-3.5 h-3.5 rounded-full bg-[#141414] text-white inline-flex items-center justify-center">
											<Check className="w-2.5 h-2.5 stroke-[3]" />
										</span>
									</div>
									<p className="text-[10px] text-neutral-500 leading-tight mt-0.5">
										Mobile Dev.
									</p>
								</div>
							</button>

							{/* Bottom Tall Warm Peach/Orange Card */}
							<div className="flex-1 min-h-[245px] rounded-2xl bg-[#F8B77E] p-5 relative overflow-hidden flex flex-col justify-end">
								{/* Concentric curved orange rings in top right */}
								<div
									aria-hidden="true"
									className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[14px] border-[#F29C52]/55 pointer-events-none"
								/>
								<div
									aria-hidden="true"
									className="absolute -top-2 -right-2 w-24 h-24 rounded-full border-[10px] border-[#F29C52]/40 pointer-events-none"
								/>
								<p className="text-[17px] font-medium leading-[1.25] tracking-tight text-[#141414] relative z-10 max-w-[175px]">
									Rest assured, there are no shortcuts or guesswork to worry
									about.
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Social Proof Caption */}
				<p className="text-center text-[11.5px] text-[#7D7D82] mt-12">
					Collaborating across hackathons, startups &amp; tech initiatives from
					Luanda to global stages.
				</p>
			</div>

			{/* Full-Width Animated Black & White PNG Logo Wheel */}
			<div className="bg-white border-y border-black/[0.06] py-5 overflow-hidden">
				<div className="max-w-[1240px] mx-auto px-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
					<div className="flex w-max items-center animate-logo-marquee hover:[animation-play-state:paused]">
						{[0, 1].map((dupIndex) => (
							<div
								key={dupIndex}
								aria-hidden={dupIndex === 1}
								className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0"
							>
								{PARTNER_LOGOS.map((logo) => (
									<div
										key={`${dupIndex}-${logo.name}`}
										className="flex items-center justify-center shrink-0"
									>
										<img
											src={logo.src}
											alt={dupIndex === 0 ? logo.name : ''}
											referrerPolicy="no-referrer"
											className="h-8 sm:h-9 w-auto object-contain grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity select-none"
										/>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
