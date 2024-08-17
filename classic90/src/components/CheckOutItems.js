import style from './checkoutItem.module.css'

export default function CheckOutItems(){
    return(
        <div className={style.check_out_box}>
            <ul className={style.check_item_list}>
                <li>
                    <div>
                        <div className={style.image_wrapper}></div>
                            <h4 className={style.product_name} >Denim Skirt</h4>
                    </div>
                    <div>
                        <p>1</p>
                        <p>$70.00</p>
                    </div>
                </li>
            </ul>
            <div>
                <ul className={style.check_price}>
                    <li>
                        <h6>Subtotal</h6>
                        <h6>$210.00</h6>
                    </li>
                    <li>
                        <h6>Discount</h6>
                        <h6>$0</h6>
                    </li>
                    <li>
                        <h6>Shipping</h6>
                        <h6>$0</h6>
                    </li>
                </ul>
            </div>
            <div className={` ${style.check_price} ${style.total_price_col} `}>
                <h6>Total</h6>
                <h4>$210.00</h4>
            </div>
        </div>
    )
}