import React from 'react'
import style from '../Footer/Footer.module.css'
export default function Footer() {
  return (<>
  <div className={`${style.footerhandle}`}>
    <div className={`${"container"} ${style.footerhandle}`}>
         <div className={`${"row"} ${style.trymargin}`}>
        <div className="col-md-3">
            <div className="d-felx flex-column">

                <h5>Get to Know Us</h5>
                <p>Careers</p>
                <p>Amazon Newsletter</p>
                <p>About Amazon</p>
                <p>Sustainability</p>
                <p>Press Center</p>
                <p>Investor Relations</p>
                <p>Amazon Devices</p>
                <p>Amazon Science</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className={`${"d-felx flex-column"} ${style.classforresponsive}`}>

                <h5>Make Money with Us</h5>
                <p>Sell products on Amazon</p>
                <p>Sell apps on Amazon</p>
                <p>Supply to Amazon</p>
                <p>Become an Affiliate</p>
                <p>Become a Delivery Driver</p>
                <p>Start a package delivery business</p>
                <p>Advertise Your Products</p>
                <p>Self-Publish with Us</p>
                <p>Host an Amazon Hub</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className={`${"d-felx flex-column"} ${style.classforresponsive}`}>

                <h5>Amazon Payment Products</h5>
                <p>Amazon Rewards Visa Signature Cards</p>
                <p>Amazon Store Card</p>
                <p>Amazon Secured Card</p>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Credit Card Marketplace</p>
                <p>Reload Your Balance</p>
                <p>Amazon Currency Converter</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className={`${"d-felx flex-column"} ${style.classforresponsive}`}>

                <h5>Let Us Help You</h5>
                <p>Amazon and COVID-19</p>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Shipping Rates and Policies</p>
                <p>Amazon Prime</p>
                <p>Returns and Replacements</p>
                <p>Manage Your Content and Devices</p>
                <p>Your Recalls and Product Safety Alerts</p>
                <p>Amazon Assistant</p>
                <p>Help</p>
            </div>
        </div>
    </div>
    </div>
   



  </div>
  {/* h Line */}
  <div className={style.hline}>

  </div>


  <div className={ `${"d-flex justify-content-center"} ${style.footerhandle}`}>
    
<img src="https://i.ibb.co/Fwwfrw7/coped-1.png" alt="Amazon Logo"/>

  </div>

  <div className={ `${"d-flex justify-content-center"} ${style.footerhandle} ${style.paddinghandle}`}>
    
    <a href="#">Conditions of Use</a>
    <a href="#">Privacy Notice</a>
    <a href="#">Interest-Based Ads</a>

    
      </div>
      <div className={ `${"d-flex justify-content-center"} ${style.footerhandle}  ${style.paddinghandle}`}>
    
      <h3>© 1996-2022, Amazon.com, by Omar Abdelhamid</h3>
      </div>     
  </>  
  )
}
