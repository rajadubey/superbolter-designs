import React from "react";
import './styles.css';
import LOGO from '../../images/logo.svg'
import shoppingBag from '../../images/shoppingBag.svg'
import UserBadge from "../userBadge/userBadge";
export default function Header({isHome}){
    return (
        <div className='header'>
            <div className='header-left-section'>
                <div className='logo'>
                    <img src={LOGO} alt={'logo'} />
                </div>
                <div className='title-text'>
                    {'Browse Room Designs'}
                </div>
            </div>
            <div className='header-right-section'>
                <div className='info'>
                    <select  className='how-to-select'>
                        <option >{'How To'}</option>
                    </select>
                    <span className={isHome?'red-bg-home': null }>My Home</span>
                </div>
                <div className='user-info'>
                    <div className='shopping-bag'>
                        <img src={shoppingBag} alt={'shopping bag'} />
                    </div>
                    <div className='avatar'>
                        <UserBadge />
                    </div>
                </div>
            </div>
        </div>

    );
}
