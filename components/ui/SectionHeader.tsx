import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-10 mb-16 md:mb-24">
      <Reveal className="md:col-span-3 md:pt-3">
        <p className="label">
          <span className="text-smoke">{index}</span>
          <span className="mx-3 text-smoke">/</span>
          {label}
        </p>
      </Reveal>
      <Reveal delay={80} className="md:col-span-9">
        <h2 className="display text-[clamp(2.75rem,8vw,6.5rem)]">{title}</h2>
      </Reveal>
    </div>
  );
}
