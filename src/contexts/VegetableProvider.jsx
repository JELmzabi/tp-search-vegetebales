import VegetableContext from './VegetableContext'
import { useState } from 'react'
import axios from 'axios'
const VegetableProvider = ({children}) => {

    const [vegetables, setVegetables] = useState([])

    async function chercherVegetables(keywords = '') {
      const URL_API = 'http://localhost:3000/vegetables'
      const segment = keywords === '' ? '' : '?type=' + keywords
      try {
      const response = await axios.get(URL_API + segment)
      const result = await response.data
      setVegetables(result)
      }
      catch(except){
          console.log(except)
      }
   }
  return (
    <VegetableContext.Provider 
    value={{
      vegetables,
      chercherVegetables,
    }}
    >
      {children}
    </VegetableContext.Provider>
  )


}

export default VegetableProvider
