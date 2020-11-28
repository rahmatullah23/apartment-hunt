import React from 'react'
import './Header.css';

function Header({ setKeyword }) {

  // handling submit
  function handleSearch(e) {
    const search = document.getElementById('search');
    setKeyword(search.value)
    e.preventDefault(e)
  }

  return (
    <header className="d-flex flex-column align-items-center justify-content-center">
      <div className="title"> 
        <h1 className="text-white"><b>FIND YOUR HOUSE RENT</b></h1> 
      </div> 
      <div>
        <br/>
        <form onSubmit={handleSearch} className="form-inline my-5 my-lg-0">
          <input onChange={handleSearch} id="search" className="input form-control mr-sm-2" type="search" placeholder="Search Location" aria-label="Search"/>
          <button className="btn text-white px-4 my-2 my-sm-0 find-btn">Find Now</button>
        </form>
      </div>
    </header>
  )
}

export default Header;
