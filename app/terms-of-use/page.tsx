import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the NXTwave Semiconductor website.',
}

export default function TermsOfUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-navy">
        <PageHero
          eyebrow="Terms of Use"
          eyebrowClassName="text-base tracking-[0.28em] text-[#c9d9ff]"
          title="Website terms for visitors and partners."
          description="These terms govern how you use the NXTwave Semiconductor website and the information it contains."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]}
        />

        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-8 text-[0.98rem] leading-8 text-slate-700">
            <p>
              By accessing or using the NXTwave Semiconductor website, you agree to these Terms of Use.
              We may update these terms from time to time, and continued use of the site after changes
              constitutes your acceptance of the revised terms.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Use of the website</h2>
              <p>
                This site is intended to provide information about our semiconductor engineering services,
                capabilities, and career opportunities. You agree to use the site only for lawful purposes
                and not for any activity that may disrupt, damage, or compromise the site, its systems, or
                the experience of other users.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Intellectual property</h2>
              <p>
                All content on this website, including text, graphics, logos, media, and design elements,
                is owned by NXTwave Semiconductor or used under authorization. You may not reproduce,
                distribute, or commercially exploit content without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Information accuracy</h2>
              <p>
                We make reasonable efforts to keep the information on this website accurate and up to date.
                However, some details may change over time, and the site is provided for general information
                purposes only. It does not constitute legal, technical, or business advice.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Limitation of liability</h2>
              <p>
                NXTwave Semiconductor does not guarantee uninterrupted or error-free access to the website.
                We are not liable for indirect, incidental, or consequential damages arising from your use of
                the site or reliance on information contained herein, except where required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-navy">Contact</h2>
              <p>
                If you have questions about these terms, please contact NXTwave Semiconductor at{' '}
                {siteConfig.contact.address} or by email at{' '}
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
