import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {removeItem,addQuantity,subtractQuantity} from "./actions/cartActions";

class Cart extends React.Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return(
                    <li className="collection-item avtar" key={item.id}>
                        <div className="item-img">
                            <img src={item.picture} alt={item.picture} className=""/>
                        </div>

                        <div className='item-desc'>
                            <span className="title">{item.name}</span>
                            <p>{item.description}</p>
                            <p><b> Price: ₹{item.price}</b></p>
                            <p>
                                <b>Quantity : {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart" onClick={()=> {this.handleAddQuantity(item.id)}}>
                                    <i className='material-icons'>add</i>
                                </Link>
                                <Link to="/cart" onClick={()=> {this.handleSubtractQuantity(item.id)}}>
                                    <i className='material-icons'>remove</i>
                                </Link>
                            </div>
                            <button className='button' onClick={() => {this.handleRemove(item.id)}}>Remove from Cart</button>
                        </div>

                    </li>
                )
                })
        ) : (
            <p>Cart is Empty!</p>
        )
        return(
            <div className='container'>
                <div className='cart'>
                    <h5>Items in Cart: </h5>
                    <ul className='collection'>
                        {addedItems}
                    </ul>

                    <ul className="right">
                        <li><Link to="/login"><button className="order">Confirm Order</button></Link></li>
                    </ul>


                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(Cart);