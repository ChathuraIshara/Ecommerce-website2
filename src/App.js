import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Addproduct from './components/Addproduct';
import Logout from './components/Logout';
import { useState } from 'react';
import Protected from './components/Protected';
import AllProducts from './components/AllProducts';
import MyProduct from './components/MyProduct';
import EditPage from './components/EditPage';



function App() {

  
  const [temail,setTemail]=useState("");
  const [name,setName]=useState("");
  const [ttemail,setTtemail]=useState("");
  const [count,setCount]=useState(0);


  return (
    <div className="App">

      <BrowserRouter>
      
      <Routes>
      
        <Route path="/login" element={<Login temail={temail} setTemail={setTemail} ttemail={ttemail} setTtemail={setTtemail}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/addproduct" element={<Protected cmp={<Addproduct name={name} temail={temail} setName={setName}></Addproduct>}/>} > </Route>
        <Route path="/logout" element={<Logout name={name} setName={setName}/>}></Route>
        <Route path="/products" element={<AllProducts name={name} setName={setName}></AllProducts>}></Route>
        <Route path="/myproducts" element={<Protected cmp={<MyProduct count={count} setCount={setCount} name={name} setName={setName}></MyProduct>}></Protected>}></Route>
        <Route path="/editpage/:id" element={<Protected cmp={<EditPage name={name} setName={setName}></EditPage>}></Protected>}></Route>
        <Route path="/" element={<Home temail={temail} name={name} setName={setName}/>}></Route>

        
     
      </Routes>

     
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
