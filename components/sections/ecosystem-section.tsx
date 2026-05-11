"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

const nodes: ReadonlyArray<{
  id: string;
  label: string;
  x: number;
  y: number;
  hub?: boolean;
}> = [
  { id: "n1", label: "Trabalhadores", x: 14, y: 22 },
  { id: "n2", label: "Empresas", x: 50, y: 12 },
  { id: "n3", label: "Sindicatos", x: 86, y: 22 },
  { id: "n4", label: "Associações", x: 22, y: 72 },
  { id: "n5", label: "Operações", x: 50, y: 82 },
  { id: "n6", label: "Assembleias", x: 78, y: 72 },
  { id: "n7", label: "Processos", x: 38, y: 58 },
  { id: "n8", label: "Gestão", x: 62, y: 58 },
  { id: "hub", label: "xNexum", x: 50, y: 48, hub: true },
];

const edges: [string, string][] = [
  ["n1", "hub"],
  ["n2", "hub"],
  ["n3", "hub"],
  ["n4", "hub"],
  ["n5", "hub"],
  ["n6", "hub"],
  ["n7", "hub"],
  ["n8", "hub"],
  ["n1", "n7"],
  ["n3", "n8"],
  ["n4", "n5"],
  ["n2", "n6"],
];

function nodeById(id: string) {
  return nodes.find((x) => x.id === id)!;
}

export function EcosystemSection() {
  const gid = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section id="ecossistema" className="relative scroll-mt-24 border-t border-nexum-line bg-nexum-slate/25 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(197,142,88,0.08),rgba(91,159,232,0.05),transparent_52%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist">Ecossistema tecnológico</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
            Um hub que organiza relações, operações e canais em tempo real.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-nexum-mist">
            A arquitetura da xNexum foi pensada para orquestrar múltiplos públicos e processos paralelos, com trilhas
            auditáveis e integrações operacionais contínuas.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-nexum-line bg-nexum-void/40 p-6 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(156,163,175,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <svg viewBox="0 0 100 100" className="aspect-square w-full" role="img" aria-label="Diagrama de conexões">
              <defs>
                <linearGradient id={`${gid}-stroke`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(91,159,232,0.2)" />
                  <stop offset="50%" stopColor="rgba(91,159,232,0.55)" />
                  <stop offset="100%" stopColor="rgba(197,142,88,0.45)" />
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodeById(a);
                const B = nodeById(b);
                return (
                  <motion.line
                    key={`${a}-${b}`}
                    x1={A.x}
                    y1={A.y}
                    x2={B.x}
                    y2={B.y}
                    stroke={`url(#${gid}-stroke)`}
                    strokeWidth="0.35"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                );
              })}
              {nodes.map((n, i) => (
                <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
                  <motion.circle
                    r={n.hub ? 6.2 : 3.6}
                    className={n.hub ? "fill-nexum-blue stroke-white/10" : "fill-nexum-slate stroke-nexum-line"}
                    strokeWidth="0.35"
                    initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 * i }}
                  />
                  {!n.hub && (
                    <circle r="1.1" className="fill-nexum-ember/90" transform="translate(1.6 -1.6)" />
                  )}
                </g>
              ))}
            </svg>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-nexum-mist sm:grid-cols-3">
              {nodes
                .filter((n) => !n.hub)
                .map((n) => (
                  <li key={n.id} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-nexum-blue/80" />
                    {n.label}
                  </li>
                ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
