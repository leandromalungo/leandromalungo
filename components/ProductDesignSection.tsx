'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_DESIGN_ITEMS, type ShowcaseItem } from '@/lib/portfolio-data';

interface ProductDesignSectionProps {
	onBookNow: () => void;
	onSelectItem: (item: ShowcaseItem) => void;
}

export default function ProductDesignSection({
	onBookNow,
	onSelectItem,
}: ProductDesignSectionProps) {
	const [agritech, fintech, saas] = PRODUCT_DESIGN_ITEMS;

	return (
		<section
			id="product-design"
			className="bg-[#FAFAFA] py-20 md:py-28 relative overflow-hidden scroll-mt-16 border-b border-black/[0.06]"
		>
			{/* Top-Left Kicker */}
			<div className="max-w-[1120px] mx-auto px-6 relative z-20">
				<div className="flex items-center gap-3">
					<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
					<span className="text-[12.5px] font-medium text-[#525252]">
						Services
					</span>
				</div>
			</div>

			{/* Showcase Arc + Central Typography */}
			<div className="max-w-[1180px] mx-auto px-6 relative mt-8 md:mt-6">
				{/* Floating Angled Product UI Mockup Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
					{/* Left Angled UI Card */}
					<motion.button
						type="button"
						onClick={() => onSelectItem(agritech)}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
						className="w-full max-w-[300px] md:mt-10 md:-rotate-12 rounded-2xl overflow-hidden bg-white shadow-lg border border-black/[0.06] cursor-pointer group text-left transition-transform duration-300 hover:scale-[1.03]"
					>
						<div className="aspect-[4/3] overflow-hidden bg-[#EEF3EE]">
							<img
								src={agritech.image}
								alt={agritech.title}
								referrerPolicy="no-referrer"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.button>

					{/* Center Top UI Card */}
					<motion.button
						type="button"
						onClick={() => onSelectItem(fintech)}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
						className="w-full max-w-[270px] md:-mt-6 rounded-2xl overflow-hidden bg-white shadow-lg border border-black/[0.06] cursor-pointer group text-left transition-transform duration-300 hover:scale-[1.03]"
					>
						<div className="aspect-[4/3] overflow-hidden bg-[#E5F2FC]">
							<img
								src={fintech.image}
								alt={fintech.title}
								referrerPolicy="no-referrer"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.button>

					{/* Right Angled UI Card */}
					<motion.button
						type="button"
						onClick={() => onSelectItem(saas)}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
						className="w-full max-w-[300px] md:mt-10 md:rotate-12 rounded-2xl overflow-hidden bg-white shadow-lg border border-black/[0.06] cursor-pointer group text-left transition-transform duration-300 hover:scale-[1.03]"
					>
						<div className="aspect-[4/3] overflow-hidden bg-[#EDF0F4]">
							<img
								src={saas.image}
								alt={saas.title}
								referrerPolicy="no-referrer"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.button>
				</div>

				{/* Central Headline + Decorative Bottom Sculptural Accents */}
				<div className="relative mt-10 md:mt-6 pt-4 pb-6 flex flex-col items-center text-center">
					{/* Bottom-Left Silver Geometric 3D Accent (desktop) */}
					<div
						aria-hidden="true"
						className="hidden lg:block absolute left-10 bottom-0 w-28 h-28 pointer-events-none"
					>
						<svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
							<defs>
								<linearGradient id="metalCone1" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#F3F4F6" />
									<stop offset="55%" stopColor="#9CA3AF" />
									<stop offset="100%" stopColor="#6B7280" />
								</linearGradient>
								<linearGradient id="metalCone2" x1="100%" y1="0%" x2="0%" y2="100%">
									<stop offset="0%" stopColor="#E5E7EB" />
									<stop offset="100%" stopColor="#4B5563" />
								</linearGradient>
							</defs>
							<path
								d="M36 22 C52 14, 70 28, 76 48 L96 76 C102 86, 92 98, 78 96 L46 88 C28 84, 18 68, 22 48 Z"
								fill="url(#metalCone1)"
							/>
							<ellipse cx="44" cy="48" rx="18" ry="24" transform="rotate(-20 44 48)" fill="url(#metalCone2)" opacity="0.7" />
						</svg>
					</div>

					{/* Centered Typography & CTA */}
					<div className="relative z-10 max-w-md mx-auto">
						<h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#141414]">
							UI/UX &amp; Product
							<br />
							Design.
						</h2>

						<p className="mt-3 text-[14px] text-[#525252]">
							Modern, user-focused designs.
						</p>

						<div className="mt-5 flex items-center justify-center gap-4">
							<button
								type="button"
								onClick={onBookNow}
								className="inline-flex items-center gap-1.5 bg-[#141414] hover:bg-neutral-800 text-white text-[12px] font-medium px-6 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
							>
								<span>Book Now</span>
								<ArrowUpRight className="w-3.5 h-3.5" />
							</button>
						</div>
					</div>

					{/* Bottom-Right Matte Multi-Color Soft Blocks Cluster (desktop) */}
					<div
						aria-hidden="true"
						className="hidden lg:block absolute right-10 bottom-0 w-32 h-28 pointer-events-none"
					>
						<svg viewBox="0 0 140 120" className="w-full h-full drop-shadow-sm">
							<rect x="30" y="18" width="44" height="36" rx="16" fill="#7C6AF4" transform="rotate(-18 52 36)" />
							<rect x="64" y="24" width="46" height="34" rx="16" fill="#EF533B" transform="rotate(14 87 41)" />
							<rect x="52" y="48" width="46" height="34" rx="16" fill="#3B82F6" transform="rotate(-8 75 65)" />
							<rect x="24" y="56" width="44" height="34" rx="16" fill="#22C55E" transform="rotate(20 46 73)" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}
