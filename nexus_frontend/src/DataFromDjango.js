import React from 'react';

const DataFromDjango = ({ details }) => {
  return (
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
  );
}

export default DataFromDjango;
