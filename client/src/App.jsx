import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import ImageClassifier from './ImageClassifier'
import HomePage from './HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/register' element= {<Signup />}></Route>
          <Route path='/login' element= {<Login />}></Route>
          <Route path='/home' element= {<HomePage />}></Route>
          <Route path='/classify' element= {<ImageClassifier />}></Route>

           
        </Routes>
       </BrowserRouter>
    </div>
    
      
  )
}

export default App
