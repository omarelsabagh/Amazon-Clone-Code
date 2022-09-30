import React,{useContext} from 'react'
import style from '../Navbar/Navbar.module.css'
import style2 from '../Navbar2/Navbar2.module.css'
import { ShowContext } from './../../../ShowContext';



export default function Navbar2() {

  let myContext = useContext(ShowContext)
  return (<>
    
     <div className={style2.mynav}>
    

        
        <li className="">
            <a onClick={myContext.showMenu} className={`${""} ${style.classforborder}`} href="#"><i className="fa-solid fa-bars"></i><span> All</span></a>
          </li> 
          <div className={`${"d-flex" }  ${style2.classforresponsive}`}>
          <li className="">
            <a className={`${""} ${style.classforborder} `} href="#">Back to School</a>
          </li>
          <li className="">
            <a className={`${""} ${style.classforborder}`}  href="#">Off to College</a>
          </li>
          <li className="">
            <a className={`${""} ${style.classforborder}`}  href="#">Best Sellers</a>
          </li>
          <li className="">
            <a className={`${""} ${style.classforborder}`}  href="#">Amazon Basics</a>
          </li>
          <li className="">
            <a className={`${""} ${style.classforborder}`}  href="#">Customer Service</a>
          </li>
          <li className="">
            <a className={`${""} ${style.classforborder}`}  href="#">Today's Deals</a>
          </li>
          <li className="nav-item">
            <a className={`${""} ${style.classforborder}`}  href="#">New Releases</a>
          </li>
          <li className="nav-item">
            <a className={`${""} ${style.classforborder}`}  href="#">Music</a>
          </li>
          </div>
         
     
    
         
         
      
      
      
   
  
  

    </div>

    
  </>
    
 
  )
}
