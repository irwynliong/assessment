import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // first set the frequency of increment (the smaller the slower)
    const end = parseInt(target);
    // if you want a non-linear speed, tweak this part
    if (start === end) return;

    let totalMilisecDuration = 10; // Duration in milliseconds
    let incrementTime = (totalMilisecDuration / end) * 10; // Time per increment

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // cleanup on component unmount
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter">
      {count}+
    </div>
  );
};

export default Counter;
