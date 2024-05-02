import React from 'react'
import { useGetAllcountriesQuery } from '../../services/countries'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
  var {isLoading,data} = useGetAllcountriesQuery()
  // console.log(data)
  return (
    <div className='border border-2 m-2 p-2 border-primary d-flex'>
      <span>
          <h1>Countries</h1>
      {
         data?.map((countryObj,i)=>{
            return <Link to={`details/${countryObj.name.common}`} key={i}><li>{countryObj.name.common}</li></Link> 
         })
      }
      </span>

      <span>
           <Outlet></Outlet>
      </span>
    </div>
  )
}

export default Countries
