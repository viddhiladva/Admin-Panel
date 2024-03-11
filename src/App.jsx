import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import Admin from "./Admin/Admin";
import Show from './User/Show';
import Update from './User/Update'
import Adduser from "./User/Adduser";
import AddCategory from "./addCategory/AddCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<LoginForm/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/show" element={<Show/>}> </Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/addUser" element={<Adduser/>}></Route>
          <Route path="/addCategory" element={<AddCategory/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
