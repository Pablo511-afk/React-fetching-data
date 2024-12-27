import { ENDPOINT_DOG_ALL_BREEDS } from '../constants/EndpointCatConstant'

export const getAllBreeds = async () => {
  const res = await fetch(ENDPOINT_DOG_ALL_BREEDS)
  const data = await res.json()
  const { message = {} } = data
  return Object.keys(message)
}
