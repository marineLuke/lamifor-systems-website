const products = [
  {
    id: "thread-id",
    name: "Thread ID",
    status: "TestFlight Beta",
    description:
      "A guided fastener identification tool for engineers, technicians, tradespeople, and anyone who needs the right fastener information quickly.",
    features: [
      "Metric and imperial identification",
      "Guided measurement workflow",
      "Works offline",
      "No subscription",
    ],
    href: "https://testflight.apple.com/join/rV6gsgqb",
    cta: "Join the beta",
    iconImage: "/thread-id-icon.png",
    external: true,
  },
  {
    id: "certificate-tracker",
    name: "Marine Certificate Tracker",
    status: "Beta",
    description:
      "A vessel-focused system for organizing marine certificates, tracking renewal dates, and preparing service records for surveys.",
    features: [
      "Company, fleet, and vessel organization",
      "Expiry dates and renewal reminders",
      "Certificate and service report storage",
      "Survey-ready reports and service packs",
    ],
    href: "https://testflight.apple.com/join/Ste9CEP3",
    cta: "Join the beta",
    iconImage: "/certificate-tracker-icon.png",
    external: true,
  },
  {
    id: "vault",
    name: "Vault",
    status: "In Development",
    description:
      "A secure, offline-first system for organizing critical equipment software, passwords, records, and technical information.",
    features: [
      "Local device storage",
      "Face ID protection",
      "Designed for industrial teams",
      "Built around real workflows",
    ],
    href: "#vault",
    cta: "Product preview",
    icon: "🔐",
    external: false,
  },
];

const articles = [
  {
    title: "How I Got a Month of My Life Back",
    description:
      "A story about changing direction, reducing a punishing commute, and turning reclaimed time into something new.",
    category: "Engineering & Life",
    href: "https://www.linkedin.com/pulse/how-i-got-month-my-life-back-reduced-carbon-footprint-kondratowicz-hhkac",
    external: true,
  },
  {
    title: "Why Practical Software Still Matters",
    description:
      "Software does not need to be complicated to be valuable. Sometimes the best tools solve one frustrating problem well.",
    category: "Product Philosophy",
    href: "#articles",
    external: false,
  },
  {
    title: "Building Thread ID",
    description:
      "The journey from a persistent workplace problem to a working iPhone application.",
    category: "Behind the Build",
    href: "https://www.linkedin.com/posts/lamifor-systems_threadid-marineengineering-engineering-activity-7486900854386733056-BiRp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAgQzYsBpAiLkockLtZd6ept2ufY3pvcSXw",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b0f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(197,151,63,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(96,165,250,0.08),transparent_28%)]" />

      <header className="relative z-20 border-b border-white/10 bg-[#080b0f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5">
              <img
                src="/lamifor-logo.png"
                alt="Lamifor Systems Venturi logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.18em]">
                LAMIFOR
              </p>
              <p className="text-[10px] tracking-[0.32em] text-white/45">
                SYSTEMS
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#products">
              Products
            </a>
            <a className="transition hover:text-white" href="#mission">
              Mission
            </a>
            <a className="transition hover:text-white" href="#articles">
              Articles
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="https://testflight.apple.com/join/rV6gsgqb"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[#c59a43]/60 px-4 py-2 text-sm font-medium text-[#e4bb67] transition hover:bg-[#c59a43]/10"
          >
            Join Thread ID Beta
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#d6a94f]" />
              Designed by engineers. Built for the field.
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Practical engineering software
              <span className="block text-[#d7aa51]">built from real experience.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Lamifor Systems turns real workplace frustrations into focused,
              dependable tools for engineers, technicians, mechanics,
              tradespeople, and the people who keep equipment working.
            </p>

            <div className="mt-10">
              <a
                href="https://testflight.apple.com/join/rV6gsgqb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md bg-[#d2a44a] px-6 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-[#e4bb67]"
              >
                Join the Thread ID Beta
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold text-white">Offline</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Ready anywhere
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Focused</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  No clutter
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Practical</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Built for work
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-10 rounded-full bg-[#c59a43]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4 shadow-2xl shadow-black/70 sm:p-6">
              <div className="mb-5 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d7aa51]">
                    First Product
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">Thread ID</h2>
                </div>

                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                  TestFlight Beta
                </span>
              </div>

              <div className="relative mx-auto max-w-[470px] overflow-hidden rounded-[2.6rem] border border-white/15 bg-black shadow-2xl shadow-black">
                <img
                  src="/thread-id-app.jpg"
                  alt="Thread ID fastener identification app"
                  className="block h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] ring-1 ring-inset ring-white/10" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/65">
                  Metric + Imperial
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/65">
                  Guided workflow
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/65">
                  Works offline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="thread-id-details"
        className="relative border-y border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
                Why Thread ID?
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Replace guesswork with a guided answer.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/60">
              <p>
                Engineers, mechanics, technicians, and tradespeople lose time
                identifying unfamiliar fasteners, comparing thread standards,
                and searching through incomplete references.
              </p>
              <p>
                Thread ID guides the user through fastener type, thread details,
                and measurements so the most likely match can be identified
                quickly and confidently.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🔩",
                title: "Identify Fasteners",
                text: "A focused workflow designed for real shop and field work.",
              },
              {
                icon: "📐",
                title: "Guided Measurements",
                text: "Clear metric and imperial measurement steps.",
              },
              {
                icon: "📷",
                title: "Photo Assisted",
                text: "Use visual information to help narrow the likely result.",
              },
              {
                icon: "⚡",
                title: "Works Offline",
                text: "Useful in workshops, engine rooms, and remote work areas.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#090c10] p-7 transition hover:-translate-y-1 hover:border-[#c59a43]/35"
              >
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/50">{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:grid-cols-3">
            <p>
              <span className="font-semibold text-white">Designed by an engineer</span>
              <br />
              Built from firsthand industry experience.
            </p>
            <p>
              <span className="font-semibold text-white">Built for practical work</span>
              <br />
              For mechanics, technicians, and tradespeople.
            </p>
            <p>
              <span className="font-semibold text-white">No subscription planned</span>
              <br />
              A focused tool without unnecessary recurring fees.
            </p>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="relative border-y border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
              Our Mission
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Less searching.
              <br />
              More solving.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/60">
            <p>
              Too much time at work is lost searching for information, keeping
              track of paperwork, and dealing with admin that gets in the way
              of the actual job.
            </p>

            <p>
              Lamifor Systems builds practical tools to make that work a little
              easier—based on real problems I&apos;ve encountered and designed
              around how people actually work.
            </p>

            <p className="font-medium text-white">
              Built from experience. Made to be useful.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
            Products
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Purpose-built engineering tools.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/55">
            Each Lamifor product begins with a specific real-world problem and
            is designed to solve it without unnecessary complexity.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {products.map((product) => (
            <article
              id={product.id}
              key={product.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:border-[#c59a43]/40 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-xl">
                  {product.iconImage ? (
                    <img
                      src={product.iconImage}
                      alt=""
                      className="h-full w-full rounded-xl object-cover"
                    />
                  ) : (
                    product.icon
                  )}
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  {product.status}
                </span>
              </div>

              <h3 className="mt-9 text-3xl font-semibold">{product.name}</h3>

              <p className="mt-5 leading-7 text-white/55">
                {product.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <span className="text-[#d7aa51]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noreferrer" : undefined}
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#dfb45f]"
              >
                {product.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="articles"
        className="relative border-y border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
                Ideas & Articles
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                From the workshop.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/55">
                Engineering lessons, product development stories, and ideas
                about building tools that make work better.
              </p>
            </div>

            <a
              href="#articles"
              className="text-sm font-semibold text-[#dfb45f]"
            >
              View all articles →
            </a>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-2xl border border-white/10 bg-[#090c10] p-7 transition hover:border-white/20"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#d7aa51]">
                  {article.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  {article.description}
                </p>

                <a
                  className="mt-8 inline-block text-sm font-semibold text-white/75"
                  href={article.href}
                  target={article.external ? "_blank" : undefined}
                  rel={article.external ? "noreferrer" : undefined}
                >
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10">
          <img
            src="/lamifor-brandmark.jpg"
            alt="Lamifor Systems full brand mark"
            className="mx-auto w-full max-w-5xl rounded-2xl object-cover"
          />
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
          Lamifor Systems
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Built for people who keep the world working.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55">
          Thread ID is now entering beta testing. Product news, support
          information, and future releases will be available here.
        </p>

        <a
          href="mailto:support@lamiforsystems.com"
          className="mt-10 inline-flex rounded-md bg-[#d2a44a] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#e4bb67]"
        >
          Contact Lamifor Systems
        </a>
      </section>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/40 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Lamifor Systems. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <a className="hover:text-white" href="#products">
              Products
            </a>
            <a className="hover:text-white" href="#articles">
              Articles
            </a>
            <a className="hover:text-white" href="#contact">
              Support
            </a>
            <a className="hover:text-white" href="/thread-id/privacy">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
