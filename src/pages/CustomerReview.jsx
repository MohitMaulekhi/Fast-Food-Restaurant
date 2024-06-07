import ReviewCard from '../component/ReviewCard'
import rv1 from "/png/review/rv1.jpg"
import rv2 from "/png/review/rv2.jpg"
import rv3 from "/png/review/rv3.jpg"

function CustomerReview() {
  return (
    <>
    <h1 className="text-4xl text-center font-semibold pt-24 pb-10">Customer Reviews</h1>
    <div className='flex flex-wrap justify-center mb-10 mx-4 gap-y-4'>
        <ReviewCard imageurl={rv1} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
        <ReviewCard imageurl={rv2} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
        <ReviewCard imageurl={rv3} title = {"Best deal ever"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque culpa, accusantium doloremque adipisci, sapiente sint accusamus nostrum reiciendis, "}/>
        
        
    </div>
    </>
  )
}

export default CustomerReview