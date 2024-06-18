import React, { useState, useEffect } from 'react';
import './App.css';

const RustModules = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8082/modules')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));
  }, []);

  console.log(modules); // Log modules to check in the console

  return (
    <div className="rust-modules">
      <h1>SecureCloud Threat Intelligence Exchange Platform</h1>
      <div className="footer">
        <p>Starting SecureCloud Threat Intelligence Exchange Platform...</p>
      </div>
      <p>Modules:</p>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
     
    </div>
  );
};

export default RustModules;
