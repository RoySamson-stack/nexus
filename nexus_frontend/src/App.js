import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import BugList from './BugList';
import BugDetail from './BugDetails';
import BugForm from './BugForm';
import HomePage from './HomePage';
import DataFromDjango from './DataFromDjango';
import './App.css';

const App = () => {
  // State for bug bounty page
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Cross-site Scripting (XSS) in Login Form', description: '...', priority: 'High', reporter: 'Alice' },
    { id: 2, title: 'SQL Injection in User Profile Update', description: '...', priority: 'Medium', reporter: 'Bob' },
    { id: 3, title: 'Broken Authentication in Admin Panel', description: '...', priority: 'High', reporter: 'Charlie' }
  ]);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleBugSelect = (bugId) => {
    const bug = bugs.find(b => b.id === bugId);
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
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bug-bounty" element={
              <>
                <BugList bugs={bugs} onBugSelect={handleBugSelect} />
                {selectedBug && <BugDetail bug={selectedBug} />}
                <BugForm onSubmit={handleBugSubmit} />
              </>
            } />
            <Route path="/data-from-django" element={<DataFromDjango details={details} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
