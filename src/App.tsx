import Home from './pages/Home/Home'
import UserData from './pages/UserData/UserData'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user-data' element={<UserData />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
