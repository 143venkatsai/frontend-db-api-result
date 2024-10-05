import { useEffect, useState } from "react";
import Product from "./assets/components/Product";

import "./App.css"

const App = () =>{
  const [products, setProducts] = useState([]);
  
  useEffect( () =>{
    const fetcheData = async() =>{
      try{
        const productAPiUrl = "https://product-data-backend-db-1.onrender.com/api/products";
        const options ={
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
        const response = await fetch(productAPiUrl, options);
        const data = await response.json();
        setProducts(data);
        // console.log(data);
      }catch(error){
        console.log(error);
      }
      }
    fetcheData();    
  }, []);

  
  

  return (
    <div>
      <h1 className="heading">Products</h1>
      <ul className="products-list">
        {
          products.map((product) =>(
            <Product productDetails ={product} key={product.id} />
          ))
        }
      </ul>
    </div>
  )
}

export default App