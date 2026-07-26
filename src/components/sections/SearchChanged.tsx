import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import iconChatGPT from '@/assets/icon-chatgpt.png'
import iconPerplexity from '@/assets/icon-perplexity.png'
import iconGoogle from '@/assets/icon-google.png'

const PLATFORMS = [
  {
    icon: iconChatGPT,
    name: 'ChatGPT',
    description: 'Millions turn here first, before they ever open a search bar.',
  },
  {
    icon: iconPerplexity,
    name: 'Perplexity',
    description: 'Answers arrive cited and synthesized, no clicking required.',
  },
  {
    icon: iconGoogle,
    name: 'Google AI',
    description: 'AI overviews now sit above every result on the page.',
  },
]

export function SearchChanged() {
  return (
    <section className="px-6 pb-6 pt-52 text-center md:pb-9 md:pt-64">
      <motion.h2
        {...fadeUp(0)}
        className="mx-auto max-w-4xl text-5xl md:text-7xl lg:text-8xl"
      >
        Search has <span className="font-serif italic">changed.</span> Have
        you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="mx-auto mb-24 mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        The way people discover ideas has shifted from search results to
        conversations with AI. Your audience is asking questions somewhere
        new — are you there to answer them?
      </motion.p>

      <div className="mb-20 grid gap-12 md:grid-cols-3 md:gap-8">
        {PLATFORMS.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.1 * i)}
            className="flex flex-col items-center"
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="h-[200px] w-[200px] object-contain"
            />
            <h3 className="text-base font-semibold">{platform.name}</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.2)} className="text-center text-sm text-muted-foreground">
        If you don&apos;t answer the questions, someone else will.
      </motion.p>
    </section>
  )
}
