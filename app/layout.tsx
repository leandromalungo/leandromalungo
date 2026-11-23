import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
});

export const metadata: Metadata = {
	title: 'Leandro Malungo — Software Developer & Product Designer',
	description:
		'Portfolio of Leandro Malungo, multidisciplinary software developer and UI/UX product designer based in Luanda, Angola.',
	openGraph: {
		title: 'Leandro Malungo — Software Developer & Product Designer',
		description:
			'Web, mobile, UI/UX design, and applied AI products built in Luanda, Angola.',
	},
	generator: 'Leandro Malungo',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-[#F7F7F5] text-[#141414]`}
			>
				{children}
			</body>
		</html>
	);
}
