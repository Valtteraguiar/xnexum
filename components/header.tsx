"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const nav = [
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#experiencia", label: "Experiência" },
];

export function Header() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-nexum-line bg-nexum-void/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link href="/" className="rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-nexum-blue">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-nexum-mist transition-colors hover:text-nexum-snow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contato"
            className="rounded-full px-4 py-2 text-sm text-nexum-mist transition-colors hover:text-nexum-snow"
          >
            Contato
          </Link>
          <Link
            href="#contato"
            className="rounded-full bg-nexum-blue px-4 py-2 text-sm font-semibold text-nexum-void shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[transform,background-color] hover:bg-nexum-blue-hover active:scale-[0.98]"
          >
            Solicitar demonstração
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-nexum-line bg-nexum-slate/30 text-nexum-snow md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-nexum-snow transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-nexum-snow transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-nexum-snow transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-nexum-line bg-nexum-void/95 px-5 py-4 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-nexum-snow"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="#contato" className="rounded-lg px-3 py-3 text-nexum-mist" onClick={() => setOpen(false)}>
                Contato
              </Link>
              <Link
                href="#contato"
                className="mt-2 rounded-full bg-nexum-blue px-4 py-3 text-center text-sm font-semibold text-nexum-void"
                onClick={() => setOpen(false)}
              >
                Solicitar demonstração
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
