import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/custom/legal/legal-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy • CampusCoin",
  description:
    "Learn how we collect, use, and protect your information when you use our services.",
};

const LAST_UPDATED = "October 12, 2025";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`This Privacy Policy explains what data we collect, how we use it, and your rights.`}
    >
      <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <LegalSection title="1. Information We Collect" id="collection">
        <ul className="list-disc pl-6">
          <li>
            Account Data: such as name, email, and authentication information
            you provide when creating an account.
          </li>
          <li>
            Usage Data: interactions with our app, device information, and
            diagnostic logs.
          </li>
          <li>
            Communications: messages you send to support or feedback you
            provide.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Information" id="use">
        <ul className="list-disc pl-6">
          <li>Provide, maintain, and improve the services.</li>
          <li>Communicate with you about updates, security, and support.</li>
          <li>Protect against fraud, abuse, and misuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Sharing and Disclosure" id="sharing">
        <p>
          We do not sell your personal information. We may share information
          with service providers who support our operations, or where required
          by law, or with your consent.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Retention" id="retention">
        <p>
          We retain information for as long as necessary to provide the
          services, comply with legal obligations, and resolve disputes.
          Retention periods vary based on data type and purpose.
        </p>
      </LegalSection>

      <LegalSection title="5. Your Rights" id="rights">
        <ul className="list-disc pl-6">
          <li>Access and correction of your personal information.</li>
          <li>Deletion, restriction, or objection where applicable.</li>
          <li>Portability where technically feasible.</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, contact us via the Help link in the app.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Security" id="security">
        <p>
          We implement technical and organizational measures designed to protect
          your information; however, no method of transmission or storage is
          completely secure.
        </p>
      </LegalSection>

      <LegalSection title="7. International Transfers" id="transfers">
        <p>
          Your information may be processed and stored in regions outside your
          country. We take steps to ensure appropriate safeguards are in place.
        </p>
      </LegalSection>

      <LegalSection title="8. Children’s Privacy" id="children">
        <p>
          Our services are not directed to children under the age of 13 (or as
          required by local law). We do not knowingly collect personal
          information from children.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this Policy" id="changes">
        <p>
          We may update this Privacy Policy periodically. Material changes will
          be noted here, and the “Last updated” date will be revised.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact" id="contact">
        <p>
          Questions about this Privacy Policy? Contact support via the Help link
          in the app or at{" "}
          <span>
            <Link href={"/help"} className="underline">
              campuscoin-id.vercel.app/help.
            </Link>
          </span>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
