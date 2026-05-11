"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const ctrl = animate(0, value, {
      duration: 1.65,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("pt-BR")}
    </span>
  );
}

const stats = [
  { label: "Solicitações processadas", value: 1840000 },
  { label: "Integrações ativas", value: 428 },
  { label: "Operações digitais mensais", value: 960000 },
  { label: "Usuários ativos", value: 312000 },
  { label: "Fluxos automatizados", value: 1180 },
];

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-nexum-line bg-nexum-slate/25 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist">Confiança e infraestrutura</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
              Estabilidade medida em continuidade operacional — não em slogans.
            </h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-nexum-mist">
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-nexum-blue" />
                Organização sistêmica com contratos explícitos entre módulos.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-nexum-blue" />
                Rastreabilidade que suporta auditoria interna e externa.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-nexum-blue" />
                Confiabilidade institucional com postura de plataforma crítica.
              </li>
            </ul>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-nexum-line bg-nexum-void/45 px-5 py-6 transition-colors hover:border-nexum-mist/25"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-nexum-mist">{s.label}</p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
                  <AnimatedNumber value={s.value} />
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
