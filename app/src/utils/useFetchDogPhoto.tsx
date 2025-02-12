import { useRef, useState } from 'react';

interface DogData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const useFetchDogPhoto = () => {
  const [dogPhoto, setDogPhoto] = useState<DogData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  const fetchDogPhoto = async () => {
    if (hasFetched.current) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search');
      const data = await response.json();

      if (data && data.length > 0) {
        setDogPhoto(data[0]);
      } else {
        setError('No dog image found :(');
      }
    } catch (err) {
      setError('Failed to fetch the dog photo.');
    } finally {
      setIsLoading(false);
    }
  };

  return { dogPhoto, isLoading, error, fetchDogPhoto };
};

export default useFetchDogPhoto;
