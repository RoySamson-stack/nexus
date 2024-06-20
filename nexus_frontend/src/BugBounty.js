import React, { useState } from "react";
import "./BugBounty.css";

const SideNav = () => (
  <nav className="side-nav">
    <ul>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#settings">Settings</a></li>
    </ul>
  </nav>
);

const TopNav = () => (
  <nav className="top-nav">
    <ul>
      <li><a href="#all-programs">All Programs</a></li>
      <li><a href="#my-programs">My Programs</a></li>
      <li><a href="#bookmarks">Bookmarks</a></li>
      <li><a href="#pending-invitation">Pending Invitation</a></li>
      <li><a href="#collaboration">Collaboration</a></li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Search Programs..." />
      <select>
        <option value="">Program Type</option>
        {/* Add options here */}
      </select>
      <select>
        <option value="">Asset Type</option>
        {/* Add options here */}
      </select>
      <select>
        <option value="">Industry</option>
        {/* Add options here */}
      </select>
      <button>Search</button>
    </div>
  </nav>
);

// const BugList = ({ bugs, onBugSelect }) => (
//   <div className="bug-list">
//     {bugs.map((bug) => (
//       <div key={bug.id} onClick={() => onBugSelect(bug.id)}>
//         {bug.title}
//       </div>
//     ))}
//   </div>
// );

const BugDetail = ({ bug }) => (
  <div className="bug-detail">
    <h2>{bug.title}</h2>
    <p>{bug.description}</p>
    <p>Priority: {bug.priority}</p>
    <p>Reporter: {bug.reporter}</p>
  </div>
);

const BugForm = ({ onSubmit }) => {
  const [bug, setBug] = useState({ title: "", description: "", priority: "", reporter: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBug((prevBug) => ({ ...prevBug, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bug);
    setBug({ title: "", description: "", priority: "", reporter: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      <input
        type="text"
        name="title"
        value={bug.title}
        onChange={handleChange}
        placeholder="Bug Title"
      />
      <textarea
        name="description"
        value={bug.description}
        onChange={handleChange}
        placeholder="Bug Description"
      />
      <input
        type="text"
        name="priority"
        value={bug.priority}
        onChange={handleChange}
        placeholder="Priority"
      />
      <input
        type="text"
        name="reporter"
        value={bug.reporter}
        onChange={handleChange}
        placeholder="Reporter"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Cross-site Scripting (XSS) in Login Form', description: '...', priority: 'High', reporter: 'Alice' },
    { id: 2, title: 'SQL Injection in User Profile Update', description: '...', priority: 'Medium', reporter: 'Bob' },
    { id: 3, title: 'Broken Authentication in Admin Panel', description: '...', priority: 'High', reporter: 'Charlie' }
  ]);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleBugSelect = (bugId) => {
    const bug = bugs.find(b => b.id === bugId);
    setSelectedBug(bug);
  };

//   const handleBugSubmit = (newBug) => {
//     const newBugList = [...bugs, { id: bugs.length + 1, ...newBug }];
//     setBugs(newBugList);
//   };

  return (
    <div className="app">
      <SideNav />
      <div className="main-content">
        <TopNav />
        {/* <div className="bugs">
          <BugList bugs={bugs} onBugSelect={handleBugSelect} />
          {selectedBug && <BugDetail bug={selectedBug} />}
          <BugForm onSubmit={handleBugSubmit} />
        </div> */}
      </div>
    </div>
  );
};

export default App;
