import React from 'react'
import { useParams } from 'react-router-dom'
import { useCountryDetail } from '../../hooks/useCountryDetails'

function CountryDetails() {
  var country = useParams('')
  console.log(country.name)

  var countryDetails = useCountryDetail(country.name)
  console.log(countryDetails)
  return (
    <div className='border border-2 p-3 border-dark ' style={{marginLeft:'300px',marginRight:'300px', backgroundColor:'#D0DDC5'}}>
       <h1>Country Details</h1>
        <h2>CountryName : {countryDetails.name.common}</h2>
        <h2>Capital : {countryDetails.capital[0]}</h2>
        <h2>Population : {countryDetails.population}</h2>
        <img src={countryDetails.flags[0]} alt="Loading img" className='w-25'/>
    </div>
  )
}

export default CountryDetails;
