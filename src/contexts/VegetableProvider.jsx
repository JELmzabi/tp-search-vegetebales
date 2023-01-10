import VegetableContext from './VegetableContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
const VegetableProvider = ({children}) => {

    const [vegetables, setVegetables] = useState([])

    function chercherVegetables(keywords = 'vegetables') {
// console.log(keywords)
        // e.preventDefault()
        axios.get('http://localhost:3000/' + keywords)
        .then(data => {
          console.log('then =>', data.data)
          setVegetables(data.data)
        })
        .catch(err => console.log(err))

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