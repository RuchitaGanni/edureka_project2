import axios from 'axios';
const addToCartUrl = "https://edu-groceryapp.herokuapp.com/saveOrder"
const Products = (props) => {
    let counter = 0;
    const increase = (et) => {
        //    console.log("propsc In",et);

        // if (counter >= 0 && counter < 5) {
        //     counter=counter + 1
        // }
    }
    const decrease = (rr) => {
        // console.log("decrase",rr)
        // if (props.counter > 0) {
        //     props.counter=props.counter - 1 
        // }
    }
    // adding items to cart
    const addToCart = (pid,pname,price,pimage) => {
        
        const prodObj = {
            product_id: pid,
            product_name:pname,
            product_price:price,
            image:pimage,
            quantity: 1,
            status:0
        };
        axios.post(addToCartUrl, prodObj)
            .then((reponse) => {
                console.log(reponse);
            })
    }
    const renderMeal = ({ list }) => {
        if (list.length >= 1) {
            return list.map((item) => {
                return (<div className="card" id="product_card" key={item.product_id}>
                    <img src={item.product_image} alt={item.product_name} className="cardImage" id="product_image" />

                    <div className="caption_div">
                        <center>
                            <span className="shchead_txt">{item.product_name}</span>
                        </center>
                    </div>
                    <div class="mrp_div">
                        <center>
                            <span class="mrp_txt_prod">&#8377; {item.price}</span>
                        </center>
                    </div>
                    <div class="cart_div">
                        <center>
                            <button class="btn btn-primary" id="cart_btn" onClick={(pid,pname,price,pimage) => { addToCart(item.product_id,item.product_name,item.price,item.product_image) }}>
                                <span>Add to cart</span>
                                <span class="glyphicon glyphicon-plus-sign"></span>
                            </button>
                            {/* <button onClick={decrease(item.product_id)} className="btn btn-success"><i class="fa fa-minus" aria-hidden="true"></i></button>
                        <span className="counter">{props.counter}</span>
                        <button onClick={increase} className="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i></button> */}
                        </center>
                    </div>
                </div>)
            })
        } else {
            return (<strong>No products Available</strong>)
        }
    }
    return (
        <div class="mainTileContainer">
            {renderMeal(props)}
        </div>
    )
}

export default Products;