'use client';

import { ArrowUpRight, BriefcaseBusiness, Handshake, Mic2 } from 'lucide-react';

const opportunities = [
  { title: 'Oportunidades profissionais', text: 'Desenvolvimento front-end, engenharia de software e criação de produtos digitais.', icon: BriefcaseBusiness, subject: 'Oportunidade profissional' },
  { title: 'Parcerias e projectos', text: 'Colaboração com equipas, empresas e organizações que estejam a desenvolver soluções com utilidade real.', icon: Handshake, subject: 'Parceria ou colaboração' },
  { title: 'Palestras e comunidade', text: 'Conversas, workshops e iniciativas ligadas a tecnologia, inovação, juventude e empreendedorismo.', icon: Mic2, subject: 'Palestra ou iniciativa' },
];

export default function OpportunitiesSection() {
  return (
    <section id="oportunidades" className="bg-[#171815] text-white py-20 sm:py-24 lg:py-28 scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D9A56C] mb-4">O próximo capítulo</p>
          <h2 className="text-[clamp(2.4rem,5vw,4.3rem)] font-semibold tracking-[-0.055em] leading-[1.02]">Boas ideias merecem encontrar as pessoas certas.</h2>
          <p className="mt-5 text-sm sm:text-base text-white/65 leading-relaxed max-w-2xl">Estou disponível para conhecer desafios, trocar perspectivas e explorar oportunidades em que tecnologia, colaboração e impacto se cruzem.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`py-7 sm:py-8 md:pr-7 ${index ? 'md:pl-7 md:border-l border-white/15' : ''} border-b md:border-b-0 border-white/15`}>
                <Icon className="w-5 h-5 text-[#D9A56C]" />
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed min-h-[68px]">{item.text}</p>
                <a href={`mailto:lmalungo@outlook.com?subject=${encodeURIComponent(item.subject)}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D9A56C] transition-colors">Iniciar conversa <ArrowUpRight className="w-4 h-4" /></a>
              </article>
            );
          })}
        </div>
        <div className="mt-12 pt-7 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">Luanda, Angola · Colaboração internacional</p>
          <a href="/cv" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8C49E] hover:text-white transition-colors">Consultar perfil profissional <ArrowUpRight className="w-4 h-4" /></a>
        </div>
      </div>
    </section>
  );
}
