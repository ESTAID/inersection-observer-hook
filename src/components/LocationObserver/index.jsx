import React, {
  createRef,
  useEffect,
  useState,
  useMemo,
  useCallback
} from 'react'

const LocationObserver = ({ onIntersection, children }) => {
  const { hasIntersected, ref } = useObserver(onIntersection)

  return <div ref={ref}>{hasIntersected && children}</div>
}

const useObserver = cb => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
  const ref = useMemo(() => createRef(), [])
  const [hasIntersected, setHasIntersected] = useState(false)
  const load = useCallback(entires => {
    const entry = entires.find(entry => entry.target === ref.current)

    if (entry && entry.isIntersecting) {
      setHasIntersected(true)
      cb()
      observer.unobserve(ref.current)
    }
  }, [])
  const observer = useMemo(() => new IntersectionObserver(load, options), [])

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return { hasIntersected, ref }
}

export default LocationObserver
