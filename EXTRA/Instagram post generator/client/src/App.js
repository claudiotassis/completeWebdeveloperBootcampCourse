import React, { useState } from 'react';
import Carousel from './components/Carousel';

const App = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const generatePost = async () => {
    setLoading(true);
    setResults(null);
  
    try {
      const response = await fetch('http://localhost:5000/generate/captions-and-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      const data = await response.json();
  
      console.log('API Response:', data); // Log the API response
      setResults(data);
    } catch (error) {
      console.error('Error generating post:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Instagram Post Generator</h1>
      <input
        type="text"
        placeholder="Enter post topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: '10px', width: '60%' }}
      />
      <button onClick={generatePost} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Generate
      </button>

      {loading && <p>Loading...</p>}

      {results && <Carousel captions={results.captions} images={results.images} />}
    </div>
  );
};

export default App;
