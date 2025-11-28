import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({children}){
  const [user, setUser] = useState({name:'Guest'});
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

function ShowUser(){
  const {user} = useContext(UserContext);
  return <p>Current user: {user.name}</p>;
}

function ChangeUser(){
  const {setUser} = useContext(UserContext);
  return <div>
    <input placeholder='new name' onBlur={(e)=>setUser({name:e.target.value||'Guest'})} />
    <small> type a name and blur to change context</small>
  </div>
}

export default function ContextDemo(){
  return (
    <div className="card">
      <h2>ContextDemo (Context API)</h2>
      <ShowUser />
      <ChangeUser />
    </div>
  );
}
