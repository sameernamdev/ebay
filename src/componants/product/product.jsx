import { Link } from "react-router-dom"
import style from "./product.module.css"
import Productpage from "../../pages/productpage/Productpage"
export default function Product(props) {
    return (
        <>
            <div className={style.box}>
                <div className={style.box1}>
                    <div className="carousel slide" id={["slider",props.id].join('')} data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {props.data.product_images.map((item, index) =>
                                <div className={(index==0)?['carousel-item','active'].join(' '):"carousel-item"}>
                                  <Link to="/productpage" state={props}>  <img src={Object.keys(item)} alt="" className=" d-block" style={{ "height": "250px", "width": "250px" }} /></Link>
                                </div>
                            )}
                        </div>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target={["#slider",props.id].join('')} data-bs-slide-to="0" className="active" aria-current="true" aria-label="slide 1"></button>
                            <button type="button" data-bs-target={["#slider",props.id].join('')} data-bs-slide-to="1" aria-label="slide 2"></button>
                        </div>
                    </div>
                </div>
                <p>{props.data.product_name}</p>
                <p>{props.data.price}</p>
                {/* <p>{props.data.details}</p> */}
            </div >
        </>
    )
}