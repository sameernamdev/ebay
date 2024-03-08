import { Link } from "react-router-dom"
import style from "./header.module.css"
export default function Header() {
    return (
        <>
            <div className={style.contain}>
                <div className={style.box}>
                    <div className={style.box1}>
                        <p>Hi! <a href="">sign in</a> or <a href="">register</a></p>
                        <p>Daily Deals</p>
                        <p>Brand Outlet</p>
                        <p>Gift Cards</p>
                        <p>Help & Contact</p>
                    </div>
                    <div className={style.box2}>
                     <p>Sell</p>
                     <p>Watchlist<ion-icon name="chevron-down-outline"></ion-icon></p>
                     <p>My eBay<ion-icon name="chevron-down-outline"></ion-icon></p>
                     <ion-icon name="notifications-outline" className={style.icon}></ion-icon>
                    <Link to="/productpage"> <ion-icon name="cart-outline" className={style.icon}></ion-icon></Link>
                    </div>
                </div>
            </div>
        </>
    )
}