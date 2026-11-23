'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/portfolio-data';

interface NavbarProps {
	onBookCall: () => void;
}

export function scrollToSection(href: string) {
	if (!href.startsWith('#')) return;
	const id = href.slice(1);
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		window.history.replaceState(null, '', href);
	}
}

export default function Navbar({ onBookCall }: NavbarProps) {
	const [activeHref, setActiveHref] = useState<string>('');
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const sectionIds = NAV_LINKS.map((item) => item.href.slice(1));
		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveHref(`#${id}`);
						}
					});
				},
				{ rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach((obs) => obs.disconnect());
		};
	}, []);

	const handleAnchorClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		setMobileOpen(false);
		setActiveHref(href);
		scrollToSection(href);
	};

	return (
		<header className="sticky top-0 z-40 w-full bg-[#F7F7F5]/90 backdrop-blur-md border-b border-black/[0.06]">
			<div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
				{/* Zone 1: Brand Wordmark */}
				<a
					href="#hero"
					onClick={(e) => handleAnchorClick(e, '#hero')}
					className="flex items-center gap-2.5 text-[#141414] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] rounded"
				>
					<span
						aria-hidden="true"
						className="inline-flex items-center justify-center w-6 h-6"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							className="w-6 h-6 text-[#141414]"
						>
							<path
								d="M4 9.5L9.5 4H14.5L9 9.5V16.5L4 12V9.5Z"
								fill="currentColor"
							/>
							<path
								d="M11 12.5L16.5 7H20.5L15 12.5V20L11 16V12.5Z"
								fill="currentColor"
							/>
						</svg>
					</span>
					<span className="text-[17px] font-bold tracking-tight">
						Leandro Malungo
					</span>
				</a>

				{/* Zone 2: Single-Line Anchor Navigation Links */}
				<nav
					aria-label="Primary"
					className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#4A4A4A]"
				>
					{NAV_LINKS.map((link) => {
						const isActive = activeHref === link.href;
						return (
							<a
								key={link.href}
								href={link.href}
								onClick={(e) => handleAnchorClick(e, link.href)}
								className={`whitespace-nowrap shrink-0 py-1 transition-colors relative hover:text-[#141414] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] rounded ${
									isActive ? 'text-[#141414]' : ''
								}`}
							>
								{link.label}
								<span
									className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#141414] transition-transform duration-200 origin-left ${
										isActive ? 'scale-x-100' : 'scale-x-0'
									}`}
								/>
							</a>
						);
					})}
				</nav>

				{/* Zone 3: 1 Primary Action + Mobile Trigger */}
				<div className="flex items-center gap-3 shrink-0">
					<button
						type="button"
						onClick={onBookCall}
						className="hidden md:inline-flex items-center justify-center bg-[#141414] hover:bg-neutral-800 text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
					>
						Hire talent
					</button>

					<button
						type="button"
						onClick={() => setMobileOpen((prev) => !prev)}
						aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
						aria-expanded={mobileOpen}
						className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white text-[#141414] cursor-pointer"
					>
						{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</div>

			{/* Mobile Anchor Navigation Drawer */}
			{mobileOpen && (
				<div className="md:hidden border-t border-black/[0.06] bg-[#F7F7F5] px-6 py-4 space-y-2">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={(e) => handleAnchorClick(e, link.href)}
							className={`block py-2.5 text-sm font-medium rounded-lg transition-colors ${
								activeHref === link.href
									? 'text-[#141414] font-semibold'
									: 'text-[#525252] hover:text-[#141414]'
							}`}
						>
							{link.label}
						</a>
					))}
					<div className="pt-2">
						<button
							type="button"
							onClick={() => {
								setMobileOpen(false);
								onBookCall();
							}}
							className="w-full bg-[#141414] text-white text-sm font-medium py-3 rounded-full cursor-pointer"
						>
							Hire talent
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
