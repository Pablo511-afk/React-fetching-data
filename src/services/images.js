import { getUrlRandomImageByBreed } from '../constants/EndpointCatConstant'

// export const getImage = (breed) => {
//   const imageUrl = getUrlRandomImageByBreed(breed)

//   console.log(imageUrl)

//   if (!imageUrl) return ''

//   return fetch(imageUrl)
//     .then(res => res.json())
//     .then(response => {
//       console.log(response)
//       return response.message
//     })
// }

export const getImage = async (breed) => {
  const imageUrl = getUrlRandomImageByBreed(breed)

  if (!imageUrl) return ''

  const res = await fetch(imageUrl)
  const response = await res.json()
  return response.message
}
