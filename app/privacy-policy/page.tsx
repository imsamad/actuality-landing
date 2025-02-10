import { Navbar } from "@/components/hero/hero";
import { Footer } from "../page";

const TOS = () => {
  return (
    <>
      <Navbar />
      <div className="text-gray-900 mt-20 md:mt-36 mb-4 md:mb-12">
          <div className="max-w-4xl mx-auto p-6 rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="text-gray-700 text-sm text-center mb-6">Effective Date: December 12th, 2024</p>
            <p className="mb-4">Welcome to Actuality. This Privacy Policy explains how Actuality, Inc. (“Actuality”, “we”, “us”, “our”) collects, uses, shares, and protects your personal information when you use our website, platform, and related services (“Services”). By using our Services, you agree to the terms outlined in this Privacy Policy.</p>

            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <p className="mt-2"><strong>a. Information You Provide Directly:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name, job title, and payment details.</li>
                  <li><strong>Content:</strong> Documents, data, and materials you upload or submit when using our platform.</li>
                  <li><strong>Communications:</strong> Records of your interactions with our support team or feedback you provide.</li>
              </ul>

              <p className="mt-2"><strong>b. Information Collected Automatically:</strong></p>
              <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Usage Data:</strong> Information about how you interact with our platform, such as IP addresses, browser type, pages visited, and timestamps.</li>
                  <li><strong>Device Information:</strong> Data about the device you use to access our Services, including hardware model, operating system, and unique device identifiers.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your usage patterns and preferences.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
              <p className="mt-2">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                  <li>To provide, operate, and improve our Services.</li>
                  <li>To personalize user experiences and deliver tailored content.</li>
                  <li>To process transactions and manage subscriptions.</li>
                  <li>To communicate with you regarding updates, support, and promotional materials (with opt-out options).</li>
                  <li>To ensure the security and integrity of our platform.</li>
                  <li>To comply with legal obligations and resolve disputes.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">3. How We Share Your Information</h2>
              <p className="mt-2">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, data storage, and analytics.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
                  <li><strong>Legal Obligations:</strong> When required by law, such as in response to a subpoena.</li>
                  <li><strong>With Your Consent:</strong> When you provide explicit consent to share specific information.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">4. Data Retention</h2>
              <p className="mt-2">We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required by law.</p>

              <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
              <p className="mt-2">We implement technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.</p>

              <h2 className="text-xl font-semibold mt-6">6. Your Rights and Choices</h2>
              <p className="mt-2">Depending on your jurisdiction, you may have the right to access, correct, delete, or object to the processing of your personal data. Contact us at hello@actuality.live to exercise these rights.</p>

              <h2 className="text-xl font-semibold mt-6">7. International Data Transfers</h2>
              <p className="mt-2">Your data may be transferred to countries outside your jurisdiction, including the United States, with appropriate safeguards.</p>

              <h2 className="text-xl font-semibold mt-6">8. Children’s Privacy</h2>
              <p className="mt-2">Our Services are not intended for individuals under 18. If you believe we have inadvertently collected data from a minor, contact us at hello@actuality.live.</p>

              <h2 className="text-xl font-semibold mt-6">9. Changes to This Privacy Policy</h2>
              <p className="mt-2">We may update this Privacy Policy periodically. Continued use of our Services after updates constitutes acceptance.</p>

              <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
              <p className="mt-2">For questions or concerns about this Privacy Policy, contact us at:</p>
              <p className="mt-2"><strong>Actuality, Inc.</strong></p>
              <p>2337 Sutton Drive, Burlington, Ontario</p>
              <p>Email: <a href="mailto:hello@actuality.live" className="text-blue-500 underline">hello@actuality.live</a></p>
          </div>
      </div>

      <Footer />
    </>
  );
};

export default TOS;
