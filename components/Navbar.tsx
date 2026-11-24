'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/portfolio-data';

interface NavbarProps { onBookCall: () => void; }

export function scrollToSection(href: string) {
	if (!href.startsWith('#')) return;
	const el = document.getElementById(href.slice(1));
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		window.history.replaceState(null, '', href);
	}
}

export default function Navbar({ onBookCall }: NavbarProps) {
	const [activeHref, setActiveHref] = useState('');
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		NAV_LINKS.forEach(({ href }) => {
			const el = document.getElementById(href.slice(1));
			if (!el) return;
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => { if (entry.isIntersecting) setActiveHref(href); });
			}, { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 });
			observer.observe(el);
			observers.push(observer);
		});
		return () => observers.forEach((observer) => observer.disconnect());
	}, []);

	useEffect(() => {
		if (!mobileOpen) return;
		const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileOpen(false); };
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [mobileOpen]);

	const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		event.preventDefault();
		setMobileOpen(false);
		setActiveHref(href);
		scrollToSection(href);
	};

	return (
		<header className="sticky top-0 z-40 w-full bg-[#F7F7F5]/95 backdrop-blur-md border-b border-black/[0.06]">
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
				<a href="#hero" onClick={(event) => handleAnchorClick(event, '#hero')} className="flex items-center gap-2 text-[#141414] font-bold tracking-tight">
					<span className="w-7 h-7 rounded-full bg-[#141414] text-white flex items-center justify-center text-xs">LM</span>
					<span>Leandro Malungo</span>
				</a>
				<nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5 text-[12px] font-medium text-[#555555]">
					{NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={(event) => handleAnchorClick(event, link.href)} className={activeHref === link.href ? 'text-black' : 'hover:text-black'}>{link.label}</a>)}
					<a href="/cv" className="hover:text-black">CV</a>
				</nav>
				<div className="flex items-center gap-2">
					<button type="button" onClick={onBookCall} className="hidden sm:inline-flex bg-[#141414] hover:bg-neutral-800 text-white text-xs font-medium px-5 py-2.5 rounded-full">Vamos conversar</button>
					<button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileOpen} className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white">
						{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</div>
			{mobileOpen && <div className="lg:hidden border-t border-black/[0.06] bg-[#F7F7F5] px-4 py-4 space-y-2">
				{NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={(event) => handleAnchorClick(event, link.href)} className="block py-2 text-sm font-medium text-[#444]">{link.label}</a>)}
				<a href="/cv" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-[#444]">Perfil profissional / CV</a>
				<button type="button" onClick={() => { setMobileOpen(false); onBookCall(); }} className="w-full bg-[#141414] text-white text-sm font-medium py-3 rounded-full">Vamos conversar</button>
			</div>}
		</header>
	);
}
