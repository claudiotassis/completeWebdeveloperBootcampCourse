import React from 'react';

const Carousel = ({ captions = [], images = [] }) => {
  if (!images.length || !captions.length) {
    return <p>No data available to display.</p>;
  }

  return (
    <div>
      <h2>Generated Post</h2>
      <div style={{ display: 'flex', overflowX: 'scroll', gap: '20px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '300px', height: '300px' }} />
            <p>{captions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
