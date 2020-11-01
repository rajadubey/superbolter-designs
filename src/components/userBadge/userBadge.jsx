import React from 'react'
import './style.css'
import dinningRoom from './../../images/dinning-room.png'
import pins from './../../images/pins.svg'

export default function UserBadge(){
    return (
        <div className="user-badge">
            <div>
                <img src={pins} alt={'drop-down-pins'}/>
            </div>
            <div>
                <span className="badge-image"></span>
                <span className="red-badge"></span>
            </div>
        </div>
    );
}