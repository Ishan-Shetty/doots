import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import './index.css'
import Login from './components/Login'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
