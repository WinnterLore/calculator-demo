import { cn } from '@/lib/utils'

export function LogoMark({
  outerClassName = 'w-7 h-7',
  innerClassName = 'w-3 h-3',
}: {
  outerClassName?: string
  innerClassName?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full border-2 border-foreground/60',
        outerClassName,
      )}
    >
      <div
        className={cn(
          'rounded-full border border-foreground/60',
          innerClassName,
        )}
      />
    </div>
  )
}
