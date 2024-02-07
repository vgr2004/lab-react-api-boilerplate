import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setState] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
      .then(({ data: { books } }) => setState(books))
      .catch((err) => {
        console.log(`Status Code: ${err.response?.status || 'Unknown'}`);
      });
  }, []);

  return (
    <div>
      {data.map(({ id, title, imageLinks, description, authors }) => (
        <div key={id}>
          <h4>{title}</h4>
          <div className='flex'>
            <img src={imageLinks.smallThumbnail} />
            <p>{description}</p>
          </div>
          {authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;