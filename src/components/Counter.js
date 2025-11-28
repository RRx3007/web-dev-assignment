import React, { useState } from 'react';

export default function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h2>Counter (useState)</h2>
      <p>Current count: {count}</p>
      <button onClick={()=>setCount(c=>c+1)}>Increment</button>
      <button onClick={()=>setCount(c=>c-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}
