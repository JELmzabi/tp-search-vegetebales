import VegetableContext from './VegetableContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
const VegetableProvider = ({children}) => {

    const [vegetables, setVegetables] = useState([])

    function chercherVegetables(keywords = '') {

        if (keywords == '') {
          axios.get('http://localhost:3000/vegetables')
          .then(data => {
            console.log('then =>', data.data)
            setVegetables(data.data)
          })
          .catch(err => console.log(err))
        }
        else {
            axios.get('http://localhost:3000/vegetables?type=' + keywords)
            .then(data => {
              console.log('then =>', data.data)
              setVegetables(data.data)
            })
            .catch(err => console.log(err))
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