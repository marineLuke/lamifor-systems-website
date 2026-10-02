import type { Metadata } from "next";
import ProductPage from "../components/product-page";

export const metadata: Metadata = {
  title: "Marine Certificate Tracker | Lamifor Systems",
  description:
    "Available on iOS and Android. Automate certificate expiry tracking, reminders, records, and survey-ready service packs with Marine Certificate Tracker.",
};

export default function CertificateTrackerPage() {
  return (
    <ProductPage
      name="Marine Certificate Tracker"
      eyebrow="Vessel compliance organization"
      status="Available on iOS & Android"
      icon="/certificate-tracker-icon.png"
      primaryActionHref="https://apps.apple.com/ca/app/marine-certificate-tracker/id6796863986"
      primaryActionLabel="Download on the App Store"
      secondaryActionHref="https://play.google.com/store/apps/details?id=com.lamiforsystems.marinecertificatetracker"
      secondaryActionLabel="Get it on Google Play"
      closingTitle="Put Marine Certificate Tracker to work."
      closingText="Available for iOS on the App Store and Android on Google Play. Download Marine Certificate Tracker and keep your vessel records ready for the next survey."
      summary="Stop managing vessel certificates through fragile spreadsheets, broken macros, and scattered files. Marine Certificate Tracker gives your team one simple workflow and automates the repetitive work around expiry dates, reminders, records, and survey preparation."
      idea="Certificate spreadsheets only work when every macro keeps working and every person enters every detail correctly. One missed field, broken formula, or outdated copy can leave critical information hidden. Marine Certificate Tracker replaces that fragile process with guided data entry, automatic tracking, and a clear record for every vessel."
      audience={[
        "Vessel owners",
        "Marine engineers",
        "Fleet managers",
        "Technical superintendents",
        "Survey preparation teams",
      ]}
      features={[
        { title: "Consistent data entry", text: "A guided workflow helps every user capture the right certificate details in the right place—without relying on spreadsheet knowledge." },
        { title: "Automatic expiry tracking", text: "Due dates, renewal status, and reminders stay visible automatically, so the team knows what needs attention before it becomes urgent." },
        { title: "One reliable record", text: "Keep certificates, service reports, dates, and vessel information together instead of spread across folders and competing spreadsheet copies." },
        { title: "Automated service packs", text: "Turn the information already in the app into clear, survey-ready reports and service packs without rebuilding them by hand." },
      ]}
      steps={[
        { number: "01", title: "Enter it once", text: "Add the vessel and certificate details through a simple, consistent workflow that reduces missing or incorrectly entered data." },
        { number: "02", title: "Let the app track it", text: "The app organizes the record, monitors expiry dates, and keeps upcoming renewals and supporting documents visible." },
        { number: "03", title: "Generate what you need", text: "Create useful reports and service packs from the same up-to-date information when survey or renewal work begins." },
      ]}
      reportPreview="/certificate-report-preview.png"
      demoDownloads={[
        { title: "App-exported certificate report", text: "A certificate expiration report exported directly from Marine Certificate Tracker, showing a vessel’s certificate name and expiry date.", href: "/marine-certificate-tracker-report.pdf", label: "Download report PDF" },
      ]}
      tutorialVideo={{
        src: "/marine-certificate-tracker-tutorial.mp4",
        poster: "/certificate-report-preview.png",
        title: "Marine Certificate Tracker: complete tutorial",
        text: "Learn how to set up your company and vessels, add certificate records, manage reminders, and keep supporting documents organized in one secure workflow. Download the app-exported certificate report above to see the report format.",
      }}
      videoGuides={[
        { title: "Set up a vessel", text: "Create the company, fleet, and vessel structure before adding certificate records." },
        { title: "Add and renew a certificate", text: "Enter dates, attach the certificate, and update the record after renewal." },
        { title: "Prepare for a survey", text: "Review upcoming expiries and produce a clear report for survey planning." },
      ]}
    />
  );
}
