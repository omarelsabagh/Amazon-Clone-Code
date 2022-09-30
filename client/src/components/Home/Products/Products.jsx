import React, { useEffect } from "react";
import style from "../Products/Products.module.css";
import $ from "jquery";
import ProductsChild from "./ProductsChild";

import { useContext } from "react";
import { ShowContext } from './../../../ShowContext';

export default function Products() {
 

  let myContext = useContext(ShowContext)
  

  function showMore(e) {
    const myElement = e.target;
    let myP = $(myElement).prev()[0];

    $(myP).toggleClass(`${style.toggeldclass} ${style.customP}`);
    if ($(myP).hasClass(`${style.toggeldclass}`)) {
      $(myElement).html("show less");
    } else {
      $(myElement).html("..show more");
    }
  }

  function likeBtn(e) {
    const myElement = e.target;
    $(myElement).toggleClass("fa-regular fa-solid");
  }

  useEffect(() => {
    myContext.getProducts();
    }, []);


  return (
    <>
  
      <div className="container ">
        <div className="row">
          {myContext.products.length ? 
           myContext.products.map((product)=>{
  
              return  <>
            
                  <ProductsChild
                    key={product.id }
                    product={product}
                    show={showMore}
                    like={likeBtn}
         
                  />
                </>
              ;
            })
          : 
            <div className={style.spinner}>
              <div className={style.doublebounce1}></div>
              <div className={style.doublebounce2}></div>
            </div>
          }
        </div>
      </div>
    </>
  );
}

// products.length?
