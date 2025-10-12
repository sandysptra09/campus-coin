import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/custom/legal/legal-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions • CampusCoin",
  description: "Read the Terms & Conditions that govern your use of our services and website.",
};

const LAST_UPDATED = "October 12, 2025";

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description={`Please read these Terms & Conditions carefully before using our services. Last updated: ${LAST_UPDATED}.`}
    >
      <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <LegalSection title="1. Acceptance of Terms" id="acceptance">
        <p>
          By accessing or using our services, you agree to be bound by these
          Terms & Conditions and our Privacy Policy. If you do not agree to
          these terms, do not use the services.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility" id="eligibility">
        <p>
          You must be at least the age of majority in your jurisdiction to use
          the services. By using the services, you represent and warrant that
          you meet the eligibility requirements.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts" id="accounts">
        <p>
          You are responsible for safeguarding your account credentials and for
          all activities that occur under your account. Notify us immediately of
          any unauthorized use.
        </p>
      </LegalSection>

      <LegalSection title="4. Acceptable Use" id="acceptable-use">
        <ul className="list-disc pl-6">
          <li>No unlawful, harmful, or abusive behavior.</li>
          <li>No attempts to disrupt or compromise the platform.</li>
          <li>No infringement of intellectual property or privacy rights.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual Property" id="ip">
        <p>
          All content, features, and functionality are owned by us or our
          licensors and are protected by applicable intellectual property laws.
          You may not use our marks without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-Party Services" id="third-parties">
        <p>
          Our services may link to or integrate with third-party services. We
          are not responsible for third-party content, policies, or practices.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimers" id="disclaimers">
        <p>
          The services are provided on an “as is” and “as available” basis
          without warranties of any kind, express or implied, to the fullest
          extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability" id="liability">
        <p>
          To the maximum extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          loss of profits or revenues.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnification" id="indemnification">
        <p>
          You agree to indemnify and hold us harmless from any claims,
          liabilities, damages, and expenses arising from your use of the
          services or violation of these terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to Terms" id="changes">
        <p>
          We may update these Terms & Conditions from time to time. Changes take
          effect upon posting. Your continued use of the services constitutes
          acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law" id="law">
        <p>
          These terms are governed by the laws applicable in our principal place
          of business, without regard to conflict of law provisions.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact" id="contact">
        <p>
          Questions about these Terms & Conditions? Contact us via the Help link
          in the app or at{" "}
          <span>
            <Link href={'/help'} className="underline">campuscoin-id.vercel.app/help.</Link>
          </span>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
