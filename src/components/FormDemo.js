import React, { useState } from 'react';

export default function FormDemo(){
  const [form, setForm] = useState({name:'', email:''});
  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    alert('Submitted: ' + JSON.stringify(form));
    setForm({name:'', email:''});
  }
  return (
    <div className="card">
      <h2>FormDemo (Controlled Form)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: <input name="name" value={form.name} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Email: <input name="email" value={form.email} onChange={handleChange} /></label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
