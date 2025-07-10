import { useState } from 'react';

function AddTweet() {

const [text, setText] = useState('');

  return (
    <>
        <input
            placeholder='Add a tweet...'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => {
            setText(''); 
        }} > Tweet </button>
    </>
  )
}

export default AddTweet
