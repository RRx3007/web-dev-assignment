import React from 'react';
export default function Home(){ 
  return (
    <div className="card">
      <h2>Home</h2>
      <p>This project demonstrates basic React topics and components (files are named by concept).</p>
      <ul>
        <li>Counter - useState</li>
        <li>FetchUsers - useEffect + fetch</li>
        <li>FormDemo - controlled form</li>
        <li>ContextDemo - Context API</li>
        <li>Routing - react-router-dom</li>
      </ul>
    </div>
  );
}
