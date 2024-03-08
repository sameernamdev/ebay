import { useState } from "react"
import style from "./Dslider.module.css"
export default function Dslider() {
    var deal=[
        {"product":"product1","img":"images/deal1.webp"},
        {"product":"product2","img":"images/deal2.webp"},
        {"product":"product3","img":"images/deal3.webp"},
        {"product":"product4","img":"images/deal4.webp"},
        {"product":"product5","img":"images/deal5.webp"},
        {"product":"product6","img":"images/deal6.webp"},
        {"product":"product7","img":"images/deal7.webp"},
        {"product":"product8","img":"images/deal8.webp"},
        {"product":"product9","img":"images/deal9.webp"},
        {"product":"product10","img":"images/deal10.webp"},
        {"product":"product11","img":"images/deal11.webp"},
        {"product":"product12","img":"images/deal12.webp"},
        {"product":"product13","img":"images/deal13.webp"},
        {"product":"product14","img":"images/deal14.webp"},
        {"product":"product15","img":"images/deal15.webp"},
        {"product":"product16","img":"images/deal16.webp"},
        {"product":"product17","img":"images/deal17.webp"}, 
        
    ]
    var [pos,setpos]=useState(0)
    return (
        <>
        {console.log(pos)}
           <h2>Today's Deals – All With Free Shipping</h2>
            <div className={style.Dslider}>
            {deal.map((item,index)=>
            <>
               <div> <img src={deal[pos].img}/><p>{deal[pos].product }</p></div>
               <div> <img src={deal[pos+1].img}/><p>{deal[pos+1].product }</p></div>
               <div> <img src={deal[pos+2].img}/><p>{deal[pos+2].product }</p></div>
               <div> <img src={deal[pos+3].img}/><p>{deal[pos+3].product }</p></div>
               <div> <img src={deal[pos+4].img}/><p>{deal[pos+4].product }</p></div>
            </>
            )}
            <button className={style.prev} onClick={(pos>=1)?()=>setpos(pos-1):null} >
            <ion-icon name="chevron-back-circle-outline"></ion-icon>
            </button>
            <button className={style.next} onClick={(pos<12)?()=>setpos(pos+1):null}>
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
            </button>

            </div>
        </>
    )
}