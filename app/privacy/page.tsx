import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Lamifor Systems",
  description:
    "Privacy information for Marine Certificate Tracker, Thread ID, and Lamifor Systems.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080b0f] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51] transition hover:text-[#e4bb67]"
          >
            Lamifor Systems
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7aa51]">
          Lamifor Systems
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-base text-white/50">
          Effective August 13, 2026
        </p>

        <div className="mt-12 space-y-12 text-base leading-8 text-white/70 sm:text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4">
              Lamifor Systems builds practical software with privacy in mind.
              Marine Certificate Tracker and Thread ID do not require an
              account, do not contain advertising or tracking technology, and
              do not transmit personal or operational data to Lamifor Systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Marine Certificate Tracker
            </h2>
            <p className="mt-4">
              Vessel details, certificate records, reminder settings,
              attachments, service-provider information, and related app data
              are stored locally on the user&apos;s device. Lamifor Systems does
              not receive or collect this information.
            </p>
            <p className="mt-4">
              The app allows users to export, import, email, save, or share
              information. These actions occur only when initiated by the user
              and may involve services or recipients selected by the user.
              Those services operate under their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Thread ID</h2>
            <p className="mt-4">
              Thread and reference information created in Thread ID is stored
              locally on the user&apos;s device. Lamifor Systems does not receive
              or collect this information. Any save, export, or sharing action
              is initiated and controlled by the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Device permissions
            </h2>
            <p className="mt-4">
              An app may request access to device features such as files,
              photos, or notifications when needed for a feature selected by
              the user. Permission can be declined or managed in the device&apos;s
              settings. Lamifor Systems does not use these permissions to
              collect user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Data retention and deletion
            </h2>
            <p className="mt-4">
              Because app data is stored locally, users control its retention.
              Records can be removed using available app controls. Removing an
              app from a device may also remove its locally stored data, subject
              to the device&apos;s backup and restore settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Changes to this policy
            </h2>
            <p className="mt-4">
              This policy may be updated when our apps or privacy practices
              change. The effective date above identifies the latest revision.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4">
              Questions about this policy or our apps can be sent to{" "}
              <a
                href="mailto:support@lamiforsystems.com"
                className="font-medium text-[#d7aa51] underline decoration-[#d7aa51]/40 underline-offset-4 hover:text-[#e4bb67]"
              >
                support@lamiforsystems.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
