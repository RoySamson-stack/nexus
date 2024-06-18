import React, { useState, useEffect } from 'react';
import './RustModules.css';

const RustModules = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/modules')
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));
  }, []);

  return (
    <div className="rust-modules">
      <h1>SecureCloud Threat Intelligence Exchange Platform</h1>
      <p>Modules:</p>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
      <div className="footer">
        <p>Starting SecureCloud Threat Intelligence Exchange Platform...</p>
      </div>
    </div>
  );
};

export default RustModules;
