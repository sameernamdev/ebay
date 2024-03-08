import style from "./nav.module.css"
import { data } from "../data/data"
export default function Nav()
{
    return(
        <>
        <div className={style.nav}>
          <ul>
            {Object.keys(data).map((item,index)=>
            <li key={index}>{(item)}</li>
            //  console.log(Object.keys(item))
            )}
          </ul>
        </div>
        </>
    )
}