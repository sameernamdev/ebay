import { useLocation } from "react-router-dom";
import Ebayheader from "../../componants/ebay header/ebayheader";
import Header from "../../componants/header/header";
import style from "./page.module.css"
export default function Productpage(props) {
    var { state } = useLocation()
    console.log(state)
    return (
        <>
            <Header />
            <Ebayheader />
            <div className={style.contain}>
                <div className={style.badabox}>
                    <div className={style.box1}>
                        <div className="Carousel-slide">
                            <div className="carousel-inner">
                                {state.data.product_images.map((item, index) =>
                                    <div key={index} className={"carousel-item active"}>
                                        <img src={Object.keys(item)[0]} key={index} alt="" style={{ 'height': "468px", "width": "415px" }} />
                                        {console.log(Object.keys(item)[0])}
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                    <div className={style.box2}>
                        <h3>Product name-{state.data.product_name}</h3>
                        <h3>Price-{state.data.price}</h3>
                        <h5>Details- {state.data.details}</h5>
                        <div className={style.sizes}>
                            <h4> Size </h4>
                            <button>SM</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                        <div className={style.buy}>
                            <button>Add to cart</button>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}