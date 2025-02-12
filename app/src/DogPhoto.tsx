import React from 'react'

interface DogPhotoProps {
  dogPhoto: {
    url: string;
    width: number;
    height: number;
  } | null;
}


const DogPhoto: React.FC<DogPhotoProps> = ({ dogPhoto }) => {
  return dogPhoto ? (
    <div>
      <img
        src={dogPhoto.url}
        alt="a dog"
        style={{
          border: '2px solid black',
          width: dogPhoto.width,
          height: dogPhoto.height,
          zIndex: 10,
        }}
      />
    </div>
  ) : null;
};

export default DogPhoto;
