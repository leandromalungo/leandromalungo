'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CapabilitiesBar from '@/components/CapabilitiesBar';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import RecognitionSection from '@/components/RecognitionSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooter from '@/components/ContactFooter';
import { BookingModal, ShowcaseLightbox } from '@/components/Modals';
import { GITHUB_PROFILE_URL, type ShowcaseItem } from '@/lib/portfolio-data';

export default function Home() {
	const [bookingOpen, setBookingOpen] = useState(false);
	const [bookingService, setBookingService] = useState('Desenvolvimento de produto digital');
	const [lightboxItems, setLightboxItems] = useState<ShowcaseItem[]>([]);
	const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

	const openBooking = (serviceName: string) => {
		setBookingService(serviceName);
		setBookingOpen(true);
	};

	const openSingleHighlight = (highlight: { title: string; categoryLabel: string; description: string; image: string }) => {
		const item: ShowcaseItem = {
			id: highlight.title,
			title: highlight.title,
			category: 'UI/UX & Product',
			categoryLabel: highlight.categoryLabel,
			year: '2026',
			description: highlight.description,
			image: highlight.image,
			githubUrl: GITHUB_PROFILE_URL,
		};
		setLightboxItems([item]);
		setActiveItem(item);
	};

	return (
		<div className="min-h-screen bg-[#F7F7F5] text-[#141414] overflow-x-clip">
			<Navbar onBookCall={() => openBooking('Colaboração e desenvolvimento de produto')} />
			<main>
				<HeroSection onBookCall={() => openBooking('Colaboração e desenvolvimento de produto')} onSelectHighlight={openSingleHighlight} />
				<CapabilitiesBar />
				<AboutSection />
				<JourneySection />
				<RecognitionSection />
				<ProjectsSection onBookNow={() => openBooking('Projecto de software ou inovação')} />
			</main>
			<ContactFooter onBookCall={() => openBooking('Contacto geral')} />
			<BookingModal open={bookingOpen} defaultService={bookingService} onClose={() => setBookingOpen(false)} />
			<ShowcaseLightbox items={lightboxItems} activeItem={activeItem} onSelect={setActiveItem} onClose={() => setActiveItem(null)} />
		</div>
	);
}
