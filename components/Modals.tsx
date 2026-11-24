'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ShowcaseItem } from '@/lib/portfolio-data';

interface BookingModalProps {
	open: boolean;
	defaultService?: string;
	onClose: () => void;
}

export function BookingModal({
	open,
	defaultService = 'UI/UX & Product Design',
	onClose,
}: BookingModalProps) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [service, setService] = useState(defaultService);
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		setService(defaultService);
	}, [defaultService]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, onClose]);

	if (!open) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Contacto através do portfólio — ${service}`);
		const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nÁrea: ${service}\n\nMensagem:\n${message}`);
		window.location.href = `mailto:lmalungo@outlook.com?subject=${subject}&body=${body}`;
		setSubmitted(true);
	};

	const resetAndClose = () => {
		setSubmitted(false);
		setName('');
		setEmail('');
		setMessage('');
		onClose();
	};

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="booking-modal-title"
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs"
			onClick={resetAndClose}
		>
			<div
				className="w-full max-w-md rounded-2xl bg-white p-6 md:p-7 shadow-xl border border-black/[0.06]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-start justify-between gap-4">
					<div>
						<div className="flex items-center gap-2.5 mb-2">
							<span aria-hidden="true" className="w-5 h-[2px] bg-[#E88A1A]" />
							<span className="text-[11.5px] font-medium text-neutral-500">
								Contacto
							</span>
						</div>
						<h3
							id="booking-modal-title"
							className="text-xl font-semibold tracking-tight text-[#141414]"
						>
							Vamos conversar sobre uma ideia
						</h3>
					</div>

					<button
						type="button"
						onClick={resetAndClose}
						aria-label="Close modal"
						className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[#141414] cursor-pointer transition-colors"
					>
						<X className="w-4 h-4" />
					</button>
				</div>

				{submitted ? (
					<div className="mt-6 py-6 text-center">
						<div className="w-12 h-12 rounded-full bg-[#E2F1DE] text-[#141414] flex items-center justify-center mx-auto">
							<Check className="w-5 h-5" />
						</div>
						<h4 className="mt-4 text-lg font-semibold text-[#141414]">
							Mensagem preparada
						</h4>
						<p className="mt-2 text-sm text-neutral-600">
							Obrigado, {name || 'por entrar em contacto'}. O teu programa de correio electrónico deverá abrir com a mensagem preparada. Se preferires, escreve directamente para{' '}
							<a
								href="mailto:lmalungo@outlook.com"
								className="font-medium text-[#141414] underline underline-offset-2"
							>
								lmalungo@outlook.com
							</a>
							.
						</p>
						<button
							type="button"
							onClick={resetAndClose}
							className="mt-6 bg-[#141414] text-white text-xs font-medium px-6 py-2.5 rounded-full cursor-pointer"
						>
							Fechar
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="mt-5 space-y-4">
						<div>
							<label
								htmlFor="booking-name"
								className="block text-xs font-medium text-neutral-700 mb-1.5"
							>
								Nome
							</label>
							<input
								id="booking-name"
								type="text"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="O teu nome completo"
								className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-2 focus:outline-[#141414]"
							/>
						</div>

						<div>
							<label
								htmlFor="booking-email"
								className="block text-xs font-medium text-neutral-700 mb-1.5"
							>
								Endereço de email
							</label>
							<input
								id="booking-email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="teu@email.com"
								className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-2 focus:outline-[#141414]"
							/>
						</div>

						<div>
							<label
								htmlFor="booking-service"
								className="block text-xs font-medium text-neutral-700 mb-1.5"
							>
								Área de interesse
							</label>
							<select
								id="booking-service"
								value={service}
								onChange={(e) => setService(e.target.value)}
								className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141414] bg-white focus:outline-2 focus:outline-[#141414]"
							>
								<option value="UI/UX & Product Design">
									UI/UX &amp; Product Design
								</option>
								<option value="Mobile & Web Development">
									Mobile &amp; Web Development
								</option>
								<option value="Brand & Social Design">
									Brand &amp; Social Design
								</option>
								<option value="Applied AI & Systems">
									Applied AI &amp; Systems
								</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="booking-notes"
								className="block text-xs font-medium text-neutral-700 mb-1.5"
							>
								Mensagem
							</label>
							<textarea
								id="booking-notes"
								rows={3}
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Conta-me brevemente sobre a tua ideia, necessidade ou oportunidade..."
								className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141414] focus:outline-2 focus:outline-[#141414]"
							/>
						</div>

						<div className="pt-1 flex items-center justify-end gap-3">
							<button
								type="button"
								onClick={resetAndClose}
								className="px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-[#141414] cursor-pointer"
							>
								Cancelar
							</button>
							<button
								type="submit"
								className="bg-[#141414] hover:bg-neutral-800 text-white text-xs font-medium px-6 py-2.5 rounded-full cursor-pointer transition-colors"
							>
								Preparar mensagem
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

interface ShowcaseLightboxProps {
	items: ShowcaseItem[];
	activeItem: ShowcaseItem | null;
	onSelect: (item: ShowcaseItem) => void;
	onClose: () => void;
}

export function ShowcaseLightbox({
	items,
	activeItem,
	onSelect,
	onClose,
}: ShowcaseLightboxProps) {
	useEffect(() => {
		if (!activeItem) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowRight' && items.length > 1) {
				const idx = items.findIndex((x) => x.id === activeItem.id);
				onSelect(items[(idx + 1) % items.length]);
			}
			if (e.key === 'ArrowLeft' && items.length > 1) {
				const idx = items.findIndex((x) => x.id === activeItem.id);
				onSelect(items[(idx - 1 + items.length) % items.length]);
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [activeItem, items, onSelect, onClose]);

	if (!activeItem) return null;

	const currentIndex = items.findIndex((x) => x.id === activeItem.id);

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={activeItem.title}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
			onClick={onClose}
		>
			<div
				className="w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="relative bg-neutral-100 aspect-[16/10] max-h-[65vh] w-full flex items-center justify-center">
					<img
						src={activeItem.image}
						alt={activeItem.title}
						referrerPolicy="no-referrer"
						className="w-full h-full object-contain bg-[#111111]"
					/>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close preview"
						className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center shadow cursor-pointer"
					>
						<X className="w-4 h-4" />
					</button>

					{items.length > 1 && (
						<>
							<button
								type="button"
								aria-label="Item anterior"
								onClick={() =>
									onSelect(items[(currentIndex - 1 + items.length) % items.length])
								}
								className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center shadow cursor-pointer"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button
								type="button"
								aria-label="Item seguinte"
								onClick={() =>
									onSelect(items[(currentIndex + 1) % items.length])
								}
								className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center shadow cursor-pointer"
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</>
					)}
				</div>

				<div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
					<div>
						<div className="flex items-center gap-2 text-xs text-neutral-500">
							<span>{activeItem.categoryLabel}</span>
							{activeItem.year && (
								<>
									<span aria-hidden="true">·</span>
									<span className="tabular-nums">{activeItem.year}</span>
								</>
							)}
						</div>
						<h3 className="mt-1 text-lg font-semibold text-[#141414]">
							{activeItem.title}
						</h3>
						<p className="mt-1 text-sm text-neutral-600 max-w-xl">
							{activeItem.description}
						</p>
					</div>

					{items.length > 1 && (
						<div className="text-xs font-mono text-neutral-500 tabular-nums shrink-0">
							{currentIndex + 1} / {items.length}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
