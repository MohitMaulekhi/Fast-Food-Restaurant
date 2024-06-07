import { FoodCard } from "../component/index.js"
import catalogue_bakground from "/png/catalogue_background.png"
import vegLoadedPizza from "/png/food/vegLoadedPizza.png"
import paneerPizza from "/png/food/pannerPizza.png"
import vegBurger from "/png/food/vegBurger.png"
import nonVegBurger from "/png/food/nonVegBurger.png"
import fries from "/png/food/fries.png"
import chickenWrap from "/png/food/chickenWrap.png"

function Catalogue() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center `} >
      <h1 className="text-4xl text-center font-semibold pt-24 pb-10">Catalogue</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center py-4 bg-opacity-5 line bg-center" style={{backgroundImage:`url(${catalogue_bakground})`}}>
        <FoodCard imageUrl={vegBurger}
          name="Expert veg Burger"
          initialCost={99}
          discountCost={79} />
        <FoodCard imageUrl={nonVegBurger}
          name="Expert chicken Burger"
          initialCost={119}
          discountCost={99} />
        <FoodCard imageUrl={vegLoadedPizza}
          name="Expert Signature pizza"
          initialCost={159}
          discountCost={139} />
        <FoodCard imageUrl={paneerPizza}
          name="Panner pizza"
          initialCost={149}
          discountCost={129} />
        <FoodCard imageUrl={fries}
          name="Friendly fries"
          initialCost={59}
          discountCost={49} />
        <FoodCard imageUrl={chickenWrap}
          name="Wrathful wrap"
          initialCost={89}
          discountCost={75} />
      </div>
    </div>
  )
}

export default Catalogue