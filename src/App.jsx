import { useState } from 'react'
import Row from './components/Row/Row'
import categories from './context/api'
import '../App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    
    <NavBar/>
    <Banner/>

    {categories.map((category , index) => {
    return   <Row key={index} title={category.title} path={category.path} isLarge={category.isLarge}/>  
    })}
    
    </div>
  )
}

export default App
