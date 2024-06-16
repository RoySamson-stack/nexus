import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import BugList from './BugList';
import BugDetail from './BugDetails';
import BugForm from './BugForm';
import './App.css'

const App = () => {
  // State for bug bounty page
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Cross-site Scripting (XSS) in Login Form', description: '...', priority: 'High', reporter: 'Alice' },
    { id: 2, title: 'SQL Injection in User Profile Update', description: '...', priority: 'Medium', reporter: 'Bob' },
    { id: 3, title: 'Broken Authentication in Admin Panel', description: '...', priority: 'High', reporter: 'Charlie' }
  ]);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleBugSelect = (bugId) => {
    const bug = bugs.find(bug => bug.id === bugId);
    setSelectedBug(bug);
  }

  const handleBugSubmit = (newBug) => {
    const newBugList = [...bugs, { id: bugs.length + 1, ...newBug }];
    setBugs(newBugList);
  }

  // State for fetching data from Django
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.error("Error fetching data from Django:", err);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="app">
      <Header />
      <main>
        {/* Bug Bounty Page Components */}
        <BugList bugs={bugs} onBugSelect={handleBugSelect} />
        {selectedBug && <BugDetail bug={selectedBug} />}
        <BugForm onSubmit={handleBugSubmit} />

        {/* Data from Django Components */}
        <div>
          <header>Data from Django</header>
          <hr />
          {details.length === 0 ? (
            <div>No data available</div>
          ) : (
            details.map((output, id) => (
              <div key={id}>
                <div>
                  <h2>{output.username}</h2>
                  <h2>{output.organization}</h2>
                  <h2>{output.role}</h2>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
