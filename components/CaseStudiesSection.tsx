'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const studies = [
  {
    number: '01',
    category: 'AGRITECH · IA · OBSERVAÇÃO DA TERRA',
    title: 'Agri IA — transformar dados da Terra em decisões agrícolas',
    context: 'A informação sobre clima, território e condições agrícolas pode ser difícil de interpretar e transformar em decisões práticas.',
    approach: 'Na HAGRIA Labs, trabalho na concepção de um assistente agrícola que combina inteligência artificial, dados geoespaciais e observação da Terra para apoiar a análise e o planeamento das explorações.',
    contribution: 'Fundação e desenvolvimento de produto, com foco na experiência digital e na transformação de necessidades agrícolas em funcionalidades de software.',
    stage: 'Produto em desenvolvimento e validação',
    image: '/images/ui-agritech.jpg',
    link: 'https://github.com/leandromalungo/agriia-studio',
    linkLabel: 'Explorar repositório',
  },
  {
    number: '02',
    category: 'ECOSSISTEMA · COMUNIDADE · EDUCAÇÃO',
    title: 'ADN Developer — aproximar talento de oportunidades',
    context: 'O acesso disperso a eventos, hackathons, bolsas e oportunidades dificulta a descoberta de caminhos para quem quer crescer na tecnologia.',
    approach: 'Criei a ADN Developer, uma iniciativa e plataforma orientada para reunir oportunidades relevantes para estudantes, programadores e profissionais do espaço lusófono.',
    contribution: 'Fundador, responsável pela visão do produto e pelo desenvolvimento da plataforma.',
    stage: 'Iniciativa em evolução',
    image: '/3.jpg',
    link: 'https://adndeveloper.com',
    linkLabel: 'Visitar plataforma',
  },
  {
    number: '03',
    category: 'PRODUTO DIGITAL · SERVIÇOS · AGENDAMENTO',
    title: 'Salão+ — organizar marcações e operações de serviço',
    context: 'A gestão de marcações exige controlo de disponibilidade, prevenção de conflitos de horário e uma experiência simples para clientes e prestadores.',
    approach: 'Concepção de uma plataforma de agendamento e gestão de serviços, considerando regras de disponibilidade e consistência das reservas.',
    contribution: 'Trabalho de definição de produto, experiência de utilização e planeamento da solução digital.',
    stage: 'Em concepção e desenvolvimento',
    image: '/images/ui-saas.jpg',
    link: 'https://github.com/leandromalungo/sal-o-plus',
    linkLabel: 'Ver projecto',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="trabalho" className="bg-[#F7F7F5] py-20 sm:py-24 lg:py-28 scroll-mt-16">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A45B16] mb-4">Trabalho seleccionado · Estudos de caso</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.055em] leading-[1.02]">Não apenas o que construo. <span className="text-[#8A8A83]">Como penso e trabalho.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#62625D]">Cada projecto começa por compreender o problema. Aqui apresento o contexto, a abordagem e o meu contributo — sem confundir planos com resultados já alcançados.</p>
        </div>
        <div className="space-y-5">
          {studies.map((study, index) => (
            <motion.article key={study.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: index * 0.05 }} className="group grid grid-cols-1 lg:grid-cols-12 bg-white border border-black/[0.07] overflow-hidden">
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[390px] overflow-hidden bg-[#E9E7E1]">
                <img src={study.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <span className="absolute top-5 left-5 bg-white/95 px-3 py-1.5 text-[10px] font-mono tracking-wider">{study.number} / 03</span>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#A45B16]">{study.category}</p>
                  <h3 className="mt-3 text-2xl sm:text-[2rem] font-semibold tracking-[-0.04em] leading-tight max-w-xl">{study.title}</h3>
                  <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    <div><p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">O problema</p><p className="mt-2 text-sm leading-relaxed text-[#555]">{study.context}</p></div>
                    <div><p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">A abordagem</p><p className="mt-2 text-sm leading-relaxed text-[#555]">{study.approach}</p></div>
                    <div className="sm:col-span-2"><p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">O meu contributo</p><p className="mt-2 text-sm leading-relaxed text-[#555]">{study.contribution}</p></div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-[#A45B16]" />{study.stage}</span>
                  <a href={study.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[#A45B16] transition-colors">{study.linkLabel}<ArrowUpRight className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500">Os estados apresentados reflectem a fase de cada iniciativa, não métricas de desempenho ou resultados comerciais.</p>
      </div>
    </section>
  );
}
