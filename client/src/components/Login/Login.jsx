import React,{useState} from 'react'
import style from "../Login/Login.module.css";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import { useContext} from 'react';
import { ShowContext } from './../../ShowContext';


export default function Login() {

let myContext = useContext(ShowContext)

  const [user,setUser] = useState({
    email:"",
    password:"",
  })
 
  const [error,setError] = useState(null)
  let navigate = useNavigate()

  function getUserData(e){
    let myUser = {...user} 
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
    }
    

    async function loginUser(e){
      e.preventDefault();
 
 
        const result = await axios.post('https://amazon-clone-production.herokuapp.com/users/signin',user)
       
        if (result.data.message=="success") {
         
   
          localStorage.setItem("userToken",result.data.Token)
          navigate('/');
          myContext.tokenHandle()
        
          myContext.makingCart(result.data.Token)
         
     
         
        }
        else{
         setError(result.data.message)
        }
      
      }  



 


  return (
    <>
      <div className="text-center mt-4">
        <Link to="/">
          {" "}
          <img
            className={style.imghandle}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="container d-flex justify-content-center mt-4">
        <div className={style.maindivhandle}>
          <h4>Sign in</h4>

          {error?<div className='alert alert-danger p-2'>
{error}
</div>:''}


          <form onSubmit={ loginUser } className="d-flex flex-column">
            <label htmlFor="Email">Email or mobile phone number</label>
            <input onChange={getUserData} type="text" name='email'  />
            <label htmlFor="password">Password</label>
            <input onChange={getUserData} type="password" name='password'  />
            <button className="my-3" type="submit">
              Sign in
            </button>
            <p>
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use</a> and{" "}
              <a href="#">Privacy Noticex</a>.
            </p>
            <a className="my-2" href="#">
              Need help?
            </a>
          </form>
        </div>
      </div>

      <div
        className={`${"container d-flex justify-content-center mt-4"} ${
          style.newtohandle
        }`}>
        <h5>New to Amazon?</h5>
      </div>
      <div
        className={`${"container d-flex justify-content-center mt-1"} ${
          style.btnhandle
        }`}>
        <Link to="/register">
          <button>Create your Amazon account</button>
        </Link>
      </div>

      <div
        className={`${"container d-flex justify-content-center mt-4"} ${
          style.lasthandle
        }`}>
        <a href="#">Conditions of Use </a>
        <a href="#">Privacy Notice </a>
        <a href="#">Help </a>
      </div>

      <div
        className={`${"container d-flex justify-content-center mt-1"} ${
          style.finalhandle
        }`}>
        <p>© 1996-2022, Amazon.com, by Omar Abdelhamid</p>
      </div>
    </>
  );
}
