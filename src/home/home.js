import React from 'react';
import Vegetables from '../image/Vegetables.jpg'
import Fruits from '../image/Fruits.jpg'
import Snacks from '../image/Snacks.jpg'
import Ready from '../image/ReadyToEat.jpg'
import {Link} from "react-router-dom";



const list = [
    {
        link: "/Catagory/Vegetables",
        image:Vegetables,
        text:"Vegetables"
    },
    {
        link: "/Catagory/Fruits",
        image:Fruits,
        text:"Fruits"
    },
    {
        link: "/Catagory/Snacks",
        image:Snacks,
        text:"Snacks"
    },
    {
        link: "/Catagory/ReadyToEat",
        image:Ready,
        text:"Ready To Eat"
    }
];

class  Home extends React.Component{
    render() {
        let menu = list.map(menuOption => {
            return (
                <div className='card'>
                    <div className='card-image'>
                        <img src={menuOption.image} alt={menuOption.text}/>
                    </div>
                    <ul className='card-title'>
                        <li><Link to={menuOption.link}>{menuOption.text}</Link></li>
                    </ul>
                </div>
            )
        })
        return (
            <div className='container'>
                <div className='box'>
                    {menu}
                </div>
            </div>
        )
    }



}

export default Home;