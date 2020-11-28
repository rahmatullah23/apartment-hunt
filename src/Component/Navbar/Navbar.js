import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';

function Navbar() {
  const [user] = useContext(UserContext);

    return (
      <nav className="ml-5 mr-5 navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
          <img style={{height:"54.8px", width:"100px"}} src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-2">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active mx-2">
              <a className="nav-link" href="#apartments">Apartments</a>
            </li>
            <li className="nav-right active mx-2">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item active mx-2">              
            <a className="nav-link" href="#footer">Contact</a>
            </li>
            {
              user.signed ?
              <Link to="/dashboard">
                <button style={{background:"#275A53"}} type="button" className="btn px-3 text-white">Dashboard</button>
              </Link> :
              <Link to="/login">
                <button style={{background:"#275A53"}} type="button" className="btn px-3 text-white">Login</button>
              </Link>
            }
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
