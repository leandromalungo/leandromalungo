'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Mic2 } from 'lucide-react';

const contributions = [
  {
    type: 'ARTIGOS',
    title: 'Escrita e participação editorial',
    description: 'Textos e contributos sobre tecnologia, cultura digital, jogos e o ecossistema de inovação.',
    action: 'Ler artigos',
    href: 'https://quebrandocontrole.com.br/site/author/leandro-malungo/',
    icon: BookOpen,
  },
  {
    type: 'COMUNIDADE',
    title: 'Conhecimento que circula',
    description: 'Através da ADN Developer, procuro aproximar pessoas de oportunidades, recursos e conversas úteis para o seu percurso tecnológico.',
    action: 'Conhecer a ADN Developer',
    href: 'https://adndeveloper.com',
    icon: ArrowUpRight,
  },
  {
    type: 'CONVERSAS',
    title: 'Tecnologia para além do código',
    description: 'No PodNerd, converso sobre desenvolvimento, inteligência artificial, empreendedorismo e percursos profissionais.',
    action: 'Acompanhar no LinkedIn',
    href: 'https://ao.linkedin.com/in/leandromalungo',
    icon: Mic2,
  },
];

export default function IdeasSection() {
  return (
    <section id="ideias" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A45B16] mb-4">Ideias · Escrita · Comunicação</p>
            <h2 className="text-[clamp(2.2rem,4vw,3.3rem)] font-semibold tracking-[-0.05em] leading-[1.04]">Partilhar conhecimento também é construir.</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#62625D]">A tecnologia cresce quando as ideias são discutidas, documentadas e partilhadas. Esta é outra dimensão do meu trabalho.</p>
          </div>
          <div className="lg:col-span-8 border-t border-black/10">
            {contributions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="py-7 sm:py-8 border-b border-black/10 grid grid-cols-[42px_1fr] sm:grid-cols-[56px_1fr_auto] gap-4 sm:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F4F1EA] flex items-center justify-center text-[#80501F]"><Icon className="w-4 h-4" /></div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-neutral-400">{item.type}</p>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#62625D] max-w-xl">{item.description}</p>
                    <a href={item.href} target="_blank" rel="noreferrer" className="sm:hidden mt-4 inline-flex items-center gap-2 text-xs font-semibold">{item.action}<ArrowUpRight className="w-3.5 h-3.5" /></a>
                  </div>
                  <a href={item.href} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold whitespace-nowrap hover:text-[#A45B16]">{item.action}<ArrowUpRight className="w-3.5 h-3.5" /></a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
