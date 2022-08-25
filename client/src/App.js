import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import {useDispatch} from 'react-redux'
import {useEffect} from "react";
import {setUser} from "./redux/features/authSlice";
import AddEditTour from "./pages/AddEditTour";
import SingleTour from "./pages/SingleTour";

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  return (
    <div className="App">
      <Header/>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>
          <Route path={"/addTour"} element={<AddEditTour/>}/>
          <Route path={"/editTour/:id"} element={<AddEditTour/>}/>
          <Route path={"/tour/:id"} element={<SingleTour/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
