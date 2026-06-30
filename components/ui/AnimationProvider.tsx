'use client'

import { useEffect } from 'react'
import {
  initHeroTextReveals,
  initOrbitalEntrance,
  initScrollAnimations,
  initMagneticButtons,
  initSmoothScroll,
  initActiveNavLink,
  initHeroMouseGradient,
  initOrbitalParallax,
  initMarqueePause,
  initVanillaTilt,
  initBatchHover,
} from '@/lib/animations'

export default function AnimationProvider() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.body.classList.add('touch-device')
    }

    initScrollAnimations()
    initSmoothScroll()
    initActiveNavLink()
    initMagneticButtons()
    initHeroMouseGradient()
    initOrbitalParallax()
    initMarqueePause()
    initBatchHover()

    setTimeout(() => initVanillaTilt(), 500)

    setTimeout(() => {
      initHeroTextReveals()
      initOrbitalEntrance()
    }, 100)
  }, [])

  return null
}
