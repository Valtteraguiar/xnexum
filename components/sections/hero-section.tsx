"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/logo";

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,520px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(91,159,232,0.24),rgba(197,142,88,0.08),transparent_58%)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-nexum-line bg-gradient-to-b from-nexum-slate/90 to-nexum-void shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)]">
        <div className="flex items-center justify-between border-b border-nexum-line px-4 py-3">
          <div className="flex items-center gap-2">
            <Logo variant="mark" className="size-7" />
            <span className="text-xs font-medium tracking-wide text-nexum-mist">Console operacional</span>
          </div>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-nexum-line" />
            <span className="size-2 rounded-full bg-nexum-line" />
            <span className="size-2 rounded-full bg-nexum-ember/80" />
          </div>
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
          <div className="border-b border-nexum-line p-4 md:border-b-0 md:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">Fluxos ativos</p>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Assembleia — quorum", s: "Em andamento" },
                { t: "Solicitações — triagem", s: "SLA estável" },
                { t: "Publicações — revisão", s: "Aguardando" },
              ].map((row) => (
                <li
                  key={row.t}
                  className="flex items-center justify-between gap-3 rounded-lg border border-nexum-line/80 bg-nexum-void/40 px-3 py-2.5"
                >
                  <span className="text-xs text-nexum-snow">{row.t}</span>
                  <span className="text-[10px] text-nexum-mist">{row.s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">Integração</p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-nexum-snow">98,4%</p>
                <p className="text-xs text-nexum-mist">sincronização entre módulos</p>
              </div>
              <div className="h-16 w-24 rounded-lg border border-nexum-line bg-[linear-gradient(135deg,rgba(91,159,232,0.18),rgba(197,142,88,0.06),transparent)] p-2">
                <div className="flex h-full flex-col justify-end gap-1">
                  <div className="h-1 w-full rounded-full bg-nexum-line" />
                  <div className="h-1 w-[72%] rounded-full bg-nexum-blue/70" />
                  <div className="h-1 w-[48%] rounded-full bg-nexum-ember/70" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Auth", "APIs", "Auditoria"].map((label) => (
                <div
                  key={label}
                  className="rounded-md border border-nexum-line bg-nexum-slate/25 px-2 py-2 text-center text-[10px] font-medium text-nexum-mist"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(91,159,232,0.2),rgba(197,142,88,0.06),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(to_bottom,rgba(12,15,20,0.92),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(156,163,175,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist"
            >
              Infraestrutura digital institucional
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-nexum-snow sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            >
              Conectando pessoas, instituições e operações em um único ecossistema digital.
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-nexum-mist sm:text-lg"
            >
              A xNexum desenvolve plataformas e sistemas inteligentes capazes de transformar relações
              institucionais complexas em fluxos digitais organizados, seguros e integrados.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#solucoes"
                className="inline-flex h-12 items-center justify-center rounded-full bg-nexum-snow px-7 text-sm font-semibold text-nexum-void transition-[transform,background-color] hover:bg-white active:scale-[0.98]"
              >
                Conhecer plataforma
              </Link>
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-full border border-nexum-line bg-nexum-slate/20 px-7 text-sm font-medium text-nexum-snow transition-[border-color,background-color] hover:border-nexum-mist/40 hover:bg-nexum-slate/35"
              >
                Solicitar demonstração
              </Link>
            </motion.div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-10 text-sm italic text-nexum-mist/90"
            >
              Onde conexões se tornam sistema.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -left-8 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border border-nexum-line/60 lg:block"
            />
            <div
              aria-hidden
              className="absolute -right-4 -top-6 hidden size-24 rounded-full border border-nexum-ember/25 lg:block"
            />
            <HeroMockup />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-nexum-line px-5 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-nexum-mist">
          SaaS multi-tenant · GovTech · operações críticas · rastreabilidade ponta a ponta
        </p>
      </div>
    </section>
  );
}
