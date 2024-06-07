import { Link } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { useSelector } from "react-redux"
function Navbar() {
  const [nav, setNav] = useState(false)
  let userStatus = useSelector(state => state.authSlice.loginStatus)
  return (
    <nav className="flex justify-between p-5 text-white bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
      <h1 className="text-4xl font-yg">
        Food Expert
      </h1>
      <ul className="hidden md:flex gap-6 ">
        <li className="text-2xl hover:text-orange-500"><Link to="home" spy ={true} smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
        <li className="text-2xl hover:text-orange-500"><Link to="about" spy ={true} smooth={true} duration={500} className="cursor-pointer">About</Link></li>
        <li className="text-2xl hover:text-orange-500"><Link to="catalogue" spy ={true} smooth={true} duration={500} className="cursor-pointer">Catalogue</Link></li>
        <li className="text-2xl hover:text-orange-500"><Link to="cr" spy ={true} smooth={true} duration={500} className="cursor-pointer">Reviews</Link></li>
      </ul>
      
        {userStatus?<RouterLink to = "/order"><button className=" hidden md:flex bg-yellow-400 font-semibold px-12 py-3 rounded-full shadow hover:opacity-65">Order</button></RouterLink>:
        <RouterLink to = "/auth/login"><button className=" hidden md:flex bg-yellow-400 font-semibold px-12 py-3 rounded-full shadow hover:opacity-65">Sign in</button></RouterLink>}
        
      
      <div className="md:hidden ">
        <button onClick={() => (setNav(!nav))} className="pl-16">
          {nav ? <FaTimes size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
        <ul className={`${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col absolute left-0 top-20 text-center h-fit w-full transition-transform duration-300 bg-black text-white p-4`}>
        <li className="text-xl hover:text-orange-500"><Link to="home" spy ={true} smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
        <li className="text-xl hover:text-orange-500"><Link to="about" spy ={true} smooth={true} duration={500} className="cursor-pointer">About</Link></li>
        <li className="text-xl hover:text-orange-500"><Link to="catalogue" spy ={true} smooth={true} duration={500} className="cursor-pointer">Catalogue</Link></li>
        <li className="text-xl hover:text-orange-500"><Link to="cr" spy ={true} smooth={true} duration={500} className="cursor-pointer">Reviews</Link></li>
        {userStatus?<RouterLink to = "/order"><button className=" bg-yellow-400 font-semibold px-12 py-3 rounded-full shadow hover:opacity-65 my-2">Order</button></RouterLink>:
        <RouterLink to = "/auth/login"><button className=" bg-yellow-400 font-semibold px-12 py-3 rounded-full shadow hover:opacity-65 my-2">Sign in</button></RouterLink>}
        </ul>
        
      </div>
    </nav>

  )
}

export default Navbar