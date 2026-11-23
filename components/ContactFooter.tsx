'use client';

import {
	ArrowUpRight,
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
} from 'lucide-react';
import {
	GITHUB_PROFILE_URL,
	LINKEDIN_PROFILE_URL,
	NAV_LINKS,
} from '@/lib/portfolio-data';
import { scrollToSection } from './Navbar';

interface ContactFooterProps {
	onBookCall: () => void;
}

export default function ContactFooter({ onBookCall }: ContactFooterProps) {
	return (
		<footer
			id="contact"
			className="bg-white py-14 sm:py-16 md:py-20 scroll-mt-16"
		>
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 sm:pb-12 border-b border-black/[0.08] items-start">
					{/* Left Column: Call to Action */}
					<div className="md:col-span-6">
						<div className="flex items-center gap-3 mb-4">
							<span aria-hidden="true" className="w-7 h-[2px] bg-[#E88A1A]" />
							<span className="text-[12.5px] font-medium text-[#525252]">
								Let&apos;s Work Together
							</span>
						</div>

						<h2 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-[#141414]">
							Have a product or brand
							<br />
							idea in mind?
						</h2>

						<p className="mt-4 text-[14px] text-[#525252] max-w-md leading-relaxed">
							The secret is to do what we love with dedication — the results are
							the consequence of good work. Let&apos;s build something meaningful.
						</p>

						<div className="mt-6 flex items-center gap-4 flex-wrap">
							<button
								type="button"
								onClick={onBookCall}
								className="inline-flex items-center gap-2 bg-[#141414] hover:bg-neutral-800 text-white text-[13px] font-medium px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0"
							>
								<span>Book a call</span>
								<ArrowUpRight className="w-4 h-4" />
							</button>

							<a
								href="mailto:lmalungo@outlook.com"
								className="inline-flex items-center gap-2 text-[13px] font-medium text-[#141414] hover:text-[#E88A1A] transition-colors py-2 break-all sm:break-normal"
							>
								<Mail className="w-4 h-4 shrink-0" />
								<span>lmalungo@outlook.com</span>
							</a>
						</div>
					</div>

					{/* Right Column: Section Anchors & Social Channels */}
					<div className="md:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 md:justify-items-end">
						<div>
							<h3 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
								Sections
							</h3>
							<ul className="space-y-2.5 text-[13.5px] font-medium text-[#4A4A4A]">
								<li>
									<a
										href="#hero"
										onClick={(e) => {
											e.preventDefault();
											scrollToSection('#hero');
										}}
										className="hover:text-[#141414] transition-colors inline-block py-0.5"
									>
										Home
									</a>
								</li>
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											onClick={(e) => {
												e.preventDefault();
												scrollToSection(link.href);
											}}
											className="hover:text-[#141414] transition-colors inline-block py-0.5"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
								Connect
							</h3>
							<ul className="space-y-2.5 text-[13.5px] font-medium text-[#4A4A4A]">
								<li>
									<a
										href={GITHUB_PROFILE_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 hover:text-[#141414] transition-colors py-0.5"
									>
										<Github className="w-4 h-4 shrink-0" />
										<span>GitHub</span>
									</a>
								</li>
								<li>
									<a
										href={LINKEDIN_PROFILE_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 hover:text-[#141414] transition-colors py-0.5"
									>
										<Linkedin className="w-4 h-4 shrink-0" />
										<span>LinkedIn</span>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/leandro_malungo"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 hover:text-[#141414] transition-colors py-0.5"
									>
										<Instagram className="w-4 h-4 shrink-0" />
										<span>Instagram</span>
									</a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/leandro.malungo.dev"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 hover:text-[#141414] transition-colors py-0.5"
									>
										<Facebook className="w-4 h-4 shrink-0" />
										<span>Facebook</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Quiet Copyright Bar */}
				<div className="pt-7 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-neutral-500 text-center sm:text-left">
					<p>© {new Date().getFullYear()} Leandro Malungo. All rights reserved.</p>
					<p className="inline-flex items-center gap-1.5">
						<MapPin className="w-3.5 h-3.5 shrink-0" />
						<span>Luanda, Angola · Available worldwide</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
