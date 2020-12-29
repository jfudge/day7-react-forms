import { useState } from 'react';
import './App.css';

function App() {

  // Creating controlled forms
  // Controlled forms are form elements that are controlled by state
  // State controlled forms are good because you can capture the user input
  // and have your component react to it accordingly
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    console.log('submitting form');


    if (name === '') {
      console.log('The name field is required.');
    } else {
      console.log(name);
    }

    console.log(email);
    console.log(message);

  }

  return (
    <div className="container">
      <h1 className="text-center">Contact Form</h1>
      <p className="lead text-center">Please fill out the information below.</p>
      <div className="formContainer">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="form-control" value={email} onChange={blah => setEmail(blah.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        {name !== '' ? <p>Your name is {name}.</p> : ''}
        <button className="btn btn-primary" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
