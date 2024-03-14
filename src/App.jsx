import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import Admin from "./Components/Admin/Admin";
import Show from './Components/User/Show';
import Update from "./Components/User/Update";
import Adduser from "./Components/User/Adduser";
import AddCategory from "./Components/Category/AddCategory";
import UpdateCategory from "./Components/Category/UpdateCategory";
import Home from "./E-commerce/Home";
import AddProduct from "./Components/ProductPanel/AddProduct";
import ShowProduct from "./Components/ProductPanel/ShowProduct";
import UpdateProdct from "./Components/ProductPanel/UpdateProdct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/addUser" element={<Adduser/>}></Route>
          <Route path="/show" element={<Show/>}> </Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/addCategory" element={<AddCategory/>}></Route>
          <Route path="/updateCategory" element={<UpdateCategory/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/showProduct" element={<ShowProduct/>}></Route>  
          <Route path="/updateProduct" element={<UpdateProdct/>}></Route>
          <Route path="/home" element={<Home/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
