import { useState } from "react"
import style from "./slider.module.css"
export default function Firstslider()
{
    var img=["images/back1.webp","images/back2.webp","images/back3.webp"]
    var[index,setindex]=useState(0)
    var prev=()=>{
        if(index==2)
        {
            index=-1
        }
      setindex(++index)
    }
    var next=()=>{
        if(index==2)
        {
            index=-1
        }
      setindex(++index)
    }
    return(
        <>
        <div className={style.Firstslider}>
            <img src={img[index]} alt=""/>
            <button className={style.prev} onClick={prev}><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
            <button className={style.next} onClick={next}><ion-icon name="arrow-forward-circle-outline" ></ion-icon></button>
        </div>
        </>
    )
}