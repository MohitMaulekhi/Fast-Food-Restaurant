import { Link } from "react-router-dom"
import homeImage from "/png/home_image.jpg"
import { useSelector } from "react-redux"

function Home() {
  let userStatus = useSelector(state => state.authSlice.loginStatus)
  let userData = useSelector(state=>state.authSlice?.userData)
  return (
      <div className="bg-center min-h-screen flex justify-between items-start pt-14 lg:px-32 px-5" style={{backgroundImage:`url(${homeImage})`}}>
        <div className="w-full lg:w-2/3 space-y-5 flex-col">
          <h1 className="text-white font-semibold text-6xl">{userData?"Welcome " + userData?.fullName:"Food Expert"}</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure, iste odio numquam vitae cupiditate soluta similique modi quia, id rerum veniam amet commodi eaque consectetur tempore ipsa. Fugiat soluta assumenda repudiandae!</p>
          {userStatus?<Link to = "/order"><button className=" bg-yellow-400 font-semibold px-12 py-3 my-5 text-white rounded-full shadow hover:opacity-65">Order</button></Link>:
        <Link to = "/auth/login"><button className=" bg-yellow-400 font-semibold px-12 py-3 my-5 text-white rounded-full shadow hover:opacity-65">Sign in</button></Link>}
        </div>
      </div>
  )
}

export default Home