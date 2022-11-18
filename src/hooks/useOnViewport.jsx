import { useEffect } from 'react'

const useOnViewport = (reference, callback) => {
  return useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        if (entry.isIntersecting && callback != null) {
          callback()
        }
      }
    )

    if (reference.current) observer.observe(reference.current)
    return () => observer.unobserve(reference.current)
  }, [])
}

export default useOnViewport
