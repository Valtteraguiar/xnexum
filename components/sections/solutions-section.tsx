"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  {
    title: "Assembleias digitais",
    desc: "Quorum, votação e registro com trilha institucional clara.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M7 8h10M7 12h6M7 16h10" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="14" rx="2" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Gestão sindical",
    desc: "Cadastros, mandatos e operações com governança multiunidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M12 4v16M8 8h8M8 12h8" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="6" r="2" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Portal do trabalhador",
    desc: "Self-service seguro com autenticação e histórico acessível.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M8 20v-2a4 4 0 0 1 8 0v2" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="9" r="3" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Solicitações digitais",
    desc: "Protocolos, anexos e SLA com visibilidade para todas as partes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M8 10h8M8 14h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 21H7a2 2 0 0 1-2-2V7l4-4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Publicações institucionais",
    desc: "Distribuição controlada, versionamento e leitura confirmada.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M6 6h12v12H6z" className="stroke-current" strokeWidth="1.5" />
        <path d="M9 10h6M9 14h4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gestão administrativa",
    desc: "Fluxos internos, papéis e aprovações com rastreabilidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M8 7h8M8 12h8M8 17h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="4" width="14" height="16" rx="2" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Integração de sistemas",
    desc: "APIs, webhooks e conectores para ecossistemas heterogêneos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <circle cx="8" cy="8" r="2" className="stroke-current" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" className="stroke-current" strokeWidth="1.5" />
        <path d="M10 10l4 4" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Painéis operacionais",
    desc: "Indicadores acionáveis para decisões em tempo real.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M5 19V5M9 19v-6M13 19V9M17 19v-4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fluxos automatizados",
    desc: "Regras, gatilhos e etapas com exceções visíveis e auditáveis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <path d="M6 12h4l2-3 4 6 2-3h4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sistemas multi-tenant",
    desc: "Isolamento, políticas e escala para múltiplas organizações.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
        <rect x="4" y="4" width="7" height="7" rx="1.5" className="stroke-current" strokeWidth="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" className="stroke-current" strokeWidth="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" className="stroke-current" strokeWidth="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" className="stroke-current" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function SolutionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solucoes" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist">Soluções e sistemas</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
              Módulos que conversam entre si — sem silos, sem retrabalho.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-nexum-mist lg:text-right">
            Cada bloco pode ser implantado de forma incremental, preservando consistência de dados e políticas de
            segurança em toda a stack.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-nexum-line bg-nexum-slate/15 p-6 transition-[border-color,background-color] duration-300 hover:border-nexum-mist/25 hover:bg-nexum-slate/25"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-xl border border-nexum-line bg-nexum-void/50 p-2.5 text-nexum-blue transition-colors group-hover:text-nexum-snow">
                  {item.icon}
                </div>
                <span className="font-mono text-[10px] text-nexum-mist/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-nexum-snow">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-nexum-mist">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
