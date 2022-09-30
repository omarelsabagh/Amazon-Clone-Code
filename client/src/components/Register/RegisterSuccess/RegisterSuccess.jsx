import React from 'react'
import style from '../Register.module.css'
import {Link, useNavigate} from 'react-router-dom'
export default function RegisterSuccess() {
    let navigate = useNavigate()
    function navToSignIn() {
       
        navigate('/login')
    }
  
  return (<>
        <div className="text-center mt-4">
        <Link to='/'> <img className={style.imghandle} src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
    </Link>
       </div>
    
       <div className="container d-flex justify-content-center mt-4">
       <div className={style.maindivhandle}>
    
   
    <form  className='d-flex flex-column'>
   
        <div className='text-center'>
        <i className="fa-solid fa-xl m-3 text-success fa-thumbs-up"></i>
            <h5>Registered Successfully</h5>
            </div>
          <button onClick={navToSignIn} className='my-3' type='submit'> Login Now</button>

    </form>
    
    </div>
    
    
       </div>
    
    
    <div className={`${"container d-flex justify-content-center mt-4"} ${style.lasthandle}`}>
        <a href="#">Conditions of Use </a>
        <a href="#">Privacy Notice </a>
        <a href="#">Help </a>
        
    </div>
    
    <div className={`${"container d-flex justify-content-center mt-1"} ${style.finalhandle}`}>
    <p>© 1996-2022, Amazon.com, by Omar Abdelhamid</p>
    </div>
      </>
      
      )
}
