import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

export let ShowContext = createContext(null);

export function ShowContextProvider(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [isTrueNav, setIsTrueNav] = useState(false);
  let navigate = useNavigate();

  function showMenu() {
    setIsTrue(true);
  }
  function removeMenu() {
    setIsTrue(false);
  }
  function showMenuNav() {
    if (isTrueNav == true) {
      setIsTrueNav(false);
    } else {
      setIsTrueNav(true);
    }
  }

  //////////////////////////    Token    /////////////////////////////////////////////////


  const [Token, setToken] = useState(null);
  function tokenHandle() {
    let decodedToken = jwtDecode(localStorage.getItem("userToken"));
    setToken(decodedToken);
  }

  function logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("targetedProduct");
    localStorage.removeItem("numberOfProducts");
    localStorage.removeItem("ProductsInOrder");
    // localStorage.removeItem("numberOfProducts1");
    // localStorage.removeItem("ProductsInOrder1");
    localStorage.removeItem("orderId")
    localStorage.removeItem("eventId")
    



    setToken(null);
    navigate("/login");
  }

  /////////////////////////////New full product////////////////////////




  function showFullProduct(trueOrFalse, oneProduct) {
    if (trueOrFalse == true) {
       
      localStorage.setItem("targetedProduct", JSON.stringify(oneProduct));

      navigate("/fullproduct");
    } else {
      localStorage.removeItem("targetedProduct");
      navigate("/home");
    }
  }

  /////////////////////////////GET Products/////////////////////////////
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const { data } = await axios.get("https://amazon-clone-production.herokuapp.com/products");
    setProducts(data.allProducts);
  }



  /////////////////////make order////////////////////
  const [apiError, setApiError] = useState("");
      async function makingCart(myToken) {
        let decodedToken = jwtDecode(myToken);
  
        const headers = {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        };
    
        const result = await axios.post(
          `https://amazon-clone-production.herokuapp.com/orders/${decodedToken.user.id}`,
          {
            status: "active",
          },
          { headers: headers }
        );
        if (result.data.message == "success") {
          
          localStorage.setItem("orderId",result.data.added_order.id)
    
        } else {
          setApiError(result.data.message);
        }
    
      }


  /////////////////////////////add product to order////////////////////////

  
  const [cartError,setCartError]=useState(null)
  
  async function addProductToOrder(e,productData) {

    if(localStorage.getItem("userToken")!==null)
    {
      
      let myOrderID =  localStorage.getItem("orderId")
     
             //get quantity
             const addToCartBtn = e.target
             const quantity = $(addToCartBtn).prev()[0].value
   
   
      const headers = {
         authorization: `Bearer ${localStorage.getItem("userToken")}`,
       };
      const result = await axios.post(
         `https://amazon-clone-production.herokuapp.com/orders/${myOrderID}/products`,
         {
            quantity:quantity,
            productid:productData.id
         }, { headers: headers }
       );
    
  
       if(result.data.message=="product added to order successfully")
       {
        
        const myResult = await getProductsInOrder()
        if(myResult.data.message=='get all products in order success')
        {
               navigate('/cart')
        }
        else
        {
            setCartError(myResult.data.message)
        }
              
        
       }
       else
       {
         setCartError(result.data.message)
       }

    }
    else{
      setCartError('sorry, you have to login first')
    }
   
  }

  ////////////////////////////////get products in the order/////////////////////////


  async function getProductsInOrder(){
    let myOrderID =  localStorage.getItem("orderId")

    const result = await axios.get(`https://amazon-clone-production.herokuapp.com/productinorder/${myOrderID}`)
    if(result.data.message=='get all products in order success')
    {
     
      localStorage.setItem("ProductsInOrder",JSON.stringify(result.data.response) ) 
      localStorage.setItem("numberOfProducts",result.data.number_of_products)
     
    }

   return result
    
  }



   ////////////////////////////////delete products///////////////////


    


  return (
    <ShowContext.Provider
      value={{
        // setProductsInOrders,
        // deleteProduct,
        // productsInOneOrder,
        getProductsInOrder,
        setCartError,
        getProducts,
        cartError,
        addProductToOrder,
        getProducts,
        products,
        isTrue,
        showMenu,
        removeMenu,
        showMenuNav,
        isTrueNav,
        Token,
        tokenHandle,
        logout,
        showFullProduct,
        apiError,
        makingCart,
      
      }}>
      {props.children}
    </ShowContext.Provider>
  );
}
