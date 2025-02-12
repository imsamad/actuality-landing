import { Navbar } from "@/components/hero/hero";
import { Footer } from "../page";
import { Metadata } from "next";

const TOS = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 mt-20 md:mt-36 mb-4 md:mb-12 text-gray-900">
        <h1 className="text-3xl font-bold mb-4 ">TERMS OF SERVICE</h1>
        <p className="text-gray-600  mb-4">
          <b> Effective Date:</b> December 12th, 2024
        </p>
        <p className="mb-4">
          Welcome to Actuality. These Terms of Service (“Terms”) govern your use
          of our website, platform, and related services (“Services”). By
          accessing or using our Services, you agree to these Terms. If you do
          not agree, do not use our Services.
        </p>

        <h2 className="text-xl font-bold mb-2">1. DEFINITIONS</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>“Actuality”, “we”, “us”, “our”:</b> Refers to Actuality, Inc.
          </li>
          <li>
            <b>“User”, “you”, “your”:</b> Refers to any individual or entity
            using our Services.
          </li>
          <li>
            <b>“Content”:</b> Includes all materials, documents, data, and other
            information you upload, submit, or interact with on the platform.
          </li>
          <li>
            <b>“Services”:</b> Includes our AI-powered RFP automation tools,
            software, website, and other offerings.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">
          2. ELIGIBILITY & ACCOUNT REGISTRATION
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To use our Services, you must:</li>
          <ul className="list-disc ml-6">
            <li>Be at least 18 years old.</li>
            <li>
              Provide accurate registration details and maintain account
              security.
            </li>
            <li>
              Be authorized to act on behalf of any entity you register on our
              platform.
            </li>
          </ul>
          <li>
            Actuality reserves the right to suspend or terminate accounts
            violating these requirements.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">3. ACCEPTABLE USE</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Users agree to use our Services lawfully and refrain from:</li>
          <ul className="list-disc ml-6">
            <li>Submitting false, misleading, or fraudulent information.</li>
            <li>Violating intellectual property rights.</li>
            <li>
              Disrupting system functionality, engaging in hacking, or deploying
              malicious software.
            </li>
            <li>
              Using the Services for unlawful, harassing, defamatory, or abusive
              activities.
            </li>
          </ul>
          <li>
            Actuality reserves the right to remove content or suspend accounts
            engaging in prohibited conduct.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">
          4. PAYMENT & SUBSCRIPTION TERMS
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Subscription Plans:</b> Users can subscribe to different tiers of
            services with annual payment options.
          </li>
          <li>
            <b>Billing & Auto-Renewal:</b> Subscriptions automatically renew
            annually unless canceled before the renewal date.
          </li>
          <li>
            <b>Refund Policy:</b> Payments are non-refundable, except as
            required by law.
          </li>
          <li>
            <b>Late Payments:</b> A grace period of 30 days is provided for late
            payments. Failure to pay after this period may result in service
            suspension or termination.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">
          5. INTELLECTUAL PROPERTY RIGHTS
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Ownership:</b> Actuality retains all rights, title, and interest
            in the platform, including AI models, software, and branding.
          </li>
          <li>
            <b>User Content:</b> You retain ownership of content you upload but
            grant Actuality a non-exclusive, worldwide license to process,
            store, and use it to provide Services.
          </li>
          <li>
            <b>Restrictions:</b> You may not copy, distribute, reverse-engineer,
            or exploit any part of our Services without prior authorization.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">6. DATA PRIVACY & SECURITY</h2>
        <p className="mb-4">
          Our collection and use of personal data are governed by our Privacy
          Policy. We take reasonable steps to protect user data, but we cannot
          guarantee absolute security.
        </p>

        <h2 className="text-xl font-bold mb-2">7. THIRD-PARTY INTEGRATIONS</h2>
        <p className="mb-4">
          Our Services may integrate with third-party software. Actuality is not
          responsible for third-party services’ actions, privacy policies, or
          security.
        </p>

        <h2 className="text-xl font-bold mb-2">
          8. TERMINATION & ACCOUNT SUSPENSION
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            We reserve the right to suspend or terminate accounts under these
            conditions:
          </li>
          <ul className="list-disc ml-6">
            <li>Violation of these Terms.</li>
            <li>Misuse of the platform.</li>
            <li>Non-payment of fees after the 30-day grace period.</li>
          </ul>
          <li>
            Users may terminate their accounts at any time, but no refunds will
            be issued.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">
          9. DISCLAIMERS & LIMITATIONS OF LIABILITY
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>No Warranty:</b> Actuality provides Services "AS IS" and
            disclaims all warranties, express or implied.
          </li>
          <li>
            <b>Limitation of Liability:</b> We are not liable for indirect,
            incidental, or consequential damages resulting from your use of the
            Services. Additionally, Actuality disclaims any liability for
            damages resulting from reliance on AI-generated content, including
            errors or omissions in RFP responses. In no event shall Actuality's
            total liability exceed the amount you have paid for the Services in
            the twelve (12) months preceding the event giving rise to the
            liability.
          </li>
          <li>
            <b>Service Interruptions:</b> We are not responsible for service
            downtimes caused by maintenance, cyberattacks, or external service
            providers.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">
          10. GOVERNING LAW & DISPUTE RESOLUTION
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Governing Law:</b> These Terms are governed by the laws of the
            State of Delaware, USA.
          </li>
          <li>
            <b>Arbitration Clause:</b> Any disputes will be resolved through
            binding arbitration administered by the American Arbitration
            Association in Delaware.
          </li>
          <li>
            <b>Class Action Waiver:</b> You agree to resolve disputes
            individually and waive your right to participate in class action
            lawsuits.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">11. FORCE MAJEURE</h2>
        <p className="mb-4">
          Actuality shall not be liable for any delay or failure in performance
          due to causes beyond its reasonable control, including but not limited
          to acts of God, war, terrorism, strikes, embargoes, government orders,
          or failures of internet service providers.
        </p>

        <h2 className="text-xl font-bold mb-2">12. MODIFICATION OF SERVICES</h2>
        <p className="mb-4">
          Actuality reserves the right to modify or discontinue any part of the
          Services, temporarily or permanently, with or without notice. You
          agree that Actuality will not be liable to you or any third party for
          any modification, suspension, or discontinuance of the Services.
        </p>

        <h2 className="text-xl font-bold mb-2">13. INDEMNIFICATION</h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless Actuality, its
          affiliates, officers, directors, and employees from any claims,
          damages, liabilities, and expenses arising from your use of the
          Services, violation of these Terms, or infringement of any third-party
          rights.
        </p>

        <h2 className="text-xl font-bold mb-2">14. BETA FEATURES DISCLAIMER</h2>
        <p className="mb-4">
          From time to time, Actuality may offer new 'beta' features or tools.
          Such features are provided 'as-is' and may contain errors. Actuality
          makes no warranties regarding the performance or reliability of these
          beta features.
        </p>

        <h2 className="text-xl font-bold mb-2">15. EXPORT CONTROL</h2>
        <p className="mb-4">
          From time to time, Actuality may offer new 'beta' features or tools.
          Such features are provided 'as-is' and may contain errors. Actuality
          makes no warranties regarding the performance or reliability of these
          beta features.
        </p>
        <h2 className="text-xl font-bold mb-2">16. SURVIVAL CLAUSE</h2>
        <p className="mb-4">
          Sections related to intellectual property, limitations of liability,
          dispute resolution, indemnification, and export control shall survive
          the termination of these Terms.
        </p>
        <h2 className="text-xl font-bold mb-2">17. CHANGES TO THESE TERMS</h2>
        <p className="mb-4">
          Actuality may update these Terms periodically. Continued use of our
          Services after updates constitutes acceptance.
        </p>
        <h2 className="text-xl font-bold mb-2">18. CONTACT INFORMATION</h2>
        <p className="mb-4">
          For inquiries regarding these Terms, contact us at
          <a href="mailto:hello@actuality.live" className="text-blue-500">
            {" "}
            <b> hello@actuality.live. </b>
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default TOS;
