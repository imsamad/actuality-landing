import { Navbar } from "@/components/hero/hero";
import { Footer } from "../page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Actuality Live",
  description: "Read our privacy policy to understand how we handle your data.",
};
const TOS = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 mt-20 md:mt-36 mb-4 md:mb-12 text-gray-900">
        <h1 className="text-3xl font-bold mb-">PRIVACY POLICY</h1>
        <p className="text-gray- mb-4">
          <b>Effective Date:</b> 12th, 2024
        </p>
        <p className="mb-4">
          Welcome to Actuality. This Privacy Policy explains how Actuality, Inc.
          (“Actuality”, “we”, “us”, “our”) collects, uses, shares, and protects
          your personal information when you use our website, platform, and
          related services (“Services”). By using our Services, you agree to the
          terms outlined in this Privacy Policy.
        </p>

        {/* 1. INFORMATION WE COLLECT */}
        <h2 className="text-xl font-bold mb-2">1. INFORMATION WE COLLECT</h2>
        <p className="mb-4">
          We collect the following types of information to provide and improve
          our Services:
        </p>

        {/* a. Information You Provide Directly */}
        <h3 className="text-xl font-bold mb-2">
          a. Information You Provide Directly:
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Account Information:</b> Name, email address, phone number,
            company name, job title, and payment details.
          </li>
          <li>
            <b>Content:</b> Documents, data, and materials you upload or submit
            when using our platform.
          </li>
          <li>
            <b>Communications:</b> Records of your interactions with our support
            team or feedback you provide.
          </li>
        </ul>

        {/* b. Information Collected Automatically */}
        <h3 className="text-xl font-bold mb-2">
          b. Information Collected Automatically:
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Usage Data:</b> Information about how you interact with our
            platform, such as IP addresses, browser type, pages visited, and
            timestamps.
          </li>
          <li>
            <b>Device Information:</b> Data about the device you use to access
            our Services, including hardware model, operating system, and unique
            device identifiers.
          </li>
          <li>
            <b>Cookies and Tracking Technologies:</b> We use cookies, web
            beacons, and similar technologies to collect information about your
            usage patterns and preferences. Cookies are retained for a period of
            up to 12 months, and users can manage cookie settings through their
            browser preferences.
          </li>
        </ul>

        {/* c. Information from Third Parties */}
        <h3 className="text-xl font-bold mb-2">
          c. Information from Third Parties:
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Third-Party Integrations:</b> If you integrate third-party tools
            (e.g., Procore, Revit), we may collect data from those platforms in
            accordance with their privacy policies.
          </li>
        </ul>

        {/* 2. HOW WE USE YOUR INFORMATION */}
        <h2 className="text-xl font-bold mb-2">
          2. HOW WE USE YOUR INFORMATION
        </h2> <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide, operate, and improve our Services.</li>
          <li>To personalize user experiences and deliver tailored content.</li>
          <li>To process transactions and manage subscriptions.</li>
          <li>
            To communicate with you regarding updates, support, and promotional
            materials (with opt-out options).
          </li>
          <li>To ensure the security and integrity of our platform.</li>
          <li>To comply with legal obligations and resolve disputes.</li>
          <li>
            {" "}
            <b>Legal Basis for Processing:</b> We process your personal data
            based on your consent, to fulfill contractual obligations, to comply
            with legal requirements, or to pursue our legitimate business
            interests.
          </li>
        </ul>

        {/* 3. HOW WE SHARE YOUR INFORMATION */}
        <h2 className="text-xl font-bold mb-2">
          3. HOW WE SHARE YOUR INFORMATION
        </h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Service Providers:</b> Third-party vendors who assist with
            payment processing, data storage, and analytics.
          </li>
          <li>
            <b>Business Transfers:</b> In the event of a merger, acquisition, or
            sale of assets, your information may be transferred.
          </li>
          <li>
            <b>Legal Obligations:</b> When required by law, such as in response
            to a subpoena or legal process.
          </li>
          <li>
            <b>With Your Consent:</b> When you provide explicit consent to share
            specific information.
          </li>
          <li>
            <b>Third-Party Analytics and Advertising:</b> We use third-party
            analytics tools to understand how our platform is used and improve
            performance. These tools may collect anonymized information about
            your interactions with our services.
          </li>
        </ul>
        {/* ... (4. DATA RETENTION) */}
        <h2 className="text-xl font-bold mb-2">4. DATA RETENTION</h2>
        <p className="mb-4">
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy unless a longer retention
          period is required by law. After this period, we securely delete or
          anonymize your data.
        </p>

        {/* ... (5. DATA SECURITY) */}
        <h2 className="text-xl font-bold mb-2">5. DATA SECURITY</h2>
        <p className="mb-4">
          We implement technical and organizational measures to protect your
          personal information from unauthorized access, loss, or misuse. This
          includes using industry-standard encryption methods such as SSL/TLS
          for data transmission and encrypting sensitive data at rest. However,
          no method of transmission over the internet or electronic storage is
          completely secure. We encourage you to use strong passwords and take
          precautions when sharing sensitive information.
        </p>
        <p className="mb-4">
          In the event of a data breach that affects your personal information,
          we will notify you within 72 hours in accordance with applicable laws,
          detailing the nature of the breach and steps taken to mitigate its
          effects.
        </p>

        {/* ... (6. YOUR RIGHTS AND CHOICES) */}
        <h2 className="text-xl font-bold mb-2">6. YOUR RIGHTS AND CHOICES</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <b>Access:</b> Request a copy of your personal data.
          </li>
          <li>
            <b>Correction:</b> Update or correct inaccurate information.
          </li>
          <li>
            <b>Deletion:</b> Request deletion of your personal data under
            certain circumstances.
          </li>
          <li>
            <b>Objection:</b> Object to our processing of your data for specific
            purposes, such as marketing.
          </li>
          <li>
            <b>Data Portability:</b> Request a copy of your data in a
            structured, machine-readable format.
          </li>
          <li>
            <b>Lodge a Complaint:</b> If you believe your data rights have been
            violated, you may file a complaint with your local data protection
            authority.
          </li>
        </ul>
        <p className="mb-4">
          <b>Do Not Track (DNT) Signals:</b> Our Services do not respond to "Do
          Not Track" signals from browsers. You can manage tracking preferences
          through your browser settings.
        </p>
        <p className="mb-4">
          <b>Automated Decision-Making and Profiling:</b> Our platform may use
          automated decision-making processes to personalize your experience or
          optimize services. You have the right to request human intervention or
          opt-out of such profiling where applicable.
        </p>
        <p className="mb-4">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:hello@actuality.live"
            className="text-blue-500 hover:underline"
          >
            hello@actuality.live
          </a>
          . We will respond to your request in accordance with applicable laws.
        </p>

        {/* ... (7. INTERNATIONAL DATA TRANSFERS) */}
        <h2 className="text-xl font-bold mb-2">
          7. INTERNATIONAL DATA TRANSFERS
        </h2>
        <p className="mb-4">
          Actuality is a Delaware C-Corp with operations that may involve
          transferring your information to countries outside your jurisdiction,
          including the United States. We ensure appropriate safeguards, such as
          Standard Contractual Clauses and compliance with relevant
          international data protection laws, to protect your data during such
          transfers.
        </p>

        {/* ... (8. CHILDREN'S PRIVACY) */}
        <h2 className="text-xl font-bold mb-2">8. CHILDREN'S PRIVACY</h2>
        <p className="mb-4">
          Our Services are not intended for individuals under 18 years of age.
          We do not knowingly collect personal information from children. If you
          believe we have inadvertently collected data from a minor, please
          contact us at{" "}
          <a
            href="mailto:hello@actuality.live"
            className="text-blue-500 hover:underline"
          >
            hello@actuality.live
          </a>{" "}
          and we will take steps to delete such information.
        </p>
        {/* ... (9. CALIFORNIA CONSUMER PRIVACY ACT (CCPA) RIGHTS) */}
        <h2 className="text-xl font-bold mb-2">
          9. CALIFORNIA CONSUMER PRIVACY ACT (CCPA) RIGHTS
        </h2>
        <p className="mb-4">
          If you are a California resident, you have specific rights under the
          California Consumer Privacy Act (CCPA), including the right to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Request disclosure of the categories and specific pieces of personal
            information we collect.
          </li>
          <li>Request deletion of your personal information.</li>
          <li>Opt out of the sale of your personal information.</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:hello@actuality.live"
            className="text-blue-500 hover:underline"
          >
            hello@actuality.live
          </a>
          .
        </p>

        <h2 className="text-xl font-bold mb-2">
          10. CHANGES TO THIS PRIVACY POLICY
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. When we make
          significant changes, we will notify you by posting the updated policy
          on our website and updating the "Effective Date." Continued use of our
          Services after such updates constitutes acceptance of the changes.
        </p>

        {/* ... (Continue this pattern for all sections) */}

        {/* 11. CONTACT US */}
        <h2 className="text-xl font-bold mb-2">11. CONTACT US</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="mb-4">
          <b>  Actuality, Inc.</b>
          <br />
          2337 Sutton Drive
          <br />
          Burlington, Ontario
          <br />
          Email:{" "}
          <a
            href="mailto:hello@actuality.live"
            className="text-blue-500 hover:underline"
          >
            hello@actuality.live
          </a>
        </p>
      </div>
      {/* <div className="text-gray-900 mt-20 md:mt-36 mb-4 md:mb-12">
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
      </div> */}

      <Footer />
    </>
  );
};

export default TOS;
