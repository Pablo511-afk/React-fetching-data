import { useEffect, useState } from 'react'
import './App.css'
import { getAllBreeds } from './services/breeds'
import { useDogImage } from './hooks/useDogImage'

export function App () {
  const [breed, setBreed] = useState()
  const [breeds, setBreeds] = useState([])
  const [updateImage, setUpdateImage] = useState(false)
  const { imageUrl } = useDogImage({ breed, updateImage })

  useEffect(() => {
    getAllBreeds().then(breeds => setBreeds(breeds))
  }, [])

  const handleBreed = (event) => {
    const { target: { innerText: breed } } = event
    setBreed(breed)
    setUpdateImage(!updateImage)
  }

  return (
    <main>
      <h1>Dog fetching</h1>
      <section>
        <div className='button'>
          {breeds.map((breed, index) => {
            return (<button onClick={handleBreed} key={index}>{breed}</button>)
          })}
        </div>
        {imageUrl && <img src={imageUrl} alt={`Generated image using selected breed ${breed}`} />}
      </section>
    </main>
  )
}
