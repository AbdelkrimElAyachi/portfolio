import React, { useState, useEffect, useRef } from 'react';

function DynamicText({ Words = [], duration = 300 }) {

  const [curWord,setCurWord] = useState('');
  const [curWordIndex,setCurWordIndex] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);


  useEffect(()=>{
    if(Words.length == 0){
      // do not render or setimout if there are no words
      return;
    }
    if(curWord == ''){
      setCurWord(Words[0]);
    }

    let nestedTimeout;
    const timeout = setTimeout(()=>{
      if(!isReverse){
        if(curIndex < curWord.length){
          setCurIndex((prev)=>prev+1);
        }
        else{
          nestedTimeout = setTimeout(() => {
            setIsReverse(true);
          }, 1500);
        }
      }
      else{
        if(curIndex > 0){
          setCurIndex((prev)=>prev-1);
        }
        else{
          setIsReverse(false);
          const nextIndex = (curWordIndex+1) % Words.length;
          setCurWordIndex(nextIndex);
          setCurWord(Words[nextIndex]);
      }
    }
  }, isReverse ? duration/2 : duration);

    return ()=>{
      clearTimeout(nestedTimeout);
      clearTimeout(timeout);
    }
  },[curIndex, isReverse, curWord, curWordIndex, Words, duration]);

  return (
    <div style={{ fontSize: '4rem', fontWeight: 'bold', width: '80%' }}>
      <p>{curWord.substring(0, curIndex)}</p>
    </div>
  );
}

export default DynamicText;