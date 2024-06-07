import { useEffect } from "react"
import { Navbar,Footer } from "./component/index.js"
import {About, CustomerReview, Home, Catalogue} from "./pages/index.js"
import axios from "axios"
import { useDispatch } from "react-redux"
import {login} from "./store/authSlice.js"
import toast, { Toaster } from "react-hot-toast"
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get("/api/v1/current")
    .then((userData)=>{
      dispatch(login(userData?.data?.data))
      toast.success(`Welcome ${userData.data?.data.fullName}`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    })
    .catch(()=>{
      console.log("Error fetching data")
    })
  },[dispatch])
  return (
    <div>
      <Navbar/>
      <main>
        <div id = "home">
          <Home/>
        </div>
        <div id = "about">
          <About/>
        </div>
        <div id = "catalogue">
          <Catalogue/>
        </div>
        <div id = "cr">
          <CustomerReview/>
        </div>
      </main>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App
