import { useEffect, useRef } from 'react'

export default function ScrollMotion({ pageKey }) {
  const progressRef = useRef(null)

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const supportsObserver = 'IntersectionObserver' in window

    if (!supportsObserver) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))

    let frameId
    const updateScrollState = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3))
        document.body.classList.toggle('has-scrolled', window.scrollY > 24)
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
      })
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      window.removeEventListener('scroll', updateScrollState)
      document.body.classList.remove('has-scrolled')
    }
  }, [pageKey])

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
}
