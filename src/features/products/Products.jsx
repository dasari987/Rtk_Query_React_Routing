import React, { useEffect, useState } from 'react'
import { useGetAllproductsQuery, useLazyGetAllproductsQuery } from '../../services/products'

function Products() {

//     var {isLoading,data} = useGetAllproductsQuery()
  
//   return (
//     <div className='border border-dark border-2 m-2 p-2'>
//       <h1>Products component</h1>
//       {
//         data?.products.map((product)=>{
//             return <li>{product.title}</li>
//         })
//       }
//     </div>
//   )
// }

////////////////

  var [getProdFn] = useLazyGetAllproductsQuery()
  var [products,setProducts] = useState()
  
  function getAllProds() {
      getProdFn().then((res)=>{
          console.log(res)
          console.log(res.data.products)
          setProducts([...res.data.products])
      })
  }

     return(
        <div className='border border-dark border-2 m-2 p-2'>
            <h2>products</h2>
            <button onClick={()=>{getAllProds()}}>Get-all-products</button>
            <div>
               {
                 products?.map((pro,i)=>{
                     return <li key={i}>{pro.title}</li>
                 })
               }
            </div>
        </div>
     )
   }

//////////////////

  
// function getAllProds() {
  
// }

//    return(
//       <div className='border border-dark border-2 m-2 p-2'>
//           <h2>products</h2>
//           <button onClick={()=>{getAllProds()}}>Get-all-products</button>
//       </div>
//    )

// }

export default Products
