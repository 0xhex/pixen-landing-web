import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use - Pixen AI',
  description: 'Terms of Use for Pixen AI mobile application',
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Terms of Use
        </h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By downloading, installing, accessing, or using Pixen AI ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of the App after any such changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pixen AI is a mobile application that uses artificial intelligence to transform user-uploaded photos into images and videos using pre-built templates. The App provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>AI-powered image transformation templates (e.g., Polaroid, Oil Painting, Ghostface)</li>
              <li>AI-powered video generation templates (e.g., Disco Ball, Dancing, Floating)</li>
              <li>Template browsing and selection</li>
              <li>Credit-based pricing system</li>
              <li>Premium subscription options</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the App at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use certain features of the App, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Account Eligibility</h3>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 13 years old to use the App. If you are under 18, you represent that you have your parent's or guardian's permission to use the App and agree to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Content and Conduct</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 User Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of any photos or content you upload to the App ("User Content"). By uploading User Content, you grant us a non-exclusive, worldwide, royalty-free license to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use, process, and store your User Content to provide the App's services</li>
              <li>Generate transformed images and videos based on your User Content</li>
              <li>Display your User Content within the App</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Prohibited Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to upload, post, or transmit any User Content that:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violates any applicable laws or regulations</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>Contains hate speech, harassment, or discriminatory content</li>
              <li>Is sexually explicit, pornographic, or obscene</li>
              <li>Depicts violence, gore, or illegal activities</li>
              <li>Contains personal information of others without consent</li>
              <li>Is spam, malware, or malicious code</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to remove any User Content that violates these Terms and to terminate accounts of repeat offenders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Credits and Subscriptions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Credit System</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App uses a credit-based system for template generation:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Image templates consume credits (typically 4-10 credits per generation)</li>
              <li>Video templates consume credits (typically 18-50 credits per generation)</li>
              <li>Credits are deducted immediately upon generation start</li>
              <li>Failed generations are automatically refunded</li>
              <li>Credits are non-refundable except as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Premium Subscription</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Template generation requires a premium subscription. Subscription terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Subscriptions are billed through the App Store</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You can cancel your subscription at any time through App Store settings</li>
              <li>No refunds for partial subscription periods</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              All prices are displayed in the App and may be subject to change. We reserve the right to modify pricing with notice to users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Our Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App, including its design, features, templates, logos, and content, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use our trademarks or logos without permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Generated Content</h3>
            <p className="text-gray-700 leading-relaxed">
              You own the images and videos generated from your User Content. However, you may not use generated content for illegal purposes or in ways that violate these Terms or third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The App will be uninterrupted, secure, or error-free</li>
              <li>Results will meet your expectations</li>
              <li>Defects will be corrected</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Loss of profits, data, or use</li>
              <li>Business interruption</li>
              <li>Personal injury or property damage</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App uses third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Luma AI:</strong> For AI-powered image and video generation</li>
              <li><strong>App Store:</strong> For app distribution and payment processing</li>
              <li><strong>Cloud Storage Providers:</strong> For data storage</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your use of third-party services is subject to their respective terms and conditions. We are not responsible for the practices of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the App immediately, without prior notice, for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Request by law enforcement or government agencies</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the App will cease immediately. You may terminate your account at any time by deleting the App or contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless us and our officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your use of the App</li>
              <li>Your User Content</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms constitute the entire agreement between you and us regarding the App and supersede all prior agreements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> support@pixen.ai<br />
                <strong>App:</strong> Pixen AI<br />
                <strong>Support:</strong> Available through the App settings
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

