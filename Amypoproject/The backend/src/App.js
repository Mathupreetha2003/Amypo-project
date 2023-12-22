
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './Pages/Details';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Books from './Pages/Books';
import Editbooks from './Pages/Editbooks';
import Mock from './Pages/Mock';
import Mock2 from './Pages/Mock2';

function App() {
  return (

    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/editbooks/:id' element={<Editbooks/>}/>
      <Route path='/mock' element={<Mock/>}/>
      <Route path='/mock2' element={<Mock2/>}/>
  
     </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
