import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SlideNav({ current, total, onPrev, onNext }) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 py-4 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="size-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:pointer-events-none"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => i < current ? onPrev(i) : onNext(i)}
              className="relative p-0.5"
            >
              <motion.div
                className="rounded-full"
                animate={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  backgroundColor: i === current ? '#10B981' : 'rgba(255,255,255,0.25)',
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="size-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-20 disabled:pointer-events-none"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="absolute right-6 text-[11px] text-white/30 font-medium tabular-nums">
        {current + 1} / {total}
      </div>
    </motion.div>
  )
}
