import { useState, useCallback } from 'react'

export default function useImageLoaded () {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return { imageLoaded, handleImageLoaded }
}
