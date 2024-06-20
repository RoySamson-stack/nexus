import React, { useState, useEffect } from 'react';
import './App.css';

const RustModules = () => {
  const [modules, setModules] = useState([]);
  const [serverInfo, setServerInfo] = useState('');
  const [cloudInstances, setCloudInstances] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8082/modules')
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));

    fetch('http://127.0.0.1:8082/monitor_server')
      .then(response => response.json())
      .then(data => setServerInfo(data))
      .catch(error => console.error('Error fetching server info:', error));

    fetch('http://127.0.0.1:8082/manage_cloud')
      .then(response => response.json())
      .then(data => setCloudInstances(data))
      .catch(error => console.error('Error fetching cloud instances:', error));

    fetch('http://127.0.0.1:8082/send_alert')
      .then(response => response.json())
      .then(data => setAlertMessage(data))
      .catch(error => console.error('Error sending alert:', error));

    fetch('http://127.0.0.1:8082/secure_data_exchange')
      .then(response => response.json())
      .then(data => setVerificationResult(data))
      .catch(error => console.error('Error performing secure data exchange:', error));
  }, []);

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
      <p>Server Info:</p>
      <pre>{serverInfo}</pre>
      <p>Cloud Instances:</p>
      <ul>
        {cloudInstances.map((instance, index) => (
          <li key={index}>{instance.id}: {instance.status}</li>
        ))}
      </ul>
      <p>Alert Message: {alertMessage}</p>
      <p>Verification Result: {verificationResult}</p>
    </div>
  );
};

export default RustModules;
