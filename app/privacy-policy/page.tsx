import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for NXTwave Semiconductor.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-navy">
        <PageHero
          eyebrow="Privacy Policy"
          eyebrowClassName="text-base tracking-[0.28em] text-[#c9d9ff]"
          title="How we handle your information."
          description="We respect the confidentiality of your data and only use it to support your conversations with NXTwave Semiconductor."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        />

        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-8 text-[0.98rem] leading-8 text-slate-700">
            <p>
              NXTwave Semiconductor (“we,” “our,” or “us”) is committed to protecting the privacy of
              visitors to our website and individuals who contact us about semiconductor engineering
              services, career opportunities, and business partnerships.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Information we collect</h2>
              <p>
                We may collect information you provide directly, such as your name, work email, phone
                number, organization, project details, and any inquiry submitted through our website or
                contact channels. We may also collect technical information about how you interact with
                our website, including device information, browser type, IP address, and usage data for
                security and analytics purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">How we use your data</h2>
              <p>
                We use your information to respond to inquiries, assess project or partnership
                opportunities, process job applications, maintain website security, improve our online
                experience, and communicate relevant updates. We do not sell or rent personal
                information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Data sharing</h2>
              <p>
                We may share information with trusted service providers that support our operations,
                such as hosting, communications, analytics, or recruitment tools. Those providers are
                contractually required to protect data and use it only for approved business purposes.
                We may also disclose information when required by law, regulation, or legal process.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data, subject to
                applicable law and business requirements. If you have questions or would like to update
                your preferences, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-blue hover:underline">{siteConfig.contact.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Contact</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact NXTwave
                Semiconductor at {siteConfig.contact.address} or by email at{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-blue hover:underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
