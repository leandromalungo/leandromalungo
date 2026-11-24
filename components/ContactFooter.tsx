'use client';

import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import {
	EMAIL_ADDRESS, FACEBOOK_PROFILE_URL, GITHUB_PROFILE_URL, INSTAGRAM_PROFILE_URL,
	LINKEDIN_PROFILE_URL, LINKTREE_URL, NAV_LINKS,
} from '@/lib/portfolio-data';
import { scrollToSection } from './Navbar';

interface ContactFooterProps { onBookCall: () => void; }

export default function ContactFooter({ onBookCall }: ContactFooterProps) {
	return (
		<footer id="contact" className="bg-white py-16 sm:py-20 scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/[0.08]">
					<div className="md:col-span-7">
						<p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-4">Contacto</p>
						<h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.045em] leading-[1.05] text-[#141414] max-w-2xl">Boas ideias começam com uma boa conversa.</h2>
						<p className="mt-5 text-sm sm:text-base text-[#555] max-w-xl leading-relaxed">Estou aberto a conversas sobre desenvolvimento de produtos, colaboração tecnológica, iniciativas de impacto, oportunidades profissionais e projectos de inovação.</p>
						<div className="mt-7 flex flex-wrap items-center gap-4">
							<button type="button" onClick={onBookCall} className="inline-flex items-center gap-2 bg-[#141414] hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3 rounded-full"><span>Enviar uma mensagem</span><ArrowUpRight className="w-4 h-4" /></button>
							<a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#141414] hover:underline"><Mail className="w-4 h-4" />{EMAIL_ADDRESS}</a>
						</div>
					</div>
					<div className="md:col-span-5 grid grid-cols-2 gap-8 md:justify-items-end">
						<div><h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Explorar</h3><ul className="space-y-3 text-sm text-[#555]"><li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>Início</a></li>{NAV_LINKS.map((link) => <li key={link.href}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>{link.label}</a></li>)}</ul></div>
						<div><h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Redes e perfis</h3><ul className="space-y-3 text-sm text-[#555]">
							<li><a className="inline-flex items-center gap-2 hover:text-black" href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" />LinkedIn</a></li>
							<li><a className="inline-flex items-center gap-2 hover:text-black" href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer"><Github className="w-4 h-4" />GitHub</a></li>
							<li><a className="inline-flex items-center gap-2 hover:text-black" href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noreferrer"><Instagram className="w-4 h-4" />Instagram</a></li>
							<li><a className="inline-flex items-center gap-2 hover:text-black" href={FACEBOOK_PROFILE_URL} target="_blank" rel="noreferrer"><Facebook className="w-4 h-4" />Facebook</a></li>
							<li><a className="hover:text-black" href={LINKTREE_URL} target="_blank" rel="noreferrer">Linktree</a></li>
							<li><a className="hover:text-black" href="/cv">Perfil profissional / CV</a></li>
						</ul></div>
					</div>
				</div>
				<div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
					<p>© {new Date().getFullYear()} Leandro Malungo. Todos os direitos reservados.</p>
					<p className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />Luanda, Angola · Disponível para colaboração internacional</p>
				</div>
			</div>
		</footer>
	);
}
