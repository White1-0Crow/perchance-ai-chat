export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
        <p>When you visit our Website, we automatically collect certain information, such as:</p>
        <ul>
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent</li>
        </ul>
        <p>
          Additionally, you may voluntarily provide Personal Information, such as your name and email address, when using certain features of the Website.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Providing and managing access to our Website and Services</li>
          <li>Improving the quality of our products and user experience</li>
          <li>Responding to inquiries and offering support</li>
          <li>Sending updates and administrative communications</li>
          <li>Preventing abuse or fraud</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">3. Information Sharing and Disclosure</h2>
        <p>
          We do not sell your Personal Information. We may share it with trusted service providers, such as Google Ads, to deliver tailored advertisements. Additionally, we may disclose your information to comply with legal obligations or protect the rights and safety of our users.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to safeguard your Personal Information from unauthorized access, disclosure, or misuse. However, no system is completely secure, and you acknowledge inherent risks associated with transmitting data online.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">5. Your Rights and Choices</h2>
        <p>As a user, you have the following rights:</p>
        <ul>
          <li>Access, correct, or delete your Personal Information</li>
          <li>Opt-out of tailored advertisements through Google Ads settings</li>
          <li>Contact us to exercise your rights</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">6. Cookies</h2>
        <p>
          We use cookies to enhance your experience and serve tailored ads. You can manage or disable cookies through your browser settings. Note that disabling cookies may limit some features of our Website.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our Website constitutes your acceptance of these changes.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mt-4 mb-2">8. Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, please contact us at:
          <strong> admin@perchance-ai-chat.com</strong>.
        </p>
      </div>
    </div>
  );
}
