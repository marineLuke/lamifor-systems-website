const products = [
  {
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
    href: "#thread-id",
  },
  {
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
  },
];

const articles = [
  {
    title: "How I Got a Month of My Life Back",
    description:
      "A story about changing direction, reducing a punishing commute, and turning reclaimed time into something new.",
    category: "Engineering & Life",
  },
  {
    title: "Why Practical Software Still Matters",
    description:
      "Software does not need to be complicated to be valuable. Sometimes the best tools solve one frustrating problem well.",
    category: "Product Philosophy",
  },
  {
    title: "Building Thread ID",
    description:
      "The journey from a persistent workplace problem to a working iPhone application.",
    category: "Behind the Build",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b0f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(197,151,63,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(96,165,250,0.08),transparent_28%)]" />

      <header className="relative z-20 border-b border-white/10 bg-[#080b0f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c59a43]/50 bg-[#c59a43]/10 font-bold text-[#e4bb67]">
              LS
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
            href="#thread-id"
            className="rounded-md border border-[#c59a43]/60 px-4 py-2 text-sm font-medium text-[#e4bb67] transition hover:bg-[#c59a43]/10"
          >
            Explore Thread ID
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#d6a94f]" />
              Practical tools for real work
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Engineering software
              <span className="block text-[#d7aa51]">that saves time.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Lamifor Systems builds focused, dependable software for
              engineers, technicians, tradespeople, and the people who keep
              equipment working.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-md bg-[#d2a44a] px-6 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-[#e4bb67]"
              >
                View Our Products
              </a>

              <a
                href="#mission"
                className="rounded-md border border-white/15 bg-white/[0.03] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Why Lamifor
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

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-10 rounded-full bg-[#c59a43]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-2xl shadow-black/60">
              <div className="mb-6 flex items-center justify-between">
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

              <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-white/10 bg-[#05070a] px-8">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#d7aa51]/40 bg-gradient-to-br from-[#2b3037] to-[#0d1014] text-4xl shadow-xl">
                    🔩
                  </div>

                  <p className="mt-7 text-2xl font-semibold">
                    Identify fasteners with confidence.
                  </p>

                  <p className="mx-auto mt-4 max-w-sm leading-7 text-white/50">
                    Guided categories, measurements, thread details, and
                    intelligent matching in one pocket-sized tool.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/65">
                  Metric + Imperial
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/65">
                  One-time purchase
                </div>
              </div>
            </div>
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
              Skilled professionals lose countless hours searching for
              information that should be immediately available.
            </p>

            <p>
              Lamifor Systems exists to turn real workplace frustrations into
              reliable digital tools—software designed around the way people
              actually build, repair, maintain, and troubleshoot.
            </p>

            <p className="font-medium text-white">
              Built from industry experience. Refined through real-world use.
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

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {products.map((product, index) => (
            <article
              id={product.name === "Thread ID" ? "thread-id" : "vault"}
              key={product.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:border-[#c59a43]/40 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-xl">
                  {index === 0 ? "🔩" : "🔐"}
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
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#dfb45f]"
              >
                {index === 0 ? "Explore Thread ID" : "Product preview"}
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
                  href="#articles"
                >
                  Read article →
                </a>
              </article>
            ))}
          </div>
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
            <a className="hover:text-white" href="#contact">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}