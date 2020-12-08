import React from 'react';
import {connect} from "react-redux";
import {addToCart} from "./actions/cartActions";



class ItemList extends React.Component {


    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (

                        <div className='card' key={item.id}>
                            <div className='item-img'>
                                <img className='resize' src={item.picture} alt={item.name}/>
                                <span className="title"><b>{item.name}</b></span>
                            </div>
                            <div className='item-desc'>
                                <p>{item.description}</p>
                                <p><b> Price:₹{item.price}</b></p>
                            </div>
                            <button to="/" className="button"
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
                <button type="submit" className="order"><a href="/cart">Place Order</a></button>
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