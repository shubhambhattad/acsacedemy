'use client'

const items = [
  '🏆 IBPS PO 2024 – 47 Selections',
  '🎯 SBI PO 2024 – 32 Selections',
  '🏅 SSC CGL 2024 – 58 Selections',
  '⭐ MBA CET 2024 – 120+ Selections',
  '🎖️ NDA 2024 – 18 Selections',
  '📚 CLAT 2024 – 22 Selections',
]

export default function MarqueeTicker() {
  const repeatedItems = [...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-acs-blue-dark via-acs-blue to-acs-green py-3.5 shadow-md">
      <div className="animate-marquee whitespace-nowrap gap-12 sm:gap-16">
        {repeatedItems.map((item, idx) => (
          <span 
            key={idx} 
            className="inline-block text-sm sm:text-base font-semibold tracking-wide text-white/90 px-4 cursor-default select-none"
          >
            {item}
            <span className="ml-12 text-white/25">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
