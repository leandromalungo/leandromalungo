'use client';

import { scrollToSection } from './Navbar';

export default function CapabilitiesBar() {
	return (
		<section
			id="capabilities"
			className="bg-white border-b border-black/[0.08] scroll-mt-16"
		>
			<div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
				{/* Item 1: Capabilities Label + 3D Purple Cube */}
				<button
					type="button"
					onClick={() => scrollToSection('#capabilities')}
					className="flex items-center gap-3 text-[#141414] whitespace-nowrap shrink-0 cursor-pointer group"
				>
					<span aria-hidden="true" className="w-8 h-8 inline-flex items-center justify-center">
						<svg viewBox="0 0 36 36" className="w-8 h-8 drop-shadow-xs">
							<defs>
								<linearGradient id="capCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#9B8CFC" />
									<stop offset="100%" stopColor="#7C6AF4" />
								</linearGradient>
								<linearGradient id="capCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#7C6AF4" />
									<stop offset="100%" stopColor="#5846D6" />
								</linearGradient>
								<linearGradient id="capCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#6553E4" />
									<stop offset="100%" stopColor="#4332B8" />
								</linearGradient>
							</defs>
							<polygon points="18,4 30,11 18,18 6,11" fill="url(#capCubeTop)" />
							<polygon points="6,11 18,18 18,32 6,25" fill="url(#capCubeLeft)" />
							<polygon points="30,11 18,18 18,32 30,25" fill="url(#capCubeRight)" />
							<path
								d="M12 7.5L24 14.5M18 18V32M6 18L18 25L30 18"
								stroke="white"
								strokeOpacity="0.28"
								strokeWidth="1"
								fill="none"
							/>
						</svg>
					</span>
					<span className="text-[13.5px] font-semibold tracking-tight group-hover:text-black">
						Capabilities
					</span>
				</button>

				{/* Vertical Divider */}
				<div
					aria-hidden="true"
					className="hidden sm:block h-7 w-px bg-black/15"
				/>

				{/* Item 2: Product Design */}
				<button
					type="button"
					onClick={() => scrollToSection('#product-design')}
					className="flex items-center gap-3 text-[#262626] hover:text-[#141414] whitespace-nowrap shrink-0 cursor-pointer transition-colors group"
				>
					<span aria-hidden="true" className="w-8 h-8 inline-flex items-center justify-center">
						<svg viewBox="0 0 36 36" className="w-8 h-8">
							<defs>
								<linearGradient id="silverPetal" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#E5E7EB" />
									<stop offset="50%" stopColor="#9CA3AF" />
									<stop offset="100%" stopColor="#6B7280" />
								</linearGradient>
							</defs>
							<g transform="translate(18 18)">
								<ellipse rx="4.5" ry="12" transform="rotate(0)" fill="url(#silverPetal)" />
								<ellipse rx="4.5" ry="12" transform="rotate(60)" fill="url(#silverPetal)" opacity="0.92" />
								<ellipse rx="4.5" ry="12" transform="rotate(120)" fill="url(#silverPetal)" opacity="0.86" />
								<circle r="3.5" fill="#F3F4F6" />
							</g>
						</svg>
					</span>
					<span className="text-[13.5px] font-medium">Product Design</span>
				</button>

				{/* Item 3: Mobile & Web */}
				<button
					type="button"
					onClick={() => scrollToSection('#about')}
					className="flex items-center gap-3 text-[#262626] hover:text-[#141414] whitespace-nowrap shrink-0 cursor-pointer transition-colors group"
				>
					<span aria-hidden="true" className="w-8 h-8 inline-flex items-center justify-center">
						<svg viewBox="0 0 36 36" className="w-8 h-8">
							<defs>
								<linearGradient id="silverWingA" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#F3F4F6" />
									<stop offset="100%" stopColor="#9CA3AF" />
								</linearGradient>
								<linearGradient id="silverWingB" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#9CA3AF" />
									<stop offset="100%" stopColor="#4B5563" />
								</linearGradient>
							</defs>
							<polygon points="18,4 30,27 18,22" fill="url(#silverWingA)" />
							<polygon points="18,4 6,27 18,22" fill="url(#silverWingB)" />
							<polygon points="18,22 30,27 18,31 6,27" fill="#D1D5DB" />
						</svg>
					</span>
					<span className="text-[13.5px] font-medium">Mobile &amp; Web</span>
				</button>

				{/* Item 4: Brand & Visual Design */}
				<button
					type="button"
					onClick={() => scrollToSection('#brand-social')}
					className="flex items-center gap-3 text-[#262626] hover:text-[#141414] whitespace-nowrap shrink-0 cursor-pointer transition-colors group"
				>
					<span aria-hidden="true" className="w-8 h-8 inline-flex items-center justify-center">
						<svg viewBox="0 0 36 36" className="w-8 h-8">
							<defs>
								<radialGradient id="paletteSphere" cx="35%" cy="30%" r="70%">
									<stop offset="0%" stopColor="#60A5FA" />
									<stop offset="55%" stopColor="#6366F1" />
									<stop offset="100%" stopColor="#4338CA" />
								</radialGradient>
							</defs>
							<circle cx="18" cy="18" r="12.5" fill="url(#paletteSphere)" />
							<circle cx="13" cy="14" r="2.2" fill="#FDE047" />
							<circle cx="21" cy="12" r="2" fill="#FB7185" />
							<circle cx="23" cy="20" r="2.3" fill="#34D399" />
							<circle cx="15" cy="23" r="1.9" fill="#F9FAFB" />
						</svg>
					</span>
					<span className="text-[13.5px] font-medium">
						Brand &amp; Visual Design
					</span>
				</button>
			</div>
		</section>
	);
}
