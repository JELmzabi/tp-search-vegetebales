import {useContext, useEffect, useRef} from 'react'
import VegetableContext from '../contexts/VegetableContext'

const Cherche = () => {
  const {vegetables, chercherVegetables} = useContext(VegetableContext)
  let keywords = useRef('')

  return (
    <form className='mb-3' onSubmit={ e => {e.preventDefault(); chercherVegetables(keywords.current.value)}  }>
        <h3>Chercher</h3>
        <input type="text" className='form-control mb-3' ref={keywords}/>
        <button className='btn btn-primary' type='submit'>chercher</button>
    </form>
  )
}


export default Cherche