export default function CapabilitiesBar() {
	const areas = ['Engenharia Front-end', 'Desenvolvimento Web', 'Produtos Digitais', 'IA Aplicada', 'Dados & Geoespacial', 'Comunidade & Liderança'];
	return (
		<section id="capabilities" className="bg-[#F7F7F5] border-y border-black/[0.08] scroll-mt-16">
			<div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
				{areas.map((area) => <span key={area} className="text-xs sm:text-sm font-medium text-[#4B4B4B]">{area}</span>)}
			</div>
		</section>
	);
}
