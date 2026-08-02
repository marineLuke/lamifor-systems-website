import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thread ID Privacy Policy | Lamifor Systems",
  description:
    "Privacy policy for the Thread ID mobile application by Lamifor Systems.",
};

const sections = [
  {
    title: "Information the app collects",
    content:
      "Thread ID does not collect, transmit, sell, rent, or share personal information or usage data. Information entered while identifying a fastener is processed on your device and is not sent to Lamifor Systems.",
  },
  {
    title: "Accounts and tracking",
    content:
      "Thread ID does not require an account. The app does not use advertising trackers, analytics services, cross-app tracking, or behavioural profiling.",
  },
  {
    title: "Purchases",
    content:
      "Purchases and downloads are processed by Apple through the App Store. Lamifor Systems does not receive your payment-card information. Apple handles information associated with your App Store transaction under Apple’s own privacy practices.",
  },
  {
    title: "Contacting support",
    content:
      "If you contact Lamifor Systems for support, you may voluntarily provide information such as your name, email address, device details, or a description of the issue. We use that information only to respond to your request and retain it only as long as reasonably necessary to provide support or meet legal obligations.",
  },
  {
    title: "Children’s privacy",
    content:
      "Thread ID is a general-purpose reference tool and is not designed to collect information from children. Because the app does not collect information from users, it does not knowingly collect personal information from children.",
  },
  {
    title: "Security",
    content:
      "Because Thread ID does not operate a user-data server or transmit identification inputs to Lamifor Systems, that information remains on your device and is protected by the security features of your device and operating system.",
  },
  {
    title: "Changes to this policy",
    content:
      "We may update this policy if Thread ID’s features or data practices change. The revised policy will be posted on this page with a new effective date. If the app begins collecting data in the future, we will update both this policy and the App Store privacy information before that collection begins.",
  },
];

export default function ThreadIdPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(197,151,63,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(96,165,250,0.08),transparent_28%)]" />

      <header className="relative border-b border-white/10 bg-[#080b0f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5">
              <img
                src="/lamifor-logo.png"
                alt="Lamifor Systems"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em]">
              LAMIFOR SYSTEMS
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Back to website
          </Link>
        </nav>
      </header>

      <article className="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
          Lamifor Systems
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          Thread ID Privacy Policy
        </h1>
        <p className="mt-5 text-white/45">Effective August 2, 2026</p>

        <p className="mt-10 text-lg leading-8 text-white/65">
          Thread ID is developed and operated by Lamifor Systems. We designed
          Thread ID to work without user accounts, advertising, analytics, or a
          remote server.
        </p>

        <div className="mt-14 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-white/60">{section.content}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.035] p-7">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 leading-7 text-white/60">
            Lamifor Systems
            <br />
            Campbell River, British Columbia, Canada
            <br />
            <a
              className="text-[#dfb45f] hover:text-[#e4bb67]"
              href="mailto:support@lamiforsystems.com"
            >
              support@lamiforsystems.com
            </a>
          </p>
        </section>
      </article>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lamifor Systems. All rights reserved.</p>
          <Link className="hover:text-white" href="/">
            Lamifor Systems home
          </Link>
        </div>
      </footer>
    </main>
  );
}
