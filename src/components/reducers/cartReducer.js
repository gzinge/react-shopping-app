import pic1 from "../../image/tomato.jpg";
import pic2 from "../../image/capsicum.jpg";
import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from "../actions/action-types/cart-actions";

const initState = {
    items: [
        {
            id: 1, picture: pic1, name: 'Tomato', price: '10.00/kg', description: 'tomatoes are red', catagory: 'vegetables'
        },
        {
            id: 2, picture: pic2, name: 'Capsicum', price: '12.00/kg', description: 'capsicum are green', catagory: 'vegetables'
        },
        {
            id: 3, picture: pic1, name: 'Tomato', price: '10.00/kg', description: 'tomatoes are red', catagory: 'vegetables'
        },
        {
            id: 4, picture: pic2, name: 'Capsicum', price: '12.00/kg', description: 'capsicum are green', catagory: 'vegetables'
        },
        {
            id: 5, picture: pic1, name: 'Tomato', price: '10.00/kg', description: 'tomatoes are red', catagory: 'vegetables'
        },
        {
            id: 6, picture: pic2, name: 'Capsicum', price: '12.00/kg', description: 'capsicum are green', catagory: 'vegetables'
        },
        {
            id: 7, picture: pic1, name: 'Tomato', price: '10.00/kg', description: 'tomatoes are red', catagory: 'vegetables'
        },
        {
            id: 8, picture: pic2, name: 'Capsicum', price: '12.00/kg', description: 'capsicum are green', catagory: 'vegetables'
        },
        {
            id: 9, picture: pic1, name: 'Tomato', price: '10.00/kg', description: 'tomatoes are red', catagory: 'vegetables'
        },
        {
            id: 10, picture: pic2, name: 'Capsicum', price: '12.00/kg', description: 'capsicum are green', catagory: 'vegetables'
        },


    ],

    addedItems: []


}

const cartReducer = (state = initState,action) => {
if (action.type === ADD_TO_CART){
    let addedItem = state.items.find(item => item.id=== action.id);
    //check if the action id exists in the added items
    let existed_item = state.addedItems.find(item => action.id === item.id);

    if(existed_item){
        console.log("existing item")
        addedItem.quantity+=1;
        return{
            ...state

        }
    }
    else{
        console.log("new item")
        addedItem.quantity=1;
        addedItem.itemAdded =true;

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem]

        }
    }

}
    if (action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1

        return{
            ...state

        }

    }
    if (action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)

            return{
                ...state,
                addedItems: new_items

            }
        }
        else {
            addedItem.quantity -= 1

            return{
                ...state

            }
        }

    }
    if (action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        return{
            ...state,
            addedItems: new_items

        }

    }



    else{
    return state;
}


}

export default cartReducer;
