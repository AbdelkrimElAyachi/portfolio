import React, { useState, useEffect, useRef } from 'react';

function TextDynamic({ Words, duration }) {
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const indexRef = useRef(index);
  const reverseRef = useRef(reverse);

  useEffect(() => {
    indexRef.current = index;
    reverseRef.current = reverse;
  }, [index, reverse]);

  function callback() {
    let newIndex;
    if (Words.length - 1 == indexRef.current) {
      setReverse(true);
    }
    if (indexRef.current == 0) {
      setReverse(false);
    }
    if (reverseRef.current) {
      newIndex = indexRef.current - 1;
    } else {
      newIndex = indexRef.current + 1;
    }
    setIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(callback, duration);

    return () => {
      clearInterval(interval);
    };
  }, [duration, Words.length, reverse]);

  return (
    <div style={{ fontSize: '4rem', fontWeight: 'bold', width: '80%' }}>
      {/* Render your component UI here */}
      <p>{Words.substring(0, index)}</p>
    </div>
  );
}

export default TextDynamic;

