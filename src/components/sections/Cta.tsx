import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { LogoMark } from '@/components/Logo'

const CTA_HLS_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export function Cta() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(CTA_HLS_URL)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = CTA_HLS_URL
    }

    return () => {
      hls?.destroy()
    }
  }, [])

  return (
    <section className="relative overflow-hidden border-t border-border/30 py-32 md:py-44">
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-[1] bg-background/45" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <LogoMark outerClassName="w-10 h-10" innerClassName="w-5 h-5" />
        </motion.div>

        <motion.h2 {...fadeUp(0.1)} className="mt-8 text-4xl md:text-6xl">
          Start Your <span className="font-serif italic">Journey</span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="mt-4 max-w-md text-muted-foreground">
          Subscribe for the feed, or start writing and reach readers who are
          already looking for you.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-lg bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]">
            Subscribe Now
          </button>
          <button className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]">
            Start Writing
          </button>
        </motion.div>
      </div>
    </section>
  )
}
