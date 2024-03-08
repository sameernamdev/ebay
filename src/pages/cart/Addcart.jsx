import Ebayheader from "../../componants/ebay header/ebayheader"
import Header from "../../componants/header/header"
import style from "./cart.module.css"
export default function AddCart()
{
    return(
        <>
        <div className={style.cart}>
         <Header/>
         <Ebayheader/>
         <div className="table">
            
         </div>
        </div>
        </>
    )
}