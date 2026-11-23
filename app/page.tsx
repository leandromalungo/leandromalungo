'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CapabilitiesBar from '@/components/CapabilitiesBar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooter from '@/components/ContactFooter';
import { BookingModal, ShowcaseLightbox } from '@/components/Modals';
import { GITHUB_PROFILE_URL, type ShowcaseItem } from '@/lib/portfolio-data';

export default function Home() {
	const [bookingOpen, setBookingOpen] = useState(false);
	const [bookingService, setBookingService] = useState('UI/UX & Product Design');
	const [lightboxItems, setLightboxItems] = useState<ShowcaseItem[]>([]);
	const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

	const openBooking = (serviceName: string) => {
		setBookingService(serviceName);
		setBookingOpen(true);
	};

	const openSingleHighlight = (highlight: {
		title: string;
		categoryLabel: string;
		description: string;
		image: string;
	}) => {
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
			<Navbar onBookCall={() => openBooking('Mobile & Web Development')} />

			<main>
				<HeroSection
					onBookCall={() => openBooking('Mobile & Web Development')}
					onSelectHighlight={openSingleHighlight}
				/>

				<CapabilitiesBar />

				<AboutSection />

				<ProjectsSection
					onBookNow={() => openBooking('UI/UX & Product Design')}
				/>
			</main>

			<ContactFooter onBookCall={() => openBooking('UI/UX & Product Design')} />

			<BookingModal
				open={bookingOpen}
				defaultService={bookingService}
				onClose={() => setBookingOpen(false)}
			/>

			<ShowcaseLightbox
				items={lightboxItems}
				activeItem={activeItem}
				onSelect={setActiveItem}
				onClose={() => setActiveItem(null)}
			/>
		</div>
	);
}
