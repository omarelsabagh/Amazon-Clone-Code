import React,{useContext,useEffect} from "react";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import { ShowContext } from './../../../ShowContext';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {


  let navigate = useNavigate()
  let myContext = useContext(ShowContext)

  useEffect(()=>{
    if(localStorage.getItem('userToken'))
    {
      myContext.tokenHandle()
    
    }
   },[])

   function navigateToCart()
   {
   
       navigate('/cart')
   }
   const numberOfProducts = localStorage.getItem("numberOfProducts")


  return (
    <>
    
      <div className={`${"px-2 py-2"} ${style.mynav}`}>
        {/* logo */}

        {/* start nav items */}

        <div className="d-flex align-items-center mb-lg-0">
          <img
             onClick={()=>{
              localStorage.removeItem('targetedProduct');
              myContext.showFullProduct(false)}} 
            className={`${style.classforborder} ${style.navbarlogo}`}
            src="https://i.ibb.co/Ld1ZZWg/Png-Item-12080.png"
            alt="Amazon Logo"
          />

          {/* place */}
          <li className={style.handleplace}>
            <div className={`${"ms-1 row "} ${style.classforborder}`}>
              <div className="col-md-2 d-flex mt-2 align-items-center">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="col-md-10 p-0">
                <p>Hello</p>
                <h5>Select your address</h5>
              </div>
            </div>
          </li>
          {/* input */}
          <li className="d-flex align-items-center">
            <div className={`${"ms-3 d-flex"} ${style.custominput}`}>
              <select className={`${""} ${style.customselect}`} name="" id="">
                <option value="search-alias=aps">All</option>
                <option value="search-alias=alexa-skills">Alexa Skills</option>
                <option value="search-alias=amazon-devices">
                  Amazon Devices
                </option>
                <option value="search-alias=live-explorations">
                  Amazon Explore
                </option>
                <option value="search-alias=amazon-pharmacy">
                  Amazon Pharmacy
                </option>
                <option value="search-alias=warehouse-deals">
                  Amazon Warehouse
                </option>
                <option value="search-alias=appliances">Appliances</option>
                <option value="search-alias=mobile-apps">
                  Apps &amp; Games
                </option>
                <option value="search-alias=arts-crafts">
                  Arts, Crafts &amp; Sewing
                </option>
                <option value="search-alias=audible">
                  Audible Books &amp; Originals
                </option>
                <option value="search-alias=automotive">
                  Automotive Parts &amp; Accessories
                </option>
                <option value="search-alias=baby-products">Baby</option>
                <option value="search-alias=beauty">
                  Beauty &amp; Personal Care
                </option>
                <option value="search-alias=stripbooks">Books</option>
                <option value="search-alias=popular">CDs &amp; Vinyl</option>
                <option value="search-alias=mobile">
                  Cell Phones &amp; Accessories
                </option>
                <option value="search-alias=fashion">
                  Clothing, Shoes &amp; Jewelry
                </option>
                <option value="search-alias=fashion-womens">
                  &nbsp;&nbsp;&nbsp;Women
                </option>
                <option value="search-alias=fashion-mens">
                  &nbsp;&nbsp;&nbsp;Men
                </option>
                <option value="search-alias=fashion-girls">
                  &nbsp;&nbsp;&nbsp;Girls
                </option>
                <option value="search-alias=fashion-boys">
                  &nbsp;&nbsp;&nbsp;Boys
                </option>
                <option value="search-alias=fashion-baby">
                  &nbsp;&nbsp;&nbsp;Baby
                </option>
                <option value="search-alias=collectibles">
                  Collectibles &amp; Fine Art
                </option>
                <option value="search-alias=computers">Computers</option>
                <option value="search-alias=financial">
                  Credit and Payment Cards
                </option>
                <option value="search-alias=edu-alt-content">
                  Digital Educational Resources
                </option>
                <option value="search-alias=digital-music">
                  Digital Music
                </option>
                <option value="search-alias=electronics">Electronics</option>
                <option value="search-alias=lawngarden">
                  Garden &amp; Outdoor
                </option>
                <option value="search-alias=gift-cards">Gift Cards</option>
                <option value="search-alias=grocery">
                  Grocery &amp; Gourmet Food
                </option>
                <option value="search-alias=handmade">Handmade</option>
                <option value="search-alias=hpc">
                  Health, Household &amp; Baby Care
                </option>
                <option value="search-alias=local-services">
                  Home &amp; Business Services
                </option>
                <option value="search-alias=garden">Home &amp; Kitchen</option>
                <option value="search-alias=industrial">
                  Industrial &amp; Scientific
                </option>
                <option value="search-alias=prime-exclusive">
                  Just for Prime
                </option>
                <option value="search-alias=digital-text">Kindle Store</option>
                <option value="search-alias=fashion-luggage">
                  Luggage &amp; Travel Gear
                </option>
                <option value="search-alias=luxury">Luxury Stores</option>
                <option value="search-alias=magazines">
                  Magazine Subscriptions
                </option>
                <option value="search-alias=movies-tv">Movies &amp; TV</option>
                <option value="search-alias=mi">Musical Instruments</option>
                <option value="search-alias=office-products">
                  Office Products
                </option>
                <option value="search-alias=courses">Online Learning</option>
                <option value="search-alias=pets">Pet Supplies</option>
                <option value="search-alias=luxury-beauty">
                  Premium Beauty
                </option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=smart-home">Smart Home</option>
                <option value="search-alias=software">Software</option>
                <option value="search-alias=sporting">
                  Sports &amp; Outdoors
                </option>
                <option value="search-alias=specialty-aps-sns">
                  Subscribe &amp; Save
                </option>
                <option value="search-alias=subscribe-with-amazon">
                  Subscription Boxes
                </option>
                <option value="search-alias=tools">
                  Tools &amp; Home Improvement
                </option>
                <option value="search-alias=toys-and-games">
                  Toys &amp; Games
                </option>
                <option value="search-alias=under-ten-dollars">
                  Under $10
                </option>
                <option value="search-alias=videogames">Video Games</option>
              </select>
              <input className={`${""} ${style.custominput}`} type="text" />
              <button className={`${""} ${style.custombtn}`}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </li>
        </div>
        
 
{myContext.Token==null?        <ul className={`${"d-flex align-items-center mx-5  mb-lg-0"} ${style.classforresponsive}`}>
          <li className="mx-3">
            <Link to="/login">Login</Link>
          </li>
          <li className="">
            <Link className="" to="/register">
              Register
            </Link>
          </li>
        </ul>: <div className="d-flex d-flex align-items-center">
        <ul onClick={navigateToCart} className={`${"d-flex align-items-center  mb-lg-0"} ${style.classforresponsive}`}>
               <li className="">
                 <a className="d-flex align-items-center">
                 <span className="text-info cursor">{numberOfProducts?numberOfProducts:"0"}</span>
                   <i className="fa-solid fa-lg fa-cart-shopping"></i>
                 </a>
               </li>
             </ul>
        <ul className={`${"d-flex align-items-center  mb-lg-0"} ${style.classforresponsive}`}>
<li className="d-flex justify-content-center align-content-center">
  <span href=""><i className="fa-solid fa-user"></i></span>
  <a className="mx-1" href="#">{myContext.Token.user.username}</a>
</li>
<li onClick={myContext.logout} className="mx-3">
  <a className="" >
    Logout
  </a>
</li>
</ul>
        </div>
             }

     
        


       
       
          <div onClick={myContext.showMenuNav} className={`${"me-5 d-flex align-items-center mb-lg-0"} ${style.classforresponsive2}`}>
            <a className="">
            <i  className="fa-solid fa-xl fa-bars"></i>
            </a>
           
          </div>
       

        
      </div>
    </>
  );
}
