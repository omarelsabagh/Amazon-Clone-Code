import React from 'react'
import $ from 'jquery'
import style from '../BackToTop/BackToTop.module.css'
export default function BackToTop() {

   function backTop()
   {
    $(window).scrollTop(0)
   }

  return (<>
  <div onClick={backTop} className= {`${"mt-5"} ${style.handlebacktop}`}>
  <span >Back to top</span>
  </div>
  
  </>
    
  )
}
