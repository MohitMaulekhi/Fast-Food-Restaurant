import { Formik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {login} from "../store/authSlice.js"
import axios from "axios"
import toast from "react-hot-toast"


function Login() {
  const loginSchema = Yup.object({
    email: Yup.string().required().email('Invalid email'),
    password: Yup.string().required(),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <h1 className="text-white text-center text-3xl">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={loginSchema}
          onSubmit={async (values,action) => {
            action.resetForm()
            await axios.post("/api/v1/login",values)
            .then((userData)=>{
              dispatch(login(userData?.data?.data))
              navigate("/")
            })
            .catch((errors)=>{
              toast.error(errors?.response?.data?.message)
            })
          }}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form className="rounded px-8 pt-6 pb-8 mb-4 overflow-y-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="email" 
            placeholder="Email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange} />
            <p className="text-red-500 text-xs italic">{errors.email && touched.email ? errors.email : null}</p>
            
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="******************" />
            <p className="text-red-500 text-xs italic">{errors.password && touched.password ? errors.password : null}</p>
          </div>
          <div className="flex items-center justify-between">
              <button className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign in
              </button>

            </div>
            <span className="text-white mt-6">Don&#39;t have a account??&#160;&#160;<Link to="/auth/register" className="text-orange-700 underline cursor-pointer">create one</Link></span>
        </form>
        )}
        </Formik>
    </>
  )
}

export default Login