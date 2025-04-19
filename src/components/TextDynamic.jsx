import React, { useState, useEffect, useRef } from 'react';

function TextDynamic({ Words, duration }) {

  const [index, setIndex] = useState(1);
  const [reverse, setReverse] = useState(false);
  const [curWord, setCurWord] = useState(Words[0]);

  const stateRef = useRef({index, reverse, curWord});

  function callback(){
    if(stateRef.reverse){
      setIndex((prev) => prev - 1);
      if(stateRef.index === 0){
        setReverse(false);
        setCurWord(Words[Math.floor(Math.random() * Words.length)]);
      }
    }
    else{
      setIndex((prev) => prev + 1);
      if(stateRef.index === stateRef.curWord.length-1){
        setReverse(true);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(callback, duration);

    return () => {
      clearInterval(interval);
    };
  }, [duration, callback]);

  return (
    <div style={{ fontSize: '4rem', fontWeight: 'bold', width: '80%' }}>
      {/* Render your component UI here */}
      <p>{curWord.substring(0, index)}</p>
    </div>
  );
}

export default TextDynamic;

