import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import style from '../Menu/Menu.module.css'
import { ShowContext } from './../../../ShowContext';

export default function Menu() {

    let myContext = useContext(ShowContext)

  return (<>
{myContext.isTrue? <div className={`${style.menuhandle} ${style.addedclass}`}>  
<i onClick={myContext.removeMenu}  className={`${"fa-solid fa-xmark"} ${style.iconhandle}` }></i>


<header className={style.headerhandle}><i className="fa-solid fa-user"></i> Hello,<Link to='/login'> <span>Sign in</span></Link></header>
<div className={`${style.firstdivhandle}`}>
<h4>Trending</h4>
<div ><span>Best Sellers</span></div>
<div ><span >New Releases</span></div>
<div> <span>Movers & Shakers</span></div>

</div>
<div className={`${style.firstdivhandle}`}>
<h4>Digital Content & Devices</h4>
<div ><span>Prime Video</span></div>
<div ><span >Amazon Music</span></div>
<div> <span>Echo & Alexa</span></div>
<div> <span>Fire Tablets</span></div>
<div> <span>Fire TV</span></div>
<div> <span>Kindle E-readers & Books</span></div>
<div> <span>Audible Books & Originals</span></div>
<div> <span>Amazon Photos</span></div>
<div> <span>Appstore for Android</span></div>
<div> <span>Online Learning</span></div>

</div>

<div className={`${style.firstdivhandle}`}>
<h4>Shop By Department</h4>
<div ><span>Clothing, Shoes, Jewelry & Watches</span></div>
<div ><span >Books</span></div>
<div> <span>Movies, Music & Games</span></div>
<div> <span>Electronics</span></div>


</div>


</div>


:<div className={`${style.menuhandle} ${style.addedclass2}`}>

<i onClick={myContext.removeMenu}  className={`${"fa-solid fa-xmark"} ${style.iconhandle}`}></i>

   </div>}
{myContext.isTrue?<div className={style.ovarlay}></div>:''}


  </>
    
  )
}
