import {useContext, useEffect} from 'react'
import VegetableContext from '../contexts/VegetableContext'

const VegetableList = () => {
  const {vegetables, chercherVegetables} = useContext(VegetableContext)

  useEffect(() => {
    chercherVegetables()
  }, [])
    
  return (
    vegetables.map(vegetable => (
        <p key={vegetable.id} className='alert alert-info' >{vegetable.nom}</p>
    ))
  )
}

export default VegetableList