import React from 'react';
import './styles.css'
import bluePrint from './../../images/blueprint.png';
import {Link} from "react-router-dom";
export default function FloorPlanCard(props){
    return (
        <div className={'card'}>
            <div className={'blueprint'}>
                <img src={bluePrint} alt={'blueprint'} width={'290px'} height={'218px'}/>
            </div>
            <div className={'description'}>
                <div className={'plan-title'}>{props.plan.title}</div>
                <div className={'plan-area'}>{props.plan.area}</div>
                <Link to='/description'>
                    <button className={'outlined-button'}>{'Select this Floorplan'}</button>
                </Link>
            </div>
        </div>
    );
}