import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  /** Logotipo para fundo escuro (branco) ou claro (preto), alinhado ao manual. */
  on?: "dark" | "light";
  priority?: boolean;
  /** Altura do lockup horizontal (marca completa). */
  scale?: "header" | "footer";
};

const src = {
  dark: {
    full: "/brand/xnexum_logo_white.png",
    mark: "/brand/xnexum_symbol_white.png",
  },
  light: {
    full: "/brand/xnexum_logo_black.png",
    mark: "/brand/xnexum_symbol_black.png",
  },
} as const;

const lockupClass = {
  header: "h-8 w-auto object-contain object-left sm:h-9",
  footer: "h-9 w-auto object-contain object-left sm:h-10",
} as const;

export function Logo({
  className = "",
  variant = "full",
  on = "dark",
  priority = false,
  scale = "header",
}: LogoProps) {
  const s = src[on];

  if (variant === "mark") {
    return (
      <Image
        src={s.mark}
        alt=""
        width={320}
        height={320}
        priority={priority}
        className={`shrink-0 object-contain ${className || "size-9"}`}
        aria-hidden
      />
    );
  }

  return (
    <span className={`inline-flex max-w-full items-center ${className}`}>
      <Image
        src={s.full}
        alt="xNexum"
        width={970}
        height={460}
        sizes="(max-width: 640px) 160px, 200px"
        priority={priority}
        className={lockupClass[scale]}
      />
    </span>
  );
}
