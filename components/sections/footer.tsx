import Link from "next/link";
import { Logo } from "@/components/logo";

const legal = [
  { href: "/brand/xNexum_Manual_da_Marca.pdf", label: "Manual da marca" },
  { href: "#", label: "Termos" },
  { href: "#", label: "Privacidade" },
];

const social = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-24 border-t border-nexum-line bg-nexum-void py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Logo scale="footer" />
            <p className="mt-5 text-sm leading-relaxed text-nexum-mist">
              Onde conexões se tornam sistema.
            </p>
            <p className="mt-3 text-sm text-nexum-mist/80">
              <a href="mailto:contato@xnexum.com.br" className="text-nexum-snow/90 underline-offset-4 hover:underline">
                contato@xnexum.com.br
              </a>
              <br />
              São Paulo — operações remotas em todo o território nacional.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-lg">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">Institucional</p>
              <ul className="mt-4 space-y-2 text-sm text-nexum-snow/90">
                <li>
                  <Link href="#solucoes" className="transition-colors hover:text-white">
                    Plataforma
                  </Link>
                </li>
                <li>
                  <Link href="#tecnologia" className="transition-colors hover:text-white">
                    Tecnologia
                  </Link>
                </li>
                <li>
                  <Link href="#experiencia" className="transition-colors hover:text-white">
                    Experiência
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">Redes</p>
              <ul className="mt-4 space-y-2 text-sm text-nexum-snow/90">
                {social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="transition-colors hover:text-white" target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nexum-mist">Legal</p>
              <ul className="mt-4 space-y-2 text-sm text-nexum-snow/90">
                {legal.map((l) => (
                  <li key={l.label}>
                    {l.href.endsWith(".pdf") ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-nexum-line pt-8 text-xs text-nexum-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} xNexum. Todos os direitos reservados.</p>
          <p className="text-nexum-mist/70">Construído para organizações que operam com responsabilidade.</p>
        </div>
      </div>
    </footer>
  );
}
