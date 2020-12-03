import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  function handleChange(event){

  }

  function handleSubmit(event){

  }
  
  return (
    <div class="Container">
      <h1> Google Books Search</h1>
      <form onChange={handleSubmit}>
        <div class="form-group">
          <input
            type="text" onChange={handleChange}
            className="form-control mt-10"
            placeholder="Search For A Book"
            autoComplete="off">

          </input>
        </div>
        <Button variant="primary">Search</Button>
      </form>
    </div>
  )
};

export default App;
