import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="pt-44 pb-20 md:pt-56 md:pb-28">
      <div className="container-luxe grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-8 text-6xl md:text-8xl leading-[0.98] font-light">{title}</h1></Reveal>
        </div>
        {intro && (
          <Reveal delay={0.2} className="md:col-span-4">
            <p className="text-muted-foreground leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
