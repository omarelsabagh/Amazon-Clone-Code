import React,{useState} from 'react'
import style from '../Register/Register.module.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import Joi ,{abortEarly} from 'joi'


export default function Register() {

  
const [user,setUser] = useState({
  username:"",
  email:"",
  password:"",
  passwordc:""
})

const [errorList,setErrorList] = useState([])
const [error,setError] = useState(null)
const [isLoadingBtn,setIsLoadingBtn] = useState(false)

let navigate = useNavigate()

function getUserData(e){
let myUser = {...user} 
myUser[e.target.name] = e.target.value;
setUser(myUser)
}


 function validationInputs(user) {
  //validation joi
const schema = Joi.object({
  username:Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  passwordc:Joi.ref('password')
})

return schema.validate(user, {abortEarly})
  
}

async function registerUser(e){
e.preventDefault();

const validationResult =  validationInputs(user);
if(validationResult.error)
{
setErrorList(validationResult.error.details)
}
else
{
  //validation api
  const result = await axios.post('https://amazon-clone-production.herokuapp.com/users',user)
  if (result.data.message=="success") {
    
    navigate('/registersuccess');
 
  }
  else{
   setError(result.data.message)
  }
}



}

  return (<>
    <div className="text-center mt-4">
    <Link to='/'> <img className={style.imghandle} src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
</Link>
   </div>

   <div className="container d-flex justify-content-center mt-4">
   <div className={style.maindivhandle}>

<h4>Create account</h4>
{/* error validation */}
{errorList.length?errorList.map((oneError,index)=>{
return <div key={index} className='alert alert-danger p-2'>
{oneError.message}
</div>
}):''}
{/* error api */}
{error?<div className='alert alert-danger p-2'>
{error}
</div>:''}

<form onSubmit={registerUser} className='d-flex flex-column'>
<label htmlFor="Email">Your name</label>
<input onChange={getUserData} type="text" placeholder='First and last name' name='username' />
<label htmlFor="password">Mobile number or email</label>
<input onChange={getUserData} type="text" name='email' />
<label htmlFor="password">Password</label>
<input onChange={getUserData} type="password" placeholder='At least 6 characters' name='password' />
<label htmlFor="password">Re-enter password</label>
<input onChange={getUserData} type="password" name='passwordc' />
<button  className='my-3' type='submit'>Register</button>
<p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>  and <a href="#">Privacy Noticex</a>.</p>
<a className='my-2' href="#">Need help?</a>
</form>

</div>


   </div>

   <div className={`${"container d-flex flex-column justify-content-start w-25 mt-4"} ${style.newtohandle}`}>
<h5>Already have an account?<Link to='/login'>Sign in</Link></h5>
<h5>Buying for work? <a href="#"> Create a free business account</a></h5>

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
