import React, { useEffect, useState } from 'react';

export default function FetchUsers(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r=>r.json())
      .then(data=>{ setUsers(data); setLoading(false); })
      .catch(()=> setLoading(false));
  },[]);
  return (
    <div className="card">
      <h2>FetchUsers (useEffect + fetch)</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map(u=> <li key={u.id}>{u.name} — {u.email}</li>)}
        </ul>
      )}
    </div>
  );
}
