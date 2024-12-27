const ENDPOINT_DOG_ALL_BREEDS = 'https://dog.ceo/api/breeds/list/all'

const getUrlRandomImageByBreed = (breed = '') => {
  return breed ? `https://dog.ceo/api/breed/${breed}/images/random` : ''
}

export { ENDPOINT_DOG_ALL_BREEDS, getUrlRandomImageByBreed }
