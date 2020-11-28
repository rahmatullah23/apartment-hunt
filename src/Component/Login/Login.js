import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseconfig';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import fb from '../../images/fbIcon.png';
import "./Login.css";
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';

// initializing app with condition
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [user, setUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [validForm, setValidForm] = useState(true);
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  // Google Sign In
  const googlesignin = () => {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      const {displayName, email} = result.user;
      const optUser = {
        signed: true,
        name: displayName,
        email: email,
        message: 'Login Successful'
      }
      setUser(optUser);
      history.replace(from);
    })
    .catch(error => {
      const optUser = {};
      optUser.message = error.message;
      setUser(optUser);
    });
  }

  // Facbook Login
  const fblogin = () => {
    firebase.auth().signInWithPopup(fbprovider)
    .then(result => {
      const {displayName, email} = result.user;
      const optUser = {
        signed: true,
        name: displayName,
        email: email,
        message: 'Login Successful'
      }
      setUser(optUser);
      history.replace(from);
    })
    .catch(error => {
      const optUser = {};
      optUser.message = error.message;
      setUser(optUser);
    });
  }

  // Email Password Login / Sign in
  const handleChange=(e)=>{
    const optUser = {...user};
      optUser[e.target.name] = e.target.value;

      // confirming same password
      if(e.target.name === 'confirm') {
        if(e.target.value !== user.password) {
          optUser.message = "Password Didn't Match";
          setValidForm(false);
        }
        else {
          optUser.message = '';
          setValidForm(true);
        }
      }
    setUser(optUser);
  }

  const subForm = (e) => {

    // email sign in
    if (newUser){
      if(validForm) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          const optUser = {
            signed: true,
            name: user.name,
            email: user.email,
            message: 'Login Successful'
          }
          setUser(optUser);
          updateName(user.name);
          history.replace(from);
        })
        .catch(error => {
          const optUser = {...user};
          optUser.message = error.message;
          setUser(optUser);
        });
      }
    }

    // email login
    if (!newUser) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        const {displayName, email} = result.user;
        const optUser = {
          signed: true,
          name: displayName,
          email: email,
          message: 'Login Successful'
        }
        setUser(optUser);
        history.replace(from);
      })
      .catch(error => {
        const optUser = {};
        optUser.message = error.message;
        setUser(optUser);
      });
    }
    e.preventDefault();
  }
  
  // update name
  const updateName = name => {
    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({displayName: name})
    .then()
    .catch(error => console.log(error))
  }

  return (
    <section id="login">
      <Navbar />
      <form className="form1 mt-5" onSubmit={subForm}>
        <h3 className="mb-4"><b>{newUser ? 'Create Account' : 'Login'}</b></h3>
        {
          newUser && <div className="form-group">
            <input onBlur={handleChange} name="name" type="text" placeholder="Your Name" className="form-control" required />
          </div>
        }
        <div className="form-group">
          <input type="email" onBlur={handleChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Your Email" required/>
        </div>
        <div className="form-group">
          <input type="password" onBlur={handleChange} className="form-control" name="password" placeholder="Your Password" required/>
        </div>
        {
          newUser && <div className="form-group">
            <input onBlur={handleChange}  type="password" name="confirm" placeholder="Confirm Password" className="form-control" required />
          </div>
        }
        <input type="submit" className="btn btn-block login" value={newUser ? 'Create Account' : 'Login'} />
        <p className="text-danger text-center mt-3">{user.message}</p>

        <span className="my-4 btn btn-block text-primary" onClick={()=>{
          setNewUser(!newUser);
          setUser({})
        }}>{ newUser ? 'I have an account' : 'I am new here' }</span>
        <div className="text-center my-4">
          <h6><b>Or</b></h6>
        </div>

        <button  onClick={fblogin}  type="button" className="btn rounded-pill btn-block">
          <img src={fb} alt="" width="30px" className="mb-1 mr-2" /> Continue With Facebook
        </button>
        <button  onClick={googlesignin} type="button" className="btn rounded-pill btn-block">
          <img src={google} alt="" width="30px" className="mb-1 mr-2" /> Continue With Google
        </button>
      </form>
    </section>
  )
}

export default Login;