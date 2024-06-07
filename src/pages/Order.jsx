import { useEffect, useState } from 'react';
import OrderPage from "/png/order_page.jpg"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import vegLoadedPizza from "/png/food/vegLoadedPizza.png"
import paneerPizza from "/png/food/pannerPizza.png"
import vegBurger from "/png/food/vegBurger.png"
import nonVegBurger from "/png/food/nonVegBurger.png"
import fries from "/png/food/fries.png"
import chickenWrap from "/png/food/chickenWrap.png"

function Order() {

    const [order_or_myOrder, setOrder_or_myOrder] = useState(true)
    const [myOrderDetails, setMyOrderDetails] = useState([])
    const [priceCheck,SetPriceCheck] = useState(true)
    useEffect(()=>{SetPriceCheck(true)},[priceCheck])
    const orderPrice = {
        "Expert veg Burger": 79,
        "Expert chicken Burger": 99,
        "Expert Signature pizza": 139,
        "Panner Pizza": 129,
        "Friendly fries": 49,
        "Wrathful wrap": 75
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function cancelOrderFun(id) {

        axios.delete(`/api/v1/cancelOrder/${id}`)
            .then(() => {
                toast.success("Order cancelled successfully")
            })
            .catch()
    }
    useEffect(() => {
        axios.get("/api/v1/allOrders")
            .then((Orderdata) => {
                setMyOrderDetails(Orderdata.data.data)
            })
    }, [order_or_myOrder, cancelOrderFun])
    const burgers = [
        {
            id: 1,
            name: 'Expert veg Burger',
            description: 'Onions, Tomatoes, Pickles, Lettuce',
            price: 79,
            image: vegBurger,
        },
        {
            id: 2,
            name: 'Expert chicken Burger',
            description: 'Chiken Patty, Chedder Cheese, Onions, Tomatoes, Pickles, Lettuce',
            price: 99,
            image: nonVegBurger,
        },
    ];
    const pizza = [
        {
            id: 1,
            name: 'Expert Signature pizza',
            description: 'Double Cheese, Thin crust, Onions, Tomatoes, Pickles, Lettuce',
            price: 139,
            image: vegLoadedPizza,
        },
        {
            id: 2,
            name: 'Panner Pizza',
            description: 'Panner, Onions, Tomatoes, Pickles, Lettuce',
            price: 129,
            image: paneerPizza,
        },
    ];
    const sides = [
        {
            id: 1,
            name: 'Friendly fries',
            description: 'Potato, Salt',
            price: 49,
            image: fries,
            quantity: 0,
        },
        {
            id: 2,
            name: 'Wrathful wrap',
            description: 'Chiken, Green Sauce, Onions, Cabbage, Lettuce',
            price: 75,
            image: chickenWrap,
        },
    ];


    return (
        <div className='bg-gray-100 min-h-screen py-8 px-[10vw] bg-cover bg-center' style={{ backgroundImage: `url(${OrderPage})` }}>
            <Toaster />
            <nav className='rounded-t-lg bg-white flex w-full justify-evenly py-4 font-semibold text-xl'>
                <button className={`${order_or_myOrder && "border-b-2 border-orange-700"}`} onClick={() => setOrder_or_myOrder(true)}>New Order</button>
                <button className={`${!order_or_myOrder && "border-b-2 border-orange-700"}`} onClick={() => setOrder_or_myOrder(false)}>My Orders</button>

            </nav>
            {order_or_myOrder ? <div className="" >

                <div className="bg-white shadow-md rounded-b-lg p-8 ">
                    <h2 className="text-2xl font-bold mb-4 text-center">Restaurant Preorder Form</h2>
                    <div className='flex justify-evenly'>
                        <div className="mb-4">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                                Search
                            </label>
                            <input
                                type="text"
                                id="search"
                                className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                                Categories:
                            </label>
                            <select
                                id="categories"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="all">All</option>
                                <option value="burgers">Burgers</option>
                                <option value="drinks">Drinks</option>
                                <option value="sides">Sides</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
                                Sort By:
                            </label>
                            <select
                                id="sort"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="name">Name (A-Z)</option>
                                <option value="price">Price (Low to High)</option>
                                <option value="price-desc">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const target = e.target
                        let orderDetails = {
                            orderList:[],
                            total:0
                        }
                        for(let i = 0 ; i < target.length-1;i = i+2){
                            
                            if(target[i].checked){
                                orderDetails.orderList.push({
                                    productName:target[i].name,
                                    quantity:target[i+1].value
                                })
                                orderDetails.total += parseInt(target[i+1].value)*parseInt(orderPrice[target[i].name])
                            }
                            
                            
                            
                        }
                        if(orderDetails.total === 0){
                            toast.error("Invalid order")
                        }
                        else{
                            axios.post("/api/v1/order",orderDetails)
                            .then(()=>{
                                toast.success("Order placed successfully")
                                e.target.reset()
                            })
                            .catch(()=>{
                                toast.error("Failed to place order")
                            })
                        }
                        
                    }}>
                        <h3 className="text-xl font-bold mb-2">Burgers</h3>
                        {burgers.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        name={item.name}
                                    />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 rounded-md ml-2"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium">{item.name}</h4>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap justify-evenly">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 text-sm mr-2">Quantity:</span>
                                        <select
                                            className="mt-1  block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            name={item.name}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <span className="ml-4 font-medium">&#8377;&nbsp;{item.price.toFixed(2)}</span>
                                </div>

                            </div>
                        ))}


                        <h3 className="text-xl font-bold mb-2">Pizza</h3>
                        {pizza.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        name={item.name}
                                    />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 rounded-md ml-2"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium">{item.name}</h4>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap justify-evenly">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 text-sm mr-2">Quantity:</span>
                                        <select
                                            className="mt-1  block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            name={item.name}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <span className="ml-4 font-medium">&#8377;&nbsp;{item.price.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}


                        <h3 className="text-xl font-bold mb-2">Sides</h3>
                        {sides.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        name={item.name}
                                    />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 rounded-md ml-2"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium">{item.name}</h4>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap justify-evenly">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 text-sm mr-2">Quantity:</span>
                                        <select
                                            className="mt-1  block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            name={item.name}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <span className="ml-4 font-medium">&#8377;&nbsp;{item.price.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                        <button className='bg-orange-600 w-full py-2 rounded-full mt-2 text-white font-semibold hover:opacity-75' type='submit'>
                            Place Order
                        </button>
                    </form>
                </div>
            </div> :



                <div className="bg-white shadow-md rounded-b-lg p-8 flex flex-col justify-center items-center" >
                    {myOrderDetails.map(order => (
                        <div key={order._id} className="flex justify-around mb-4 border-2 flex-wrap min-w-[50vw] border-black p-2 rounded-2xl">
                            <div>
                                <div className='font-semibold'>Order by: {order.userFullName}</div>
                                <div className=''>Order Id: {order._id}</div>
                                <div>E-mail: {order.email}</div>
                                <div>Address: {order.address}</div>
                                {order.orderList.map((food) => (
                                    <div key={food._id}>
                                        {food.productName + " × " + food.quantity}
                                    </div>

                                ))}
                            </div>
                            <div className='flex-col'>
                                <div>Order Date: {order.createdAt}</div>
                                <div className='font-semibold'> Total amount :- {order.total}</div>
                                <button onClick={() => cancelOrderFun(order._id)} className='bg-red-600 py-1 rounded-full px-3 my-2 text-white hover:opacity-70' type='submit'>Cancel Order</button>
                            </div>
                        </div>
                    ))}
                </div>}

        </div>
    );
}

export default Order;