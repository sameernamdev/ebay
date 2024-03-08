import Dslider from "../componants/Deals slider/Dslider";
import Ebayheader from "../componants/ebay header/ebayheader";
import Firstslider from "../componants/first slider/firstslider";
import Header from "../componants/header/header";
import style from "./home.module.css"
import Nav from "../componants/nav/nav";
export default function Home()
{
    return(
        <>
        <div className={style.contain}>
        <Header/>
        <Ebayheader/>
        <Nav/>
        <Firstslider/>
        <Dslider/>
        </div>
        </>
    )
}