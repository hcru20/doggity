import React from 'react'
import Button from '@mui/material/Button';

interface DogButtonProps {
  onClick: () => void;
}


const NewDogButton: React.FC<DogButtonProps> = ({ onClick }) => {
  return (
   <Button 
      variant="outlined"
      onClick={onClick}
    >
    New Dog
   </Button>
  )
}

export default NewDogButton