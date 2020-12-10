import React from 'react';
import {connect} from "react-redux";
import {addToCart} from "./actions/cartActions";
import {Link} from "react-router-dom";



class ItemList extends React.Component {

   /* constructor(props) {
        super(props);
        this.changeButtonText = this.changeButtonText.bind(this);
    }*/


    handleClick = (id) => {
        this.props.addToCart(id);
   // this.changeButtonText(id);
    }

    /*changeButtonText = (id) => {

    }*/

    render() {
        let itemList = this.props.items.map(item => {
            return (

                        <div className='card' key={item.id}>
                            <div className='item-img'>
                                <img className='resize' src={item.picture} alt={item.name}/>
                                <h2 className="card-title"><b>{item.name}</b></h2>
                            </div>
                            <div className='item-desc'>
                                <p>{item.description}</p>
                                <p><b> Price:₹{item.price}</b></p>
                            </div>
                            <button id='button1' to="/" className="button"
                                   onClick={() =>{this.handleClick(item.id)}}>Add To Cart
                                <i className='material-icons' style={{padding: '2px'}}>shopping_cart</i>
                            </button>
                        </div>


            )
        })
        return (
            <div className='container'>
                    <div className='box'>
                        {itemList}
                    </div>
                <ul className="right">
                    <li><Link to="/cart"><button className="order">Place Order</button></Link></li>
                </ul>
            </div>
        )
    }


}

const mapStateToProps = (state) => {

    return {
        items: state.items,

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (id) =>{dispatch(addToCart(id))}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ItemList);