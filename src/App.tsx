import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [result, setResult] = useState<number | null>(null);
  const workerRef = useRef<Worker | null>(null);

  const [angle, setAngle] = useState(0);
  useEffect(() => {
    let frame: number;
    function animate() {
      setAngle(a => (a + 2) % 360);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const startWorker = () => {
    if (workerRef.current) workerRef.current.terminate();
    workerRef.current = new Worker(`${process.env.PUBLIC_URL}/worker.js`);
    workerRef.current.onmessage = function(e) {
      setResult(e.data);
      workerRef.current?.terminate();
      workerRef.current = null;
    };
    workerRef.current.postMessage({number:1000000000});
  };

  function heavy() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    setResult(result);
  }

  return (
      <div>
        <div style={{
          width: 40,
          height: 40,
          margin: '20px auto',
          background: '#7df',
          transform: `rotate(${angle}deg)`,
          transition: '0.02s',
        }} />
        <button onClick={startWorker}>Выполнить тяжелую задачу (через WebWorker)</button>
        <button onClick={heavy}>Выполнить тяжелую задачу локально</button>
        {result !== null && <div>Результат: {result}</div>}
      </div>
  );
}

export default App;
