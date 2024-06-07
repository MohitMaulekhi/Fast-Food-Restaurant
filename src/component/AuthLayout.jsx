import { Toaster } from "react-hot-toast"
import AuthImage from "/png/AuthImage.png"
import Food_background from "/png/Food_background.jpg"
import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className='min-h-screen shadow-md bg-center bg-cover bg-black  flex justify-center items-center' style={{backgroundImage:`url(${Food_background})`}}>
      <div className="bg-black h-[80vh] bg-opacity-50 sm:w-[60vw] w-[90vw] rounded-3xl flex items-center">
        <img className="md:flex hidden h-1/2 w-1/2" src={AuthImage} alt="" />
        <div className=" h-full md:w-1/2 w-full   flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg p-3.5 h-[95%] w-[90%]">
              <Outlet/>
              
            </div>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default AuthLayout