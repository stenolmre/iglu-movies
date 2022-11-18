import { useCallback, useEffect } from 'react'

const useOutsideClick = (reference, callback) => {
  const handleClick = useCallback(e => {
    if (reference.current && !reference.current.contains(e.target)) callback()
  }, [reference, callback])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])
}

export default useOutsideClick
