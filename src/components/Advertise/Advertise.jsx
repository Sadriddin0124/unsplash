import React, { useState, useEffect } from 'react';

const UnsplashImage = () => {
  const [image, setImage] = useState(null);
  const apiKey = '59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8';

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        setImage(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchRandomImage();
  }, [apiKey]);

  return (
    <div>
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>Photo by {image.user.name}</p>
        </div>
      )}
      {!image && <p>Loading...</p>}
    </div>
  );
};

export default UnsplashImage;
