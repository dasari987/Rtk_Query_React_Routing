import { useGetAllcountriesQuery } from "../services/countries"


export function useCountryDetail(countryName) {
    console.log(countryName)
    var {data} = useGetAllcountriesQuery()
    console.log(data)
    var matchedCountry = data.find((couobj)=>{
         return couobj.name.common === countryName
    })
    return matchedCountry;
}