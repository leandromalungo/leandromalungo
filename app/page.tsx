import InfiniteGallery from '@/components/InfiniteGallery';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
	const sampleImages = [
		{ src: '/1.jpg', alt: 'Image 1' },
		{ src: '/2.jpg', alt: 'Image 2' },
		{ src: '/3.jpg', alt: 'Image 3' },
		{ src: '/4.jpg', alt: 'Image 4' },
		{ src: '/5.jpg', alt: 'Image 5' },
		{ src: '/6.jpg', alt: 'Image 6' },
		{ src: '/7.jpg', alt: 'Image 7' },
		{ src: '/8.jpg', alt: 'Image 8' },
		{ src: '/9.jpg', alt: 'Image 9' },
		{ src: '/10.jpg', alt: 'Image 10' },
		{ src: '/11.jpg', alt: 'Image 11' },
		{ src: '/12.jpg', alt: 'Image 12' },
	];

	return (
		<main className="min-h-screen ">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">You decide where,</span> and i create! 
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<div className="mb-4 flex justify-center gap-5">
					<a
						href="https://github.com/leandromalungo"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github size={18} />
					</a>
					<a
						href="https://www.linkedin.com/in/leandromalungo"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin size={18} />
					</a>
					<a
						href="https://www.instagram.com/leandro_malungo"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram size={18} />
					</a>
					<a
						href="https://www.facebook.com/leandro.malungo.dev"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook size={18} />
					</a>
				</div>
				
				<p>The secret is to do what we love with a lot of dedication,</p>
				<p className=" opacity-60">
					the results are just the consequences of a good job.
				</p>
			</div>
		</main>
	);
}
