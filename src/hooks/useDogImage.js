import { useEffect, useState } from 'react'
import { getImage } from '../services'

export function useDogImage ({ breed, updateImage }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    const getImageUrl = async () => {
      const imageUrl = await getImage(breed)
      setImageUrl(imageUrl)
    }

    getImageUrl()
  }, [updateImage])

  return { imageUrl }
}
