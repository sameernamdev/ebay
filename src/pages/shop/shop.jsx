import { shirt } from "../../componants/data/data";
import Ebayheader from "../../componants/ebay header/ebayheader";
import Header from "../../componants/header/header";
import Product from "../../componants/product/product";
import style from "./shop.module.css"
export default function Shop() {
    return (
        <>
            <Header />
            <Ebayheader />
            <div className={style.contain}>
                <div className={style.col1}>

                </div>
                <div className={style.col2}>
                    <div className={style.box1}>
                        <h2>Featured</h2>
                        <div className={style.imagebox}>

                        </div>
                    </div>
                    <div className={style.box2}>
                        <a href="">The streetwear you need</a>
                        <p>Statement styles verified by our experts</p>
                    </div>
                   <div className={style.category1}>
                    {shirt.map((item,index)=> <Product id={index} data={item}/>)}
                    
                   </div>
                </div>
            </div>
        </>
    )
}