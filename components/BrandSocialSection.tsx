'use client';

import { ArrowUpRight } from 'lucide-react';
import { BRAND_SHOWCASE_ITEMS, type ShowcaseItem } from '@/lib/portfolio-data';

interface BrandSocialSectionProps {
	onBookNow: () => void;
	onSelectItem: (item: ShowcaseItem) => void;
}

export default function BrandSocialSection({
	onBookNow,
	onSelectItem,
}: BrandSocialSectionProps) {
	return (
		<section
			id="brand-social"
			className="relative min-h-[540px] md:min-h-[600px] overflow-hidden bg-[#12141A] flex items-center scroll-mt-16"
		>
			{/* Tilted Diagonal Collage Wall Background */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -rotate-12 scale-[1.28] origin-center pointer-events-none select-none"
			>
				<div className="grid grid-cols-3 md:grid-cols-4 gap-3.5 p-4 h-full">
					{BRAND_SHOWCASE_ITEMS.map((item) => (
						<div
							key={item.id}
							className="relative rounded-xl overflow-hidden bg-neutral-900 shadow-md aspect-[3/4]"
						>
							<img
								src={item.image}
								alt={item.title}
								referrerPolicy="no-referrer"
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Measured Left-to-Right Contrast Scrim */}
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/20"
			/>

			{/* Foreground Left-Aligned Content */}
			<div className="max-w-[1120px] mx-auto px-6 w-full relative z-10 py-20">
				<div className="max-w-md">
					{/* Section Kicker */}
					<div className="flex items-center gap-3 mb-4">
						<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
						<span className="text-[12.5px] font-medium text-white/90">
							Services
						</span>
					</div>

					<h2 className="text-[36px] sm:text-[44px] md:text-[50px] font-semibold tracking-[-0.025em] leading-[1.08] text-white">
						Brand &amp; Social
						<br />
						Design.
					</h2>

					<p className="mt-3 text-[14px] font-medium text-white/85">
						Bold visuals that communicate.
					</p>

					<div className="mt-6 flex items-center gap-4 flex-wrap">
						<button
							type="button"
							onClick={onBookNow}
							className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white border border-white/15 text-[12px] font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							<span>Book Now</span>
							<ArrowUpRight className="w-3.5 h-3.5" />
						</button>

						<button
							type="button"
							onClick={() => onSelectItem(BRAND_SHOWCASE_ITEMS[0])}
							className="text-[12.5px] font-medium text-white/80 hover:text-white underline underline-offset-4 cursor-pointer transition-colors whitespace-nowrap"
						>
							Explore showcase ({BRAND_SHOWCASE_ITEMS.length})
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
