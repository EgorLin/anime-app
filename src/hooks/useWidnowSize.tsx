import { useEffect, useState } from 'react'

export function useWindowSize(size: number): boolean {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth])

  return width > size
}
