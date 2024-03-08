import style from "./header.module.css"
export default function Ebayheader()
{
    return(
        <>
        <div className={style.contain}>
            <div className={style.logo}>
                <img src="images/logo.png" alt="" />
            </div>
            <h3>Shop by <br /> category<ion-icon name="chevron-down-outline"></ion-icon></h3>
            <div className={style.searchbar}>
            <input type="search"  placeholder="Search for anything"/>
            <input type="text" placeholder="All categories"/>
            </div>
            <button type="search">Search</button>
            <a href="">Advance</a>
        </div>
        </>
    )
}