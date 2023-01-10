import Cherche from './components/Cherche'
import VegetableProvider from './contexts/VegetableProvider'
import VegetableList from './components/VegetableList'

function App() {

  return (
    <div className='container'>
    <VegetableProvider>
        <Cherche /> 
        <VegetableList />
    </VegetableProvider>
    </div>
  )
}

export default App
