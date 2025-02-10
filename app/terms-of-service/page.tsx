import { Navbar } from "@/components/hero/hero";
import { Footer } from "../page";

const TOS = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20 md:mt-36 mb-4 md:mb-12 text-gray-900">
          <div className="max-w-4xl mx-auto p-6 rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-center mb-6">TERMS OF SERVICE</h1>
            <p className="text-gray-600 text-center mb-4">Effective Date: December 12th, 2024</p>

            <p className="mb-4">Welcome to Actuality. These Terms of Service (“Terms”) govern your use of our website, platform, and related services (“Services”). By accessing or using our Services, you agree to these Terms. If you do not agree, do not use our Services.</p>

            <h2 className="text-xl font-semibold mt-6">1. DEFINITIONS</h2>
            <ul className="list-disc ml-6">
                  <li>“Actuality”, “we”, “us”, “our”: Refers to Actuality, Inc.</li>
                  <li>“User”, “you”, “your”: Refers to any individual or entity using our Services.</li>
                  <li>“Content”: Includes all materials, documents, data, and other information you upload, submit, or interact with on the platform.</li>
                  <li>“Services”: Includes our AI-powered RFP automation tools, software, website, and other offerings.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">2. ELIGIBILITY & ACCOUNT REGISTRATION</h2>
              <ul className="list-disc ml-6">
                  <li>Be at least 18 years old.</li>
                  <li>Provide accurate registration details and maintain account security.</li>
                  <li>Be authorized to act on behalf of any entity you register on our platform.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">3. ACCEPTABLE USE</h2>
              <p className="mb-4">Users agree to use our Services lawfully and refrain from:</p>
              <ul className="list-disc ml-6">
                  <li>Submitting false, misleading, or fraudulent information.</li>
                  <li>Violating intellectual property rights.</li>
                  <li>Disrupting system functionality, engaging in hacking, or deploying malicious software.</li>
                  <li>Using the Services for unlawful, harassing, defamatory, or abusive activities.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">4. PAYMENT & SUBSCRIPTION TERMS</h2>
              <ul className="list-disc ml-6">
                  <li>Subscription Plans: Users can subscribe to different tiers of services with annual payment options.</li>
                  <li>Billing & Auto-Renewal: Subscriptions automatically renew annually unless canceled before the renewal date.</li>
                  <li>Refund Policy: Payments are non-refundable, except as required by law.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">5. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p className="mb-4">Actuality retains ownership of the platform, including AI models, software, and branding.</p>

              <h2 className="text-xl font-semibold mt-6">6. DATA PRIVACY & SECURITY</h2>
              <p className="mb-4">Our collection and use of personal data are governed by our Privacy Policy.</p>

              <h2 className="text-xl font-semibold mt-6">7. THIRD-PARTY INTEGRATIONS</h2>
              <p className="mb-4">Our Services may integrate with third-party software. Actuality is not responsible for third-party services’ actions.</p>

              <h2 className="text-xl font-semibold mt-6">8. TERMINATION & ACCOUNT SUSPENSION</h2>
              <p className="mb-4">We reserve the right to suspend or terminate accounts under these conditions:</p>
              <ul className="list-disc ml-6">
                  <li>Violation of these Terms.</li>
                  <li>Misuse of the platform.</li>
                  <li>Non-payment of fees after the 30-day grace period.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">9. DISCLAIMERS & LIMITATIONS OF LIABILITY</h2>
              <p className="mb-4">Actuality provides Services "AS IS" and disclaims all warranties.</p>

              <h2 className="text-xl font-semibold mt-6">10. GOVERNING LAW & DISPUTE RESOLUTION</h2>
              <p className="mb-4">These Terms are governed by the laws of the State of Delaware, USA.</p>

              <h2 className="text-xl font-semibold mt-6">11. CONTACT INFORMATION</h2>
              <p className="mb-4">For inquiries regarding these Terms, contact us at <a href="mailto:hello@actuality.live" className="text-blue-500">hello@actuality.live</a>.</p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default TOS;
