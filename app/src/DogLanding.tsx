import React from 'react'
import DogPhoto from './DogPhoto'
import NewDogButton from './NewDogButton'
import useFetchDogPhoto from './utils/useFetchDogPhoto'

const DogLanding = () => {
  const { dogPhoto, isLoading, error, fetchDogPhoto } = useFetchDogPhoto()

  return (
    <>
      <h1>Doggity</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      <DogPhoto dogPhoto={dogPhoto}/>
      <NewDogButton onClick={fetchDogPhoto}/>
   </>
  )
}

export default DogLanding