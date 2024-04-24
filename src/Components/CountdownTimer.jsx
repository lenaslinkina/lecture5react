import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const Timer = () => {
      setCount(lastCount => {

        if (lastCount === 0) {
          clearInterval(lastCount); 
          return 0; 
        }
        return lastCount - 1; 
      });
    };
    return () => {
       setInterval(Timer, 1000);
    };
  }, []);

  return (
    <div>
      <h1>Таймер: {count}</h1>
    </div>
  );
};

export default CountdownTimer;
