import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ variable: '--font-plus-jakarta', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'], weight: ['400', '500', '600'] });
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
	title: 'Leandro Malungo | Desenvolvedor Front-end & Empreendedor de Tecnologia',
	description: 'Portfólio profissional de Leandro Malungo, desenvolvedor de software angolano, estudante de Ciências da Computação e empreendedor de tecnologia. Engenharia front-end, produtos digitais, IA aplicada e impacto comunitário.',
	keywords: ['Leandro Malungo', 'Software Developer', 'Front-end Developer', 'Angola', 'Luanda', 'HAGRIA Labs', 'ADN Developer', 'Inteligência Artificial'],
	openGraph: {
		title: 'Leandro Malungo | Software, Tecnologia e Inovação',
		description: 'Conheça o percurso, os projectos e o trabalho de Leandro Malungo na engenharia de software, inovação e desenvolvimento de comunidades.',
		type: 'website',
		locale: 'pt_PT',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Leandro Malungo | Software & Tecnologia',
		description: 'Desenvolvimento de software, produtos digitais, IA aplicada e impacto tecnológico.',
	},
	generator: 'Leandro Malungo',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-PT" className="scroll-smooth">
			<body className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-[#F7F7F5] text-[#141414]`}>
				{children}
			</body>
		</html>
	);
}
