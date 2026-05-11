"use client";

import { motion, useReducedMotion } from "framer-motion";

function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-nexum-line bg-nexum-slate/20">
      <div className="flex items-center justify-between border-b border-nexum-line px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">{subtitle}</p>
          <p className="text-sm font-medium text-nexum-snow">{title}</p>
        </div>
        <div className="flex gap-1">
          <span className="size-1.5 rounded-full bg-nexum-line" />
          <span className="size-1.5 rounded-full bg-nexum-line" />
        </div>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experiencia" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nexum-mist">Experiência digital</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-nexum-snow sm:text-4xl">
            Interfaces corporativas limpas — para times internos e públicos externos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-nexum-mist">
            O produto se comporta como plataforma madura: hierarquia clara, estados explícitos e fluxos administrativos
            que reduzem atrito operacional.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <Panel title="Painel administrativo" subtitle="Multiusuário · papéis">
              <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-3">
                  <div className="rounded-lg border border-nexum-line bg-nexum-void/40 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-nexum-snow">Fila de aprovações</span>
                      <span className="rounded-full bg-nexum-ember/15 px-2 py-0.5 text-[10px] text-nexum-ember">
                        3 pendentes
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between rounded-md border border-nexum-line/80 px-2 py-2">
                          <div className="h-1.5 w-24 rounded bg-nexum-line" />
                          <div className="h-1.5 w-10 rounded bg-nexum-blue/40" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Usuários", "Tenants", "Políticas"].map((label) => (
                      <div key={label} className="rounded-lg border border-nexum-line bg-nexum-slate/25 px-2 py-3 text-center">
                        <div className="mx-auto h-6 w-6 rounded-md border border-nexum-line/80" />
                        <p className="mt-2 text-[10px] text-nexum-mist">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-nexum-line bg-gradient-to-b from-nexum-blue/10 to-transparent p-3">
                  <p className="text-xs font-medium text-nexum-snow">Atividade recente</p>
                  <div className="mt-4 space-y-3">
                    {["Sessão validada", "Webhook entregue", "Job concluído"].map((row, idx) => (
                      <div key={row} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-nexum-blue" />
                        <div>
                          <p className="text-xs text-nexum-snow">{row}</p>
                          <p className="text-[10px] text-nexum-mist">há {12 + idx * 4} min</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="flex flex-col gap-4"
          >
            <Panel title="Acesso institucional" subtitle="Login · MFA">
              <div className="space-y-3">
                <div className="rounded-lg border border-nexum-line bg-nexum-void/50 px-3 py-2 text-[11px] text-nexum-mist">
                  e-mail institucional
                </div>
                <div className="rounded-lg border border-nexum-line bg-nexum-void/50 px-3 py-2 text-[11px] text-nexum-mist">
                  senha ou SSO
                </div>
                <div className="rounded-lg bg-nexum-blue px-3 py-2 text-center text-xs font-semibold text-nexum-void">
                  Entrar
                </div>
                <p className="text-[10px] leading-relaxed text-nexum-mist">
                  Sessões com contexto de tenant e registro de dispositivo.
                </p>
              </div>
            </Panel>
            <Panel title="Mobile operacional" subtitle="Campo · notificações">
              <div className="flex items-center gap-3">
                <div className="relative mx-auto w-[46%] max-w-[140px] rounded-[1.25rem] border border-nexum-line bg-nexum-void p-2 shadow-inner">
                  <div className="mb-2 flex justify-center">
                    <div className="h-1 w-10 rounded-full bg-nexum-line" />
                  </div>
                  <div className="space-y-2 rounded-lg bg-nexum-slate/40 p-2">
                    <div className="h-1.5 w-full rounded bg-nexum-line" />
                    <div className="h-1.5 w-3/4 rounded bg-nexum-line/70" />
                    <div className="mt-2 h-16 rounded-md border border-nexum-line/80 bg-nexum-blue/5" />
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-nexum-mist">
                  Ações críticas com confirmação e trilha sincronizada ao núcleo.
                </p>
              </div>
            </Panel>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-4"
        >
          <Panel title="Portal de solicitações" subtitle="Protocolo · anexos · SLA">
            <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
              <div className="rounded-xl border border-nexum-line bg-nexum-void/35 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-nexum-line px-2 py-0.5 text-[10px] text-nexum-mist">
                    aberto
                  </span>
                  <span className="rounded-full border border-nexum-line px-2 py-0.5 text-[10px] text-nexum-mist">
                    aguardando documento
                  </span>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  <div className="rounded-lg border border-dashed border-nexum-line/90 p-6 text-center text-[11px] text-nexum-mist">
                    arraste arquivos
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded bg-nexum-line/80" />
                    <div className="h-2 w-5/6 rounded bg-nexum-line/60" />
                    <div className="h-2 w-2/3 rounded bg-nexum-line/40" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-nexum-line bg-nexum-slate/25 p-4">
                <p className="text-xs font-medium text-nexum-snow">Linha do tempo</p>
                <div className="mt-4 space-y-3">
                  {["Recebido", "Análise", "Despacho"].map((step, i) => (
                    <div key={step} className="flex gap-2">
                      <div className="flex flex-col items-center">
                        <span className={`size-2 rounded-full ${i === 0 ? "bg-nexum-blue" : "bg-nexum-line"}`} />
                        {i < 2 && <span className="mt-0.5 h-6 w-px bg-nexum-line" />}
                      </div>
                      <div>
                        <p className="text-xs text-nexum-snow">{step}</p>
                        <p className="text-[10px] text-nexum-mist">registro imutável</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </motion.div>
      </div>
    </section>
  );
}
