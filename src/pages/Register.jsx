import { Formik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const SignupSchema = Yup.object({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required Field!'),
    email: Yup.string().required().email('Invalid email'),
    password: Yup.string().required(),
    phoneNumber: Yup.string().required().matches(/^[0-9]+$/, "Must be only digits")
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits'),
    address: Yup.string().required()
  })
  return (
    <>
      <h1 className="text-white text-center text-3xl">Register</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          address: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values,action) => {
          action.resetForm()
          await axios.post("/api/v1/register",values)
          .then(()=>{
            navigate("/auth/login")
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
          handleSubmit }) => (
          <form className="h-full rounded px-8 pt-6 pb-8 mb-4 overflow-y-auto" onSubmit={handleSubmit} >
            <div className="mb-2">
              <label className="block text-white  text-sm font-bold mb-2" htmlFor="username">
                Full Name
              </label>
              <input className="shadow appearance-none h-[4vh] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName} />
              <p className="text-red-500 text-xs italic">{errors.fullName && touched.fullName ? errors.fullName : null}</p>

            </div>
            <div className="mb-2">
              <label className="block text-white  text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none h-[4vh] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email} />
              <p className="text-red-500 text-xs italic">{errors.email && touched.email ? errors.email : null}</p>

            </div>
            <div className="mb-2">
              <label className="block text-white  text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input className="shadow appearance-none h-[4vh] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber} />
              <p className="text-red-500 text-xs italic">{errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}</p>

            </div>
            <div className="mb-2">
              <label className="block text-white  text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input className="shadow appearance-none h-[4vh] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address} />
              <p className="text-red-500 text-xs italic">{errors.address && touched.address ? errors.address : null}</p>

            </div>
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[4vh]"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} />
              <p className="text-red-500 text-xs italic">{errors.password && touched.password ? errors.password : null}</p>


            </div>
            <div className="flex items-center justify-between">
              <button className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign up
              </button>

            </div>
            <Link to="/auth/login" className="text-orange-700 underline cursor-pointer">Already have an account??</Link>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Register