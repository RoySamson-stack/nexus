import React from 'react';


// remeber to make it read the report s the user haas sumitted from the database in django side 
const BugList = ({ bugs, onBugSelect }) => {
  return (
    <div className="bug-list">
      <h2>Bug Reports</h2>
      <ul>
        {bugs.map(bug => (
          <li key={bug.id} onClick={() => onBugSelect(bug.id)}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
