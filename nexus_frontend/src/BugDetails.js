import React from 'react';

const BugDetail = ({ bug }) => {
  return (
    <div className="bug-detail">
      <h2>Bug Details</h2>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Priority: {bug.priority}</p>
      <p>Reported By: {bug.reporter}</p>
    </div>
  );
}

export default BugDetail;
