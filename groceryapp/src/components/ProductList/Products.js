import axios from 'axios';
import { useState, useEffect } from 'react'
const addToCartUrl = "https://edu-groceryapp.herokuapp.com/addToCart"
const Products = (props) => {

    //get cart database
    const [carts, setCart] = useState([]);
    // const [disable, setDisable] = useState(false);
    const [prods, setprod] = useState([]);
    // const [value, setValue] = useState();
    useEffect(() => {

        axios.get(`https://edu-groceryapp.herokuapp.com/getOrders`)
            .then((res, err) => {
                if (err) {
                    console.error(err, 'er');
                }
                if (res.data.length >= 1) {

                    setCart(carts => (carts = res.data));

                }
                setprod(props.list);
            })

    }, [carts, props]);

    const mySet1 = [];

    if (carts.length >= 1) {
        carts.map((item) => {

            mySet1.push(item.product_id);

        })
    }
    const addToCart = (pid, pname, q, price, pimage) => {

        let prodObj = '';
        let updqty;
        console.log(mySet1, 'mySet1', typeof mySet1.indexOf(pid))
        let chcek = mySet1.indexOf(pid);
        if (chcek != -1) {
            carts.map((item) => {
                if (item.product_id === pid) {
                    //setDisable(true)
                    updqty = item.quantity + 1;
                }
            })

            // prodObj= {
            //     product_id: pid,
            //     product_name: pname,
            //     product_price: price,
            //     image: pimage,
            //     quantity: q,
            //     status: 0
            // };
            console.log(prods, 'prods')




            prodObj = {
                product_id: pid,
                quantity: updqty,
                status: 0
            };
            console.log(q, 'q2')
            console.log('put', q, pid, 'prodObj', prodObj)

            axios.put("https://edu-groceryapp.herokuapp.com/updateStatus", prodObj)
                .then((reponse) => {
                    console.log(reponse, 'put');
                    // window.location.reload(true);
                })

        } else {
            // console.log('post', q, pid)
            // mySet1.add(item.product_id);
            prodObj = {
                product_id: pid,
                product_name: pname,
                product_price: price,
                image: pimage,
                quantity: q + 1,
                status: 0
            };
            console.log('post', q, pid, 'prodObj', prodObj)
            axios.post(addToCartUrl, prodObj)
                .then((reponse) => {
                    console.log(reponse, 'post');
                    // window.location.reload(true);
                })


        }

        // setCart(carts=>carts);
        // setValue({});
        // window.location.reload(true);


    }

    const renderMeal = () => {
        if (prods.length >= 1) {
            return prods.map((item) => {
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
                            {/* disabled={disable} */}
                            <button class="btn btn-primary" id="cart_btn" onClick={(pid, pname, q, price, pimage) => { addToCart(item.product_id, item.product_name, item.qty, item.price, item.product_image) }}>
                                <span>Add to cart</span>
                                <span class="glyphicon glyphicon-plus-sign"></span>
                            </button>
                            {/* <button  className="btn btn-success"><i class="fa fa-minus" aria-hidden="true"></i></button>
                        <span className="counter">{item.qty}</span>
                        <button className="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i></button> */}
                        </center>
                    </div>
                </div>)
            })
        } else {
            return (
                <>
                    <h3>Please wait fetching products</h3>
                    <img src="/images/loader2.gif" alt="loader" className="LoaderGIF" />
                </>
            )

        }
    }
    return (
        <div class="mainTileContainer">
            {renderMeal(props)}
        </div>

    )

}

export default Products;