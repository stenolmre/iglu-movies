import { useEffect, useState } from 'react'

const useOnViewport = ref => {
  const [is_intersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

    if (ref.current) observer.observe(ref.current)
    return () => observer.unobserve(ref.current)
  }, [])

  return is_intersecting
}

export default useOnViewport
