import { useEffect, useState } from 'react';

const Timer = ({seconds, timeOverFunc}) => {
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    if (counter === 0) {
      timeOverFunc();
    }
  }, [counter, timeOverFunc]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  
  return <div>Countdown: {counter}</div>;
};

export default Timer;
