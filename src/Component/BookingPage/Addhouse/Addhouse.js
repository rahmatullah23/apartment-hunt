import React, { useState } from 'react'
import "./Addhouse.css";

function Addhouse({ email }) {
  const [newHouse, setNewHouse] = useState({ownerEmail : email});
  
  // handling change
  function handleChange(e) {
    const optHouse = {...newHouse};
    optHouse[e.target.name] = e.target.value;
    setNewHouse(optHouse);
  } 

  // adding new house to database
  function addNew() {
    fetch("https://apartment-hunt-server.herokuapp.com/apartment", {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newHouse)
    })
    .then(() => {
      document.getElementById('addhouseform').reset();
      document.getElementById('success').innerHTML = "Added Successfully"
    });
  }
  
  return (
    <section>
      <div className="mt-3 container-fluid">
        <form id="addhouseform" className ="form">
          <h3>Add Rent House</h3>
          <div className="row">
            <div className="col mb-4">
              <label>Apartment Title</label>
              <input type="text" className="form-control" placeholder="Enter Title" name="title" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>Price</label>
              <input type="text" className="form-control" placeholder="Price" name="price" onBlur={handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label>Location</label>
              <input type="text" className="form-control" placeholder="Location" name="location" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>No. of Bedroom</label>
              <input type="text" className="form-control" placeholder="No. of Bedroom" name="bedroom" onBlur={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label>No. of Bathroom</label>
              <input type="text" className="form-control" placeholder="No. of Bathroom" name="bathroom" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>Thumbnail Link</label>
              <input type="url" className="form-control" placeholder="Photo Link" name="img" onBlur={handleChange} />
            </div>
          </div>
          <button type="button" className="btn px-3 text-white" onClick={addNew}>Submit</button>
          <p className="mt-4 text-center text-success" id="success"></p>
        </form>
      </div>
    </section>
  )
};

export default Addhouse;