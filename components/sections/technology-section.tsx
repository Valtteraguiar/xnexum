"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  "Arquitetura orientada a serviços",
  "Escalabilidade horizontal",
  "Segurança operacional e segregação",
  "Integração entre sistemas legados e modernos",
  "Cloud infrastructure com observabilidade",
  "SaaS multi-tenant com políticas por tenant",
  "Dashboards com dados confiáveis",
  "Automação operacional com exceções tratadas",
  "Autenticação forte e sessões auditáveis",
  "Rastreabilidade ponta a ponta",
  "Experiência mobile responsiva",
  "APIs versionadas e contratos estáveis",
];

export function TechnologySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="tecnologia" className="scroll-mt-24 border-t border-nexum-line bg-nexum-slate/20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist">Tecnologia</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
              Engenharia pensada para operações que não podem falhar.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-nexum-mist">
              Da modelagem de domínio à entrega contínua, priorizamos consistência, segurança e clareza de integração —
              o mesmo rigor que se espera de infraestrutura crítica.
            </p>
            <ul className="mt-10 space-y-3">
              {pillars.map((text, i) => (
                <motion.li
                  key={text}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: 0.02 * i }}
                  className="flex gap-3 text-sm text-nexum-mist"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-nexum-ember/80" />
                  <span className="leading-relaxed text-nexum-snow/90">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-nexum-line bg-nexum-void/60 p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(156,163,175,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.06)_1px,transparent_1px)] [background-size:20px_20px]"
            />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">
                  Blueprint de camadas
                </span>
                <span className="rounded-full border border-nexum-line px-2 py-0.5 text-[10px] text-nexum-mist">
                  production
                </span>
              </div>
              <div className="grid gap-3">
                <div className="rounded-xl border border-nexum-line bg-nexum-slate/30 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-nexum-snow">Gateway & políticas</span>
                    <span className="text-[10px] text-nexum-mist">edge</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-nexum-line/80">
                    <div className="h-full w-[62%] rounded-full bg-nexum-blue/80" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-nexum-line bg-nexum-slate/20 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nexum-mist">Core domain</p>
                    <div className="mt-3 space-y-2">
                      <div className="h-1.5 rounded bg-nexum-line/90" />
                      <div className="h-1.5 w-4/5 rounded bg-nexum-line/70" />
                      <div className="h-1.5 w-2/3 rounded bg-nexum-line/50" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-nexum-line bg-nexum-slate/20 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nexum-mist">Integrações</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded-md border border-dashed border-nexum-line/80" />
                      <div className="aspect-square rounded-md border border-nexum-line bg-nexum-blue/10" />
                      <div className="aspect-square rounded-md border border-dashed border-nexum-line/80" />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-nexum-line bg-gradient-to-r from-nexum-slate/40 to-nexum-void/40 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-nexum-snow">Observabilidade unificada</p>
                      <p className="text-[11px] text-nexum-mist">logs · traces · métricas · alertas</p>
                    </div>
                    <div className="flex gap-1">
                      {[40, 65, 52, 78].map((w) => (
                        <div key={w} className="flex h-10 w-2 items-end justify-center rounded-sm bg-nexum-line/50">
                          <div
                            className="w-full rounded-sm bg-nexum-ember/70"
                            style={{ height: `${w}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
