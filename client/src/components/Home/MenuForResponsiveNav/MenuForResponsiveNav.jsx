import React,{useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import style from "../MenuForResponsiveNav/MenuForResponsiveNav.module.css";
import { ShowContext } from './../../../ShowContext';


export default function MenuForResponsiveNav() {
 
  let myContext = useContext(ShowContext)
 
  useEffect(()=>{
    if(localStorage.getItem('userToken'))
    {
      myContext.tokenHandle()
    }
   },[])
  

  return (
    <>
    
      <div className={myContext.isTrueNav? `${style.menuhandle} ${style.addedclass}`:`${style.menuhandle} ${style.addedclass2}`}>
        <header className={style.headerhandle}>
          <i className="fa-solid fa-user"></i> Hello
        </header>
        <div className={`${style.firstdivhandle}`}>
          <div>
            <span>
              <Link to="login">Login</Link>
            </span>
          </div>
          <div>
            <span>
              {" "}
              <a className="" href="#">
                Logout
              </a>
            </span>
          </div>
          <div>
            <span>
              <Link className="" to="register">
                Register
              </Link>
            </span>
          </div>
          <div>
            <span>
              <a className="" href="#">
                <i className="fa-solid fa-lg fa-cart-shopping"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
