import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const SOLUTION_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4'

const FEATURES = [
  {
    title: 'Curated Feed',
    description: 'A single stream of writing worth your attention, no noise attached.',
  },
  {
    title: 'Writer Tools',
    description: 'Everything needed to draft, publish, and grow an audience with ease.',
  },
  {
    title: 'Community',
    description: 'Readers and writers in the same room, talking about the same ideas.',
  },
  {
    title: 'Distribution',
    description: 'Reach the people already looking for what you have to say.',
  },
]

export function Solution() {
  return (
    <section className="border-t border-border/30 px-6 py-32 md:py-44">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          SOLUTION
        </motion.span>

        <motion.h2
          {...fadeUp(0.1)}
          className="mx-auto mt-6 max-w-3xl text-4xl md:text-6xl"
        >
          The platform for <span className="font-serif italic">meaningful</span>{' '}
          content
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-16 aspect-[3/1] w-full overflow-hidden rounded-2xl"
        >
          <video
            className="h-full w-full object-cover"
            src={SOLUTION_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <div className="mt-20 grid gap-10 text-left md:grid-cols-4 md:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.1 * i)}>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
