import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraph] = useState([]);
  const [invalid, setInvalid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let value = parseInt(count);

    if (count > paragraphs.length) {
      setCount(paragraphs.length);
      setInvalid(false);
    }
    if (count === 0) {
      value = 1;
      setInvalid(false);
    }
    if (count < 0) {
      setInvalid(true);
    }
    if (count > 0 && count < paragraphs.length) {
      setInvalid(false);
    }
    setParagraph(data.slice(0, value));
  };
  // if (invalid) {
  //   return (
  //     <div className='centered'>
  //       <h1>Invalid</h1>
  //     </div>
  //   );
  // }
  return (
    <section className='container'>
      <div className='title '>
        <h1>tired of lorem ipsum ?</h1>
        <div className='underline'></div>
      </div>
      <form action='' className='my-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>paragraphs :</label>
        <input
          type='number'
          value={count}
          id='amount'
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='primary-btn'>Generate</button>
      </form>
      <div className='generated-paragraphs'>
        <ul>
          {invalid ? (
            <h2>Please just enter valid number</h2>
          ) : (
            paragraphs.map((paragraph, index) => {
              return (
                <li className='paragraph' key={index}>
                  <span className='icon'>
                    <i className='fas fa-chevron-right'></i>
                  </span>
                  <p>{paragraph}</p>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}

export default App;
