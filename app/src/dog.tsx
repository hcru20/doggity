import React, { useEffect, useState } from 'react'

interface DogData {
  id: string
  url: string
  width: number
  height: number
}

const Dog = () => {
  const [dog, setDog] = useState<DogData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const url = 'https://api.thedogapi.com/v1/images/search'

  const  getDog = async (setDog: (dog: DogData | null) => void, setError: (error: any) => void, setIsLoading: (isLoading: boolean) => void) => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data && data.length > 0) {
        setDog(data[0])
      } else {
        setError('No dog image found :(')
      }
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
      getDog(setDog, setError, setIsLoading)
  }, [])

  if (isLoading) {
    return (
      <div>
        'Loading...'
      </div>
    )
  }
  if (error) {
    return (
      <div>
        `Error: ${error}`
      </div>
    )
  }
  return dog ? (
    <div

    >
      <img src={dog.url} alt="a dog" style={{ border: '2px solid black', width: dog.width, height: dog.height, zIndex: 10 }}/>
    </div>
  ) : null
}

export default Dog