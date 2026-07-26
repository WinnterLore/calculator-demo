import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const MISSION_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4'

const HIGHLIGHTED_WORDS = new Set(['curiosity', 'meets', 'clarity'])

const PARAGRAPH_1 =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."

const PARAGRAPH_2 =
  'A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.'

function Word({
  word,
  progress,
  range,
  highlighted,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
  highlighted: boolean
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span
      style={{
        opacity,
        color: highlighted ? 'hsl(var(--foreground))' : 'hsl(var(--hero-subtitle))',
      }}
      className="mr-[0.25em] inline-block"
    >
      {word}
    </motion.span>
  )
}

function RevealParagraph({
  text,
  progress,
  start,
  end,
  className,
  highlight,
}: {
  text: string
  progress: MotionValue<number>
  start: number
  end: number
  className?: string
  highlight?: Set<string>
}) {
  const words = text.split(' ')
  const span = end - start

  return (
    <p className={className}>
      {words.map((word, i) => {
        const wordStart = start + (i / words.length) * span
        const wordEnd = start + ((i + 1) / words.length) * span
        return (
          <Word
            key={i}
            word={word}
            progress={progress}
            range={[wordStart, wordEnd]}
            highlighted={Boolean(highlight?.has(word.toLowerCase().replace(/[^\w]/g, '')))}
          />
        )
      })}
    </p>
  )
}

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  })

  return (
    <section ref={containerRef} className="px-6 pb-32 pt-0 md:pb-44">
      <div className="mx-auto mb-16 h-[300px] w-[300px] overflow-hidden rounded-2xl md:h-[800px] md:w-[800px]">
        <video
          className="h-full w-full object-cover"
          src={MISSION_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <RevealParagraph
          text={PARAGRAPH_1}
          progress={scrollYProgress}
          start={0}
          end={0.6}
          highlight={HIGHLIGHTED_WORDS}
          className="text-2xl font-medium tracking-[-1px] md:text-4xl lg:text-5xl"
        />
        <RevealParagraph
          text={PARAGRAPH_2}
          progress={scrollYProgress}
          start={0.6}
          end={1}
          className="mt-10 text-xl font-medium md:text-2xl lg:text-3xl"
        />
      </div>
    </section>
  )
}
