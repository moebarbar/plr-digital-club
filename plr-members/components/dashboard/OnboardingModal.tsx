'use client'

import { useState, useTransition } from 'react'
import { completeOnboarding } from '@/actions/completeOnboarding'

const STEPS = [
  {
    title: 'Welcome to PLR Digital Club! 🎉',
    body: "You now have lifetime access to 1,000+ done-for-you digital products. Let's take a quick tour so you can hit the ground running.",
    cta: "Let's Go →",
    icon: '⚡',
  },
  {
    title: 'Browse Your Product Library',
    body: 'Head to the Library tab to search, filter by category, and access any product instantly. Every download link is yours to keep and resell.',
    cta: 'Got it →',
    icon: '📦',
  },
  {
    title: 'Use the Reseller Tools',
    body: 'You have full resell rights. Use the Reseller Tools section to grab your affiliate link, sales page copy, and promotional assets — start earning today.',
    cta: 'Awesome →',
    icon: '💸',
  },
  {
    title: 'Check What\'s New',
    body: "We add new products every week. Visit the \"What's New\" tab to stay up to date and be the first to sell the latest drops.",
    cta: 'Perfect →',
    icon: '🆕',
  },
  {
    title: "You're all set!",
    body: 'Your members area is ready. Click below to start exploring your products and growing your digital business.',
    cta: 'Enter My Dashboard →',
    icon: '🚀',
  },
]

export default function OnboardingModal({ userId }: { userId: string }) {
  const [step, setStep] = useState(0)
  const [isPending, startTransition] = useTransition()
  const isLast = step === STEPS.length - 1
  const current = STEPS[step]

  function handleNext() {
    if (isLast) {
      startTransition(async () => {
        await completeOnboarding(userId)
      })
    } else {
      setStep((s) => s + 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-100">
          <div
            className="h-full bg-[#1565C0] transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="text-5xl mb-5">{current.icon}</div>

          {/* Step counter */}
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Step {step + 1} of {STEPS.length}
          </p>

          <h2 className="text-xl font-bold text-[#1A1A4E] mb-3">{current.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">{current.body}</p>

          {/* Step dots */}
          <div className="flex justify-center gap-2 mb-8">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === step ? 'bg-[#1A1A4E] w-5' : i < step ? 'bg-[#1565C0]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isPending}
            className="w-full bg-[#1A1A4E] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1565C0] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Loading...
              </>
            ) : (
              current.cta
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
