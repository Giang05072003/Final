function Cart(props) {

    return (
        <>
            <div>
                <div>
                    <div className="flex w-10 h-10 items-center justify-center relative">
                        <img className="w-6 h-6" src={props.imgUrl} alt="" />
                        <span className="bg-red-600 text-white h-4 right-0 -top-1 py-[0.5px] px-1 absolute text-[10px] rounded-lg">
                            {props.quantity}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Cart