import Link from "next/link";

type ProductPageProps = {
  name: string;
  eyebrow: string;
  status: string;
  summary: string;
  idea: string;
  icon: string;
  betaHref?: string;
  primaryActionHref?: string;
  primaryActionLabel?: string;
  secondaryActionHref?: string;
  secondaryActionLabel?: string;
  closingTitle?: string;
  closingText?: string;
  audience: string[];
  features: { title: string; text: string }[];
  steps: { number: string; title: string; text: string }[];
  screenshots?: { src: string; alt: string }[];
  reportPreview?: string;
  videoGuides: { title: string; text: string }[];
};

export default function ProductPage(props: ProductPageProps) {
  const primaryActionHref = props.primaryActionHref ?? props.betaHref;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b0f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(197,151,63,0.13),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_28%)]" />

      <header className="relative z-20 border-b border-white/10 bg-[#080b0f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Lamifor Systems home">
            <span className="flex h-12 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5">
              <img src="/lamifor-logo.png" alt="" className="h-full w-full object-contain" />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[0.18em]">LAMIFOR</span>
              <span className="block text-[10px] tracking-[0.32em] text-white/45">SYSTEMS</span>
            </span>
          </Link>
          <Link href="/#products" className="text-sm text-white/65 transition hover:text-white">← All products</Link>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[720px] max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">{props.eyebrow}</p>
          <div className="mt-7 flex items-center gap-5">
            <img src={props.icon} alt={`${props.name} icon`} className="h-20 w-20 rounded-[1.4rem] object-cover shadow-2xl" />
            <div>
              <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">{props.name}</h1>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">{props.status}</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">{props.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryActionHref && <a href={primaryActionHref} target="_blank" rel="noreferrer" className="rounded-md bg-[#d2a44a] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#e4bb67]">{props.primaryActionLabel ?? "Learn more"}</a>}
            {props.secondaryActionHref && <a href={props.secondaryActionHref} target="_blank" rel="noreferrer" className="rounded-md border border-[#d2a44a]/55 bg-[#d2a44a]/10 px-6 py-3.5 text-sm font-semibold text-[#edc875] transition hover:border-[#d2a44a] hover:bg-[#d2a44a]/15">{props.secondaryActionLabel ?? "Learn more"}</a>}
            <a href="#how-it-works" className="rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30">See how it works</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/60 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d7aa51]">The idea</p>
          <p className="mt-6 text-2xl leading-10 text-white/85">{props.idea}</p>
          <div className="mt-9 border-t border-white/10 pt-7">
            <p className="text-sm font-semibold text-white">Designed for</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {props.audience.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">What it does</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">A focused tool for a specific job.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {props.features.map((feature) => <article key={feature.title} className="rounded-2xl border border-white/10 bg-[#090c10] p-7"><h3 className="text-xl font-semibold">{feature.title}</h3><p className="mt-3 leading-7 text-white/55">{feature.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">How it works</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">From problem to useful answer.</h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {props.steps.map((step) => <article key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7"><span className="text-sm font-semibold text-[#d7aa51]">{step.number}</span><h3 className="mt-5 text-2xl font-semibold">{step.title}</h3><p className="mt-4 leading-7 text-white/55">{step.text}</p></article>)}
        </div>
      </section>

      {props.screenshots && <section className="relative border-y border-white/10 bg-white/[0.025]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">Inside the app</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">A clear guided workflow.</h2><div className="mt-14 grid gap-6 md:grid-cols-3">{props.screenshots.map((shot) => <div key={shot.src} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black p-2"><img src={shot.src} alt={shot.alt} className="h-auto w-full rounded-[1.6rem]" /></div>)}</div></div></section>}

      {props.reportPreview && <section className="relative border-y border-white/10 bg-white/[0.025]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">Survey ready</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Stop rebuilding reports by hand.</h2><p className="mt-6 text-lg leading-8 text-white/55">Enter certificate information once. Marine Certificate Tracker keeps it organized and turns the current vessel record into a clear report for renewals, service periods, and surveys.</p></div><div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3"><img src={props.reportPreview} alt="Preview of a vessel certificate report" className="h-auto w-full" /></div></div></section>}

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">How-to videos</p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Practical guides, organized by task.</h2><p className="max-w-md text-white/50">Video walkthroughs are being prepared and will live here as each guide is completed.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {props.videoGuides.map((guide) => <article key={guide.title} className="rounded-2xl border border-dashed border-white/15 bg-white/[0.025] p-7"><span className="text-xs uppercase tracking-[0.18em] text-white/35">Guide planned</span><h3 className="mt-5 text-xl font-semibold">{guide.title}</h3><p className="mt-3 leading-7 text-white/50">{guide.text}</p></article>)}
        </div>
      </section>

      <section className="relative border-t border-white/10 px-6 py-24 text-center"><h2 className="text-4xl font-semibold">{props.closingTitle ?? `Put ${props.name} to work.`}</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/55">{props.closingText ?? `${props.name} is available now on the App Store.`}</p><div className="mt-8 flex flex-wrap justify-center gap-4">{primaryActionHref && <a href={primaryActionHref} target="_blank" rel="noreferrer" className="inline-flex rounded-md bg-[#d2a44a] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#e4bb67]">{props.primaryActionLabel ?? "Learn more"}</a>}{props.secondaryActionHref && <a href={props.secondaryActionHref} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-[#d2a44a]/55 bg-[#d2a44a]/10 px-7 py-4 text-sm font-semibold text-[#edc875] transition hover:border-[#d2a44a] hover:bg-[#d2a44a]/15">{props.secondaryActionLabel ?? "Learn more"}</a>}</div></section>

      <footer className="relative border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-white/40 md:flex-row md:items-center md:justify-between lg:px-8"><p>© 2026 Lamifor Systems. All rights reserved.</p><div className="flex gap-6"><Link href="/">Home</Link><Link href="/#products">Products</Link><a href="mailto:luke@lamiforsystems.com">Support</a></div></div></footer>
    </main>
  );
}
