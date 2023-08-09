import React,{useContext} from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import {FaArrowLeft} from "react-icons/fa6";

const OrderSummary = () => {
    const {cart} = useContext(CartContext);
    const {userAddress}= useContext(AuthContext);
    

    const total = cart.reduce((sum, curr) => {sum += curr.price*curr.qty; return sum}, 0);
    const discount = (total/100) * 20;
    
    return (
    <>
      <div className='w-full h-full md:h-full flex flex-col justify-center items-center mt-10'>
        {/* container box */}
        <div className=" w-[90%] md:w-[40%]">
        <Link to="/cart" className="text-left "><p className="md:hover:text-purple-500 mb-3 mx-2 underline underline-offset-2 text-purple-800 flex items-center"><span className="mr-1"><FaArrowLeft /></span>Review Cart</p></Link>         
        
         {/* order details */}
            <div>
                <div className="text-xl font-semibold border-b-2 border-b-bgPrimary pt-2 ">
                  Order Details
                </div>
                  <div className=" flex justify-between">
                    <div className="w-[80%] text-left">
                      <div className=" w-[100%] border-b-2 "><span className="mx-2 font-semibold py-2 text-lg " >Item</span></div>
                      {
                      cart.map((item) =>{
                        return(
                          <p className="my-2 mx-1 capitalize">{item.name}</p>
                          )
                        })
                      }
                    </div >
                    <div className="w-[20%] text-right">
                      <div className=" w-[100%] border-b-2 "><span className="mx-2 font-semibold py-2 text-lg " >Qty.</span></div>
                      {
                      cart.map((item) =>{
                        return(
                          <p className="m-2">{item.qty}</p>
                          )
                        })
                      }
                    </div>
                  </div>
            </div>



            {/* payment info */}
            <div>
                <div className="text-xl font-semibold border-b-2 border-b-bgPrimary pt-4 ">
                  Payment Details
                </div>
                  <div className=" flex justify-between">
                    <div className="w-[50%] text-left">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg font-semibold"><span className="mx-2" >Total Price</span></div>
                    </div >
                    <div className="w-[50%] text-right">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg"><span className="mx-2" ></span>{total}</div>
                    </div>
                  </div>

                  <div className=" flex justify-between">
                    <div className="w-[50%] text-left">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg font-semibold"><span className="mx-2" >Discount</span></div>
                    </div >
                    <div className="w-[50%] text-right">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg  font-medium "><span className="mx-2" ></span>20%</div>
                    </div>
                  </div>

                  <div className=" flex justify-between">
                    <div className="w-[50%] text-left">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg font-semibold"><span className="mx-2" >Total Amount</span></div>
                    </div >
                    <div className="w-[50%] text-right">
                      <div className=" w-[100%] border-b-2 my-2 mx-1 text-lg font-semibold"><span className="mx-2" ></span>Rs. {total-discount}</div>
                    </div>
                  </div>
            </div>



            {/* buyer info */}
            <div>
                <div className="text-xl font-semibold border-b-2 border-b-bgPrimary pt-4 ">
                  Delivery Address
                </div>
                <div className="w-[80%] md:w-[60%] pt-2 text-lg  ">
                  <p className="text-left mx-2 whitespace-normal">{userAddress}</p>
                </div>
            </div>

            <Link to="/profile" className="text-left "><p className="md:hover:text-purple-500  mt-1 mx-2 underline underline-offset-2 text-purple-800 flex items-center"><span className="mr-1"><FaArrowLeft /></span>Edit address</p></Link>

        </div>        
            
            <Link to="/" className=" cursor-pointer my-8 w-[90%] md:w-[40%] p-3 text-2xl font-bold text-white rounded-md bg-green-500 md:hover:bg-green-600 ">
            <div>Proceed to payment</div>
            </Link>

      </div>
    </>
  )
}

export default OrderSummary