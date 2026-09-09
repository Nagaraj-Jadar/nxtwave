import Image from 'next/image'
import { strengths } from '@/data/content'
import { Reveal } from '@/components/reveal'

const strengthImages = ['/vlsi.png', '/quality.png', '/flexible.png', '/faster-time.png']

const cardThemes = ['dark', 'light', 'light', 'dark'] as const

export function CoreStrengths() {
  return (
    <section className="relative isolate overflow-hidden bg-[#edf3f8] py-3 sm:py-5 lg:h-[calc(100vh-110px)] lg:min-h-[620px] lg:py-3">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,43,93,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,43,93,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-px w-[18rem] bg-brand-blue/30" />

      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-[56rem]">
          <h2 className="max-w-[780px] font-serif text-[2.5rem] font-semibold leading-[0.92] tracking-[-0.06em] text-navy sm:text-[3.2rem] lg:text-[4.1rem] lg:leading-[0.88]">
            Our Core <span className="text-brand-blue">Strengths</span>
          </h2>

          <p className="mt-3 max-w-[700px] text-[1rem] leading-7 text-[#1a2d4d] sm:text-[1.05rem]">
            From RTL architecture to sign-off, we bring deep semiconductor expertise, rigorous execution, and speed to every engagement.
          </p>
        </Reveal>

        <div className="mt-4 grid flex-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:items-stretch">
          {strengths.map((strength, index) => {
            const theme = cardThemes[index]
            const isDark = theme === 'dark'

            return (
              <Reveal
                key={strength.title}
                delay={120 + index * 80}
                className="group relative h-full overflow-hidden rounded-[28px]"
              >
                <div
                  className={[
                    'relative h-full overflow-hidden shadow-[0_10px_30px_-24px_rgba(15,43,93,0.5)] transition-transform duration-300 hover:-translate-y-1',
                    isDark
                      ? 'bg-[radial-gradient(circle_at_18%_18%,rgba(130,179,255,0.34),transparent_22%),linear-gradient(135deg,#071d3f_0%,#0b234d_34%,#17438a_100%)]'
                      : 'bg-white/90',
                  ].join(' ')}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_58%)]" aria-hidden="true" />

                  <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 lg:p-5">
                    <div className="flex items-center justify-start">
                      <span
                        className={[
                          'flex h-12 w-12 items-center justify-center rounded-full border',
                          isDark
                            ? 'border-white/25 bg-white/5 text-white'
                            : 'border-brand-blue/20 bg-[#eef3fb] text-brand-blue',
                        ].join(' ')}
                      >
                        <strength.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="relative z-10 mt-2 flex-1 lg:max-w-[52%]">
                      <h3
                        className={[
                          'max-w-[12ch] font-serif text-[1.5rem] font-semibold leading-[0.96] tracking-[-0.055em]',
                          isDark ? 'text-white' : 'text-navy',
                        ].join(' ')}
                      >
                        {strength.title}
                      </h3>

                      <p
                        className={[
                          'mt-2 max-w-[28rem] text-justify text-[0.8rem] leading-5',
                          isDark ? 'text-white/80' : 'text-[#243754]',
                        ].join(' ')}
                      >
                        {strength.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 h-2" aria-hidden="true" />
                  </div>

                  <div
                    className={[
                      'pointer-events-none absolute inset-y-0 right-0 z-0 overflow-hidden',
                      index === 1 ? 'w-[47%] lg:w-[46%]' : 'w-[50%]',
                    ].join(' ')}
                  >
                    <div className={['absolute inset-0', isDark ? 'bg-navy/10' : 'bg-white/10'].join(' ')} aria-hidden="true" />
                    <div className="absolute inset-0 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
                      <Image
                        src={strengthImages[index]}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/5" aria-hidden="true" />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
