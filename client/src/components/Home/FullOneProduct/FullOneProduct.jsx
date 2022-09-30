import React, { useContext, useEffect } from "react";
import style from "../FullOneProduct/FullOneProduct.module.css";
import { ShowContext } from "./../../../ShowContext";
import Navbar from "./../Navbar/Navbar";
import Navbar2 from "./../Navbar2/Navbar2";
import { useNavigate } from 'react-router-dom';
export default function FullOneProduct() {
  let myContext = useContext(ShowContext);

  let navigate = useNavigate()
  let myData = JSON.parse(localStorage.getItem("targetedProduct"));

  const { image,title,category,price} =
    myData;

    function navigateToSuccess(){
      navigate('/buysuccess')
    }
  

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      myContext.tokenHandle();
     myContext.setCartError('')
    }
  }, []);

 

  return (
    <>
      <Navbar />
      <Navbar2 />

      <div className="container-fluid my-5">
        <div className={`${style.backtohandle}`}>
          <i className="fa-solid fa-chevron-left"></i>
          <a
        
            onClick={() => {
              myContext.showFullProduct(false);
            }}>
            Back to Products
          </a>
        </div>

        <div className="d-flex mt-4 justify-content-around">
          {/* back to products */}

          {/* product image */}
          <div
            className={`${"d-flex justify-content-center"} ${
              style.imgdivhandle
            }`}>
            <img className={style.imghandle} src={image} alt="" />
          </div>

          {/* product details */}
          <div className={style.thirddivhandle}>
            <h3>{title}</h3>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span> 93 ratings</span>
            </div>
            <h4>
              With Deal: <span>${price}</span>
            </h4>
            <h4>
              You Save: <span>14%</span>
            </h4>
            <h4>$35.84 Shipping & Import Fees Deposit to Egypt.</h4>
            <h5>
              Category: <span>{category}</span>
            </h5>
            <h6>Product details</h6>
            <table>
              <tbody>
                <tr>
                  <td className={style.blodtext}>Color</td>
                  <td>Grey</td>
                </tr>
                <tr>
                  <td className={style.blodtext}>Brand</td>
                  <td>Symino</td>
                </tr>
                <tr>
                  <td className={style.blodtext}>Special Feature</td>
                  <td>Adjustable</td>
                </tr>
                <tr>
                  <td className={style.blodtext}>Material</td>
                  <td>Polycarbonate</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* buying */}

          <div className={style.handefourthdiv}>
            <h6>${price}</h6>
            <h4 className="my-3">
              $655.84 Shipping & Import Fees Deposit to Egypt
            </h4>
            <h3>
              <a href="#">
                <i className="fa-solid fa-location-dot my-2"></i> Deliver to
                Egypt
              </a>
            </h3>
            <h2>In Stock.</h2>

            {myContext.apiError?<div className='alert alert-danger p-2'>
{myContext.apiError}
</div>:''}
{myContext.cartError?<div className='alert alert-danger p-2'>
{myContext.cartError}
</div>:''}

<label className="text-muted" htmlFor="quantity">Quantity</label>
<select className={`${"mb-3"} ${style.inputhandle}`} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">
                  3
                </option>
                </select>
       
   
            <button
              onClick={(e)=>{myContext.addProductToOrder(e,myData)} }
              className={`${style.btnhandle} ${style.btn1}`}>
              Add to Cart
            </button>
            <button onClick={navigateToSuccess} className={`${style.btnhandle} ${style.btn2}`}>
              Buy Now
            </button>

       
     
          </div>
        </div>
      </div>
    </>
  );
}
