import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    axios.get('http://localhost:8000/')
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => {
        console.error("Error fetching data from Django:", err);
      });
  }

  render() {
    return (
      <div>
        <header>Data from Django</header>
        <hr />
        {this.state.details.length === 0 ? (
          <div>No data available</div>
        ) : (
          this.state.details.map((output, id) => (
            <div key={id}>
              <div>
                <h2>{output.employee}</h2>
                <h2>{output.department}</h2>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;
