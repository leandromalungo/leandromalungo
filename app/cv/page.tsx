import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'Perfil profissional | Leandro Malungo',
  description: 'Perfil profissional de Leandro Malungo — desenvolvimento de software, produtos digitais, tecnologia e inovação.',
};

const roles = [
  { role: 'Fundador · Desenvolvimento de produto', place: 'HAGRIA Labs', detail: 'Concepção e desenvolvimento de soluções tecnológicas que cruzam software, inteligência artificial e dados geoespaciais. Trabalho na evolução de produtos como a Agri IA.' },
  { role: 'Fundador', place: 'ADN Developer', detail: 'Criação de uma iniciativa que aproxima a comunidade lusófona de tecnologia de eventos, hackathons, bolsas, formação e oportunidades.' },
  { role: 'Apresentador', place: 'PodNerd', detail: 'Condução de conversas sobre desenvolvimento de software, inteligência artificial, inovação e carreiras tecnológicas.' },
  { role: 'Embaixador', place: 'GGPEN', detail: 'Participação na divulgação de iniciativas e oportunidades ligadas ao programa espacial nacional.' },
  { role: 'Membro', place: 'Global Shapers Community · Luanda Hub', detail: 'Colaboração em iniciativas lideradas por jovens e orientadas para o desenvolvimento comunitário.' },
  { role: 'Membro', place: 'EcoAngola', detail: 'Contributo para iniciativas ambientais e projectos que aproximam tecnologia e participação comunitária.' },
];

const capabilities = ['Desenvolvimento front-end', 'Desenvolvimento web', 'React e Next.js', 'TypeScript e JavaScript', 'Design e implementação de interfaces', 'Produtos digitais', 'Integração de APIs', 'Inteligência artificial aplicada', 'Dados e sistemas geoespaciais', 'Git e GitHub', 'Linux e ferramentas de desenvolvimento', 'UX e pensamento de produto'];

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#171717]">
      <div className="print:hidden sticky top-0 z-10 bg-[#F7F7F5]/95 backdrop-blur border-b border-black/10">
        <div className="max-w-[900px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium"><ArrowLeft className="w-4 h-4" /> Voltar ao portfólio</a>
          <PrintButton />
        </div>
      </div>
      <article className="max-w-[900px] mx-auto px-6 sm:px-10 py-10 sm:py-16 print:px-0 print:py-0">
        <header className="border-b-2 border-[#171717] pb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9A5A20]">Perfil profissional</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.055em]">Leandro Malungo</h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">Desenvolvedor de Software · Front-end · Empreendedor de Tecnologia</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-600">
            <span>Luanda, Angola</span><a href="mailto:lmalungo@outlook.com">lmalungo@outlook.com</a><a href="https://ao.linkedin.com/in/leandromalungo">LinkedIn</a><a href="https://github.com/leandromalungo">GitHub</a><a href="https://leandromalungo.vercel.app">Portfólio</a>
          </div>
        </header>
        <section className="py-8 border-b border-black/10">
          <h2 className="text-xs uppercase tracking-[0.16em] font-bold text-[#9A5A20]">Resumo</h2>
          <p className="mt-3 text-sm leading-[1.8] text-[#454545]">Desenvolvedor de software angolano, com foco em desenvolvimento front-end e criação de produtos digitais. Interesso-me pela construção de experiências web, integração de serviços e aplicação de inteligência artificial e dados a problemas concretos. Em paralelo, fundei iniciativas tecnológicas, participo em comunidades e promovo a partilha de conhecimento.</p>
        </section>
        <section className="py-8 border-b border-black/10">
          <h2 className="text-xs uppercase tracking-[0.16em] font-bold text-[#9A5A20]">Experiência e liderança</h2>
          <div className="mt-5 space-y-6">
            {roles.map((item) => <div key={item.place} className="grid grid-cols-1 sm:grid-cols-[210px_1fr] gap-2 sm:gap-6"><div><h3 className="font-semibold text-sm">{item.place}</h3><p className="mt-1 text-xs text-neutral-500">{item.role}</p></div><p className="text-sm leading-relaxed text-[#555]">{item.detail}</p></div>)}
          </div>
        </section>
        <section className="py-8 border-b border-black/10">
          <h2 className="text-xs uppercase tracking-[0.16em] font-bold text-[#9A5A20]">Competências e áreas de trabalho</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">{capabilities.map((item) => <li key={item} className="text-sm text-[#555] flex gap-2"><span className="text-[#9A5A20]">—</span>{item}</li>)}</ul>
        </section>
        <section className="py-8 border-b border-black/10">
          <h2 className="text-xs uppercase tracking-[0.16em] font-bold text-[#9A5A20]">Formação</h2>
          <div className="mt-4"><h3 className="font-semibold text-sm">Licenciatura em Ciências da Computação</h3><p className="mt-1 text-sm text-neutral-500">Em curso</p></div>
          <div className="mt-4"><h3 className="font-semibold text-sm">Ensino Médio · Informática</h3><p className="mt-1 text-sm text-neutral-500">Formação concluída</p></div>
          <p className="mt-5 text-xs uppercase tracking-wider text-neutral-400 font-semibold">Aprendizagem complementar</p>
          <p className="mt-2 text-sm leading-relaxed text-[#555]">Percursos de aprendizagem em ciência da computação, inteligência artificial, análise de dados, processamento de linguagem natural, assistentes virtuais e UX Design, incluindo conteúdos de Harvard CS50 e Blip.</p>
        </section>
        <section className="py-8">
          <h2 className="text-xs uppercase tracking-[0.16em] font-bold text-[#9A5A20]">Projectos e reconhecimento</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#555]">Agri IA / HAGRIA Labs · ADN Developer · PodNerd · Salão+ · Participação e reconhecimento no ANGOTIC Space Startups Hackathon · Semana Verde da Juventude · Selecção no LISPA Jump Start · Participação da HAGRIA Labs no DISTRICT by Aerospace Valley.</p>
        </section>
        <footer className="pt-5 border-t border-black/10 flex flex-wrap justify-between gap-3 text-[11px] text-neutral-400"><span>Leandro Malungo · Perfil profissional</span><span>Documento actualizado em Novembro de 2026</span></footer>
      </article>
      <style>{`@media print { @page { size: A4; margin: 16mm; } body { background: white !important; } main { background: white !important; } a { color: inherit !important; text-decoration: none !important; } }`}</style>
    </main>
  );
}
