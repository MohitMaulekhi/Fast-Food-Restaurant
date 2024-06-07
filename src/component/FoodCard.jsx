import PropTypes from "prop-types"
import { BsStarFill, BsStarHalf } from "react-icons/bs"


function FoodCard({name,initialCost,discountCost,imageUrl}) {
  return (
    <div className="w-1/3 lg:w-1/4 p-5 shadow-black shadow-md rounded-lg bg-white flex flex-col items-center justify-center">
        <img src={imageUrl} alt={name} className="w-60 h-48 object-center hover:scale-125 transition-transform duration-100"/>
        <h3 className="font-semibold text-center">{name}</h3>
        <div className="flex justify-center mt-1">
          <BsStarFill color="orange"/>
          <BsStarFill color="orange"/>
          <BsStarFill color="orange"/>
          <BsStarFill color="orange"/>
          <BsStarHalf color="orange"/>
        </div>
        <div className="flex items-center justify-center gap-2 mt-1">
          <h3 className="font-bold line-through text-gray-400"> &#8377;{initialCost}</h3><h3 className="font-bold">&#8377;{discountCost}</h3>
        </div>
    </div>
  )
}



FoodCard.propTypes = {
    name: PropTypes.string.isRequired,
    initialCost: PropTypes.number.isRequired,
    discountCost: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
}
export default FoodCard